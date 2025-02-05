import api from '../api';

export const getTrips = async () => {
    try {
        const response = await api.get('/trips');
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des trajets:', error);
        throw error;
    }
};

export const createTrip = async (tripData: any) => {
    try {
        const response = await api.post('/trips', tripData);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la création du trajet:', error);
        throw error;
    }
};
