📘 MERN Stack User Management Application

This is a User Management CRUD application built using the MERN Stack.

🧱 Project Structure
mern-project/
│
├── client/        # React Frontend
│
├── server/        # Node.js + Express Backend
│
└── README.md

🛠 Tech Stack
Frontend (client)

React.js

React Router DOM

Axios

Bootstrap

Font Awesome

React Hot Toast

Backend (server)

Node.js

Express.js

MongoDB

Mongoose

CORS

Dotenv

Body Parser

Nodemon

⚙️ Installation & Setup (IMPORTANT)
1️⃣ Clone the Repository
git clone <your-repository-url>
cd mern-project

🔹 BACKEND SETUP (Server)

📂 Go to server folder

cd server


📦 Install backend dependencies

npm init -y
npm install express
npm install mongoose
npm install dotenv
npm install cors
npm install body-parser
npm install --save-dev nodemon


📄 Create .env file inside server folder

PORT=7000
MONGOURL=your_mongodb_connection_string


▶ Start backend server

npm run dev


🌐 Backend will run at:

http://localhost:7000

🔹 FRONTEND SETUP (Client)

📂 Go to client folder

cd client


📦 Install frontend dependencies

npm install axios
npm install react-router-dom
npm install react-hot-toast
npm install bootstrap
npm install font-awesome


▶ Start frontend

npm start


🌐 Frontend will run at:

http://localhost:3000

✨ Features

Add User

View Users

Update User

Delete User

Toast Notifications

REST API Integration

MongoDB Database

🔗 API Endpoints
Method	Endpoint	Description
POST	/api/user	Create User
GET	/api/users	Get All Users
GET	/api/user/:id	Get User By ID
PUT	/api/update/user/:id	Update User
DELETE	/api/delete/user/:id	Delete User
🚫 Git Ignore (Important)

The following files are not pushed to GitHub:

node_modules/

.env

build/

👨‍💻 Author

Hasma Shaik

✅ How to Run Project (Quick Summary)
# Terminal 1
cd server
npm run dev

# Terminal 2
cd client
npm start
