const url = "http://localhost:3000";
const apiService = {
  get: async (target: string): Promise<any> => {
    const endpoint = new URL(target, url).toString();
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
