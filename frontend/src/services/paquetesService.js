const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

export async function obtenerPaquetes() {
  const respuesta = await fetch(`${API_URL}/paquetes`);
  if (!respuesta.ok) {
    throw new Error("No se pudo cargar el catálogo");
  }
  return respuesta.json();
}

export async function obtenerPaquete(id) {
  const respuesta = await fetch(`${API_URL}/paquetes/${id}`);
  if (respuesta.status === 404) {
    throw new Error("El paquete no existe");
  }
  if (!respuesta.ok) {
    throw new Error("No se pudo cargar el paquete");
  }
  return respuesta.json();
}