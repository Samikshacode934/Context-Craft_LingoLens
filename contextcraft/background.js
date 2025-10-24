chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "ANALYZE_TEXT") {
    (async () => {
      try {
        const { text, explainSimple } = message.payload;

        // --- 1. Summarize ---
        const summaryPrompt = `Summarize the following research content in 5 bullet points:\n\n${text}`;
        const summaryResp = await ai.prompt.generate({ prompt: summaryPrompt });
        const summary = summaryResp?.output || "No summary generated.";

        // --- 2. Generate study questions ---
        const questionPrompt = `Create 5 thoughtful study questions about this text:\n${summary}`;
        const questionResp = await ai.prompt.generate({ prompt: questionPrompt });
        const questions = questionResp?.output?.split("\n").filter(Boolean) || [];

        // --- 3. Optional: Simplified explanation ---
        let finalSummary = summary;
        if (explainSimple) {
          const explainPrompt = `Explain this summary in simple terms (as if to a beginner):\n${summary}`;
          const explainResp = await ai.writer.create({ text: explainPrompt });
          finalSummary = explainResp?.output || summary;
        }

        // --- 4. Optional: Translation if not English ---
        let translation = null;
        const detected = await ai.language.detect(text);
        if (detected.language !== "en") {
          const transResp = await ai.translator.translate(text, "en");
          translation = transResp?.output || null;
        }

        sendResponse({
          summary: finalSummary,
          translation,
          questions,
        });
      } catch (err) {
        sendResponse({ error: err.message || String(err) });
      }
    })();

    return true; // keep message channel open
  }
});
