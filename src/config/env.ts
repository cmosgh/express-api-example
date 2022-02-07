import dotenv from 'dotenv'
dotenv.config()

const env = require('env-var')

export const NODE_ENV = env.get('NODE_ENV').default('DEVELOPMENT').asString()
export const EXPRESS_PORT = env.get('EXPRESS_PORT').required().asIntPositive()
export const EXPRESS_HOST = env.get('EXPRESS_HOST').required().asString()

export const POSTGRES_HOST = env.get('POSTGRES_HOST').required().asString()
export const POSTGRES_USER = env.get('POSTGRES_USER').required().asString()
export const POSTGRES_PASSWORD = env.get('POSTGRES_PASSWORD').required().asString()
export const POSTGRES_DB = env.get('POSTGRES_DB').required().asString()
export const POSTGRES_SCHEMA = env.get('POSTGRES_SCHEMA').asString()
export const POSTGRES_PORT = env.get('POSTGRES_PORT').required().asIntPositive()