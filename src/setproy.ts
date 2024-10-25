import axios from 'axios';
import { insertarDatos } from './connbd';

const setData = async (event: any) => {
    const inserto = await insertarDatos(event);
	return inserto;
};

export { setData };