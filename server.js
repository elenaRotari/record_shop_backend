import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
import "./lib/connecting.js";
import morgan from "morgan";
import cors from "cors";
import productsRouter from "./routes/productsRouter.js";
import error from "./middleware/error.js";
import notFound from "./middleware/notFound.js";
import userRoute from "./routes/userRoute.js";

const PORT = process.env.PORT;

const app = express();
//set middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5174",
  })
);

//set routes
app.use("/api/products", productsRouter);
app.use("/api/users", userRoute);

app.use(express.static("uploads"));
app.use(express.static("dist"));
app.use("/:notfound", notFound);

app.use(error);

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
