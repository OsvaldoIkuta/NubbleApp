import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333/',
  headers: {
    Authorization:
      'Bearer Mg.uCRLtmtY6YcNOtAL0lZMQVlMR0uikSOgGNgxFs56vgu5TOT5fBuopfM1sY4k',
  },
});
