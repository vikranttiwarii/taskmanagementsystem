This repository contains a full-stack application built using the MEAN (MongoDB, Express.js, Angular, Node.js) stack. Follow the instructions below to set up and run the application on your local machine.

Prerequisites
Before you begin, make sure you have the following installed:

1. Node.js (LTS version recommended)
Download Node.js
Node version 18.20.2

2.MongoDB
Install MongoDB
Ensure the MongoDB server is running locally, or provide the connection string for a remote database.

3. Git
Download Git

4. Angular CLI
Install globally if not already installed:
bash
Copy code
npm install -g @angular/cli

Angular version 16.2.13
Angular Material 16.2.13

Setup Instructions
1. Clone the Repository
   
a. Clone this repository to your local machine:
bash
Copy code
git clone https://github.com/username/repository-name.git

b. Navigate into the project directory:
bash
Copy code
cd repository-name

2. Backend Setup
   
a. Navigate to the backend folder:
bash
Copy code
cd backend

b. Install dependencies:
bash
Copy code
npm install

c.Configure environment variables:
Create a .env file in the backend directory.
Add the following configuration:
env
Copy code
PORT=5000
MONGO_URI=mongodb://localhost:27017/database_name
JWT_SECRET=your_jwt_secret

d.Start the backend server:
bash
Copy code
npm start

The backend server will run on the port specified in .env (default: 5000).
Visit http://localhost:5000 to confirm the backend is running.



3. Frontend Setup
a. Navigate to the frontend folder:
bash
Copy code
cd ../frontend

b. Install dependencies:
bash
Copy code
npm install

c. Update API URL:
Open the src/environments/environment.ts file.
Set the apiUrl to point to your backend server (default: http://localhost:5000/api):
typescript
Copy code
export const environment = {
  production: false,
  apiUrl: 'http://localhost:5000',
};

d.Run the Angular development server:
bash
Copy code
ng serve

The frontend will be available at http://localhost:4200.
