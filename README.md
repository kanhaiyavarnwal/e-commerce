# 🛒 MERN Stack E-Commerce Website

A full-stack E-commerce web application built using the MERN Stack (MongoDB, Express.js, React.js, Node.js). The application provides secure authentication, product management, shopping cart, order management, and an admin dashboard.

## 🚀 Features

### User
- User Registration & Login
- JWT Authentication
- Browse Products
- Search Products
- Add to Cart
- Update Cart
- Place Orders
- User Profile

### Admin
- Admin Dashboard
- Add/Edit/Delete Products
- Manage Categories
- Manage Orders
- Manage Users

## 🛠 Tech Stack

### Frontend
- React.js
- Tailwind CSS
- React Router
- Context API
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Bcrypt
- Cloudinary

### Tools
- Git
- GitHub
- Postman
- MongoDB Compass

ecommerce-app/
├── Admin/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
├── Frontend

### Backend

cd backend
npm install
npm run dev

### Frontend

cd frontend
npm install
npm run dev

## 🔑 Environment Variables

Create a `.env` file inside the backend folder.

PORT=
MONGODB_URL=
JWT_SECRET=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=


## 🔒 Security

- JWT Authentication
- Role-Based Access Control (RBAC)
- Password Hashing
- Protected Routes
- Input Validation


## 🌟 Future Improvements

- Razorpay Payment Integration
- Product Reviews
- Wishlist
- Coupons
- Email Notifications