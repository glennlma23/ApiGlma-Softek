const mapeo: { [key: string]: string } = {
'name': 'nombre',
'birth_year': 'anio_nacimiento',
'eye_color': 'color_ojos',
'gender': 'sexo',
'hair_color': 'color_cabello',
'height': 'altura',
'mass': 'peso',
'skin_color': 'color_piel',
'homeworld': 'planeta_natal',
'films': 'peliculas',
'species': 'especies',
'starships': 'naves',
'vehicles': 'vehiculos',
'url': 'enlace',
'created': 'creado',
'edited': 'modificado',
'title': 'titulo',
'episode_id': 'id_episodio',
'opening_crawl': 'parrafos_introductorios',
'director': 'director',
'producer': 'productor',
'release_date': 'fecha_lanzamiento',
'characters': 'personajes',
'planets': 'planetas',
'model': 'modelo',
'starship_class': 'tipo_nave',
'manufacturer': 'fabricante',
'cost_in_credits': 'costo_creditos',
'length': 'longitud',
'crew': 'tripulación',
'passengers': 'pasajeros',
'max_atmosphering_speed': 'velocidad_atmosferica_max',
'hyperdrive_rating': 'ratio_propulsion',
'MGLT': 'Megaluz',
'cargo_capacity': 'capacidad_carga',
'consumables': 'consumibles',
'pilots': 'pilotos',
'vehicle_class': 'tipo_vehiculo',
'classification': 'clasifiacion',
'designation': 'designacion',
'average_height': 'altura_promedio',
'average_lifespan': 'aniosvida_promedio',
'eye_colors': 'colores_ojos',
'hair_colors': 'colores_cabello',
'skin_colors': 'colores_piel',
'language': 'idioma',
'people': 'personas',
'diameter': 'diametro',
'rotation_period': 'periodo_rotacion',
'orbital_period': 'periodo_orbital',
'gravity': 'gravedad',
'population': 'población',
'climate': 'clima',
'terrain': 'terreno',
'surface_water': 'porcentaje_agua',
'residents': 'residentes'
}

const traduciratributos = (data: { [key: string]: any }): { [key: string]: any } => {
    const datatraducida: { [key: string]: any } = {};

    for (const key in data) {
        const keytraducido = mapeo[key] || key;
        datatraducida[keytraducido] = data[key];
    }

    return datatraducida;
};

export { traduciratributos };