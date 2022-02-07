import * as defaultEnv from '../config/env'

export const dbConnected = 'DB_CONNECTED'
export const dbDisconnected = 'DB_DISCONNECTED'
export const seedDone = 'SEED_DONE'
export const backendRunning = 'BACKEND_UP_AND_READY_AFTER'
export const serverStarted = 'API_STARTED'
export const serverStopped = 'SERVER_STOPPED'
export const schemaBuilt = 'SCHEMA_BUILT'
export const agendaStarted = 'AGENDA_STARTED'
export const jobsAttached = 'JOBS_ATTACHED'
export const jobsScheduled = 'JOBS_SCHEDULED'
export const mongodbConnected = `MONGODB_CONNECTED`
export const serverReady = `Access graphql playground at: ${defaultEnv.EXPRESS_HOST}:${defaultEnv.EXPRESS_PORT}/graphql`

// ERRORS
export const googleTokenUsedTooLate = `Token used too late`
export const googleCantParseToken = `Can't parse token envelope`
export const entityNotFoundError = `Entity not found`
