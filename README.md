![alt text][def]
---

# 🧠 ContextCraft + LingoLens

**Learn Smarter. Read Deeper. Speak Better.**

> Transform your everyday browsing into a powerful, interactive learning experience — powered by **Google Gemini** and **Chrome’s Built-in AI**.

🎥 **Demo Video:** [Watch on YouTube](https://youtu.be/oY3Tl-pCAIk?si=87ncOwaJXX6qqe0T)
📦 **GitHub Repo:** [Context-Craft_LingoLens](https://github.com/Samikshacode934/Context-Craft_LingoLens)

---

## 🚀 Overview

**ContextCraft + LingoLens** is a dual-purpose Chrome Extension that blends:

* 🧠 **AI-powered research assistance**, and
* 🌍 **Language learning support**

—all directly inside your browser.

Whether you’re reading an article, studying online, or exploring new languages, this tool helps you **comprehend, summarize, and learn from content you actually read.**

---

## ✨ Key Features

### 🧠 **ContextCraft (AI Research Assistant)**

* 📖 **Summarize webpages** using Gemini AI
* 👶 **Explain Simply (ELI5 Mode)** — understand complex ideas easily
* 🧩 **Auto-generate study questions** to reinforce learning
* 🔒 **Private by design** — all data stays local or uses minimal API calls
* ⚡ **Lightweight & fast** — runs directly in your browser

---

### 🌍 **LingoLens (Language Learning Assistant)**

* 📘 **Instant translation** on text selection
* 💾 **Save vocabulary** with one click
* 🗣️ **Practice mode** *(coming soon)* — quiz yourself on saved words
* 💬 **Learns from your real reading habits**
* 🌐 **Offline-ready** translation memory *(future feature)*

---

## 🧩 How It Works

1. **Highlight any word or phrase** → get instant translation + “Save Word” option.
2. **Click the 🧠 ContextCraft icon** → analyze the page with one of three modes:

   * “Summarize Page”
   * “Explain Simply (ELI5)”
   * “Generate Study Questions”
3. **Review saved vocabulary** anytime from the popup panel.

---

## 🧰 Folder Structure

```
contextcraft-lingolens/
├── manifest.json
├── background.js
├── popup.html
├── popup.js
├── content_script.js
├── config.js          # optional (for API key)
├── README.md
└── icons/             # extension icons
```

---

## ⚙️ Setup & Installation

### 🪄 Step 1: Clone & Load Extension

```bash
git clone https://github.com/Samikshacode934/Context-Craft_LingoLens.git
```

Then:

1. Open **Chrome** → **Extensions** → **Developer Mode** → **Load Unpacked**
2. Select your project folder.

---

### 🔑 Step 2: Add Your Gemini API Key 


#### Option A — Simple (for quick demo)

Edit **background.js**:

```js
const GEMINI_API_KEY = "YOUR_API_KEY_HERE";
const GEMINI_MODEL = "gemini-2.5-flash";
```

#### Option B — Secure (recommended)

Create a new file called **config.js**:

```js
export const GEMINI_API_KEY = "YOUR_API_KEY_HERE";
export const GEMINI_MODEL = "gemini-1.5-flash";
```

Add this to `.gitignore`:

```
config.js
```

---

### ⚙️ Step 3: Enable Chrome Built-in AI (Optional Offline Mode)

If you’re using **Chrome Canary**, enable these two flags:

```
chrome://flags/#prompt-api-for-gemini-nano
chrome://flags/#optimization-guide-on-device
```

Restart Chrome afterward.

---

## 🧠 Example

1. Open a Wikipedia or educational webpage.
2. Highlight a word → show **instant translation** and **Add to Vocab** option.
3. Click “🧠 Analyze This Page” → display:

   * Summary
   * Simple (ELI5) explanation
   * 5 Study Questions
4. Open popup again → show saved vocabulary.
5. Say:

   > “Learn while you browse — ContextCraft + LingoLens helps you study smarter.”

---

## 🔒 Privacy & Local AI

* No personal data leaves your device unless you use Gemini’s cloud API.
* **Offline summarization (Gemini Nano)** support coming soon.
* All vocab and summaries are stored **locally** in Chrome storage.

---

## 🌟 Future Roadmap

✅ Smart Vocab Practice Mode (with spaced repetition)
✅ Voice Pronunciation Support
✅ AI Quiz Builder from saved vocab
✅ Full offline summarization
✅ Progress Dashboard

---

## 🏆 Credits

👩‍💻 Developed by **[Samiksha Gupta]**
For **Google Built-in AI Hackathon 2025**

© 2025 Samiksha Gupta. All rights reserved.
Reproduction, redistribution, or modification without permission is prohibited.

---



`#chrome-extension` • `#google-gemini` • `#ai` • `#language-learning` • `#summarizer` • `#research-tool` • `#education-ai` • `#translation` • `#gemini-nano` • `#lingolens` • `#contextcraft`

---



[def]: <Screenshot (12).png>