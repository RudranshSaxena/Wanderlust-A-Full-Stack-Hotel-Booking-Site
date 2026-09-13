# 🏨 Wanderlust — Full-Stack Hotel Booking Platform

**Wanderlust** is a full-stack hotel and property listing web application inspired by Airbnb. It allows users to explore properties, create and manage listings, upload images, and share reviews and ratings.

The project was built to gain practical experience in **frontend development, backend development, database management, authentication, authorization, RESTful routing, cloud services, and deployment**.

## 🌐 Links

🔗 **Live Demo:** [Add Deployment Link Here]
💻 **GitHub Repository:** [Add Repository Link Here]

---

## ✨ Features

* 👤 **User Authentication** — Registration, login and session management using Passport.js
* 🔐 **Authorization** — Protected routes and ownership-based access control
* 🏠 **Property Listings** — Create, view, edit and delete listings
* 🖼️ **Image Uploads** — Upload and manage property images using Cloudinary
* ⭐ **Reviews & Ratings** — Users can add and manage reviews
* 💾 **Database Management** — MongoDB with MongoDB Atlas and Mongoose
* ⚠️ **Error Handling** — Custom error handling and flash messages
* 📱 **Responsive UI** — User-friendly interface across different screen sizes

---

## 🛠️ Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript
* EJS
* Bootstrap

### Backend

* Node.js
* Express.js
* RESTful Routing
* MVC Architecture
* Express Middleware
* Session Management

### Database

* MongoDB
* MongoDB Atlas
* Mongoose ODM

### Other Technologies

* Passport.js — Authentication
* Cloudinary — Image storage
* Git & GitHub — Version Control
* dotenv — Environment Variables

---

## 🏗️ Architecture

Wanderlust follows the **MVC (Model-View-Controller)** architecture.

```text
        User / Browser
              ↓
       EJS + Bootstrap
              ↓
         Express.js
              ↓
        Routes & Middleware
              ↓
         Controllers
              ↓
          Mongoose
              ↓
        MongoDB Atlas
              
       ┌─────────────┐
       │  Cloudinary │
       │    Images   │
       └─────────────┘
```

---

## 🔄 Core Functionality

The application implements complete **CRUD operations** for property listings:

| Operation | Function                  |
| --------- | ------------------------- |
| Create    | Add new property listings |
| Read      | Browse and view listings  |
| Update    | Edit existing listings    |
| Delete    | Remove listings           |

Authentication and authorization ensure that users can only perform actions they are permitted to perform.

---

## ⚙️ Installation & Setup

### Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
cd Wanderlust
```

### Install dependencies

```bash
npm install
```

### Configure environment variables

Create a `.env` file:

```env
ATLASDB=your_mongodb_atlas_connection_string
SECRET=your_session_secret

CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

### Start the application

```bash
node app.js
```

The application will run at:

```text
http://localhost:8080
```

---

## 📚 Key Learning Outcomes

Through Wanderlust, I gained hands-on experience with:

* Full-stack web development
* Node.js & Express.js
* RESTful APIs and routing
* MVC architecture
* MongoDB & Mongoose
* MongoDB Atlas
* CRUD operations
* Authentication & authorization
* Sessions and middleware
* Cloudinary integration
* Server-side rendering with EJS
* Git & GitHub
* Deployment and environment configuration

---

## 🚀 Future Improvements

* 📅 Complete hotel booking and reservation system
* 💳 Online payment integration
* ❤️ Wishlist functionality
* 🔍 Advanced search and filtering
* 📧 Email notifications
* 📊 Admin dashboard

---

## 👨‍💻 Author

**Rudransh Saxena**
🌐 Live Project:https://wanderlust-a-full-stack-hotel-booking.onrender.com

---

⭐ **If you like Wanderlust, consider giving the repository a star!**
