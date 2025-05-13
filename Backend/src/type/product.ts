import { Decimal } from '@prisma/client/runtime/library';
import { Vintage, Format, TicketLine, WineType, Collection } from '@prisma/client';


export interface Product {
  vintageId: number;
  formatId: number;
  label: string;
  price: Decimal;
  createdAt?: Date;
  type: WineType;
  stock: number;
  category: Collection;
  image: string
  
  // Relations
  // vintage?: Vintage;
  // format?: Format;
  // ticketLines?: TicketLine[];
}

export interface ProductInput {
  productId: number;
  quantity: number;
}
