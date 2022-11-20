import { Axios } from './axios';

const http = new Axios({ baseURL: 'http://localhost:3000', timeout: 5000 });

export default http;
