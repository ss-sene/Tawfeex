import api from '../api';

const getTrips = async () => {
    try {
        const response = await api.get('/trips');
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des trajets:', error);
        throw error;
    }
};

const createTrip = async (tripData: any) => {
    try {
        const response = await api.post('/trips', tripData);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la création du trajet:', error);
        throw error;
    }
};

export default {
    getTrips,
    createTrip,
}