/* eslint-disable @typescript-eslint/no-unused-vars */
type MocketFetchResponse = {
  data: {
    message: string;
    login: boolean;
  };
};

export const mocketFetch = async (
  _url: string,
  _formData: unknown,
): Promise<MocketFetchResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          message: "Login successful",
          login: true,
        },
      });
    }, 1000);
  });
};
