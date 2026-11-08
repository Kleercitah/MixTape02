import { useState } from "react";
import Encabezado from "./components/Encabezado.jsx";
import TarjetaCancion from "./components/TarjetaCancion.jsx";
import PedidoCancion from "./components/PedidoCancion.jsx";
import ListaPedidos from "./components/ListaPedidos.jsx";
import Reproductor from "./components/Reproductor.jsx";
import PiePagina from "./components/PiePagina.jsx";
import Seccion from "./components/Seccion.jsx";
import FrecuenciaEmocional from "./components/FrecuenciaEmocional.jsx";
import { canciones } from "./data/canciones.js";

const NOMBRE_CABINA = "AURORA FM";

function App() {
    const [playlist, setPlaylist] = useState(canciones);
    const [busqueda, setBusqueda] = useState("");

    const visibles = playlist.filter((cancion) =>
        cancion.titulo.toLowerCase().includes(busqueda.toLowerCase())
    );

    const [pedidos, setPedidos] = useState([]);
    const totalFavoritas = playlist.filter((cancion) => cancion.favorita).length;

    function alternarFavorita(id) {
        setPlaylist((actual) =>
            actual.map((cancion) =>
                cancion.id === id
                    ? { ...cancion, favorita: !cancion.favorita }
                    : cancion
            )
        );
    }

    function agregar(titulo, quien) {
        const nuevo = { id: Date.now(), titulo, quien, sono: false };
        setPedidos([nuevo, ...pedidos]);
    }

    function borrar(id) {
        const pedidosRestantes = pedidos.filter((pedido) => pedido.id !== id);
        setPedidos(pedidosRestantes);
    }

    function marcar(id) {
        const pedidosActualizados = pedidos.map((pedido) => {
            if (pedido.id === id) {
                return { ...pedido, sono: !pedido.sono };
            } else {
                return pedido;
            }
        });
        setPedidos(pedidosActualizados);
    }
    function limpiar() {
        const soloPendientes = pedidos.filter((pedido) => pedido.sono === false);
        setPedidos(soloPendientes);
    }

    return (
        <main className="app">
            <Encabezado
                nombreCabina={NOMBRE_CABINA}
                total={playlist.length}
                totalFavoritas={totalFavoritas}
            />

            <FrecuenciaEmocional nombreCabina={NOMBRE_CABINA} />

            {playlist.length > 0 ? (
                <Seccion titulo="Turno de noche">
                    <input
                        className="buscador"
                        type="text"
                        placeholder="Buscar canción..."
                        aria-label="Buscar canción"
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                    />
                    <section className="playlist">
                        {visibles.length > 0 ? (
                            visibles.map((cancion) => (
                                <TarjetaCancion
                                    key={cancion.id}
                                    id={cancion.id}
                                    titulo={cancion.titulo}
                                    artista={cancion.artista}
                                    album={cancion.album}
                                    duracion={cancion.duracion}
                                    portada={cancion.portada}
                                    anio={cancion.anio}
                                    reproducciones={cancion.reproducciones}
                                    favorita={cancion.favorita}
                                    energia={cancion.energia}
                                    onFavorita={alternarFavorita}
                                />
                            ))
                        ) : (
                            <p className="playlist-vacia">
                                No hay canciones que coincidan con la búsqueda.
                            </p>
                        )}
                    </section>
                </Seccion>
            ) : (
                <p className="playlist-vacia">Aún no hay canciones en la estación</p>
            )}

            <PedidoCancion onAgregar={agregar} />

            <ListaPedidos
                pedidos={pedidos}
                onMarcar={marcar}
                onBorrar={borrar}
                onLimpiar={limpiar}
            />

            <Reproductor />
            <PiePagina />
        </main>
    );
}

export default App;