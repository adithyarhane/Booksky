
# DeerBooks – Full Stack Online Bookstore

DeerBooks is a modern full-stack online bookstore where users can browse books, manage wishlists and carts, place orders, make payments, and track deliveries.

This project is built as a **real-world production-style application**, covering core e-commerce workflows.

---

## Features

### Authentication
- User signup & login
- Email verification using OTP
- Password reset with OTP
- Secure JWT authentication (cookies)

### Books
- Add, update, delete books
- Categories & tags
- Search, filter, sort & pagination
- Featured, bestseller, rare editions

### Wishlist
- Add/remove books
- View saved collection

### Cart
- Add/update/remove items
- Quantity management
- Clear cart

### Orders
- Create order from cart
- Order history
- Order tracking timeline

### Payments
- Razorpay integration
- Payment verification

### Reviews & Ratings
- Reviews allowed only after purchase
- Ratings system
- Review validation

---

## Tech Stack

### Frontend
- React
- React Router
- Tailwind CSS
- Axios
- Context API
- lucide react
- react toastify

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Nodemailer
- Razorpay

---

##  System Architecture
Client (React)
      |
   REST APIs
      |
Server (Node + Express)
      |
  MongoDB Database

---

##  Project Structure
booksky/
├── client/        # React frontend
│   ├── pages
│   ├── components
│   ├── context
│   └── utils
|
├── server/        # Node backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   └── utils


---

##  Environment Variables
PORT=9000
MONGO_URI = your_mongodb_url
JWT_SECRET = your_secret
NODE_ENV = 'development'
GMAIL_HOST = your_email_host
GMAIL_USER = your_email
GMAIL_PASS = your_email_pass
RAZORPAY_API_KEY = your_key
RAZORPAY_SECRET_KEY = your_secret

---

##  Getting Started
-> BACKEND
cd server
npm install
npm run start

-> FRONTEND
cd client
npm install
npm run dev


---

##  Project Status
Version: v1.0
Status: MVP Completed
All core features are implemented and fully functional.

---

##  Key Learnings
1. Building scalable REST APIs
2. JWT authentication with cookies
3. Payment gateway integration
4. MongoDB schema design
5. Frontend-backend integration
6. Production-style error handling
7. State management with Context API

---

##  Future Enhancements
Admin dashboard
Invoice PDF generation
Order cancellation & returns
Recommendation system
Advanced search (Elasticsearch)
Mobile application


---

## Final Note

I built this project as a real product, not just for learning.

It demonstrates:
   1. Backend architecture
   2. Frontend design
   3. Authentication
   4. Payments
   5. E-commerce workflows

This project represents my ability to build a complete full-stack application from scratch.



