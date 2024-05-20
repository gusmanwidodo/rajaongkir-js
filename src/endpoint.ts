import RajaOngkir from "."
import { apiKey, apiType } from "./constant"
import { getProvincesResponse } from "./dto"

export const rajaongkir = new RajaOngkir(apiType, apiKey)

export const getProvinces = async (id?: string): Promise<getProvincesResponse> => {
  const res = await fetch(`${rajaongkir.getBaseUrl()}/province?${new URLSearchParams({id: id || ''}).toString()}`, {headers: {'key': rajaongkir.getKey()}})
  return res.json()
}
