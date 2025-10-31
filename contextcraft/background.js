const GEMINI_API_KEY = "YOUR_GEMINI_API_KEY_HERE";
const GEMINI_MODEL = "gemini-1.5-flash";

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // 📌 1. Handle Summarize / Explain / Study Questions
  if (message.type === "ANALYZE_TEXT") {
    (async () => {
      try {
        const { text, explainSimple } = message.payload;

        const prompt = `
You are ContextCraft, an AI Research Assistant.
Summarize the following text in 5 bullet points, and create 5 study questions.
${explainSimple ? "Also explain it in simple terms (ELI5)." : ""}
---
${text}
`;

        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: [{ parts: [{ text: prompt }] }]
            })
          }
        );

        const data = await response.json();

        if (data.error) {
          console.error("Gemini API error:", data.error);
          sendResponse({
            summary: "Gemini API error: " + data.error.message,
            questions: []
          });
          return;
        }

        const output =
          data.candidates?.[0]?.content?.parts?.[0]?.text ||
          "No response received.";

        const [summary, questionsRaw = ""] = output.split(/Questions?:/i);
        const questions = questionsRaw
          .split("\n")
          .filter((q) => q.trim().length > 2);

        sendResponse({ summary, questions });
      } catch (err) {
        console.error("Analyze error:", err);
        sendResponse({ error: err.message });
      }
    })();
    return true;
  }

  // 📌 2. Handle Translation / Explanation for LingoLens
  if (message.type === "TRANSLATE_TEXT") {
    (async () => {
      try {
        const text = message.payload.text;
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: [
                {
                  parts: [
                    {
                      text: `Translate or explain this phrase in simple English, and give an example sentence:\n\n"${text}"`
                    }
                  ]
                }
              ]
            })
          }
        );

        const data = await response.json();
        const output =
          data.candidates?.[0]?.content?.parts?.[0]?.text ||
          "No translation available.";
        sendResponse({ result: output });
      } catch (err) {
        console.error("Translate error:", err);
        sendResponse({ result: "⚠️ Translation failed." });
      }
    })();
    return true;
  }
});
