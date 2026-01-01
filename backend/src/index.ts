import express, { Request, Response } from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";
import testRoutes from "./routes/test.routes";
import cors from "cors";

const corsOptions = {
  origin: process.env.CLIENT_URL, // your frontend server
  // methods: "GET, HEAD, PUT, PATCH, POST, DELETE", // include DELETE
  credentials: true,
  // optionsSuccessStatus: 204,
};

const app = express();
app.use(express.json());
dotenv.config();
app.use(cors(corsOptions));
const apiRouter = express.Router();
app.use("/api", apiRouter);

app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3001;
apiRouter.use("/auth", authRoutes);
apiRouter.use("/users", userRoutes);
apiRouter.use("/test", testRoutes);

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Welcome to the API", client: process.env.CLIENT_URL });
});

app.get("/api/health", (req: Request, res: Response) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
