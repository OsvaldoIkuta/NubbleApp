import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333/',
  headers: {
    Authorization:
      'Bearer MQ.wr2APtCXXUiPbwpB-wFMYLdjuuahd4qTPQDm1IE7P0MqEbdlNEv67IBLydXZ',
  },
});
