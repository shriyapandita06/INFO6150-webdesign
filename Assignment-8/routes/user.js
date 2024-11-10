const express = require('express')
const router = express.Router()

const { getAllUsers, deleteUser, editUser, createUser } = require('../services/user')
const { validateEmailField, validateNameField , validateUserFields, validatePasswordField } = require("../validators/validations")


router.get('/getAll', async (req, res) => {
    try {
        const users = await getAllUsers()
        res.json(users)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
})

router.post('/create', async (req, res) => {
    const email = req.body.email
    const name = req.body.name
    const password = req.body.password
    try {
        validateUserFields(email, name, password)
    } catch (error) {
        return res.status(400).json({ message : error.message })
    }

    try {
        const user = await createUser(email, name, password)
        return res.status(201).json(user)
    } catch (error) {
        if (error.name === "UserAlreadyExists") {
            return res.status(409).json({ message : error.message})
        }
        return res.status(500).json({ message: error.message })
    }
})

router.put('/edit', async (req, res) => {
    const email = req.query.email
    const name = req.body.name
    const password = req.body.password
    try {
        validateEmailField(email)
        if (name != null) {
            validateNameField(name)
        }
        if (password != null) {
            validatePasswordField(password)
        }
    } catch (error) {
        return res.status(400).json({ message : error.message })
    }

    try {
        const updatedUser = await editUser(email, name, password)
        res.json(updatedUser)
    } catch (error) {
        if (error.name === "UserDoesNotExist") {
            return res.status(409).json({ message : error.message})
        }
        res.status(500).json({ message: error.message })
    }

})

router.delete('/delete', async (req, res) => {
    let email = req.query.email
    try {
        validateEmailField(email)
    } catch (error) {
        return res.status(400).json({ message : error.message })
    }

    try {
        await deleteUser(email)
        res.json({ message : "Deleted User" })
    } catch (error) {
        res.status(500).json({ message: error.message })   
    }
})


// const upload = require('../services/upload'); // Import the Multer upload configuration
// const User = require('../models/user'); // Import the User model

// router.post('/uploadImage', (req, res) => {
//     upload.single('image')(req, res, async (err) => {
//         if (err) {
//             // Handle Multer file filter error (e.g., wrong file type)
//             return res.status(400).json({ message: err.message });
//         }

//         const userEmail = req.query.email; // Expecting user email in query parameters
//         const imagePath = req.file.path; // Path to the uploaded image

//         try {
//             // Attempt to find the user by email and update the image path
//             const user = await User.findOneAndUpdate({ email: userEmail }, { imagePath: imagePath }, { new: true });
            
//             // If the user is not found, return a 404 error with the "User not found" message
//             if (!user) {
//                 return res.status(404).json({ message: 'User not found.' });
//             }

//             // If the user is found and updated, send a success response
//             res.status(200).json({ message: 'Image uploaded successfully', filePath: imagePath });
//         } catch (error) {
//             // If there is an error with the database operation, send a 500 error
//             res.status(500).json({ message: error.message });
//         }
//     });
// });

const upload = require('../services/upload'); // Import the Multer upload configuration
const User = require('../models/user'); // Import the User model

router.post('/uploadImage', (req, res) => {
    upload.single('image')(req, res, async (err) => {
        if (err) {
            // Handle Multer file filter error (e.g., wrong file type)
            console.error("Multer error:", err.message);
            return res.status(400).json({ message: err.message });
        }

        // Log the value of req.file to check if it is defined
        console.log("File received:", req.file);

        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded or invalid file type.' });
        }

        const userEmail = req.query.email; // Expecting user email in query parameters
        const imagePath = req.file.path; // Path to the uploaded image

        try {
            // Attempt to find the user by email and update the image path
            const user = await User.findOneAndUpdate({ email: userEmail }, { imagePath: imagePath }, { new: true });
            
            // If the user is not found, return a 404 error with the "User not found" message
            if (!user) {
                return res.status(404).json({ message: 'User not found.' });
            }

            // If the user is found and updated, send a success response
            res.status(200).json({ message: 'Image uploaded successfully', filePath: imagePath });
        } catch (error) {
            // If there is an error with the database operation, send a 500 error
            res.status(500).json({ message: error.message });
        }
    });
});

module.exports = router

