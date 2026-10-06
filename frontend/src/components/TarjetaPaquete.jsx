import { Link } from "react-router-dom";

export default function TarjetaPaquete({ paquete }) {
  const { id, nombre, destino, dias, precio, descripcion } = paquete;

  return (
    <article className="tarjeta">
      <div className="tarjeta-cabecera">🏔️</div>
      <div className="tarjeta-cuerpo">
        <h3>{nombre}</h3>
        <p className="tarjeta-destino">
          {destino} · {dias} días
        </p>
        <p>{descripcion}</p>
        <strong>${precio.toLocaleString("es-CL")}</strong>
        <div>
          <Link to={`/paquete/${id}`} className="boton">
            Ver detalle
          </Link>
        </div>
      </div>
    </article>
  );
}