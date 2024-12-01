const multer = require("multer");
const path = require("path");
const fs = require("fs-extra");

import {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser,
    loginUser,
} from "../controllers/userController";

import {
    createJob,
    getJobs,
    deleteJobs,
} from "../controllers/jobController";

import { getUserImages, getAllImages } from "../services/userService"; // Import the necessary functions

export const routes = (app) => {
    // Routes for user management
    app.route("/user/getAll").get(getAllUsers);
    app.route("/user/create").post(createUser);
    app.route("/user/edit").put(updateUser);
    app.route("/user/delete").delete(deleteUser);

    // Multer storage configuration for image upload
    const storage = multer.diskStorage({
        destination: async function (req, file, cb) {
            const baseDir = path.join(__dirname, "../../public/user_images");
            const userEmail = req.body.email;

            if (!userEmail) {
                return cb(new Error("User email is required"), null);
            }

            const userFolder = path.join(baseDir, userEmail);
            await fs.ensureDir(userFolder); // Ensure directory exists
            cb(null, userFolder);
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname); // Save file with its original name
        },
    });

    const upload = multer({
        storage: storage,
        fileFilter: (req, file, cb) => {
            const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
            if (allowedTypes.includes(file.mimetype)) {
                cb(null, true);
            } else {
                cb(new Error("Invalid file type"));
            }
        },
    });

    // Image upload route
    app.post("/user/uploadImage", (req, res) => {
        upload.single("image")(req, res, function (err) {
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            const email = req.body.email;
            if (!email) {
                return res.status(400).json({ error: "Email is required" });
            }

            console.log("Uploaded file path:", req.file.path);
            res.status(200).json({ message: "Image uploaded successfully!" });
        });
    });

    // Route to fetch user-specific images
   // Route to fetch user-specific images
    // Route to fetch user-specific images
    // Route to fetch user-specific images
// Route to fetch user-specific images
app.get("/user/getImages", async (req, res) => {
  try {
      const email = req.query.email; // Fetch email from query params
      if (!email) {
          return res.status(400).json({ error: "Email is required" });
      }

      // Resolve the base directory correctly from the 'backend' root
      const baseDir = path.resolve(__dirname, "../../public/user_images", email);

      // Check if the directory exists
      if (!fs.existsSync(baseDir)) {
          console.error(`Directory does not exist: ${baseDir}`);
          return res.status(200).json([]); // Return an empty array if no directory
      }

      // Read all image files from the user's folder
      const files = fs.readdirSync(baseDir).filter((file) =>
          /\.(jpg|jpeg|png|gif)$/i.test(file)
      );

      // Generate relative paths for the images
      const imagePaths = files.map((file) =>
          `/user_images/${email}/${file}`
      );

      console.log("Fetched image paths:", imagePaths);
      res.status(200).json(imagePaths);
  } catch (error) {
      console.error("Error fetching user images:", error);
      res.status(500).json({ error: "Failed to fetch user images" });
  }
});


    // Route to fetch all images dynamically for the company showcase
    app.get("/user/getAllImages", async (req, res) => {
        try {
            const images = await getAllImages(); // Fetch all image paths
            res.status(200).json(images); // Return the image paths
        } catch (error) {
            console.error("Error fetching images:", error);
            res.status(500).json({ error: "Failed to fetch images" });
        }
    });

    // Login route
    app.route("/user/login").post(loginUser);

    // Routes for jobs
    app.route("/create/job").post(createJob);
    app.route("/get/jobs").get(getJobs);
    app.route("/delete/jobs").delete(deleteJobs);
};
