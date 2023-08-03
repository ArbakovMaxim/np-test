import axios from 'axios';
import { constantsApi } from '../constants/baseUrl';

const api = axios.create({
    baseURL: constantsApi.BASE_URL,
});


// запит за ТТН
export async function getDeliveryStatus(trackingNumber) {
    try {
        const response = await api.post(
            'TrackingDocument/getStatusDocuments',
            {
                apiKey: constantsApi.KEY,
                modelName: 'TrackingDocument',
                calledMethod: 'getStatusDocuments',
                methodProperties: {
                    Documents: [
                        {
                            DocumentNumber: trackingNumber,
                        },
                    ],
                },
            }
        );

        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Помилка запиту:', error);
        throw error;
    }
}

//запит за відділенями у місті
export async function getWarehousesInCity(cityName) {
    try {
        const response = await api.post(
            'Address/getWarehouses',
            {
                apiKey: constantsApi.KEY,
                modelName: 'Address',
                calledMethod: 'getWarehouses',
                methodProperties: {
                    CityName: cityName,
                },
            }
        );

        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Помилка запиту:', error);
        throw error;
    }
}


