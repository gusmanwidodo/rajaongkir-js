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
