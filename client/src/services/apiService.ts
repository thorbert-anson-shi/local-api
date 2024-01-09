import * as path from "path";

const url = "";
const apiService = {
  get: async (target: string): Promise<any> => {
    const endpoint = path.join(url, target);
    console.log(endpoint);
    try {
      const res = await fetch(endpoint);
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Error fetching resources: " + error);
      throw error;
    }
  },
};

export default apiService;
