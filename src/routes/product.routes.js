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

router.post("", async (req, res) => {
    try {
        const productthumbnail = req.body.productthumbnail;
        const producttitle = req.body.producttitle;
        const productdescription = req.body.productdescription;
        const productcost = req.body.productcost;
        const onoffer = req.body.onoffer;

        const insert = await pool.query("INSERT INTO products_v2 (productThumbnail, productTitle, productDescription, productCost, onOffer) VALUES ($1, $2, $3, $4, $5)", [productthumbnail,producttitle,productdescription,productcost,onoffer]);
        if (insert.rowCount === 1){
            res.status(201).json({success:true, message:"product created successfully"})
        }


    } catch (error) {
        res.status(500).json({success:false, message:error.message})
    }
})

router.delete("/:id", (req, res) => {
    res.send("deleting a product")
})

export default router;