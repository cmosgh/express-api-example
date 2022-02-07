import { Service } from "typedi";
// @ts-ignore
import fetch, { RequestInfo, Response } from "node-fetch";

@Service({ transient: true })
export default class HttpClientService {
  private fetch: typeof fetch;

  private defaultHeader: any;

  constructor() {
    this.fetch = fetch;
    this.defaultHeader = {
      "Content-Type": "application/json"
    };
  }

  async get(url: RequestInfo, headers = this.defaultHeader): Promise<Response> {
    const response = await this.fetch(url, {
      method: "GET",
      headers
    });
    return response;
  }
}
