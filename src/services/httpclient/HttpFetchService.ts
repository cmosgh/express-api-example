import { Service } from "typedi";
// @ts-ignore
import fetch, { RequestInfo, Response } from "node-fetch";

@Service({ transient: true })
export default class HttpFetchService {
  private fetch: typeof fetch;

  private defaultHeader: Object;

  constructor(props: { header?: Object } = {}) {
    this.fetch = fetch;
    this.defaultHeader = props.header
      ? props.header
      : {
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

  async post(url: RequestInfo, headers = this.defaultHeader, body: Object): Promise<Response> {
    const response = await this.fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    });
    return response;
  }
}
