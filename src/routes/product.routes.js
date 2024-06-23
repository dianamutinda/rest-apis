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

router.patch("/:id", async (req, res) => {
    const {productthumbnail, producttitle, productdescription, productcost,onoffer} = req.body;
    const id = req.params.id;
    try {
        let productUpdate;
        if (productthumbnail) {
            productUpdate = await pool.query("UPDATE products_v2 SET productThumbnail=$1 WHERE id=$2", [productthumbnail , id])
        }

        if (producttitle) {
            productUpdate = await pool.query("UPDATE products_v2 SET productTitle=$1 WHERE id=$2", [producttitle , id])
        }

        if (productdescription) {
            productUpdate = await pool.query("UPDATE products_v2 SET productDescription=$1 WHERE id=$2", [productdescription , id])
        }

        if (productcost) {
            productUpdate = await pool.query("UPDATE products_v2 SET productCost=$1 WHERE id=$2", [productcost , id])
        }

        if (onoffer) {
            productUpdate = await pool.query("UPDATE products_v2 SET onoffer=$1 WHERE id=$2", [onoffer , id])
        }
        if (productUpdate.rowCount === 1){
            res.status(200).json({success:true, message:"product updated successfuly"})
        }else {
            res.status(400).json({success:false, message:"invalid product id"})
        }
        res.json(productUpdate);
    } catch (error) {
        res.status(500).json({success: false, message:error.message})
    }
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

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const prodDelete = await pool.query("DELETE FROM products_v2 WHERE id=$1", [id]);
        if (prodDelete.rowCount === 1){
            res.status(200).json({success: true, message:"product deleted successfully"})
        }else {
            res.status(400).json({success:false, message:"invalid product id"})
        }
    } catch (error) {
        res.status(500).json({success:false, message:error.message})
    }
})

export default router;


