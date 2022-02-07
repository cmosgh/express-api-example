import { Service } from "typedi";
import { EntityRepository, Repository } from "typeorm";
import CompanyDetailsEntity from "../entities/CompanyDetailsEntity";

@Service()
@EntityRepository(CompanyDetailsEntity)
export default class CompanyDetailsRepository extends Repository<CompanyDetailsEntity> {
}
