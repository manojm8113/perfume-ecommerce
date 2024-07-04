const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const userRouter = require('./Router/UserRouter');
const adminSignup = require('./Router/AdminsignRouter');
const adminRouter = require('./Router/AdminRouter');
const companyRouter = require('./Router/CompanyRouter');
const login = require('./Router/login');
const admin = require('./Router/Adminlogin');
const company = require('./Router/Companylogin');
const Query = require('./Router/QueryRouter');
const carts = require('./Router/CartRouter');
const JWT = require('jsonwebtoken');
dotenv.config();
const app = express();
app.use(cors("*"))
// Apply CORS middleware
app.use(cors({
    origin: "https://fragrance-client.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

// Handle preflight requests for all routes
// app.options('*', cors());

mongoose.connect(process.env.MongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database is connected");
}).catch((err) => {
    console.error("Database connection error:", err);
});

app.use(express.json());

app.use("/userapis", userRouter);
app.use("/adminapis", adminRouter);
app.use("/logindatas", login);
app.use("/adminlogins", admin);
app.use("/adminsignup", adminSignup);
app.use("/addcompany", companyRouter);
app.use("/companylogin", company);
app.use("/userquerys", Query);
app.use("/usercart", carts);

app.use((err, req, res, next) => {
    console.error("Error handling middleware:", err);
    res.status(500).send({ error: 'Internal Server Error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});
