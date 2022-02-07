import Express from 'express'
import UserService from "../domain/UserService";
import { Container } from "typedi";

export const healthCheck = (_req: Express.Request, res: Express.Response) => {
  res.status(200).send('OK')
}


export const getUsers = async (_req: Express.Request, res: Express.Response) => {
  const userService = Container.get<UserService>(UserService)
  const users = await userService.getUsers()
  res.send(users)
}