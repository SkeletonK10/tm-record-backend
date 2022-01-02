import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import Corporation from './corporation';
import Game from './game';
import User from './user';

enum Color {
  BLACK = 'Black',
  BLUE = 'Blue',
  GREEN = 'Green',
  RED = 'Red',
  UNKNOWN = 'Unknown',
  YELLOW = 'Yellow',
}

@Entity()
export default class Result {
  @PrimaryColumn()
  @ManyToOne(() => User, user => user.results)
  user!: User;

  @PrimaryColumn()
  @ManyToOne(() => Game, game => game.results)
  game!: Game;

  @Column({
    type: 'enum',
    enum: Color,
    default: Color.UNKNOWN,
  })
  color!: Color;

  @ManyToOne(() => Corporation)
  corporation!: Corporation;

  @Column()
  rank!: number;

  @Column()
  score!: number;
}
