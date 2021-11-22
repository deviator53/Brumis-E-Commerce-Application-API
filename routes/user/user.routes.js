const express = require('express');
const router = express.Router();
const profilePicUpload = require('../../controllers/user/profilPic');
const upload = require('../../config/multerSetup');
const verifyToken = require('../../middleware/authjwt');

router.post('/update-avatar', verifyToken, upload.single('profilePic'), profilePicUpload); 

module.exports = router;