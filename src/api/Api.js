import axios from 'axios';
import { constantsApi } from 'constants/constants';

const api = axios.create({
    baseURL: constantsApi.BASE_URL,
});


// запит за ТТН
export async function getStatusByTTN(ttnNumber) {
    try {
        const response = await api.get('/v2/documents', {
            params: {
                apiKey: constantsApi.KEY,
                DocumentRefs: ttnNumber,
                Language: 'ua',
            },
        });

        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Помилка запиту:', error);
        throw error;
    }
}


// запит за номер накладної 
export async function getStatusByTrackingNumber(trackingNumber) {
    try {
        const response = await api.get('/v2/documents', {
            params: {
                apiKey: constantsApi.KEY,
                DocumentRefs: trackingNumber,
                Language: 'ua',
            },
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Помилка запиту:', error);
        throw error;
    }
}

// запит отримання списку відділень
export async function getBranchesList(cityName) {
    try {
        const response = await api.get('/v2/documents', {
            params: {
                apiKey: constantsApi.KEY,
                Language: 'ua',
                CityName: cityName,
            },
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Помилка запиту:', error);
        throw error;
    }
}

