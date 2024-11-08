# Final Year Project

## Project Overview
The **Home Service Provider** project refers to the facilities-based carrier or reseller with whom the customer contracts for the provision of mobile telecommunications services. Users can create an account and log in. They can use our app's chart visualisation to find the best services near them or around the world, as well as different types of categories. 

## [Live](https://home-service.onrender.com/) demo
*Please note:* Website loading times may vary. While waiting, you can explore our new blog website platform [AllBlogs](https://allblogs.in).


### Technology Overview

The Home Service Provider project employs a modern technology stack to deliver an efficient and user-friendly experience. Here's a brief overview of the key technologies and libraries used:

- **Frontend**:
  - **React**: The frontend is built using React, a popular JavaScript library for building user interfaces. React's component-based architecture allows for better code organization and reusability.
  - **Ant Design and Tailwind CSS**: We utilize Ant Design and Tailwind CSS frameworks for UI components and styling. These frameworks provide a wide range of pre-built components and utility classes, allowing for rapid development and consistent design.
  - **Recharts**: For data visualization, we utilize Recharts, a composable charting library built on React components. It enables us to create interactive and visually appealing charts to present data to users.

- **Backend**:
  - **Express.js**: The backend server is built using Express.js, a fast and minimalist web framework for Node.js. Express simplifies the process of building robust APIs and handling HTTP requests.
  - **MongoDB**: We use MongoDB, a NoSQL database, for storing and managing data. Its flexible schema and scalability make it ideal for handling various types of data in our application.
  - **Mongoose**: Mongoose is an elegant MongoDB object modeling tool for Node.js. It provides a straightforward way to define schemas and interact with MongoDB databases in our Node.js applications.

- **Other**:
  - **Connected React Router**: This library helps in managing routing and navigation in our React application, ensuring a smooth and seamless user experience.
  - **dotenv**: dotenv is used for loading environment variables from a .env file, enabling better configuration management and security.

Our technology stack is carefully chosen to optimize performance, scalability, and maintainability, ensuring a seamless experience for our users.

#### Other library and modules
 ##### Frontend

![](https://img.shields.io/badge/Framework-Tailwind-pink)
![](https://img.shields.io/badge/Framework-Antd-blue)
![](https://img.shields.io/badge/Framework-ReactStrap-blue)
![](https://img.shields.io/badge/Framework-Bootstrap-blue)
![](https://img.shields.io/badge/Chart-rechart-pink)
![](https://img.shields.io/badge/Router-connected_react_router-green)

##### Backend

![](https://img.shields.io/badge/Framework-Express-blue)
![](https://img.shields.io/badge/Env-dotenv-red)
![](https://img.shields.io/badge/Middleware-mongoose-pink)
![](https://img.shields.io/badge/Middleware-cors-pink)
![](https://img.shields.io/badge/server-nodemon-orange)

### Getting Started
- #### Installation
    Use `npm install` or `yarn install` to install dependencies.

- #### Start Frontend
    Use `npm run start:client` or `yarn run start:client` to start the frontend.
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

- #### Start Backend
    To start the backend server, follow these steps:

    1. **Environment Setup**:
       - Create a `.env` file in the root directory of your project.
       - Add the following environment variables to the `.env` file:

       ```plaintext
       PORT=5000
       DB_STRING=<YOUR_DB_STRING>
       NODE_ENV=development
       API_VERSION=/v1
       SECREATE=<YOUR_KEY>
       GMAIL=<YOUR_GMAIL>
       GMAIL_PASSWORD=<YOUR_GMAIL_PASSWORD>
       ```

       Replace `<YOUR_DB_STRING>`, `<YOUR_KEY>`, `<YOUR_GMAIL>`, and `<YOUR_GMAIL_PASSWORD>` with your actual database connection string, secret key, Gmail address, and Gmail password respectively.

    2. **Dependencies Installation**:
       - Run `npm install` or `yarn install` to install the required dependencies.

    3. **Starting the Server**:
       - Run `npm run start:dev` or `yarn run start:dev` to start the backend server.
       - This command will use Nodemon to watch for changes and restart the server automatically.
       - The server will be running on [http://localhost:5000](http://localhost:5000).




