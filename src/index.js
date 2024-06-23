import express from "express";
import prodRouter from './routes/product.routes.js'
const app = express();

app.use(express.json());
app.use("/products", prodRouter);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});