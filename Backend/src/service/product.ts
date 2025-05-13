import { Product } from "../type/product";
import prisma from "../config/prisma";
import { ProductInput } from "../type/product";

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
            const newProduct = await prisma.product.create({
                data: {
                    vintageId: product.vintageId,
                    formatId: product.formatId,
                    label: product.label,
                    price: product.price,
                    type: product.type,
                    stock: product.stock,
                    category: product.category,
                    image: product.image
                    // type: product
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

    static async createTicketWithPayment(sellerId: string, products: ProductInput[]){
        return await prisma.$transaction(async(tx)=>{
            const ticket = await tx.ticket.create({
                data:{
                    sellerId,
                    clientId:1,
                    state:'Payé'
                }
            });

            let totalAmount = 0
            for(const item of products) {

                const product = await tx.product.findUnique({
                    where:{
                        productId: item.productId
                    }
                });

                if (!product || product.stock < item.quantity) {
                    throw new Error(`Stock insuffisant pour le produit ID ${item.productId}`);
                }

                totalAmount += product.price.toNumber() * item.quantity;

                await tx.ticketLine.create({
                    data: {
                      ticketId: ticket.ticketId,
                      productId: item.productId,
                      quantity: item.quantity,
                    },
                  });
            
                  // Mettre à jour le stock du produit
                  await tx.product.update({
                    where: { productId: item.productId },
                    data: {
                      stock: {
                        decrement: item.quantity,
                      },
                    },
                  });
            }

            await tx.payment.create({
                data: {
                cashierId: sellerId,
                ticketId: ticket.ticketId,
                amount: totalAmount,
                },
            });
        
            return ticket;
        
        })
    }
}