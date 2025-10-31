// Extract readable text from the page
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "GET_PAGE_TEXT") {
    const text = document.body.innerText || "";
    sendResponse({ text: text.slice(0, 20000) });
  }
});

// Detect when user highlights text (for translation feature)
document.addEventListener("mouseup", () => {
  const selected = window.getSelection().toString().trim();
  if (selected) {
    chrome.runtime.sendMessage({
      type: "TEXT_SELECTED",
      payload: { text: selected }
    });
  }
});
