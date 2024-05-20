import RajaOngkir from "."
import { apiKey, apiType } from "./constant"
import { getCityResponse, getCostRequest, getCostResponse, getProvinceResponse, getSubDistrictResponse } from "./dto"

export const rajaongkir = new RajaOngkir(apiType, apiKey)

export const getProvince = async (req?: {id?: string}): Promise<getProvinceResponse> => {
  const res = await fetch(`${rajaongkir.getBaseUrl()}/province?${new URLSearchParams(req).toString()}`, {headers: {'key': rajaongkir.getKey()}})
  return res.json()
}

export const getCity = async (req?: {id?: string, province?: string}): Promise<getCityResponse> => {
  const res = await fetch(`${rajaongkir.getBaseUrl()}/city?${new URLSearchParams(req).toString()}`, {headers: {'key': rajaongkir.getKey()}})
  return res.json()
}

// only available for PRO account
export const getSubDistrict = async (req?: {id?: string, city?: string}): Promise<getSubDistrictResponse> => {
  const res = await fetch(`${rajaongkir.getBaseUrl()}/subdistrict?${new URLSearchParams(req).toString()}`, {headers: {'key': rajaongkir.getKey()}})
  return res.json()
}

// only available for PRO account
export const getCost = async (req: getCostRequest): Promise<getCostResponse> => {
  const res = await fetch(`${rajaongkir.getBaseUrl()}/cost`, {
    method: 'POST',
    headers: {
      'key': rajaongkir.getKey(),
      'content-type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams(req)
  })
  return res.json()
}
