# Microservises

## React + Express Project

This project demonstrates how a React frontend communicates with an Express backend using an API.

### Project Overview

The frontend is created using React with Vite, while the backend is built using Node.js and Express.

When the user clicks the **Connect to Server** button on the frontend, the React application sends a request to the Express backend. The backend sends a message in JSON format, and the response is displayed on the frontend.

### Technologies Used

- React
- Vite
- JavaScript
- Node.js
- Express.js
- CORS

### Project Structure

```text
Microservises/
├── frontend/       # React + Vite frontend
├── backend/        # Express backend
├── .gitignore
├── .gitattributes
└── README.md
```

### How It Works

1. Start the Express backend server.
2. Start the React frontend using Vite.
3. Open the React application in the browser.
4. Click **Connect to Server**.
5. The frontend sends a request to the backend API.
6. The backend returns a JSON message.
7. The server response is displayed on the webpage.

### API Endpoint

`GET /api/message`

The backend returns a JSON response containing a message.

### Purpose

The main purpose of this project is to understand the basic connection between a React frontend and an Express backend and how data can be exchanged between them using an API.
