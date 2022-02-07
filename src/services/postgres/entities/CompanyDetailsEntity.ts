import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class CompanyDetailsEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 256 })
  siren: string;

  @Column({ type: "varchar", length: 256 })
  vat_number: string;

  @Column({ type: "int" })
  api_id: number;

  @Column({ type: "varchar", length: 2048 })
  name: string;
}
