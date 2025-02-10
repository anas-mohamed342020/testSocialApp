import { Router } from "express";
import { auth } from "../../middleware/auth.middleware.js";
import * as postServices from "./post.services.js";
import { asyncHandler } from "../../utils/errorHandel/asyncHandler.js";
import commentRouter from '../comment/comment.controller.js'
const router = Router()


router.use('/:postId/comment', commentRouter)


router.route('/')
    .get((req, res, next) => {
        res.json({ message: "Welcome to post router" })
    })
    .post(
        auth(),
        asyncHandler(postServices.createPost)
    )

router.patch('/:postId',
    auth(),
    asyncHandler(postServices.updatePost)
)

router.delete('/:postId',
    auth(),
    asyncHandler(postServices.deletePost)
)

router.patch('/soft-delete/:postId',
    auth(),
    asyncHandler(postServices.softDelete)
)

router.get('/get-all-posts',
    asyncHandler(postServices.getPost)
)

router.get('/get-post/:postId',
    asyncHandler(postServices.getPost)
)
router.get('/like-unlike/:postId', auth(), asyncHandler(postServices.like_unlike))
export default router