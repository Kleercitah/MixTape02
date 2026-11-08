import { useState } from "react";
import "./FrecuenciaEmocional.css";

const estadosDeAnimo = [
    { id: "tranquilo", etiqueta: "Tranquilo" },
    { id: "energetico", etiqueta: "Energético" },
    { id: "nostalgico", etiqueta: "Nostálgico" },
];

const mensajes = {
    tranquilo: "Respira profundo y deja que la noche siga su propio ritmo.",
    energetico: "Sube la señal: esta frecuencia está lista para despegar.",
    nostalgico: "Una melodía para viajar por recuerdos bajo las estrellas.",
};

function FrecuenciaEmocional({ nombreCabina }) {
    const [animo, setAnimo] = useState("tranquilo");

    return (
        <section
            className={`frecuencia frecuencia-${animo}`}
            aria-label={`Frecuencia emocional de ${nombreCabina}`}
        >
            <div className="frecuencia-contenido">
                <p className="frecuencia-etiqueta">Sintonía de la cabina</p>
                <h2 className="frecuencia-titulo">Frecuencia Emocional</h2>
                <p className="frecuencia-mensaje" aria-live="polite">
                    {mensajes[animo]}
                </p>
            </div>
            <div
                className="frecuencia-estados"
                role="group"
                aria-label="Elige tu estado de ánimo"
            >
                {estadosDeAnimo.map((estado) => (
                    <button
                        key={estado.id}
                        className={`frecuencia-boton${animo === estado.id ? " activo" : ""}`}
                        type="button"
                        aria-pressed={animo === estado.id}
                        onClick={() => setAnimo(estado.id)}
                    >
                        {estado.etiqueta}
                    </button>
                ))}
            </div>
        </section>
    );
}

export default FrecuenciaEmocional;
