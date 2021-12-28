import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import Result from './result';

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nickName: string;

  @Column()
  realName!: string;

  @Column()
  rating!: number;

  @OneToMany(() => Result, result => result.user)
  results: Result[];
}
