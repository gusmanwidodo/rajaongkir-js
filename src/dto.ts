import exp from "constants";

export type getProvinceResponseResult = {
  province_id: string;
  province: string;
}

export type getProvinceResponse = {
  rajaongkir: {
      query: {
          id: string;
      };
      status: {
          code: number;
          description: string;
      };
      results: getProvinceResponseResult | getProvinceResponseResult[];
  };
}

export type getCityResponseResult = {
  city_id: string;
  province_id: string;
  province: string;
  type: string;
  city_name: string;
  postal_code: string;
}

export type getCityResponse = {
  rajaongkir: {
      query: {
          province: string;
          id: string;
      };
      status: {
          code: number;
          description: string;
      };
      results: getCityResponseResult | getCityResponseResult[];
  }
}

export type getSubDistrictResponseResult = {
  subdistrict_id: string;
  province_id: string;
  province: string;
  city_id: string;
  city: string;
  type: string;
  subdistrict_name: string;
}

export type getSubDistrictResponse = {
  rajaongkir: {
      query: {
          city: string;
      };
      status: {
          code: number;
          description: string;
      };
      results: getSubDistrictResponseResult | getSubDistrictResponseResult[];
  };
}

export type getCostRequest = {
  origin: string;
  originType: string;
  destination: string;
  destinationType: string;
  weight: string;
  courier: string;
}

export type getCostResponseResult = {
  code: string;
  name: string;
  costs: Array<{
      service: string;
      description: string;
      cost: Array<{
          value: number;
          etd: string;
          note: string;
      }>;
  }>;
}

export type getCostResponse = {
  rajaongkir: {
      query: getCostRequest;
      status: {
          code: number;
          description: string;
      };
      origin_details: {
          city_id: string;
          province_id: string;
          province: string;
          type: string;
          city_name: string;
          postal_code: string;
      };
      destination_details: {
          subdistrict_id: string;
          province_id: string;
          province: string;
          city_id: string;
          city: string;
          type: string;
          subdistrict_name: string;
      };
      results: getCostResponseResult | getCostResponseResult[];
  };
}
