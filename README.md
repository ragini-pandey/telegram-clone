# Telegram Clone (Next.js + Convex + Clerk + Stream)

A modern Telegram-style web messenger built with **Next.js (App Router) + TypeScript + Tailwind + shadcn/ui**, using **Clerk** for authentication, **Convex** for data/functions, and **Stream Chat** for real-time messaging.

---

## 🚀 Live Demo

Live Demo: [https://telegram-clone-tau.vercel.app](https://telegram-clone-tau.vercel.app)

---

## 📸 Screenshots

Here are some screenshots of the app:

| View | Screenshot |
|------|------------|
| Landing page | ![Chat List](https://github.com/ragini-pandey/telegram-clone/blob/master/public/screenshot1.png) |
| Conversation view | ![Conversation](https://github.com/ragini-pandey/telegram-clone/blob/master/public/screenshot2.png) |
| Video call | ![Profile](https://github.com/ragini-pandey/telegram-clone/blob/master/public/screenshot3.png) |

---


## ✨ Features

- 🔐 **Auth**: Email/SSO auth with **Clerk**
- 💬 **Real-time chat**: 1:1 and room conversations powered by **Stream Chat**
- 🗂️ **Convex**: Serverless functions, user upsert/sync, and persistence
- 🧩 **UI**: **shadcn/ui** components + **TailwindCSS**
- 🟢 **Presence & typing** (via Stream channels)
- 📎 **Attachments**: Images/files (Stream CDN)
- 🔍 **Search**: Channel/user/message search
- ✅ **Read receipts** / message states

---

## 🏗️ Tech Stack

- **Frontend**: Next.js (App Router), React, TypeScript, Tailwind, shadcn/ui
- **Auth**: Clerk
- **Backend / Data**: Convex
- **Realtime Messaging**: Stream Chat
- **Tooling**: ESLint, PostCSS, Turbopack dev

---

## 📦 Structure

```
.
├─ app/                 # Next.js app router
├─ components/          # UI components
├─ convex/              # Convex schema & serverless functions
├─ hooks/               # React hooks
├─ lib/                 # Stream & helper libraries
├─ public/              # static assets
├─ middleware.ts        # Clerk auth middleware
├─ components.json      # shadcn/ui registry
├─ package.json
└─ README.md
```

---

## ⚙️ Prerequisites

- Node.js 18+
- npm / pnpm
- Clerk account & API keys
- Stream Chat account & keys
- Convex CLI

---

## 🔑 Environment Variables

`.env.local`

```
NEXT_PUBLIC_APP_URL=http://localhost:3000

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_****
CLERK_SECRET_KEY=sk_****

NEXT_PUBLIC_STREAM_KEY=XXXX
STREAM_API_SECRET_KEY=YYYY
STREAM_APP_ID=1234567

CONVEX_DEPLOYMENT=dev:local
```

---

## 🚀 Getting Started

```bash
npm install
npm run dev
npx convex dev
```

Open: `http://localhost:3000`

---

## 🧪 Test Data

- Use Clerk test users
- Add channels/users via Stream dashboard

---

## 🛠️ Scripts

```bash
npm run dev     # Next.js + Convex
npm run build   # Build
npm start       # Start prod
npm run lint    # Lint
```

---

## 🧰 shadcn/ui

```bash
npx shadcn-ui@latest add button input
```

---

## 🔒 Auth Flow

- Clerk auth + middleware-protected routes
- Server helpers: `auth()`

---

## 📡 Realtime (Stream)

- Client: `NEXT_PUBLIC_STREAM_KEY`
- Server: signs tokens with `STREAM_API_SECRET_KEY`

---

## 🧰 Convex

- Run locally with `npx convex dev`
- Define schema/functions in `/convex`

---

## 📦 Deploy

- **Vercel** (Next.js) + **Convex Cloud**
- Add env vars to hosting provider
