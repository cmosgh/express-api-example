import Express from "express";
import UserService from "../domain/UserService";
import { Container } from "typedi";
import HttpClientService from "../httpclient/HttpClientService";

export const healthCheck = (_req: Express.Request, res: Express.Response) => {
  res.status(200).send("OK");
};

export const getUsers = async (_req: Express.Request, res: Express.Response) => {
  const userService = Container.get<UserService>(UserService);
  const users = await userService.getUsers();
  res.send(users);
};

export const fetchTest = async (_req: Express.Request, res: Express.Response) => {
  const httpClient = Container.get<HttpClientService>(HttpClientService);
  const url = `https://randomuser.me/api`;
  const response = await httpClient.get(url);
  const data = await response.json();
  res.send(data);
};
