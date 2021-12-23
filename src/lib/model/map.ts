import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Map {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;
}
