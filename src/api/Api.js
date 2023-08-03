import axios from 'axios';
import { constantsApi } from 'constants/constants';

export const api = axios.create({
    baseURL: constantsApi.BASE_URL,
});
