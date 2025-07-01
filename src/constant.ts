export const starterBaseUrl = process.env.RAJAONGKIR_API_STARTER_BASE_URL || 'https://api.rajaongkir.com/starter'
export const basicBaseUrl = process.env.RAJAONGKIR_API_BASIC_BASE_URL || 'https://api.rajaongkir.com/basic'
export const proBaseUrl = process.env.RAJAONGKIR_API_PRO_BASE_URL || 'https://pro.rajaongkir.com/api'

export const apiType: string = process.env.RAJAONGKIR_API_TYPE || 'starter'
export const apiKey: string = process.env.RAJAONGKIR_API_KEY || ''

export enum TypeOption {
  STARTER = 'starter',
  BASIC = 'basic',
  PRO = 'pro',
}
