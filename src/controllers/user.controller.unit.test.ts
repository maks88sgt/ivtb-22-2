import {signIn} from "./auth.controller"
import type { Response, Request } from "express";
import User from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

jest.mock("jsonwebtoken")
jest.mock("bcryptjs")
jest.mock("../models/User")


describe("user controller", ()=>{
   test("Dummy test", ()=>{
    
   })
})