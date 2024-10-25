import { uri_api } from './config';
import axios from 'axios';
import { traduciratributos } from './traductor';
import { obtenerdatos } from './connbd';

interface Event {
    tipo: string;
    id: number;
}

const getData = async (event: Event) => {
    const tipo = event.tipo;
    const id = Number(event.id);
    try {
        
		const response = await axios.get(`${uri_api}${tipo}/${id}/`);
		const datatraducida = traduciratributos(response.data as { [key: string]: any });
        return datatraducida;
		
    } catch (error) {
        
		const dataaws = await obtenerdatos(id, tipo);
        return dataaws;
		
    }
};

export { getData };