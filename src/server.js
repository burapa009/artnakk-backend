import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "../config/mongodb.js";
import connectCloudinary from "../config/cloudinary.js";
// Custom routes
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";


// App Config
const app = express();
const port = process.env.PORT || 4000;

// Service connections
connectDB();
connectCloudinary();

const allowedOrigins = [
    "admin-beta-six-82.vercel.app",
    "http://localhost:5173",
    process.env.FRONTEND_URL,
    "admin-beta-six-82.vercel.app"
];

// middlewares
app.use(express.json());
// Configure CORS
app.use(
    cors({
        origin: function(origin, callback) {
            if (!origin) return callback(null, true);
            
            if (allowedOrigins.indexOf(origin) === -1) {
                var msg = 'The CORS policy for this site does not allow access from the specified Origin.';
                return callback(new Error(msg), false);
            }
            return callback(null, true);
        },
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        credentials: true,
        allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"]
    })
);

// เพิ่ม OPTIONS handler สำหรับ preflight requests
app.options('*', cors());

// เพิ่ม middleware สำหรับ set headers
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});

// api endpoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

// เพิ่ม error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        status: 'error',
        message: 'Something went wrong!'
    });
});

// Start server
app.listen(port, () =>
  console.log("Server started on PORT : " + port + " 🌏 🙌")
);