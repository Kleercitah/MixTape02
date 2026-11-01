
function Encabezado({ total }) { 
    return (
        <header className="encabezado">
            <h1 className="logo">Mixtape</h1>
            <p className="lema">Música para los turnos largos de la estación</p>
            
            {}
            <p className="contador">{total} canciones en la estación</p>
        </header>
    );
}

export default Encabezado;