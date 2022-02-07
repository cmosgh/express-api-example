import * as defaultEnv from '../../config/env'
import { Connection, ConnectionOptions, createConnection, useContainer } from 'typeorm'
import { Container } from 'typeorm-typedi-extensions'
import { dbConnected } from '../../consts'
import UserEntity from './entities/UserEntity'

export let connection: Connection

const entities = [UserEntity]

export const connectToDb = async (): Promise<Connection> => {
  console.time(dbConnected)
  if (connection && typeof connection === typeof Connection) {
    console.timeEnd(dbConnected)
    return connection
  }
  let connectionConfig: ConnectionOptions = {
    name: 'default',
    type: 'postgres',
    host: defaultEnv.POSTGRES_HOST,
    port: defaultEnv.POSTGRES_PORT,
    logging: process.env.NODE_ENV === 'development' ? true : ['error', 'info', 'warn'],
    migrationsTransactionMode: 'all',
    username: defaultEnv.POSTGRES_USER,
    password: defaultEnv.POSTGRES_PASSWORD,
    database: defaultEnv.POSTGRES_DB,
    schema: defaultEnv.POSTGRES_SCHEMA ? defaultEnv.POSTGRES_SCHEMA : 'public',
    synchronize: true,
    dropSchema: false, //defaultEnv.NODE_ENV === 'development',
    entities,
    migrations: [`src/db/migrations/*.*`],
    ssl: false,
    cache: true,
    maxQueryExecutionTime: 300,
  }

  useContainer(Container)
  connection = await createConnection(connectionConfig)
  console.timeEnd(dbConnected)
  return connection
}
