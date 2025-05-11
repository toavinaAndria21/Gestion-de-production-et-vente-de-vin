import { Decimal } from '@prisma/client/runtime/library';
import { Vintage, Format, TicketLine } from '@prisma/client';

export interface Product {
  vintageId: number;
  formatId: number;
  label: string;
  price: Decimal;
  createdAt?: Date;
  
  // Relations
  // vintage?: Vintage;
  // format?: Format;
  // ticketLines?: TicketLine[];
}
