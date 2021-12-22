import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Result from './result';

@Entity()
export default class Game {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  valid!: boolean;

  @Column()
  season: number | null; // null: Pre-Season

  @OneToMany(() => Result, result => result.game)
  results: Result[];
}
