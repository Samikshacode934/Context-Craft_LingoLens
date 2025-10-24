chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "GET_PAGE_TEXT") {
    const text = extractMainText();
    sendResponse({ text });
  }
});

function extractMainText() {
  const selectors = ["article", "main", "body"];
  for (const sel of selectors) {
    const el = document.querySelector(sel);
    if (el) return el.innerText;
  }
  return document.body ? document.body.innerText : "";
}
