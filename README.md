# 🚀 Notes DevOps App

A full-stack **Notes Application** integrated with **DevOps practices** using **Docker & Jenkins**.  
This project demonstrates how a modern web application can be containerized and deployed using CI/CD pipelines.

---

## 📌 Project Overview

The **Notes DevOps App** is a MERN-based application where users can create, view, and manage notes.  
The focus of this project is not only application development but also **DevOps implementation** such as containerization and automated builds.

---

## 🛠 Tech Stack

### Frontend
- React.js
- HTML5, CSS3
- Axios

### Backend
- Node.js
- Express.js
- REST APIs

### Database
- MongoDB

### DevOps & Tools
- Docker
- Docker Compose
- Jenkins (CI/CD Pipeline)
- Git & GitHub

---

## ⚙️ Features

- 📄 Create, Read & Manage Notes
- 🔗 Frontend–Backend integration using REST APIs
- 🐳 Fully containerized using Docker
- 🔄 Automated build & deployment using Jenkins
- 📦 Multi-service setup with Docker Compose

---

## 🧩 Project Architecture
Frontend (React)
|
| REST API
v
Backend (Node + Express)
|
v
Database (MongoDB)

All services are managed using **Docker Compose** and automated via **Jenkins Pipeline**.

---

## 🚀 How to Run the Project (Docker)

```bash
docker compose up --build
Access:

Frontend → http://localhost:3000

Backend → http://localhost:5000

Jenkins → http://localhost:8080

🔄 CI/CD with Jenkins

Jenkins is containerized using Docker

Pipeline automatically:

Builds images

Runs containers

Manages services via Docker Compose

This simulates real-world CI/CD workflows used in production environments.

📚 Learning Outcomes

Hands-on experience with Docker & Jenkins

Understanding CI/CD pipelines

Managing multi-container applications

Real-world DevOps project for resume & interviews

📌 Future Enhancements

Kubernetes deployment

Environment-based configurations

Authentication & Authorization

Cloud deployment (AWS / Azure)

👩‍💻 Author

Smriti Goel
Aspiring Software & DevOps Engineer

🔗 GitHub: https://github.com/smriti2139
