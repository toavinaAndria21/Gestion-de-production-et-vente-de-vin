import { TicketState, TicketLine, Delivery, Payment } from "@prisma/client";

export interface Ticket {
    sellerId: string;
    clientId: number;
    state: TicketState;
    createdAt?: Date;
    
    //relations
    ticketLines?: TicketLine[];
    delivery?: Delivery;
    payment?: Payment;
};