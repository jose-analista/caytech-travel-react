import { Link, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Detalle from "./pages/Detalle";
import NoEncontrada from "./pages/NoEncontrada";

export default function App() {
  return (
    <main className="contenedor">
      <header className="cabecera">
        <h1>
          <Link to="/">caytech-travel</Link>
        </h1>
      </header>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/paquete/:id" element={<Detalle />} />
        <Route path="*" element={<NoEncontrada />} />
      </Routes>
    </main>
  );
}