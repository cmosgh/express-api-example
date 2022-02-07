// @ts-ignore
import enableDestroy from 'server-destroy'
import * as http from 'http'
import * as defaultEnv from '../../config/env'
import app from './server'
import { clientErrorHandler, errorHandler, routeNotFound } from './middlewares'

let server: undefined | http.Server

export const startServer = async () => {

  // these middlewares always go last
  app.use(routeNotFound)
  app.use(clientErrorHandler)
  app.use(errorHandler)

  server = app.listen(defaultEnv.EXPRESS_PORT, () => {
    console.log(`Express server listening on ${defaultEnv.EXPRESS_HOST}:${defaultEnv.EXPRESS_PORT}`)
  })
  enableDestroy(server)
}

export default startServer
