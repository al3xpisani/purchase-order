import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Order } from './order.entity';
import { Product } from 'src/products/entities/product.entity';

@Entity()
export class OrderItem {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'int' })
  quantity: number;
  @Column({ default: '0' })
  price: number;
  @ManyToOne(() => Product, { eager: true })
  @JoinColumn({ name: 'product_id' })
  product: Product;
  @Column()
  product_id: string;
  @ManyToOne(() => Order)
  order: Order;
}
