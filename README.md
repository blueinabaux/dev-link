# 💬 DevLink

**DevLink** is a developer-focused real-time chatroom application built with **React**, **Vite**, **Redux**, **Express**, and **CometChat**. It enables seamless communication between developers using CometChat's powerful UI Kit and SDK.

---

## 🛠️ Tech Stack

| Layer       | Tech Used |
|-------------|-----------|
| Frontend    | React, Vite, TailwindCSS, Redux Toolkit, CometChat UI Kit |
| Backend     | Node.js, Express, dotenv |
| State Mgmt  | Redux, Redux-Persist |
| Deployment  | GitHub (for assignment submission) |


---

## ⚙️ Setup Instructions

###  1. Clone the repository

```bash
git clone https://github.com/blueinabaux/dev-link.git
cd devlink-assignment
```

### 2. Setup Frontend
```bash
cd client
npm install
```
#### Create a .env file in /client/
```
VITE_COMETCHAT_APP_ID=your_app_id
VITE_COMETCHAT_REGION=your_region
VITE_COMETCHAT_AUTH_KEY=your_auth_key
```

###  3. Setup Backend
```bash
cd ../server
npm install
```
####  Create a .env file in /server/
```
COMETCHAT_APP_ID=your_app_id
COMETCHAT_REGION=your_region
COMETCHAT_API_KEY=your_auth_key
```
---
# 🚀 Run the App
```
cd client
npm run dev
```

### Run backend
```
cd server
node index.js
```
---
### ✅ What’s Done
- ✅ User Registration & Login with Redux state management.
- ✅ CometChat SDK & UI Kit Integration.
- ✅ Persistent authentication with Redux-Persist.
- ✅ Real-time messaging via CometChat.
- ✅ Vite configuration for React and dynamic imports.
- ✅ Basic responsive UI with TailwindCSS.

### ⬜ What’s Pending

- ⬜ Improved UI for chatrooms.
- ⬜ Profile management and settings page.
- ⬜ Group chat feature.
- ⬜ User presence/status indicators.
- ⬜ Backend user validation with DB (currently basic Node setup).
- ⬜ Loading and error state handling for async calls.

### ⚠️ Challenges Faced
- ⚠️ **Vite & CometChat**: Vite sometimes failed to resolve SDK modules dynamically. Fixed by adjusting import paths and dependency resolution.
- ⚠️ **Redux-Persist**: Caused hydration mismatches until `PersistGate` and initial state were properly configured.
- ⚠️ **CometChat UI Kit**: Styling override was challenging due to tightly scoped component styles.
- ⚠️ **Modularizing Backend**: Keeping the backend flexible while having no database was tricky.
---


## 📬 Submission

This project is submitted as part of the **CometChat Internship Assignment**.

- 👤 Name: Neel Satdive
- 🔗 GitHub: [https://github.com/blueinabaux/dev-link.git](https://github.com/blueinabaux/dev-link.git)

> ⚠️ Note: Some features remain incomplete due to time constraints and environment-specific SDK issues. Please refer to the “Challenges Faced” and “What’s Pending” sections for more details.

---

## 📝 License

This project is intended for internship assignment and learning purposes only.
