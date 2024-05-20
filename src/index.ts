import { TypeOption, basicBaseUrl, proBaseUrl, starterBaseUrl } from "./constant";

export default class RajaOngkir {
  private apiType:string
  private apiKey:string

  constructor(apiType: string, apiKey: string) {
    this.apiType = apiType
    this.apiKey = apiKey
  }

  getKey(): string {
    return this.apiKey
  }

  getBaseUrl(): string {
    switch (this.apiType) {
      case TypeOption.BASIC:
        return basicBaseUrl;
        break;
      case TypeOption.PRO:
        return proBaseUrl;
        break;
      case TypeOption.STARTER:
        return starterBaseUrl;
        break;

      default:
        throw new Error('undefined API_TYPE')
        break;
    }
  }
}

