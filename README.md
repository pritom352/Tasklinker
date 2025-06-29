# TaskLinker

## 🌐 Live Website

[Visit TaskLinker](https://assignment10-22f98.web.app/)

## 🎯 Purpose

**TaskLinker** is a freelance micro-task platform that connects individuals needing small tasks completed with freelancers looking for flexible work opportunities. Users can post new tasks, browse available tasks, and bid or apply for them based on their skillset, budget, and deadlines.

---

## 🚀 Key Features

- 🔐 **User Authentication**  
  Secure login/signup functionality using Firebase. Certain pages are protected and only accessible by logged-in users.

- 📌 **Add & Manage Tasks**  
  Logged-in users can post new tasks using a protected form that stores data in MongoDB and gives feedback via toast or SweetAlert.

- 🗂️ **Browse All Tasks**  
  Users can view all tasks posted on the platform in a dynamic card or table format, with the option to view more task details.

- 🧩 **Featured Tasks on Home Page**  
  The home page features a slider , revew and showcases 6 tasks sorted dynamically based on deadlines.

- 🧑‍💼 **My Posted Tasks Page**  
  Users can view, update, and delete tasks they have posted—giving full control over their job listings.

---

## 🧰 Technologies & NPM Packages Used

- `react` & `react-dom` – Core framework for building the UI
- `react-router` – Routing for page navigation and protected routes
- `firebase` – Authentication and user management
- `mongodb` – For storing and retrieving task data
- `tailwindcss` & `@tailwindcss/vite` – For responsive and modern UI styling
- `dotenv` – To manage environment variables securely
- `react-toastify` – Notifications and alerts
- `sweetalert2` – Stylish pop-up messages
- `react-icons` – Icons for UI elements
- `react-spinners` – Loading animations
- `react-simple-typewriter` – Typing animation effect
- `motion` & `motion-plus` – Page transitions and animations
- `react-countup` – Animated number counters
- `react-fast-marquee` – Scrolling marquee effects

---

## 📁 Project Pages Overview

- **Home** – Banner, revew bord and featured tasks section
- **Add Task** – Private route; form submission saves task to MongoDB
- **Browse Tasks** – Displays all tasks with details and a redirect to view more
- **My Posted Tasks** – View, update, or delete your own tasks
- **Login/Signup** – User authentication system

---

### 📂 Clone the repository

- `git clone https://github.com/pritom352/Tasklinker.git`

### 🔐 Setup environment variables

Create a `.env.local` file in the root directory and add the following:

`VITE_apiKey=your_firebase_api_key`
``VITE_authDomain=your_project.firebaseapp.com`
`VITE_projectId=your_project_id`
`VITE_storageBucket=your_project_storage_bucket`
`VITE_messagingSenderId=your_messaging_sender_id`
`VITE_appId=your_firebase_app_id`

🚀 Run the frontend
`npm run dev`

## API_URL

`https://assignment-10-server-one-orcin.vercel.app`
