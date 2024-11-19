console.log("apiRoutes.js loaded");

import { getAllUsers, createUser, updateUser, deleteUser, uploadImage, loginUser, getImages } from "../controllers/userController";
import multer from 'multer';

export const routes = (app) => {

    app.route('/user/getAll')
    .get(getAllUsers);

    app.route('/user/create')
    .post(createUser);

    app.route('/user/edit')
    .put(updateUser);

    app.route('/user/delete')
    .delete(deleteUser);

    const storage = multer.diskStorage({
        destination: async function (req, file, cb) {
          cb(null, "../frontend/public/user_images");
        },
        filename: function (req, file, cb) {
          cb(null, file.originalname);
        },
    });
      
    const fileFilter = function (req, file, cb) {
        const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
        if (allowedTypes.includes(file.mimetype)) {
          cb(null, true);
        } else {
          cb(null, false);
        }
    };

    const upload = multer({ storage: storage, fileFilter: fileFilter });

    app.post('/user/uploadImage', upload.single("image"), uploadImage);

    app.route('/user/getImages')
    .get(getImages);

    app.route('/user/login')
    .post(loginUser);

}