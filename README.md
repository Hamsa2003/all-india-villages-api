All India Villages API & Location Dashboard

📌 Project Overview

This project is a full-stack web application that provides hierarchical location data of India (States → Districts → Villages).

The system allows users to dynamically select a state, view its districts, and explore villages using an interactive frontend connected to a backend API.

---

🚀 Features

- 📍 Dynamic dropdowns (State → District → Village)
- 🔄 Real-time API integration
- 🗄️ PostgreSQL database integration
- ⚡ Fast and efficient data retrieval
- 🧹 Data cleaning and preprocessing using Python

---

🛠️ Tech Stack

🔹 Backend

- Node.js
- Express.js
- PostgreSQL

🔹 Frontend

- React.js
- Axios

🔹 Data Processing

- Python (Pandas)
- CSV Dataset

---

📂 Project Structure

all-india-villages-api/
│
├── backend/           # Node.js backend (APIs)
├── frontend/          # React frontend
├── Cleaning.py        # Data cleaning script
├── final_cleaned_villages.csv  # Clean dataset
├── Queries.sql        # SQL queries
├── villages_db.sql    # Database schema
└── README.md

---

🔗 API Endpoints

Method| Endpoint| Description
GET| "/states"| Get all states
GET| "/districts/:state"| Get districts by state
GET| "/villages/:district"| Get villages by district

---

⚙️ Setup Instructions

1️⃣ Clone the Repository

git clone https://github.com/your-username/all-india-villages-api.git
cd all-india-villages-api

---

2️⃣ Backend Setup

cd backend
npm install
node server.js

---

3️⃣ Frontend Setup

cd frontend
npm install
npm start

---

4️⃣ Database Setup

- Install PostgreSQL
- Create database
- Run:

villages_db.sql

---

🧹 Data Cleaning

- Raw dataset was cleaned using Python ("Cleaning.py")
- Processed data stored in CSV before importing into PostgreSQL

---

🎯 Project Objective

To build a production-ready full-stack application that demonstrates:

- Database design and querying
- API development
- Frontend-backend integration
- Data processing and handling

---

📊 Future Enhancements

- Add search functionality
- Integrate data visualization (charts)
- Deploy application online
- Add authentication system

---

👩‍💻 Author

- Hamsaveni P

---

📌 Conclusion

This project demonstrates a complete end-to-end workflow from data cleaning → database → backend APIs → frontend UI, making it a real-world full-stack application.

---
