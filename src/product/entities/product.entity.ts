import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  externalId: number;

  @Column()
  source: string;

  @Column()
  name: string;
}
