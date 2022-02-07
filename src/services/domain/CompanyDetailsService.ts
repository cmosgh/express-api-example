import { Inject, Service } from "typedi";
import { InjectRepository } from "typeorm-typedi-extensions";
import CompanyDetailsRepository from "../postgres/repositories/CompanyDetailsRepository";
import HttpFetchService from "../httpclient/HttpFetchService";
import { Like } from "typeorm";

const externalBaseUrl = "https://61bb4cbbe943920017784dc6.mockapi.io";

@Service()
export default class CompanyDetailsService {
  private companiesEndpoint = `${externalBaseUrl}/companies`;

  private documentsEndpoint = `${externalBaseUrl}/documents`;

  @InjectRepository()
  private companyDetailsRepository: CompanyDetailsRepository;

  @Inject()
  private httpFetchService: HttpFetchService;

  public async getCompanyDetails(params: { name: string }): Promise<any> {
    let detailsResponse = await this.companyDetailsRepository.findOne({
      name: Like(`%${params.name}%`)
    });
    if (!detailsResponse) {
      const nameIdQueryUrl = `${this.companiesEndpoint}?search=${encodeURIComponent(params.name)}`;
      const apiNameSearchResult = await this.httpFetchService.get(nameIdQueryUrl);
      const nameAndId: { name: string; id: number }[] = await apiNameSearchResult.json();
      if (nameAndId.length > 1) {
        throw new Error(`Multiple companies with this name found`);
      }
      if (!nameAndId) {
        return {};
      }
      const { name, id } = nameAndId[0];
      const sirenAndVatQueryUrl = `${this.documentsEndpoint}/${id}`;
      const sirenAndVatNumberResult = await this.httpFetchService.get(sirenAndVatQueryUrl);
      const sirenAndVatNumber: { siren: string; vat_number: string } =
        await sirenAndVatNumberResult.json();

      detailsResponse = this.companyDetailsRepository.create({
        name,
        siren: sirenAndVatNumber.siren,
        vat_number: sirenAndVatNumber.vat_number,
        api_id: id
      });

      await detailsResponse.save();
    }

    return detailsResponse;
  }
}
