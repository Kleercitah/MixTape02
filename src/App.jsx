import { useState } from "react";
import Encabezado from "./components/Encabezado.jsx";
import TarjetaCancion from "./components/TarjetaCancion.jsx";
import PiePagina from "./components/PiePagina.jsx";
import Reproductor from "./components/Reproductor.jsx";
import Seccion from "./components/Seccion.jsx";
import PedidoCancion from "./components/PedidoCancion.jsx"; 
import { canciones } from "./data/canciones.js";

function App() {
    const [busqueda, setBusqueda] = useState("");

    const visibles = canciones.filter((cancion) => 
        cancion.titulo.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <main className="app">
            <Encabezado total={canciones.length} />
            
            <input 
                className="buscador" 
                type="text" 
                placeholder="Buscar canción..." 
                value={busqueda} 
                onChange={(e) => setBusqueda(e.target.value)} 
            />

            {canciones.length === 0 ? (
                <p className="playlist-vacia">Aún no hay canciones en la estación</p>
            ) : (
                <Seccion titulo="Turno de noche">
                    <section className="playlist">
                        {visibles.length > 0 ? (
                            visibles.map((cancion) => (
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
                            ))
                        ) : (
                            <p className="playlist-vacia">No se encontraron canciones</p>
                        )}
                    </section>
                </Seccion>
            )}
            
            {}
            <PedidoCancion />
            
            <Reproductor />
            <PiePagina />
        </main>
    );
}

export default App;