🧠 ContextCraft + LingoLens
Learn Smarter. Read Deeper. Speak Better.

ContextCraft + LingoLens turns your everyday browsing into an interactive learning experience.
It combines AI research assistance with language learning tools — powered by Google Gemini and Chrome’s Built-in AI.
Demo vedio  :-  https://youtu.be/L95WPSs_TbQ?si=lqhtw2wix6qB9_Kl

🚀 Features
🧠 ContextCraft (AI Research Assistant)

✨ Summarize webpages using Gemini AI

👶 Explain Simply (ELI5 mode) — understand hard topics easily

🧩 Auto-generate Study Questions — learn actively

🔒 Private by design — all content stays local (or minimal API)

⚡ Lightweight — runs right in your browser

🌍 LingoLens (Language Learning Assistant)

📘 Instant translation on text selection

🧾 Click to save vocab words for review later

🗣️ Practice mode (coming soon) — quiz yourself on saved words

🌐 Offline-ready translation memory (future feature)

💬 Learns from your actual reading habits

🧩 How It Works

Select text on any page → get instant translation + “Save Word” option.

Click the 🧠 ContextCraft icon → analyze the entire page.

Choose between:

Summarize Page

Explain Simply (ELI5)

Generate Study Questions

(Optional) Review your saved vocab later in the popup.

🧰 Folder Structure
contextcraft-lingolens/
├── manifest.json
├── background.js
├── popup.html
├── popup.js
├── content_script.js
├── config.js          # optional for storing API key securely
├── README.md
└── icons/             #  logo/icon

⚙️ Setup Guide
1. Clone & Load in Chrome
git clone https://github.com/YOUR-USERNAME/contextcraft-lingolens.git


Then open Chrome → Extensions → Developer Mode → Load Unpacked
Select your project folder.

2. Add Your Gemini API Key
Option A — Quick & Simple

Edit background.js and add your key at the top:

const GEMINI_API_KEY = "YOUR_API_KEY_HERE";
const GEMINI_MODEL = "gemini-1.5-flash";

Option B — Secure

Create config.js:

export const GEMINI_API_KEY = "YOUR_API_KEY_HERE";
export const GEMINI_MODEL = "gemini-1.5-flash";


Add this to .gitignore:

config.js

🧠 Chrome Built-in AI (Optional Offline Mode)

Enable these two flags in Chrome Canary:

chrome://flags/#prompt-api-for-gemini-nano
chrome://flags/#optimization-guide-on-device


Then restart Chrome.

💡 Example Demo Flow (for your hackathon video)

Open a Wikipedia page in another language or topic-rich site.

Highlight a word — show instant translation + “Add to Vocab.”

Click “🧠 Analyze This Page” → get AI summary, simple version, and 5 study questions.

Open popup again → show saved vocab list.

Say: “Learn while you browse — ContextCraft + LingoLens helps you study smarter.”

Keep it under 2 minutes. Use clear transitions, upbeat music, and highlight your unique dual feature (research + language learning).

🔒 Privacy & Local AI

No personal data leaves your device unless you use the Gemini Cloud API.
Offline summarization (Gemini Nano) support is coming soon.

🌟 Future Plans

🧑‍🏫 Smart Vocab Practice Mode (with spaced repetition)

🔉 Voice Pronunciation Support

🧩 AI Quiz Builder from your saved vocab

💾 Full offline summarization

📊 Learning dashboard with progress stats

© 2025 [Samiksha Gupta]. All rights reserved.  
This project was developed for the Google Built-in AI Hackathon.  
Reproduction, redistribution, or modification without permission is prohibited.

