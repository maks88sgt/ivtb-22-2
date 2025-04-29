import User from "../models/User"
import type {Response, Request} from "express"

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = new User(req.body)
    await user.save()
    res.status(201).json(user)
  } catch (e) {
    res.status(400).json({message: (e as Error).message})
  }
}

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find()
    res.status(201).json(users)
  } catch (e) {
    res.status(400).json({message: (e as Error).message})
  }
}

export const deleteUser = async (req: Request, res: Response) => {
    const { userId } = req.body
    try {
      const deletedUser = await User.findByIdAndDelete(userId)

      if(!deletedUser){
        res.status(404).json({message: "user not found"})
      }

      res.status(200).json(deletedUser)
    } catch (e) {
      res.status(400).json({message: (e as Error).message})
    }
  }