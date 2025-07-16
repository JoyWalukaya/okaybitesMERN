
# 🥗 OkayBites — MERN Stack Nutrition App

**OkayBites** is a full-stack MERN (MongoDB, Express.js, React, Node.js) web application that helps users with specific health conditions like **Diabetes**, **Hypertension**, and **Cardiovascular disease** discover nutritionally beneficial foods categorized into **Fruits**, **Vegetables**, **Proteins**, and **Whole Grains**.

Users can view foods, see condition-specific nutritional benefits, add items to cart, view prices, and checkout — all in a responsive dark-themed interface.

---

## 🌟 Features

- ✅ Personalized food suggestions for 3 health conditions
- ✅ Food categories: Fruits, Vegetables, Proteins, Whole Grains
- ✅ Nutritional benefit tooltips per food item
- ✅ Add to Cart with condition/category tracking
- ✅ Real-time cart total & price calculation
- ✅ Light/Dark Mode toggle (default: dark mode)
- ✅ Animated hint to guide users to click for more info
- ✅ Clean React frontend with Vite
- ✅ MongoDB Atlas backend integration (in progress)

---

## 🛠 Tech Stack

| Technology | Usage |
|-----------|--------|
| **React + Vite** | Frontend UI |
| **Node.js + Express** | Backend API |
| **MongoDB Atlas** | Cloud database |
| **React Router** | Page navigation |
| **Custom Context API** | Cart state management |
| **CSS** | Styling & responsive design |

---

## 📂 Folder Structure

```

OkaybitesMERN/
├── client/          # React frontend (with Vite)
│   ├── src/
│   │   ├── CartContext.js
│   │   ├── cardiovascularPage.jsx
│   │   ├── hypertensionPage.jsx
│   │   ├── diabetesPage.jsx
│   │   ├──homePage.jsx
│   │   ├── cartPage.jsx
│   │   ├── cartContext.jsx
│   │   └── App.jsx, main.jsx, style.css
│   ├── public/
│   └── package.json
├── server/          # Node.js backend (in progress)
│   ├── models/
│   ├── routes/
│   └── server.js
├── .gitignore
└── README.md

````

---

## 🚀 Getting Started

### 🔧 Prerequisites

- Node.js and npm installed
- MongoDB Atlas account (for backend)

### 🔨 Installation

1. **Clone the repo**

```bash
git clone https://github.com/your-username/OkaybitesMERN.git
cd OkaybitesMERN
````

2. **Install client dependencies**

```bash
cd client
npm install
```

3. *(Optional)* Install backend dependencies

```bash
cd ../server
npm install
```

---

## 🧪 Running the App Locally

### Frontend (React)

```bash
cd client
npm run dev
```

Visit: `http://localhost:5173`

### Backend (Express API) — coming soon

```bash
cd server
npm run dev
```

---

## 🧠 Health Conditions Supported

* **Diabetes**
* **Hypertension**
* **Cardiovascular Disease**

Each food listed provides condition-specific nutritional benefits to help users make informed choices.


## 👩‍💻 Author

* Joy Walukaya
* [Email](mailto:walukayajoy@gmail.com)



## 🙌 Acknowledgments

* PLP Software Engineering Program
* MongoDB for Student Resources
* Vite + React Docs

**Stay healthy, eat smart. — OkayBites 🍽️**


