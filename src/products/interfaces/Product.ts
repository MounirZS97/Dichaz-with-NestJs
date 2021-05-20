import { Document } from 'mongoose';

export interface Product extends Document {
  id?: number;
  name: string;
  description: string;
  price: number;
}
