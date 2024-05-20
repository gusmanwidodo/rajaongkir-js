import RajaOngkir from "."
import { apiKey, apiType } from "./constant"
import { getCityResponse, getProvinceResponse } from "./dto"

export const rajaongkir = new RajaOngkir(apiType, apiKey)

export const getProvince = async (req?: {id?: string}): Promise<getProvinceResponse> => {
  const res = await fetch(`${rajaongkir.getBaseUrl()}/province?${new URLSearchParams(req).toString()}`, {headers: {'key': rajaongkir.getKey()}})
  return res.json()
}

export const getCity = async (req?: {id?: string, province?: string}): Promise<getCityResponse> => {
  const res = await fetch(`${rajaongkir.getBaseUrl()}/city?${new URLSearchParams(req).toString()}`, {headers: {'key': rajaongkir.getKey()}})
  return res.json()
}
