import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * A Map
 * @typedef {object} Map
 * @property {number} id.required - Map Identifier
 * @property {string} name.required - Map name
 */

@Entity()
export default class Map {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;
}
