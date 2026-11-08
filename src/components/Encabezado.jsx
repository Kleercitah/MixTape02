
function Encabezado({ nombreCabina, total, totalFavoritas }) {
    return (
        <header className="encabezado">
            <img
                className="cabina-logo"
                src={`${import.meta.env.BASE_URL}aurora-fm.svg`}
                alt="Logotipo de AURORA FM: una aurora sobre el horizonte nocturno"
            />
            <h1 className="logo">{nombreCabina}</h1>
            <p className="lema">Música para los turnos largos de la estación</p>
            <p className="contador">{total} canciones en la estación</p>
            <p className="contador-favoritas">
                {totalFavoritas} canciones favoritas
            </p>
        </header>
    );
}

export default Encabezado;