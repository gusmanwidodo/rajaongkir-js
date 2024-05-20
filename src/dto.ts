export type getProvincesResponse = {
  rajaongkir: {
      query: {
          id: string;
      };
      status: {
          code: number;
          description: string;
      };
      results: {
          province_id: string;
          province: string;
      };
  };
}
