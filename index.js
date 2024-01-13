import express from 'express';
import productRoutes from './router/productRouter.js';
import { connectDb } from './config/config.js';
const app = express();
const PORT = 8000;
connectDb();
app.use("/api", productRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});