
import { Personnel, Ticket } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";

export interface Payment {
  cashierId: string; 
  ticketId: number;
  amount: Decimal;
  createdAt?: Date;

  cashier?: Personnel;
  ticket?: Ticket;
};