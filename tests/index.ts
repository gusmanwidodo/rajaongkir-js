import { expect } from "chai";
import { apiType, starterBaseUrl, TypeOption } from "../src/constant";
import { getProvinces, rajaongkir } from "../src/endpoint";

describe('Setup test', () => {
  it('should have API_TYPE default starter', () => {
    expect(apiType).to.equal(TypeOption.STARTER)
  })
  it('should have default constructor', () => {
    expect(rajaongkir.getBaseUrl()).to.equal(starterBaseUrl)
  })
})

describe('Endpoint test', () => {
  it('should return province in list', async() => {
    const res = await getProvinces()
    expect(res).to.have.property('rajaongkir')
    expect(res.rajaongkir.results).to.be.an('array')
  })

  it('should return province in single', async() => {
    const res = await getProvinces('12')
    expect(res).to.have.property('rajaongkir')
    expect(res.rajaongkir.results).to.have.property('province_id')
    expect(res.rajaongkir.results).to.have.property('province')
  })

})

