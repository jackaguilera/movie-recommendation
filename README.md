# 🎬 Movie Recommendation Assistant **Frontend** (MVP v1)

A lightweight, interactive **movie recommendation frontend** built with **Vite + React (JavaScript)**.

Users answer **3 guided questions** → frontend sends responses to **Cloudflare Workers API** → displays **LLM-powered movie suggestion**.

**Standalone frontend repo** - **Backend lives in separate repo** (`movie-recommendation-api`)

## 🚀 Features (MVP)

- **Fast Vite + React** dev server (~800ms startup)
- **Interactive 3‑question flow** with dynamic follow-ups
- **Clean, responsive UI** built with React components and styled for all devices
- **API integration** → POST `/api/recommend` to backend
- **Production ready** → Cloudflare Pages deploy

## 🧠 User Flow

```
Landing → Q1: "I want to watch based on..."
├── Genre → Q2: Action/Comedy/Sci-Fi...
├── Actor → Q2: "Which actor?"
├── Theme → Q2: Time travel/Revenge...
├── Director → Q2: "Favorite director?"
├── Producer → Q2: "Producer style?"
└── Color → Q2: Dark/Vibrant/Warm...

Q3: "Modern or classic?" → POST to /api/recommend
              ↓
LLM Response → Movie title + explanation
```

## 📱 Current Structure

```
src/
├── assets/              # Images, icons
├── components/          # Reusable UI (buttons, cards, quiz)
├── hooks/               # useQuiz, useApi
├── lib/                 # API utils, constants
├── pages/               # QuizPage, ResultsPage
├── App.jsx              # Router + providers
└── main.jsx             # Vite entry
```

## 🚀 Quick Start

**Prerequisites:**

- Node.js 18+ or Bun 1.0+
- npm or bun package manager

```bash
# Install
bun install  # or npm install

# Development
bun run dev     # http://localhost:5173

# Production build
bun run build   # → dist/
bun run preview # Test production build
```

## 🌐 Environment Variables

**Required for production builds:**

```env
VITE_API_URL=https://your-worker.youraccount.workers.dev/api/recommend
```

Set this in your deployment platform (Cloudflare Pages env vars). The backend repo provides the endpoint URL.

## 🔌 Backend Integration

**POST** user answers to backend:

```jsx
// src/lib/api.js
export const recommendMovie = async (answers) => {
  const res = await fetch(import.meta.env.VITE_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      preferenceType: answers.type,
      answer1: answers.q1,
      answer2: answers.q2,
      answer3: answers.q3,
    }),
  });
  return res.json();
};
```

**Expected backend response:**

```json
{
  "movie": "Inception (2010)",
  "reason": "Matches sci-fi + modern + fast-paced preferences",
  "director": "Christopher Nolan"
}
```

## 🚀 Deployment

**Cloudflare Pages** (recommended):

1. Push to GitHub
2. Connect repo → auto‑deploys on push
3. Add `VITE_API_URL` as **secret**

## 📌 Roadmap (This Frontend Repo)

### **v1 — MVP** ✅

- [x] 3‑question interactive flow
- [x] Dynamic Q2 based on Q1 choice
- [x] API integration ready
- [x] Results display

### **v2**

- [ ] TMDB API integration
- [ ] Movie posters, trailers, ratings
- [ ] Multiple recommendations
- [ ] Save user preferences

### **v3**

- [ ] NLP input mode
- [ ] Embeddings + vector search
- [ ] User accounts
- [ ] Full backend orchestration

## 🤝 Related Repos

| **Repo**                                                                             | **Purpose**                     |
| ------------------------------------------------------------------------------------ | ------------------------------- |
| [movie-recommendation-api](https://github.com/jackaguilera/movie-recommendation-api) | Cloudflare Worker + LLM backend |
| [movie-recommendation](https://github.com/jackaguilera/movie-recommendation)         | Vite + React frontend UI        |

## 📄 License

**MIT** – Deploy freely! ⭐ if useful.

---

_Built with Vite + React + Cloudflare • Jan 2026_
