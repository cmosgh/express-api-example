import startServer from './services/express'
import { connectToDb } from "./services/postgres";

const main = async () => {
  await connectToDb()
  await startServer()
}

main()
