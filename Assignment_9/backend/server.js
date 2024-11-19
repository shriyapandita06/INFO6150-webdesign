const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const port = 3000;

const { routes } = require("./src/routes/apiRoutes");

// MongoDB connection
const mongoUri = "mongodb://localhost:27017/assignment8";
mongoose
  .connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

// BodyParser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// CORS setup
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

// Content Security Policy for development
app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "script-src 'self' 'unsafe-eval';"
  );
  next();
});

// Serve static files from the public folder
app.use('/user_images', express.static(path.join(__dirname, 'public/user_images')));

// Test route
app.get("/test", (req, res) => {
  console.log("GET request to /test received");
  res.status(200).send("Test route working!");
});

// Endpoint to fetch image paths dynamically
app.get("/user/getImages", (req, res) => {
  const images = [
    "/user_images/pandita.s@northeastern.edu/meta.jpg",
    "/user_images/pandita.s@northeastern.edu/microsoft.png",
    "/user_images/pandita.s@northeastern.edu/tcs.png",
    "/user_images/wadhwa.ya@northeastern.edu/amazon.png",
    "/user_images/wadhwa.ya@northeastern.edu/hsbc.png",
    "/user_images/wadhwa.ya@northeastern.edu/airbnb.jpeg"
  ];
  res.status(200).json(images);
});

// Routes
routes(app);

// Start the server
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});



// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const app = express();
// const port = 3000;

// import { routes } from "./src/routes/apiRoutes";

// // MongoDB connection
// const mongoUri = "mongodb://localhost:27017/assignment8";
// mongoose
//   .connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((error) => {
//     console.error("MongoDB connection error:", error);
//   });

// // BodyParser setup
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// // CORS setup
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PUT, DELETE, PATCH, OPTIONS"
//   );
//   next();
// });

// // Content Security Policy for development
// app.use((req, res, next) => {
//   res.setHeader(
//     "Content-Security-Policy",
//     "script-src 'self' 'unsafe-eval';"
//   );
//   next();
// });

// // Test route
// app.get("/test", (req, res) => {
//   console.log("GET request to /test received");
//   res.status(200).send("Test route working!");
// });
// // Routes
// routes(app);

// // Start the server
// app.listen(port, () => {
//   console.log(`App is listening on port ${port}`);
// });

