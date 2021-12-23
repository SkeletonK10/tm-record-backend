import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Extension {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;
}
