import axios from 'axios';

export default {
  async getEvents(apiAddress: any) {
    let res = await axios.get(`${process.env.VUE_APP_API_BASE}/${apiAddress}`);
    return res.data;
  },
  async postAPI(apiAddress: string, data: any) {
    let res = await axios.post(`${process.env.VUE_APP_API_BASE}/${apiAddress}`, data);
    return res.data;
  }
}