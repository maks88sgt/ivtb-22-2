import {signIn} from "./auth.controller"
import type { Response, Request } from "express";
import User from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

jest.mock("jsonwebtoken")
jest.mock("bcryptjs")
jest.mock("../models/User")


describe("auth controller", ()=>{
    test("signIn should return 400 if username not passed", async ()=>{
        const res = {} as Response
        res.status = jest.fn().mockReturnValue(res)
        res.json = jest.fn().mockReturnValue(res)
        await signIn({body: {}} as Request, res as Response)
        expect(res.json).toHaveBeenCalled()
        expect(res.json).toHaveBeenCalledWith({message: "Username or password is incorrect"})
        expect(res.status).toHaveBeenCalled()
        expect(res.status).toHaveBeenCalledWith(404)
    })
    test("signIn should return 400 if password not passed", async ()=>{
        const res = {} as Response
        res.status = jest.fn().mockReturnValue(res)
        res.json = jest.fn().mockReturnValue(res)
        await signIn({body: {username: "test"}} as Request, res as Response)
        expect(res.json).toHaveBeenCalled()
        expect(res.json).toHaveBeenCalledWith({message: "Username or password is incorrect"})
        expect(res.status).toHaveBeenCalled()
        expect(res.status).toHaveBeenCalledWith(404)
    })
    test("signIn should return 404 if user not found", async ()=>{
        (User.findOne as jest.Mock).mockResolvedValue(null)
        const res = {} as Response
        res.status = jest.fn().mockReturnValue(res)
        res.json = jest.fn().mockReturnValue(res)
        await signIn({body: {username: "test", password: "1234"}} as Request, res as Response)
        expect(res.json).toHaveBeenCalled()
        expect(res.json).toHaveBeenCalledWith({message: "Username or password is incorrect"})
        expect(res.status).toHaveBeenCalled()
        expect(res.status).toHaveBeenCalledWith(404)
    })
    test("signIn should not return 401 if user found, but password is incorrect", async ()=>{
        (User.findOne as jest.Mock).mockResolvedValue({username: "test", })
        const res = {} as Response
        res.status = jest.fn().mockReturnValue(res)
        res.json = jest.fn().mockReturnValue(res)
        await signIn({body: {username: "test", password: "1234"}} as Request, res as Response)
        expect(res.json).toHaveBeenCalled()
        expect(res.json).toHaveBeenCalledWith({message: "Username or password is incorrect"})
        expect(res.status).toHaveBeenCalled()
        expect(res.status).toHaveBeenCalledWith(401)
    })
})