export const starterBaseUrl = 'https://api.rajaongkir.com/starter'
export const basicBaseUrl = 'https://api.rajaongkir.com/basic'
export const proBaseUrl = 'https://pro.rajaongkir.com/api'

export const apiType: string = process.env.RAJAONGKIR_API_TYPE || 'starter'
export const apiKey: string = process.env.RAJAONGKIR_API_KEY || ''

export enum TypeOption {
  STARTER = 'starter',
  BASIC = 'basic',
  PRO = 'prop',
}
