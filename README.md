# Checkout Demo: 
https://slopathon-challenge.vercel.app/

# ⚡ FLY OR DIE CHALLENGE

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=nextdotjs)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4o--mini-412991?style=for-the-badge&logo=openai)](https://openai.com/)

> 🏆 **Winner of the Marketing Section** at the Slopathon (VibeFest, San Diego — May 2026).

**Fly or Die** is an AI-powered, engagement-focused micro-application designed to generate chaotic, harmless, and highly shareable social challenges for teenagers and college students. Formulated with extreme-sports aesthetics and corporate satire, the app creates algorithmic "TikTok bait" designed to drive immediate user interaction.

---

## 🚀 The Slopathon Winning Angle: The Marketing Strategy

While engineering standard tools is common, *Fly or Die* won the Marketing Challenge by gamifying public embarrassment and viral mechanics. The app targets Gen-Z confidence culture using:
* **The "Absurdist" Loop:** Generating ridiculously optimistic view counts and mock internet news headlines to encourage real-world user screenshots and social sharing.
* **Corporate Satire Sponsorship:** Fluid integration with high-octane branding (Red Bull), creating an immersive corporate-sponsored event landing page aesthetic.
* **High-Contrast Retention UI:** Dark-mode cyberpunk interfaces matched with fluid micro-interactions (`framer-motion`) to mirror modern short-form video platforms.

---

## 🛠️ Tech Stack & Architecture

* **Framework:** Next.js (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS (Custom neon radial gradients and animations)
* **Animation:** Framer Motion (Spring transitions, reactive state animations)
* **AI Engine:** OpenAI API (`gpt-4o-mini` via deterministic Structured JSON outputs)
* **State & Persistence:** Client-side local storage pipeline for keeping historical campaign data cached on the device.

---

## 🧠 Core Features & Implementations

### 1. Deterministic AI Prompt Engineering (`app/api/generate/route.ts`)
The server-side API interfaces directly with OpenAI using strict `response_format: { type: "json_object" }` constraints. The backend handles edge cases by gracefully parsing raw text output into custom failure payloads (`FLIGHT FAILURE`) if the API errors out.

### 2. Sticky Dual-Viewport Layout (`app/page.tsx`)
Features a responsive split-screen paneling system:
* **Left Canvas:** A sticky, full-viewport branding comic panel engineered with a `max-h-[85vh]` boundary box to remain pinned as users generate content.
* **Right Canvas:** A centered flex container deploying radial gradients to build a faux-neon backlight, complete with interactive state metrics blocks (Virality, Chaos, Safety).

---

## 📦 Getting Started

### Prerequisites
* Node.js (v18.x or later)
* An OpenAI API Key

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/PrestonJacks0n/fly-or-die.git](https://github.com/PrestonJacks0n/fly-or-die.git)
   cd fly-or-die
   
2. **Clone the repository:**
   ```bash
   npm install

3. Set up Environment Variables:
Create a .env.local file in the root directory and add your secret OpenAI key:
   `OPENAI_API_KEY=your_openai_api_key_here`

4. Run the development server:
   ```bash
   npm run dev

5. Open http://localhost:3000 with your browser to see the result.
