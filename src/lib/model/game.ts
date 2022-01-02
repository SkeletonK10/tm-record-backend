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

@Entity()
export default class Game {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  valid!: boolean;

  @Column()
  season!: number;

  @Column()
  round!: number;

  @OneToOne(() => Map)
  map!: Map;

  @ManyToMany(() => Extension)
  @JoinTable()
  extensions: Extension[];

  @OneToMany(() => Result, result => result.game)
  results!: Result[];
}
