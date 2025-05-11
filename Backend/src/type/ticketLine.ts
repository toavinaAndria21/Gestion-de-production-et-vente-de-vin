import { Product, Ticket } from "@prisma/client";

export interface TicketLine {

    ticketId: number;
    productId: number;
    quantity: number;

    //relations
    product?: Product;
    ticket?: Ticket;

};