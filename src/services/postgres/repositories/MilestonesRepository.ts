import { Service } from "typedi";
import { EntityRepository, Repository } from "typeorm";
import MilestoneEntity from "../entities/MilestoneEntity";

@Service()
@EntityRepository(MilestoneEntity)
export default class MilestonesRepository extends Repository<MilestoneEntity> {
}
