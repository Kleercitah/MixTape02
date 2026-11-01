function Seccion({ titulo, children }) {
    return (
        <section>
            <h2 className="seccion-titulo">{titulo}</h2>
            
            {}
            {children}
        </section>
    );
}

export default Seccion;