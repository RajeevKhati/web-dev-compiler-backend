import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { dbConnect } from "./db/db-connect";
import { compilerRouter } from "./routes/compiler-router";

// Load environment variables
config();

// Initialize Express app
const app = express();
const port = process.env.PORT ?? 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Database connection
dbConnect();

// Routes
app.use("/compiler", compilerRouter);

// Start the server
app.listen(port, () => {
  console.log("Server is listening on port: " + port);
});
