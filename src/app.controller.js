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

    app.use((req, res, next) => {
        const whiteList = ['http://localhost:5500', 'http://localhost:4200']
        const origin = req.headers.origin;
        if (!whiteList.includes(origin)) {
            return next(new Error("Invalid origin from cors", { cause: 501 }))
        }

        res.setHeader('Access-Control-Allow-Origin', origin);
        res.setHeader('Access-Control-Allow-Methods', '*');
        res.setHeader('Access-Control-Allow-Headers', '*');
        res.setHeader('Access-Control-private-network', true)
        return next()
    })

    app.use(express.json())
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