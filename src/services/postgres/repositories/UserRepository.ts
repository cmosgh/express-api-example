import { Service } from 'typedi'
import { EntityRepository, Repository } from 'typeorm'
import UserEntity from '../entities/UserEntity'

@Service()
@EntityRepository(UserEntity)
export default class UserRepository extends Repository<UserEntity> {}
