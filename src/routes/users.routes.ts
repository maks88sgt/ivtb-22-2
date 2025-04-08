import {Router} from "express"
import { getUsers, createUser, deleteUser } from "../controllers/users.controller";

const router = Router()
/**
 * @swagger
 *    tags: 
 *      name: Users
 *      decscription: Endpoints for users
 *  */

/**
 * @swagger
 *  /users: 
 *    post:
 *      summary: Создать пользователя
 *      description: Создает нового пользователя
 *      tags: [Users]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              requred:
 *                - username
 *                - email
 *              properties:
 *                username:
 *                  type: string
 *                  example: John Doe
 *                email:
 *                  type: string
 *                  example: johndoe@mail.com
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
router.post("/", createUser);


/**
 * @swagger
 *  /users: 
 *    get:
 *      summary: Получить список пользователей
 *      description: Возвращает список всех пользователей.
 *      tags: [Users]
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
router.get("/", getUsers);


/**
 * @swagger
 *  /users: 
 *    delete:
 *      summary: Удалить пользователя
 *      description: Удаляет пользователя
 *      tags: [Users]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              requred:
 *                - userId
 *              properties:
 *                userId:
 *                  type: string
 *                  example: 67f4c70441b7447c466a53ab
 *      responses:
 *        200:
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
router.delete("/", deleteUser);
  
export default router;