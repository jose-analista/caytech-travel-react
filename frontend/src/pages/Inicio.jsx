import { useEffect, useState } from "react";
import TarjetaPaquete from "../components/TarjetaPaquete";
import { obtenerPaquetes } from "../services/paquetesService";

export default function Inicio() {
  const [paquetes, setPaquetes] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    obtenerPaquetes()
      .then(setPaquetes)
      .catch((e) => setError(e.message))
      .finally(() => setCargando(false));
  }, []);

  const filtrados = paquetes.filter((p) =>
    `${p.nombre} ${p.destino}`.toLowerCase().includes(busqueda.toLowerCase())
  );

  if (cargando) return <p>Cargando paquetes...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section>
      <h2>Paquetes disponibles</h2>

      <input
        type="search"
        className="buscador"
        placeholder="Buscar por nombre o destino..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      {filtrados.length === 0 ? (
        <p>No hay paquetes que coincidan con tu búsqueda.</p>
      ) : (
        <div className="grilla">
          {filtrados.map((p) => (
            <TarjetaPaquete key={p.id} paquete={p} />
          ))}
        </div>
      )}
    </section>
  );
}