import express from "express";
import usersRouter from "./routes/users.routes";
import authRouter from "./routes/auth.routes";
import { connectDB } from "./config/connectDB";
import swaggerUI from "swagger-ui-express"
import swaggerSpec from "./config/openAPI";
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB()

app.use("/users", usersRouter)
app.use("/auth", authRouter)
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
