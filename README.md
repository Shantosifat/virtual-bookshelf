

# 📚 Libree - Online Bookshelf Application

Libree is a modern and interactive online bookshelf platform built with React. Users can explore, search, and filter a variety of books based on categories, status, and author/title. The app also includes authentication, book management, and smooth page transitions for an engaging user experience.

---

## 🔗 Live URL

👉 [Visit Libree Live](https://virtual-bookshelf-87634.web.app/)  


---

## 🎯 Purpose

The goal of **Libree** is to provide an organized and dynamic platform for readers to:

- Discover books.
- Track reading status.
- Add, manage, and review personal collections.
- Enjoy a smooth UI experience with modern animations.

---

## 🚀 Key Features

- 🔍 **Search & Filter**: Filter books by title, author, or reading status (Read, Reading, Want-to-Read).
- ✅ **Authentication**: Login/Signup with email or Google account.
- 📖 **Bookshelf Management**: Add, edit, or remove your own books.
- 🌐 **Responsive Design**: Fully responsive layout for all devices.
- 🎞 **Framer Motion Animations**: Smooth page transitions and hover effects.
- 🧠 **Profile & Status Tracking**: Track reading status and see detailed book info.

---

## 📦 NPM Packages Used

- [`react-router-dom`](https://www.npmjs.com/package/react-router-dom) – Routing between pages.
- [`axios`](https://www.npmjs.com/package/axios) – Handling HTTP requests.
- [`framer-motion`](https://www.npmjs.com/package/framer-motion) – Animations and transitions.
- [`sweetalert2`](https://www.npmjs.com/package/sweetalert2) – Stylish alert messages.
- [`firebase`](https://www.npmjs.com/package/firebase) – (If used) Authentication and backend services.
- [`react-icons`](https://www.npmjs.com/package/react-icons) – Beautiful icons.
- [`tailwindcss`](https://www.npmjs.com/package/tailwindcss) – Utility-first CSS framework.

---


🛠 Technologies Used
**Frontend**

⚛️ React.js

🎨 Tailwind CSS + DaisyUI

🎭 Framer Motion

🔄 React Query

🔐 Firebase Auth

**Backend**

🟢 Node.js + Express.js

🍃 MongoDB

🔐 JWT Authentication

🔑 Firebase Admin SDK

## ✨ Core Features

🔐 Authentication & Authorization with Firebase & JWT

📚 Book Management (Add, update, delete, search, filter)

📖 Borrow & Return System

📊 Borrow History Tracking

🗂 Admin Dashboard for user & catalog management

📱 Fully Responsive Design

## 📦 Dependencies
### Frontend

json
Copy
Edit
"axios", "react", "react-dom", "react-router-dom", "react-query",
"tailwindcss", "daisyui", "framer-motion", "firebase"
### Backend

json
Copy
Edit
"express", "cors", "dotenv", "jsonwebtoken", "mongodb", "cookie-parser", "firebase-admin"

## ⚙️ Steps to Run Locally
1.Clone the repository – git clone https://github.com/yourusername/libree.git

2.Install frontend dependencies – cd client && npm install

3.Install backend dependencies – cd ../server && npm install

4.Create .env file for client – Add VITE_apiUrl and Firebase keys

5.Create .env file for server – Add PORT, MONGO_URI, JWT_SECRET

6.Run backend – cd server && npm run dev

7.Run frontend – cd ../client && npm run dev

/.Open in browser – http://localhost:5173



If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project....


