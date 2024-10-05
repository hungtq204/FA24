import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { fileURLToPath } from "url"

// Lấy đường dẫn hiện tại và chuyển đổi thành đường dẫn thư mục
const __filename = fileURLToPath(import.meta.url);// Lấy đường dẫn file hiện tại
const __dirname = path.__dirname(__filename) // Lấy đường dẫn thư mục chứa file hiện tại


// Middleware
const app = express();



app.use(cors());// Cho phép tất cả các nguồn gốc truy cập
app.use(express.json())// Chuyển đổi body của request thành JSON
app.use("/api", productRouter);

export const viteNodeApp = app;