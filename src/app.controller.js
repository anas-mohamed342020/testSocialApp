// bootstrap

import DBConnection from "./DB/DBConnection.js"
import authRoute from "./modules/auth/auth.controller.js"
import commentRouter from "./modules/comment/comment.controller.js"
import postRouter from "./modules/post/post.controller.js"
import userRouter from "./modules/user/user.controller.js"
import { asyncHandler } from "./utils/errorHandel/asyncHandler.js"
import { globalErrorHandler } from "./utils/errorHandel/globalMhandelMiddleware.js"
import cors from 'cors'


export const bootstrap = async (app, express) => {
    app.use(express.json())
    app.use(cors())
    DBConnection()
    //service file
    const sayHello = (req, res, next) => {
        res.json({ message: "Hello from social media app" })
    }
    // controller file
    app.get('/', asyncHandler(sayHello))

    app.use('/auth', authRoute)
    app.use('/user', userRouter)
    app.use('/post', postRouter)
    app.use('/comment', commentRouter)
    app.use('/uploads', express.static('uploads'))




    app.all('*', (req, res, next) => {
        res.status(404).json({ message: "Route not found" })
    });
    app.use(globalErrorHandler)
}