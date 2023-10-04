import ApiClient from "@api/apiClient";
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosResponseHeaders } from "axios";
//jest.mock('axios');
jest.mock('axios', () => {
  return {
    create: jest.fn().mockReturnValue({
      interceptors: {
        request: { use: jest.fn(), eject: jest.fn() },
        response: { use: jest.fn(), eject: jest.fn() },
      },

      get: jest.fn().mockReturnValue({ data: {} }),
    }),
  };
});
describe("apiClient", () => {
  it("invalid_token", () => {
    try {
      new ApiClient(null);
      fail();
    } catch(e) {
      // nop
    }
  });

  it("valid_token", async () => {
    
    const expected: AxiosResponse = {
      data: {},
      status: 200,
      statusText: "OK",
      headers: {} as AxiosResponseHeaders,
      config: {} as AxiosRequestConfig
    };

    //(axios.create as jest.Mock).mockImplementation(() => );
    const apiClient = new ApiClient('sometoken');
    (apiClient.instance.get as jest.Mock).mockReturnValueOnce(expected);
    const actual = await apiClient.fetch('/somepath', 'hello=world');
    console.log(actual);
  });
});