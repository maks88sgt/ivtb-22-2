import {Router} from "express"
import { signUp, signIn } from "../controllers/auth.controller";

const router = Router()


/**
 * @swagger
 *    tags: 
 *      name: Auth
 *      decscription: Endpoints for sign-in sign-up
 *  */

/**
 * @swagger
 *  /auth/sign-up: 
 *    post:
 *      summary: register new user
 *      description: creates new user in DB
 *      tags: [Auth]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              requred:
 *                - username
 *                - email
 *                - password
 *              properties:
 *                username:
 *                  type: string
 *                  example: John Doe
 *                email:
 *                  type: string
 *                  example: johndoe@mail.com
 *                password:
 *                  type: string
 *                  example: 12345
 *                role:
 *                  type: string
 *                  default: user
 *                  example: user
 *      responses:
 *        201:
 *          description: Успешный ответ
 *          content:
 *            application/json:
 *             schema:
 *                type: object
 *                properties:
 *                  user: 
 *                    type: object
 *                    properties:
 *                      _id:
 *                        type: string
 *                        example: 67f4c70441b7447c466a53ab
 *                      username:
 *                        type: string
 *                        example: John Doe
 *                      email:
 *                        type: string
 *                        example: johndoe@mail.com
 *                  token: 
 *                    type: string
 *                  message:
 *                    type: string         
 *        400:
 *          description: Ответ с ошибкой
 *          content:
 *            application/json:
 *             schema:
 *                type: object
 *                properties:
 *                    message:
 *                      type: string
 *                      example: some error occured
 */
router.post("/sign-up", signUp)


/**
 * @swagger
 *  /auth/sign-in: 
 *    post:
 *      summary: authentificate user
 *      description: authentificate user
 *      tags: [Auth]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              requred:
 *                - username
 *                - password
 *              properties:
 *                username:
 *                  type: string
 *                  example: John Doe
 *                password:
 *                  type: string
 *                  example: 12345
 *      responses:
 *        201:
 *          description: Успешный ответ
 *          content:
 *            application/json:
 *             schema:
 *                type: array
 *                items:
 *                  type: object
 *                  properties:
 *                    _id:
 *                      type: string
 *                      example: 67f4c70441b7447c466a53ab
 *                    username:
 *                      type: string
 *                      example: John Doe
 *                    email:
 *                      type: string
 *                      example: johndoe@mail.com
 *        400:
 *          description: Ответ с ошибкой
 *          content:
 *            application/json:
 *             schema:
 *                type: object
 *                properties:
 *                    message:
 *                      type: string
 *                      example: some error occured
 */
router.post("/sign-in", signIn)

export default router