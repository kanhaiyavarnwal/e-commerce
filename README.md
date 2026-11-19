
# Full Stack MERN Application

A full-stack web application built using the MERN stack, consisting of three main parts:

1. **Backend:** REST API built with Node.js, Express.js and MongoDB.
2. **Frontend:** User-facing application built with React.js , TailwindCSS  and Vite.
3. **Admin Panel:** Admin dashboard built with React.js , TailwindCSS and Vite for managing application operations.

## Tech Stack

### Backend
- Node.js
- Express.js 5
- MongoDB & Mongoose
- JWT Authentication
- Bcrypt
- Cloudinary
- Multer
- Nodemailer
- Razorpay
- Stripe
- Validator
- Cookie Parser
- CORS
- Dotenv

### Frontend
- React.js 19
- Vite
- React Router DOM
- Tailwind CSS 4
- Axios
- Lucide React
- React Icons
- React Toastify

### Admin Panel
- React.js 19
- Vite
- React Router DOM
- Tailwind CSS 4
- Axios
- React Toastify

## Project Structure


project/
│
├── backend/
│   ├── app.js
│   ├── package.json
│   ├── src/
│   |    ├── config/
│   |    ├── controllers/
│   |    ├── models/
│   |    ├── routes/
│   |    ├── middleware/
│   |    └── utils/
│   |──.env
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env
│   ├── package.json
│   └── vite.config.js
│
├── admin/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env
│   ├── package.json
│   └── vite.config.js
│
└── README.md


*Note: This is a suggested project structure. Adjust it according to your actual folders and files.*

## Prerequisites

Install the following before running the project:

- Node.js (LTS version)
- npm
- MongoDB (Local or MongoDB Atlas)
- Git

## Installation and Setup

### 1. Clone Repository

open terminal and execute below line
git clone https://github.com/kanhaiyavarnwal/e-commerce.git



### 2. Backend Setup

 go to the folder open terminal and run the below line: 
     (1) cd backend
     (2) npm install


Create a `.env` file inside the backend directory:

env ( its a folder )
PORT=5000

MONGODB_URL=use your mongodb_url
PORT=5000
JWT_SECRET = your own secret

API_KEY=cloudinary_api_key
API_SECRET=cloudinary_api_secret
CLOUDINARY_NAME=cloudinary_name

ADMIN_EMAIL = admin email
ADMIN_PASSWORD=admin password

EMAIL_USER=userEmail
EMAIL_PASS=email secret for recieved nitification from client
STRIPE_SECRET_KEY=you_stripe-secret

RAZORPAY_KEY_ID=razorpay_key_id
RAZORPAY_SECRET=razorpay_secret


Start the backend:

    npm run dev

you see: http://localhost:5000 



### 3. Frontend Setup

Open a new terminal:

    cd frontend
    npm install

Create `.env`:

env
VITE_BACKEND_URL=your backend url
VITE_RAZORPAY_KEY_ID=razorpay_key_id


Start frontend:

    npm run dev
copy the url paste it into chrome tab 


### 4. Admin Panel Setup

Open another terminal:


    cd admin
    npm install


Create `.env`:

 env
VITE_BACKEND_URL:your backend url 


Start the admin development server:

     npm run dev
copy the url paste it into chrome tab 


## Available Scripts

### Backend

| Command | Description |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Start development server |


### Frontend

| Command | Description |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Start Vite server |


### Admin Panel

| Command | Description |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Start Vite server |


## Running the Complete Application

Run all three applications in separate terminals.

**Terminal 1 – Backend**

    cd backend
    npm run dev

**Terminal 2 – Frontend**


    cd frontend
    npm run dev


**Terminal 3 – Admin Panel**


    cd admin
    npm run dev


The backend, frontend, and admin panel will run independently and communicate through API requests.

## Third-Party Integrations

| Technology | Purpose |
|---|---|
| MongoDB | Database |
| JWT | Authentication |
| bcrypt | Password hashing |
| Cloudinary | Image/file storage |
| Multer | File uploads |
| Nodemailer | Email services |
| Razorpay | Payment gateway |
| Stripe | Payment gateway |
| Axios | API communication |

## Security

- Keep all secret credentials inside environment variables.
- Never commit `.env` files to GitHub.
- Validate user inputs on the backend.
- Protect private routes using authentication and authorization middleware.
- Use secure payment verification on the backend.

Add this to `.gitignore`:


node_modules/
.env
.env.local
dist/


## Author

Kanhaiya Varnwal

- GitHub: [https://github.com/kanhaiyavarnwal]
- LinkedIn: [https://www.linkedin.com/in/kanhaiya-varnwal04/]



