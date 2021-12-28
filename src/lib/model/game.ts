import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Extension from './extension';
import Map from './map';
import Result from './result';

@Entity()
export default class Game {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  valid!: boolean;

  @Column()
  season: number | null; // null: Pre-Season

  @OneToOne(() => Map)
  map!: Map[];

  @ManyToOne(() => Extension)
  extensions: Extension[];

  @OneToMany(() => Result, result => result.game)
  results: Result[];
}
