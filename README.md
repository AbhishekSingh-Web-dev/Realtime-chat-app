# 💬 **Chatty — Real-Time MERN Chat Application**

A modern full-stack chat application with authentication, real-time messaging, image sharing, online status indicators, theme customization, and a polished responsive UI.

---

## 🚀 **Features**

### 🔐 **Authentication**
- User signup, login, and logout functionality
- Secure JWT stored in HttpOnly cookies
- Protected routes (frontend + backend)
- Profile picture upload via Cloudinary

### 💬 **Real-Time Messaging**
- Instant messaging using **Socket.io**
- Typing indicators
- Seen/read receipts (optional extension)

### 🖼 **Media Sharing**
- Cloudinary-powered image upload
- Live preview before sending
- File type validation on the backend

### 🟢 **Online Status**
- Real-time presence tracking
- Online/Offline badge in chat header
- Toggle to filter only online users

### 🎨 **Themes & UI**
- 30+ DaisyUI themes
- Light/dark mode support
- Fully responsive design

---

## 🧱 **Tech Stack**

### **Frontend**
- React
- Zustand
- TailwindCSS + DaisyUI
- Axios
- Lucide Icons
- Socket.io-client

### **Backend**
- Node.js
- Express
- MongoDB + Mongoose
- JWT
- Cloudinary
- Socket.io

---

## 🏗 **System Architecture**

```mermaid
flowchart LR
    Client[Frontend - React] -- Axios/HTTP --> API[Backend - Express]
    Client <-- Socket.io --> WS[WebSocket Server]
    API -- CRUD --> DB[(MongoDB)]
    API -- Image Upload --> Cloudinary[(Cloudinary Storage)]
    WS -- Real-time Events --> Client
