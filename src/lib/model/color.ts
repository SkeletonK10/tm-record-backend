import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Color {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;
}
