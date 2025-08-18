# ⚡ Sensai – Your Personal AI Coach for Professional Success

Sensai is an AI-powered web platform built with **Next.js**, **Prisma**, **Neon (Postgres)**, and **Clerk** for authentication. It leverages **Google Gemini AI** to provide personalized learning experiences and career guidance.

---

## ✨ Features

- 🔑 Authentication & user management with **Clerk**
- 🗄️ Database management using **Prisma ORM** & **Neon (Postgres)**
- 🤖 AI-powered responses with **Google Gemini API**
- ⚡ Fully typed with **TypeScript**
- 🎨 Styled with **Tailwind CSS**
- 🚀 Deployed on **Vercel** (recommended)

---

## 📦 Tech Stack

- [Next.js](https://nextjs.org/) – React framework for production
- [Prisma](https://www.prisma.io/) – Next-gen ORM
- [Neon](https://neon.tech/) – Serverless Postgres database
- [Clerk](https://clerk.com/) – Authentication & user management
- [Google Gemini](https://ai.google.dev/) – AI API for intelligent responses
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally:

### 1. Clone the repository

```bash
git clone [https://github.com/yourusername/sensai.git](https://github.com/yourusername/sensai.git)
cd sensai
```
### 2. Install dependencies
Bash
```
npm install
```
### 3. Set up environment variables
Create a .env.local file in the root directory and configure the following:

Code snippet
```
DATABASE_URL="your-neon-db-connection-url"
CLERK_SECRET_KEY="your-clerk-secret-key"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your-clerk-publishable-key"
GEMINI_API_KEY="your-gemini-api-key"
```
### 4. Run Prisma migrations
```
npx prisma migrate dev
```
### 5. Start the development server
```
npm run dev
```
Now visit http://localhost:3000 🚀
