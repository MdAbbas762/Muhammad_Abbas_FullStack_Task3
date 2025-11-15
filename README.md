# 🌐 Creative Web Demo - Full-Stack Task 3  

## 📌 Project Overview  
This is a small, beginner-level project completed as part of an internship task. The aim was to turn a basic landing page into a working example of how a front-end form sends data to a backend server and how that data is stored in a database. The project keeps the design simple and focuses on understanding the basic flow of a full-stack application.  

---  

## 🎯 Purpose  
The purpose of this task was to apply basic full-stack concepts in practical code. It was designed to help practice connecting the front-end with the backend, handling form data, creating simple routes, and saving user input in a database. Since this was an early internship assignment, the goal was not to build advanced features but to understand the fundamentals clearly.  

---  

## ✨ Features  
Below are the main parts of the project. Each section shows what was implemented on the front-end, backend, and database side in a simple and understandable way.  

### 🎨 User Interface (Frontend)  
- Clean landing page layout with navigation, hero section, and footer.  
- Contact form (Name, Email, Message) with basic front-end validation.  
- Responsive styling so the page adjusts correctly on different screen sizes.  
- Static assets (CSS, JS, video) served through the Express `express.static()` middleware.  

### ⚙️ Server & Routing (Backend)  
- Built using **Node.js + Express** for handling requests.  
- Uses `express.static()` middleware to serve HTML, CSS, JS, and media files.  
- POST `/submit` route receives form data and processes it.  
- GET `/` route serves the main landing page.  
- Sends success or failure pages based on database operation results.  
- Includes simple error handling for failed submissions.  

### 🗄️ Data Model & Storage (Database)  
- Uses **MongoDB** with **Mongoose** for data storage.  
- A basic schema is created for storing contact form entries with required fields:  
  - `name` — required  
  - `email` — required and trimmed  
  - `message` — required  
- All valid submissions are stored in the `users_data` collection.

---  

## 🛠️ Technologies Used  
- **HTML, CSS, JavaScript** for the front-end interface and form behavior  
- **Node.js + Express** for backend server and routing  
- **MongoDB + Mongoose** for storing form submissions  

---  

## 📸 Screenshots

![Screenshot 1](/screenshots/ss.1.PNG)  
![Screenshot 2](/screenshots/ss.2.PNG)  
![Screenshot 3](/screenshots/ss.3.PNG)  
![Screenshot 4](/screenshots/ss.4.PNG)  