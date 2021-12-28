import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import Result from './result';

/**
 * A User
 * @typedef {object} User
 * @property {number} id.required - User Identifier
 * @property {string} nickName - User nickname
 * @property {string} realName.required - User's real name
 * @property {number} rating.required - User Rating (Default: 1500)
 * @property {array<Result>} results - All results user played
 */

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nickName: string;

  @Column()
  realName!: string;

  @Column({ default: 1500 })
  rating!: number;

  @OneToMany(() => Result, result => result.user)
  results: Result[];
}
