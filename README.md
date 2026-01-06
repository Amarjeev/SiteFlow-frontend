# SiteFlow – Frontend

SiteFlow is a role-based project management and workforce coordination platform.  
This repository contains the **frontend application** built using **React + Vite**.

---

## 🚀 Tech Stack

- React (Vite)
- JavaScript / TypeScript
- React Router
- Axios
- Tailwind CSS
- JWT-based authentication
- Session Storage for state persistence

---

## 👥 User Roles

The application supports **4 user roles**:

1. **Admin**
2. **Supervisor**
3. **Engineer**
4. **Labour**

Each role has its own access level and dashboard.

---

## 🔐 Authentication & Authorization

- Admin login using **Google OAuth**
- Email-based **OTP verification**
- JWT authentication with **Access Token & Refresh Token**
- Secure route protection based on roles
- Session-based state persistence

---

## 🧩 Core Features

### 👑 Admin
- Google login authentication
- Create & manage **Supervisor** and **Engineer** profiles
- Create and manage projects
- Assign projects to Engineers & Supervisors
- View project reports and daily progress
- Track project status and updates

### 🧑‍💼 Supervisor
- View assigned projects
- Assign jobs to Labours
- Track job progress
- View labour work details

### 🧑‍🔧 Engineer
- View assigned projects
- Update project status
- Submit daily project reports
- Track project progress

### 👷 Labour
- View assigned jobs
- Access job details and schedules

---
🌐 Deployment

Deployed using Vercel

Fully compatible with HTTPS and secure cookies

Live URL:
👉 https://siteflow-xs55.vercel.app
