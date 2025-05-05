import { Router } from "express";
import { ProductController } from "../controller/product";

const productRouter = Router();

productRouter.get("/", ProductController.getAllProduct);
productRouter.post("/", ProductController.createProduct);
productRouter.put("/:id", ProductController.updateProduct);
productRouter.delete("/:id", ProductController.deleteProduct);
productRouter.get("/search/:label", ProductController.searchProduct);
productRouter.get("/search/vintage/:label", ProductController.getProductByVintage);

export default productRouter;
