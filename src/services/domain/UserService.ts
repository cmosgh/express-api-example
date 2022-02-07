import { Service } from 'typedi'
import { InjectRepository } from 'typeorm-typedi-extensions'
import UserRepository from '../postgres/repositories/UserRepository'
import { FindManyOptions } from 'typeorm/find-options/FindManyOptions'
import UserEntity from '../postgres/entities/UserEntity'

@Service({ transient: true })
export default class UserService {
  @InjectRepository()
  private repository: UserRepository

  public getUsers(options?: FindManyOptions<UserEntity>) {
    return this.repository.find(options)
  }
}
