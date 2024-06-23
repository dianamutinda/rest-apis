import { Router} from 'express'
const router = Router();

router.get("/", (req, res) => {
    res.send("get all products")
})

router.get("/:id", (req, res) => {
    res.send("get a product")
})

router.patch("/:id", (req, res) => {
    res.send("updating a product")
})

router.post("", (req, res) => {
    res.send("creating a product")
})

router.delete("/:id", (req, res) => {
    res.send("deleting a product")
})

export default router;