import { Router } from "express";
import { ProductController } from "../controller/product";
import { upload } from "../middlewares/upload";

const productRouter = Router();

productRouter.get("/", ProductController.getAllProduct);
productRouter.post("/",upload.single("image"), ProductController.createProduct);
productRouter.post("/sale", ProductController.sellingProduct)
productRouter.put("/:id",upload.single("image"), ProductController.updateProduct);
productRouter.delete("/:id", ProductController.deleteProduct);
productRouter.get("/search/:label", ProductController.searchProduct);
productRouter.get("/search/vintage/:label", ProductController.getProductByVintage);

export default productRouter;
