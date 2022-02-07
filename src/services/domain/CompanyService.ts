import { Inject, Service } from "typedi";
import CompanyDetailsService from "./CompanyDetailsService";
import PDFService from "./PDFService";

@Service({ transient: true })
export default class CompanyService {
  @Inject()
  private companyDetailsService: CompanyDetailsService;

  @Inject()
  private pdfService: PDFService;

  async createInvoice(params: {
    name: string
    iban: string
    milestones: { name: string; price: number }[]
  }): Promise<Uint8Array> {
    const { name, iban, milestones } = params;
    const details = await this.companyDetailsService.getCompanyDetails({ name: params.name });
    const pdf = await this.pdfService.createCompanyInvoice({
      company: name,
      iban,
      milestones,
      siren: details.siren,
      vat: details.vat_number
    });

    return pdf;
  }
}
