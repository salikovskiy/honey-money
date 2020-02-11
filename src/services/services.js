import axios from 'axios';

axios.defaults.baseURL = 'https://smart-finance.goit.co.ua/api/v1';

export default {
  async getAllTransactions(token) {
    try {
      const data = await axios.get('/transactions', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  },

  async addIncome(token, arr) {
    try {
      const data = await axios.post('/income', arr, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  },

  async deleteCost(token, forDeleteId, costsId) {
    console.log(`/costs/${forDeleteId}/${costsId}`);
    try {
      const data = await axios.delete(`/costs/${forDeleteId}/${costsId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  },

  async addCosts(token, obj) {
    try {
      const data = await axios.post('/costs', obj, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  },

  async addProduct(token, obj) {
    try {
      const data = await axios.post('/products', obj, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  },

  // StatisticsPage ----------
  async getAllCategories(token) {
    try {
      const data = await axios.get('/categories', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  },

  async getAllProducts(token) {
    try {
      const data = await axios.get('/products', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  },
};
