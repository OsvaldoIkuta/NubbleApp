import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333/',
  headers: {
    Authorization:
      'Bearer Mg.xXdaEzW51k9uDqwFf7X4m5ySLahtGzE_hmSZUcE1fS7Co_2oVCwUTDZcHyuk',
  },
});
