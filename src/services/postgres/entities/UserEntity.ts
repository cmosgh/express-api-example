import { BaseEntity, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number
}
