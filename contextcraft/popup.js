const analyzeBtn = document.getElementById("analyze");
const statusEl = document.getElementById("status");
const summaryEl = document.getElementById("summary");
const questionsEl = document.getElementById("questions");
const translationEl = document.getElementById("translation");
const saveBtn = document.getElementById("saveWord");
const vocabBtn = document.getElementById("viewVocab");
const vocabList = document.getElementById("vocabList");
const simpleMode = document.getElementById("simpleMode");

let currentWord = "";

// --- Handle Analyze This Page ---
analyzeBtn.addEventListener("click", async () => {
  statusEl.textContent = "Extracting content...";
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    const page = await chrome.tabs.sendMessage(tab.id, { type: "GET_PAGE_TEXT" });
    if (!page?.text) throw new Error("No page text found");

    statusEl.textContent = "Analyzing with AI...";
    const result = await chrome.runtime.sendMessage({
      type: "ANALYZE_TEXT",
      payload: { text: page.text, explainSimple: simpleMode.checked }
    });

    if (result?.error) {
      statusEl.textContent = "Error: " + result.error;
      return;
    }

    statusEl.textContent = "✅ Done";
    summaryEl.innerHTML = `<h4>Summary</h4><p>${escapeHtml(result.summary || "")}</p>`;
    questionsEl.innerHTML = `<h4>Study Questions</h4><ul>${(result.questions || [])
      .map((q) => `<li>${escapeHtml(q)}</li>`)
      .join("")}</ul>`;
  } catch (err) {
    statusEl.textContent = "Error: " + err.message;
  }
});

// --- Listen for highlighted text (Translation feature) ---
chrome.runtime.onMessage.addListener((msg) => {
  if (msg.type === "TEXT_SELECTED") handleSelectedText(msg.payload.text);
});

async function handleSelectedText(text) {
  currentWord = text;
  translationEl.textContent = `Analyzing "${text}"...`;
  const response = await chrome.runtime.sendMessage({
    type: "TRANSLATE_TEXT",
    payload: { text }
  });
  translationEl.textContent = response.result;
  saveBtn.style.display = "inline-block";
}

// --- Save vocab locally ---
saveBtn.addEventListener("click", async () => {
  if (!currentWord) return;
  const entry = { word: currentWord, meaning: translationEl.textContent };
  const { vocab = [] } = await chrome.storage.local.get("vocab");
  vocab.push(entry);
  await chrome.storage.local.set({ vocab });
  translationEl.textContent = `✅ Saved "${currentWord}"`;
  saveBtn.style.display = "none";
});

// --- View saved vocabulary ---
vocabBtn.addEventListener("click", async () => {
  const { vocab = [] } = await chrome.storage.local.get("vocab");
  if (vocab.length === 0) {
    vocabList.innerHTML = "<p>No saved words yet.</p>";
  } else {
    vocabList.innerHTML =
      "<ul>" +
      vocab
        .map((v) => `<li><b>${escapeHtml(v.word)}</b>: ${escapeHtml(v.meaning)}</li>`)
        .join("") +
      "</ul>";
  }
  vocabList.style.display = vocabList.style.display === "none" ? "block" : "none";
});

function escapeHtml(str) {
  return str.replace(/[&<>'"]/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[c])
  );
}
