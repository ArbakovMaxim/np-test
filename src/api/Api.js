import axios from 'axios';
import { constantsApi } from '../constants/baseUrl';
import { toast } from 'react-toastify';

const api = axios.create({
    baseURL: constantsApi.BASE_URL,
});


// запит за ТТН
export async function getInfo(trackingNumber) {
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
                }
            }
        );
        return response.data;
    } catch (error) {
        toast.error('Помилка запиту:', error);
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
        return response.data;
    } catch (error) {
        toast.error('Помилка запиту:', error);
        throw error;
    }
}

export async function getWarehousesInCityPage(cityName, page, itemsPerPage) {
    try {
        const response = await api.post(
            'Address/getWarehouses',
            {
                apiKey: constantsApi.KEY,
                modelName: 'Address',
                calledMethod: 'getWarehouses',
                methodProperties: {
                    CityName: cityName,
                    Limit: itemsPerPage,
                    Page: page,
                },
            }
        );
        return response.data;
    } catch (error) {
        toast.error('Помилка запиту:', error);
        throw error;
    }
}



