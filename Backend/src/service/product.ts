import { Product } from "../type/product";
import prisma from "../config/prisma";

export class ProductService {
    static async getAll() {
        try {
            return await prisma.product.findMany({
                include: {
                    vintage: true,
                    format: true
                }
            });
        } catch (error) {
            console.error("Erreur de recuperation des produits:", error);
            throw new Error("Erreur de recuperation des produits");
        }
    }

    static async create(product: Product) {
        try {
            // const existingProduct = await prisma.product.findFirst({
            //     where: {
            //         label: product.label,
            //     },
            // });

            // if (existingProduct) {
            //     throw new Error("Un produit avec ce nom existe déjà");
            // }
            const newProduct = await prisma.product.create({
                data: {
                    vintageId: product.vintageId,
                    formatId: product.formatId,
                    label: product.label,
                    price: product.price,
                }
            });

            return newProduct;
        } catch (error) {
            console.error("Erreur de creation d'un produit:", error);
            throw new Error("Erreur de creation d'un produit");
        }
    }

    static async update(id: number, product: Partial<Product>) {
        try {
            const existingProduct = await prisma.product.findUnique({
                where: {
                    productId: id
                }
            });
            if (!existingProduct) {
                throw new Error("Aucun produit trouvé avec cet ID");
            }
            const updatedProduct = await prisma.product.update({
                where: { 
                    productId: id,
                },
                data: {
                     formatId: product.formatId,
                     label: product.label,
                     price: product.price
                },
            });
            return updatedProduct;
        } catch (error) {
            console.error("Erreur de mise à jour d'un produit:", error);
            throw new Error("Erreur de mise à jour d'un produit");
        }
    }
    static async delete(id: number) {
        try {
            await prisma.product.delete({
                where: { productId: id },
            });
        } catch (error) {
            console.error("Erreur de suppression d'un produit:", error);
            throw new Error("Erreur de suppression d'un produit");
        }
    }
    static async searchByLabel(label: string) {
        try {
            const product = await prisma.product.findMany({
                where: {
                    label: {
                        contains: label,
                        mode: "insensitive",
                    }
                },
                include: {
                    vintage: true,
                    format: true
                }
            });
            return product;
        } catch (error) {
            console.error("Erreur de recherche d'un produit:", error);
            throw new Error("Erreur de recherche d'un produit");
        }
    }

    static async getProductsByVintage(label: string) {
        try {
            const vintage = await prisma.vintage.findFirst({
                where: { 
                    label: {
                        contains: label,
                        mode: "insensitive",
                    }
                 },
            });
            const products = await prisma.product.findMany({
                where: { vintageId: vintage?.vintageId },
                include: {
                    format: true,
                    vintage: true   
                },
            });
            return products;
        } catch (error) {
            console.error("Erreur de recherche d'un produit:", error);
            throw new Error("Erreur de recherche d'un produit");
        }
    }

}