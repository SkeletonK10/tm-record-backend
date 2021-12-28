import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Extension from './extension';
import Map from './map';
import Result from './result';

/**
 * A Game
 * @typedef {object} Game
 * @property {number} id.required - Game Identifier
 * @property {boolean} valid.required - true if the game is successfully over
 * @property {number} season.required - Season participated (Pre-season: 0)
 * @property {Map} map.required - Map played
 * @property {array<Extension>} extensions - Extensions played
 * @property {array<Result>} results.required - Results engaged
 */

@Entity()
export default class Game {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  valid!: boolean;

  @Column()
  season!: number;

  @OneToOne(() => Map)
  map!: Map;

  @ManyToMany(() => Extension)
  @JoinTable()
  extensions: Extension[];

  @OneToMany(() => Result, result => result.game)
  results!: Result[];
}
