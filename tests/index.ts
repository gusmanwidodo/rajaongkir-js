import { expect } from "chai";
import { apiType, starterBaseUrl, TypeOption } from "../src/constant";
import { getCity, getCost, getProvince, getSubDistrict, rajaongkir } from "../src/endpoint";

describe('Setup test', () => {
  it('should have API_TYPE default starter', () => {
    if (process.env.RAJAONGKIR_API_TYPE === undefined) {
      expect(apiType).to.equal(TypeOption.STARTER)
    }
  })
  it('should have default constructor', () => {
    if (process.env.RAJAONGKIR_API_TYPE === undefined) {
      expect(rajaongkir.getBaseUrl()).to.equal(starterBaseUrl)
    }
  })
})

describe('Endpoint test', () => {
  it('should return province in list', async() => {
    const res = await getProvince()
    expect(res).to.have.property('rajaongkir')
    expect(res.rajaongkir.results).to.be.an('array')
  })

  it('should return province in single', async() => {
    const res = await getProvince({id: '12'})
    expect(res).to.have.property('rajaongkir')
    expect(res.rajaongkir.results).to.have.property('province_id')
    expect(res.rajaongkir.results).to.have.property('province')
  })

  it('should return city in list', async() => {
    const res = await getCity({province: '12'})
    expect(res).to.have.property('rajaongkir')
    expect(res.rajaongkir.results).to.be.an('array')
  })

  it('should return city in single', async() => {
    const res = await getCity({id: '39'})
    expect(res).to.have.property('rajaongkir')
    expect(res.rajaongkir.results).to.have.property('city_id')
    expect(res.rajaongkir.results).to.have.property('city_name')
  })

  it('should return subdistrict in list', async() => {
    const res = await getSubDistrict({city: '39'})
    expect(res).to.have.property('rajaongkir')
    expect(res.rajaongkir.results).to.be.an('array')
  })

  it('should return subdistrict in single', async() => {
    const res = await getSubDistrict({id: '537'})
    expect(res).to.have.property('rajaongkir')
    expect(res.rajaongkir.results).to.have.property('subdistrict_id')
    expect(res.rajaongkir.results).to.have.property('subdistrict_name')
  })

  it('should return cost', async() => {
    const res = await getCost({
      origin: '501',
      originType: 'city',
      destination: '574',
      destinationType: 'subdistrict',
      weight: '1700',
      courier: 'jne',
    })

    expect(res).to.have.property('rajaongkir')
    expect(res.rajaongkir.results).to.be.an('array')
  })

})

