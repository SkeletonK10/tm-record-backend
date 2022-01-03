import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import Color from './color';
import Corporation from './corporation';
import Game from './game';
import User from './user';

@Entity()
export default class Result {
  @PrimaryColumn()
  @ManyToOne(() => User, user => user.results)
  user!: User;

  @PrimaryColumn()
  @ManyToOne(() => Game, game => game.results)
  game!: Game;

  @ManyToOne(() => Color)
  color!: Color;

  @ManyToOne(() => Corporation)
  corporation!: Corporation;

  @Column()
  rank!: number;

  @Column()
  score!: number;
}
