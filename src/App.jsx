import Encabezado from "./components/Encabezado.jsx";
import TarjetaCancion from "./components/TarjetaCancion.jsx";
import PiePagina from "./components/PiePagina.jsx";
import Controles from "./components/Controles.jsx";
import Seccion from "./components/Seccion.jsx";
import { canciones } from "./data/canciones.js";

function App() {
    return (
        <main className="app">
            <Encabezado total={canciones.length} />
            
            {/* ⭐ BONUS — Si hay 0 canciones muestra el texto, si no, dibuja la sección */}
            {canciones.length === 0 ? (
                <p className="playlist-vacia">Aún no hay canciones en la estación</p>
            ) : (
                <Seccion titulo="Turno de noche">
                    <section className="playlist">
                        {canciones.map((cancion) => (
                            <TarjetaCancion 
                                key={cancion.id}
                                titulo={cancion.titulo}
                                artista={cancion.artista}
                                album={cancion.album}
                                duracion={cancion.duracion}
                                portada={cancion.portada}
                                anio={cancion.anio}
                                reproducciones={cancion.reproducciones}
                                favorita={cancion.favorita}
                                energia={cancion.energia}
                            />
                        ))}
                    </section>
                </Seccion>
            )}
            
            <Controles />
            <PiePagina />
        </main>
    );
}

export default App;