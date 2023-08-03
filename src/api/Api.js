import axios from 'axios';
import { constantsApi } from '../constants/baseUrl';

const api = axios.create({
    baseURL: constantsApi.BASE_URL,
});


// запит за ТТН
export async function getSenderInfo(trackingNumber) {
    try {
        const response = await api.post(
            'TrackingDocument/getDocumentList',
            {
                apiKey: constantsApi.KEY,
                modelName: 'TrackingDocument',
                calledMethod: 'getDocumentList',
                methodProperties: {
                    DocumentNumber: trackingNumber,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error('Помилка запиту:', error);
        throw error;
    }
}

export async function getRecipientInfo(trackingNumber) {
    try {
        const response = await api.post(
            'TrackingDocument/getDocumentDeliveryDate',
            {
                apiKey: constantsApi.KEY,
                modelName: 'TrackingDocument',
                calledMethod: 'getDocumentDeliveryDate',
                methodProperties: {
                    DocumentNumber: trackingNumber,
                },
            }
        );
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



