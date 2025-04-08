import express, { Request, Response } from "express";
import mongoose from "mongoose";
import User from "./models/User";
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect("mongodb://admin:1234@localhost:27017/ivtb-22?authSource=admin")
  .then(() => console.log("DB connected!"))
  .catch((err) => console.error(err));

app.post("/users", async (req: Request, res: Response) => {
  try {
    console.log(req.body)
    const user = new User(req.body)
    await user.save()
    res.status(201).json(user)
  } catch (e) {
    res.status(400).json({message: (e as Error).message})
  }
});

app.get("/users", async (req: Request, res: Response) => {
  try {
    const users = await User.find()
    res.status(201).json(users)
  } catch (e) {
    res.status(400).json({message: (e as Error).message})
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
