const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Ensure "images" directory exists in the project root
const imagesDir = path.join(__dirname, '../images');
if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir);
}

// Configure Multer storage and file filter
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, imagesDir); // Store images in the 'images' directory at project root
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Use timestamp for unique filenames
    }
});

const fileFilter = (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/; // Allowed file types
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = fileTypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb(new Error('Only JPEG, PNG, and GIF images are allowed!'), false);
    }
};

// Set up multer with the storage and file filter
const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 } // Limit file size to 5 MB
});

module.exports = upload;
