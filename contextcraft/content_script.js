// Extract page text
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "GET_PAGE_TEXT") {
    const text = document.body.innerText || "";
    sendResponse({ text: text.slice(0, 20000) });
  }
});

// Detect highlighted text
document.addEventListener("mouseup", () => {
  const selected = window.getSelection().toString().trim();
  if (selected) {
    // Store selected word in storage
    chrome.storage.local.set({ lastSelected: selected });
  }
});
