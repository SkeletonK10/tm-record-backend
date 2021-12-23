import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Corporation {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  desc!: string;
}
