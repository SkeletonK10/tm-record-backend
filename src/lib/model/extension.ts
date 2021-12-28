import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * A Extension of game
 * @typedef {object} Extension
 * @property {number} id.required - Extension Identifier
 * @property {string} name.required - Extension name
 */

@Entity()
export default class Extension {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;
}
