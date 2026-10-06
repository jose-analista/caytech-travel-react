import { Link } from "react-router-dom";

export default function NoEncontrada() {
  return (
    <section>
      <h2>Página no encontrada</h2>
      <Link to="/">Volver al catálogo</Link>
    </section>
  );
}