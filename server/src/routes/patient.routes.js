import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {User} from '../models/User.models.js';

const router = express.Router();

// Signup route
router.post('/signup', async (req, res) => {
    const { name, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, password: hashedPassword });
        console.log(user + "user");
        
        await user.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.log(error);
        
        res.status(400).json({ error: 'Username already exists' });
    }
});

// Login route
router.post('/login', async (req, res) => {
    const { name, password } = req.body;
    try {
        const user = await User.findOne({ name });
        if (!user) return res.status(400).json({ error: 'User not found' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ error: 'Invalid password' });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

export default router;