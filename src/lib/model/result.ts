import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import Color from './color';
import Corporation from './corporation';
import Game from './game';
import Player from './player';

@Entity()
export default class Result {
  @PrimaryColumn()
  @ManyToOne(() => Player, player => player.results)
  player!: Player;

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
