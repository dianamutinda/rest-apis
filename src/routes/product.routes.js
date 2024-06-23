import { Router} from 'express'
import pool from '../db.config.js';
const router = Router();

router.get("/", async (req, res) => {
    try {
       const result = await pool.query("SELECT * FROM products_v2");
       res.status(200).json({success:true, data: result.rows});
    } catch (error) {
        res.status(500).json({success:false, message: error.message});
    }
})

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const result = await pool.query("SELECT * FROM products_v2 WHERE id=$1", [id]);
        if (result.rowCount === 0){
            res.status(404).json({success: false, message:"invalid product id"})
        }else {
            res.status(200).json({success: true, data: result.rows[0]})
        }
    } catch (error) {
        res.status(500).json({success:false, message:error.message})
    }
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