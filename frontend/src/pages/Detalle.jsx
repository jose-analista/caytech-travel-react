import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { obtenerPaquete } from "../services/paquetesService";

export default function Detalle() {
  const { id } = useParams();
  const [paquete, setPaquete] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setCargando(true);
    setError(null);
    obtenerPaquete(id)
      .then(setPaquete)
      .catch((e) => setError(e.message))
      .finally(() => setCargando(false));
  }, [id]);

  if (cargando) return <p>Cargando paquete...</p>;
  if (error) {
    return (
      <section>
        <p>Error: {error}</p>
        <Link to="/">Volver al catálogo</Link>
      </section>
    );
  }

  return (
    <section className="detalle">
      <Link to="/">← Volver al catálogo</Link>
      <h2>{paquete.nombre}</h2>
      <p className="tarjeta-destino">
        {paquete.destino} · {paquete.dias} días
      </p>
      <p>{paquete.descripcion}</p>
      <p className="precio">${paquete.precio.toLocaleString("es-CL")}</p>
    </section>
  );
}