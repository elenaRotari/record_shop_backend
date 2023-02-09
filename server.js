import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
import "./lib/connecting.js";
import morgan from "morgan";
import cors from "cors";
import productsRouter from "./routes/productsRouter.js";
const PORT = process.env.PORT;

const app = express();
//set middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

//set routes
app.use("api", productsRouter);

app.use("/:notfound", (req, res, next) => {
  try {
    error.status = 404;
    error.message = "Page not Found";
    next(error);
  } catch (error) {
    error.status = 500;
    next(error);
  }
});

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
