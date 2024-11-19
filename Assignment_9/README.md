
# **Job Portal Application**

This project is a **job portal application** that connects job seekers with employers. It provides a platform for users to manage profiles, view job listings, and interact with employers. The project includes a backend API server built with **Node.js** and **Express**, and a frontend user interface built with **React**.

---

## **Project Features**

### **API Server (Backend)**
The API server is responsible for handling data storage, user authentication, and business logic. It is built using **Node.js**, **Express**, and **MongoDB**.

#### **Endpoints:**
- **User Routes**:
  - **POST** `/user/create`: Create a new user account.
  - **PUT** `/user/edit`: Edit an existing user's profile.
  - **DELETE** `/user/delete`: Delete a user account.
  - **GET** `/user/getAll`: Retrieve a list of all users.
  - **POST** `/user/login`: Authenticate a user and return a JWT token.
  - **POST** `/user/uploadImage`: Upload a user's profile image.

#### **Technologies Used:**
- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web application framework.
- **MongoDB**: Database for storing user and company data.
- **Mongoose**: ODM for MongoDB.

---

### **Frontend (React)**
The frontend is built with **React** and provides a user-friendly interface for interacting with the job portal.

#### **Pages:**
1. **Login Page**: User authentication.
2. **Home Page**: Displays job portal highlights.
3. **About Page**: Information about the platform and team.
4. **Job Listings Page**: Shows all available job postings.
5. **Contact Page**: Allows users to get in touch with the team.
6. **Company Showcase Page**: Highlights registered companies.

#### **Technologies Used:**
- **React.js**: Frontend library for building the user interface.
- **Bootstrap**: Styling framework for layout and design.
- **Material-UI**: Used for some components.

---

## **Project Structure**

### **Backend:**
```
- controllers/       # Contains request handler logic
  - userController.js
- models/            # Defines MongoDB schemas
  - userSchema.js
- routes/            # Defines application routes
  - userRoutes.js
- services/          # Contains business logic
  - userService.js
- server.js          # Main entry point for the backend server
```

### **Frontend:**
```
- src/
  - components/      # Reusable components like Footer, Navbar
  - pages/           # Contains main pages (login, home, about, etc.)
    - Login.jsx
    - HomePage.jsx
    - JobListings.jsx
  - services/        # Handles API requests
    - authService.js
  - App.jsx          # Main entry point for React app
```

---

## **Installation**

### **1. Clone the Repository**
```bash
git clone <repository-url>
cd job-portal
```

### **2. Backend Setup**
1. Navigate to the `backend` directory:
    ```bash
    cd backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file for environment variables:
    ```
    PORT=3000
    MONGO_URI=<your-mongodb-connection-string>
    JWT_SECRET=<your-secret-key>
    ```

4. Start the backend server:
    ```bash
    npm start
    ```
    The backend will run at `http://localhost:3000`.

### **3. Frontend Setup**
1. Navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the React development server:
    ```bash
    npm start
    ```
    The frontend will run at `http://localhost:3001`.

---

## **Usage**

### **Login**
- Use the login page to authenticate users.
- The backend will validate credentials and return a JWT token if successful.

### **Home Page**
- Displays job portal highlights, such as new job listings and top employers.

### **Job Listings**
- Lists all available job postings for job seekers.

---

## **Technologies Used**

| Technology      | Description                              |
|------------------|------------------------------------------|
| Node.js         | Backend runtime for JavaScript.         |
| Express.js      | Backend framework for building APIs.    |
| MongoDB         | NoSQL database for data storage.        |
| React.js        | Library for building the frontend UI.   |
| Bootstrap       | CSS framework for responsive design.    |
| Material-UI     | UI library for React components.        |
| JWT             | Authentication and session management.  |

---

## **License**
This project is licensed under the MIT License. See the LICENSE file for details.

---

