function TarjetaCancion({ titulo, artista, album, duracion, portada, anio, reproducciones, favorita, energia }) {
    console.log("Ruta recibida para", titulo, ":", portada);
    return (
        <article className="tarjeta">
            <img src={portada} alt={`Portada de ${album}`} className="tarjeta-portada" />
            
            {favorita && <span className="etiqueta-favorita">♥ Favorita</span>}
            
            <h2 className="tarjeta-titulo">{titulo}</h2>
            <p className="tarjeta-artista">{artista}</p>
            <p className="tarjeta-detalle">Álbum: {album}</p>
            <p className="tarjeta-detalle">Duración: {duracion}</p>
            
            <p className="tarjeta-detalle">Año: {anio}</p>
            <p className="tarjeta-detalle">Reproducciones: {reproducciones}</p>
            <p className="tarjeta-detalle">Lanzada hace {2026 - anio} años</p>
        
            <div className="barra-energia">
                <div className="barra-energia-relleno" style={{ width: energia + "%" }}></div>
            </div>
        </article>
    );
}

export default TarjetaCancion;