# 📚 LibraLink - Book Catalog API

**LibraLink** is a full-stack **Book Catalog** web application built using **React.js** for the frontend and **Node.js + Express.js** with **MongoDB** for the backend.

It enables users to:

- 🔍 **Browse** a collection of books
- 🔎 **Search** by book title
- 🏷️ **Filter** by author, category, and minimum rating
- 🔃 **Sort** by price or rating
- 📄 **Paginate** through results

All filtering, searching, sorting, and pagination are efficiently handled using **MongoDB’s aggregation pipeline**.

## **Project Structure**
```
client/   # React frontend
Server/   # Node.js backend
```

## **Installation & Setup**

### **1. Clone the Repository**
```sh
git clone https://github.com/Aman-Agrawal-22/LibraLink-Book-Catalog-API-using-Node.js-and-MongoDB-Pipeline.git
```

### **2. Install Dependencies**
#### **Client**
```sh
cd client
npm install
```

#### **Server**
```sh
cd Server
npm install
```

### **3. Run the Application**
#### **Start the Client**
```sh
cd client
npm start
```

#### **Start the Server**
```sh
cd Server
npm start
```

### **4. Access the App**
- Open your browser and go to **[http://localhost:3000/signup](http://localhost:3000/signup)** to sign up and access the dashboard.

## **API Endpoints**

### **Authentication**
- **GET `/home`** - Serves the homepage.
- **POST `/signup`** - Registers a new user.
- **POST `/login`** - Authenticates a user.
- **GET `/auth`** - Verifies the user token and retrieves user data.

### **Book Management**
- **POST `/books/insert`** - Adds a new book (requires authentication).
- **GET `/user/books`** - Retrieves books added by the authenticated user.
- **GET `/books`** - Fetches all books.
- **GET `/books/search`** - Searches books based on query parameters.
- **GET `/books/filter`** - Fetches books based on filters.
- **DELETE `/books/:id`** - Deletes a book by ID (requires authentication).
- **GET `/books/:id`** - Fetches a book by ID.
- **PUT `/books/:id`** - Updates a book by ID (requires authentication).

## **Technologies Used**
- **Frontend**: React
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
