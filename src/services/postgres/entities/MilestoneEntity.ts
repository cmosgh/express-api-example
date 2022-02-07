import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import CompanyEntity from "./CompanyEntity";

@Entity()
export default class MilestoneEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 2048 })
  name: string;

  @Column({ type: "float" })
  price: number;

  @Column({ name: "companyId", type: "bigint", nullable: true })
  @Index()
  companyId: number;

  @ManyToOne(() => CompanyEntity, { eager: false })
  @JoinColumn({ name: "companyId", referencedColumnName: "id" })
  public company: CompanyEntity;
}
