import { Router } from "express";

const router = Router({ mergeParams: true });

router.get('/', (req, res) => {

    res.json({ message: "Welcome to comment Router" });
})

router.post('/',)



export default router;