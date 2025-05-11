
import { DeliveryState, Ticket } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";

export interface Delivery {
    ticketId: number;
    adress: string;
    createdAt?: Date;
    state: DeliveryState;
    fee: Decimal;
    ticket?: Ticket;
};