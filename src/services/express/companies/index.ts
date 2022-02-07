import Express from "express";
import { Container } from "typedi";
import CompanyService from "../../domain/CompanyService";
import IBAN from "iban";
import { badRequestError } from "../../../consts";

export const createInvoice = async (req: Express.Request, res: Express.Response) => {
  const companyService = Container.get<CompanyService>(CompanyService);
  const { company_name, iban, milestones } = req.body;
  // this should be placed in a validation middleware
  if (!company_name || !iban || !IBAN.isValid(iban) || !milestones) {
    res.status(400).send(badRequestError);
  }
  try {
    const response = await companyService.createInvoice({
      name: company_name,
      iban,
      milestones
    });
    res.status(200).type("pdf").send(response);
  } catch (e) {
    res.status(400).send(e);
  }
};
