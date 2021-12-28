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

/**
 * A Result of user in the game
 * @typedef {object} Result
 * @property {User} user.required - User participated
 * @property {Game} game.required - Game participated
 * @property {string} color.required - Color played (Default: Unknown) - enum: Black, Blue, Green, Red, Unknown, Yellow
 * @property {Corporation} corporation.required - Corporation played
 * @property {number} rank.required - Rank recorded (1 ~ 5)
 * @property {number} score.required - Score recorded
 */

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
