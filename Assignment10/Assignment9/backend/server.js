// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const path = require("path");
// const app = express();
// const port = 3000;

// const { routes } = require("./src/routes/apiRoutes");

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

// // Serve static files from the public folder
// app.use('/user_images', express.static(path.join(__dirname, 'public/user_images')));

// // Test route
// app.get("/test", (req, res) => {
//   console.log("GET request to /test received");
//   res.status(200).send("Test route working!");
// });

// // Endpoint to fetch image paths dynamically
// app.get("/user/getImages", (req, res) => {
//   const images = [
//     "/user_images/pandita.s@northeastern.edu/meta.jpg",
//     "/user_images/pandita.s@northeastern.edu/microsoft.png",
//     "/user_images/pandita.s@northeastern.edu/tcs.png",
//     "/user_images/wadhwa.ya@northeastern.edu/amazon.png",
//     "/user_images/wadhwa.ya@northeastern.edu/hsbc.png",
//     "/user_images/wadhwa.ya@northeastern.edu/airbnb.jpeg"
//   ];
//   res.status(200).json(images);
// });

// // Routes
// routes(app);

// // Start the server
// app.listen(port, () => {
//   console.log(`App is listening on port ${port}`);
// });

// new try 

// const express = require("express");
// const bodyParser = require("body-parser");
// const { routes } = require("./src/routes/apiRoutes"); // Import routes

// const app = express();

// // Middleware to parse form-data fields like 'email'
// app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json()); // Parse JSON data if needed

// // Pass `app` to the routes
// routes(app);

// // Start the server
// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });

// 2nd try 

// const express = require("express");
// const { routes } = require("./src/routes/apiRoutes"); // Import routes

// const app = express();

// // Middleware for parsing JSON and URL-encoded data
// app.use(express.json()); // Parse JSON payloads
// app.use(express.urlencoded({ extended: true })); // Parse URL-encoded payloads

// // Debug Middleware
// app.use((req, res, next) => {
//     console.log("Incoming Request:");
//     console.log("Method:", req.method);
//     console.log("URL:", req.url);
//     console.log("Body:", req.body);
//     next(); // Pass to the next middleware or route
// });

// // Register routes
// routes(app);

// // Start the server
// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });

// 3rd try :

// const express = require("express");
// const mongoose = require("mongoose");
// const path = require("path");
// const { routes } = require("./src/routes/apiRoutes"); // Import routes

// const app = express();
// const PORT = 3000;

// // MongoDB connection
// const mongoUri = "mongodb://localhost:27017/assignment8";
// mongoose
//     .connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         console.log("Connected to MongoDB");
//     })
//     .catch((error) => {
//         console.error("MongoDB connection error:", error);
//     });

// mongoose.connection.on("connected", () => {
//     console.log("Mongoose is connected to MongoDB");
// });

// mongoose.connection.on("error", (err) => {
//     console.error("Mongoose connection error:", err);
// });

// // Middleware for parsing JSON and URL-encoded data
// app.use(express.json()); // Parse JSON payloads
// app.use(express.urlencoded({ extended: true })); // Parse URL-encoded payloads

// // Debug Middleware
// app.use((req, res, next) => {
//     console.log("Incoming Request:");
//     console.log("Method:", req.method);
//     console.log("URL:", req.url);
//     console.log("Headers:", req.headers);
//     console.log("Body:", req.body);
//     next(); // Pass to the next middleware or route
// });

// // CORS setup
// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
//     );
//     res.setHeader(
//         "Access-Control-Allow-Methods",
//         "GET, POST, PUT, DELETE, PATCH, OPTIONS"
//     );
//     next();
// });

// // Content Security Policy for development
// app.use((req, res, next) => {
//     res.setHeader(
//         "Content-Security-Policy",
//         "script-src 'self' 'unsafe-eval';"
//     );
//     next();
// });

// // Serve static files from the public folder
// app.use("/user_images", express.static(path.join(__dirname, "public/user_images")));

// // Test route
// app.get("/test", (req, res) => {
//     console.log("GET request to /test received");
//     res.status(200).send("Test route working!");
// });

// // Endpoint to fetch image paths dynamically
// app.get("/user/getImages", (req, res) => {
//     const images = [
//         "/user_images/pandita.s@northeastern.edu/meta.jpg",
//         "/user_images/pandita.s@northeastern.edu/microsoft.png",
//         "/user_images/pandita.s@northeastern.edu/tcs.png",
//         "/user_images/wadhwa.ya@northeastern.edu/amazon.png",
//         "/user_images/wadhwa.ya@northeastern.edu/hsbc.png",
//         "/user_images/wadhwa.ya@northeastern.edu/airbnb.jpeg",
//     ];
//     res.status(200).json(images);
// });

// // Register routes
// routes(app);

// // Start the server
// app.listen(PORT, () => {
//     console.log(`App is listening on port ${PORT}`);
// });

// 4th attempty :

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const fs = require("fs-extra"); // For filesystem operations
const { routes } = require("./src/routes/apiRoutes"); // Import routes

const app = express();
const PORT = 3000;

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

mongoose.connection.on("connected", () => {
    console.log("Mongoose is connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
    console.error("Mongoose connection error:", err);
});

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Debug Middleware
app.use((req, res, next) => {
    console.log("Incoming Request:");
    console.log("Method:", req.method);
    console.log("URL:", req.url);
    console.log("Headers:", req.headers);
    console.log("Body:", req.body);
    next();
});

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
app.use("/user_images", express.static(path.join(__dirname, "public/user_images")));

// Test route
app.get("/test", (req, res) => {
    console.log("GET request to /test received");
    res.status(200).send("Test route working!");
});

// Dynamically fetch all image paths
// app.get("/user/getAllImages", async (req, res) => {
//     try {
//         const baseDir = path.join(__dirname, "public/user_images");

//         // Read all images recursively from the user_images folder
//         function readImagesRecursively(dirPath, fileList = []) {
//             const files = fs.readdirSync(dirPath);
//             files.forEach((file) => {
//                 const fullPath = path.join(dirPath, file);
//                 if (fs.statSync(fullPath).isDirectory()) {
//                     readImagesRecursively(fullPath, fileList); // Recursively read subdirectories
//                 } else if (/\.(jpg|jpeg|png|gif)$/i.test(file)) {
//                     fileList.push(path.relative(path.join(__dirname, "public"), fullPath)); // Add relative path
//                 }
//             });
//             return fileList;
//         }

//         const imagePaths = readImagesRecursively(baseDir);

//         res.status(200).json(imagePaths); // Send the relative paths to the frontend
//     } catch (error) {
//         console.error("Error fetching images:", error);
//         res.status(500).json({ error: "Failed to fetch images" });
//     }
// });

app.get("/user/getAllImages", async (req, res) => {
  try {
      const baseDir = path.join(__dirname, "public/user_images");

      // Read all images recursively from the user_images folder
      function readImagesRecursively(dirPath, fileList = []) {
          const files = fs.readdirSync(dirPath);
          files.forEach((file) => {
              const fullPath = path.join(dirPath, file);
              if (fs.statSync(fullPath).isDirectory()) {
                  readImagesRecursively(fullPath, fileList); // Recursively read subdirectories
              } else if (/\.(jpg|jpeg|png|gif)$/i.test(file)) {
                  // Return paths relative to "/user_images"
                  const relativePath = fullPath.replace(path.join(__dirname, "public"), "");
                  fileList.push(relativePath);
              }
          });
          return fileList;
      }

      const imagePaths = readImagesRecursively(baseDir);

      res.status(200).json(imagePaths); // Send the relative paths to the frontend
  } catch (error) {
      console.error("Error fetching images:", error);
      res.status(500).json({ error: "Failed to fetch images" });
  }
});

// Register routes
routes(app);

// Start the server
app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});
