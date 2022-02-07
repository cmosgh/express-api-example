import { Service } from "typedi";
import { EntityRepository, Repository } from "typeorm";
import CompanyEntity from "../entities/CompanyEntity";

@Service()
@EntityRepository(CompanyEntity)
export default class CompanyRepository extends Repository<CompanyEntity> {
}
