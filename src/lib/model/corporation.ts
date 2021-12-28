import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * A Corporation of game
 * @typedef {object} Corporation
 * @property {number} id.required - Corporation Identifier
 * @property {string} name.required - Corporation name
 * @property {string} desc - A Description of the corporation
 */

@Entity()
export default class Corporation {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  desc: string;
}
