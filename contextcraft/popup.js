const analyzeBtn = document.getElementById("analyze");
const statusEl = document.getElementById("status");
const summaryEl = document.getElementById("summary");
const translationEl = document.getElementById("translation");
const questionsEl = document.getElementById("questions");
const simpleMode = document.getElementById("simpleMode");

analyzeBtn.addEventListener("click", async () => {
  statusEl.textContent = "Extracting content...";

  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const page = await chrome.tabs.sendMessage(tab.id, { type: "GET_PAGE_TEXT" });

  if (!page || !page.text) {
    statusEl.textContent = "Could not extract text.";
    return;
  }

  statusEl.textContent = "Analyzing with AI...";

  const result = await chrome.runtime.sendMessage({
    type: "ANALYZE_TEXT",
    payload: { text: page.text, explainSimple: simpleMode.checked },
  });

  if (result.error) {
    statusEl.textContent = "Error: " + result.error;
    return;
  }

  statusEl.textContent = "Done ";
  summaryEl.innerHTML = `<h4> Summary</h4><p>${escapeHtml(result.summary)}</p>`;
  if (result.translation)
    translationEl.innerHTML = `<h4> Translation</h4><p>${escapeHtml(result.translation)}</p>`;
  questionsEl.innerHTML = `<h4>? Study Questions</h4><ul>${result.questions
    .map((q) => `<li>${escapeHtml(q)}</li>`)
    .join("")}</ul>`;
});

function escapeHtml(str) {
  return str.replace(/[&<>'"]/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[c])
  );
}
