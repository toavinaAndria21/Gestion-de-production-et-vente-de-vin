import { Decimal } from '@prisma/client/runtime/library';

export interface Product {
  productId?: number;
  vintageId: number;
  formatId: number;
  label: string;
  price: Decimal;
  createdAt?: Date;
  
  // Relations
//   vintage?: Vintage;
//   format?: Format;
//   ticketLines?: TicketLine[];
}
