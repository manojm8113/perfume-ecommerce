const router = require('express').Router();
const user = require('../Model/UserSchema');
const JWT = require('jsonwebtoken');
const Crypto = require('crypto-js');

// Login route
router.post('/login', async (req, res) => {
    try {
        // Find user by email
        const finduser = await user.findOne({ Email: req.body.Email });
        if (!finduser) {
            return res.status(401).json({ message: 'Email not registered' });
        }

        // Decrypt the stored password
        const decryptedPassword = Crypto.AES.decrypt(finduser.Password, process.env.crypto);
        const originalPassword = decryptedPassword.toString(Crypto.enc.Utf8);

        // Compare passwords
        if (req.body.Password !== originalPassword) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        // Generate JWT token
        const token = JWT.sign(
            { id: finduser._id },
            process.env.JWTSecky,
            { expiresIn: '1d' }
        );

        // Send response with token and user ID
        res.status(200).json({ token, id: finduser._id });
    } catch (err) {
        // Log error and send a generic error message
        console.error("Login error:", err);
        res.status(500).json({ message: "An error occurred", error: err.message });
    }
});

module.exports = router;
