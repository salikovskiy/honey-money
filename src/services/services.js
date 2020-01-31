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
      throw new Error(error)
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

  async addCosts(token, arr) {
    try {
      const data = await axios.post('/costs', arr, {
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
