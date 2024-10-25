import { dynamoDB } from './awsbd';

const obtenerdatos = async (id: number, tipo: string) => {
    const params = {
        TableName: 'extras',
        Key: {
            id: id,
            tipo: tipo
        },
    };

    try {
        
		const data = await dynamoDB.get(params).promise();
        if(data.Item){return data.Item;}
		
		else{return 'No hay datos';}
    
	} catch (error) {
        
		throw error;
				
    }
};

const insertarDatos = async (item: any) => {
    const params = {
        TableName: 'extras',
        Item: item
    };

    try {

        const data = await dynamoDB.put(params).promise();
		return 'se registró un extra';

    } catch (error) {

        throw error;

    }
};

export { insertarDatos };
export { obtenerdatos };