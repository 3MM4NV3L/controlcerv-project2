import { useEffect, useMemo, useState } from "react";
import { getBeers, createBeer, updateBeer, deleteBeer } from "../../services/api.js";
import BeerForm from "../BeerForm/BeerForm.js";
import BeerCard from "../BeerCard/BeerCard.js";
import "./BeerList.css";

export default function BeerList() {
  const [beers, setBeers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [q, setQ] = useState("");
  const [editing, setEditing] = useState(null);
  const [view, setView] = useState(null); // para modal "Ver Información"

  const load = async () => {
    try {
      setLoading(true);
      setError("");
      const res = await getBeers(); // tu api.js: GET /beers
      setBeers(res.data || []);
    } catch (e) {
      setError(e?.response?.data?.message || "Error cargando cervezas");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
    
  }, []);

  // Búsqueda en cliente (por nombre/tipo/descr)
  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return beers;
    return beers.filter((b) =>
      [b.nombre, b.tipo, b.descripcion].some((v) =>
        String(v || "").toLowerCase().includes(term)
      )
    );
  }, [beers, q]);

  const handleSave = async (payload) => {
    // payload debe respetar tu modelo: nombre, tipo, alcohol, ibu, descripcion, imagen, precio, stock, fechaProduccion, fechaCaducidad
    if (editing?._id) {
      await updateBeer(editing._id, payload);
      setEditing(null);
    } else {
      await createBeer(payload);
    }
    await load();
  };

  const handleDelete = async (id) => {
    if (!window.confirm("¿Eliminar esta cerveza?")) return;
    await deleteBeer(id);
    await load();
  };

  return (
    <div className="beerlist container">
      <h2 className="section-title">Gestión de Cervezas</h2>

      <div className="beerlist-toolbar">
        <input
          className="beerlist-search"
          placeholder="Buscar por nombre / tipo / descripción…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        {editing ? (
          <span className="beerlist-mode">
            Editando: <b>{editing.nombre}</b>
          </span>
        ) : (
          <span className="beerlist-mode">Crear nueva cerveza</span>
        )}
      </div>

      <BeerForm
        beer={editing}
        onSave={handleSave}
        onCancel={() => setEditing(null)}
      />

      {loading ? (
        <p className="loading">Cargando…</p>
      ) : error ? (
        <div className="error-message">
          {error}
          <br />
          <button onClick={load}>Reintentar</button>
        </div>
      ) : (
        <div className="breweries-grid">
          {filtered.map((b) => (
            <BeerCard
              key={b._id}
              beer={b}
              onView={setView}
              onEdit={setEditing}
              onDelete={handleDelete}
            />
          ))}
          {!filtered.length && (
            <p className="loading">Sin resultados para “{q}”.</p>
          )}
        </div>
      )}

      {/* Modal Ver Información */}
      {view && (
        <div className="beerlist-modal" onClick={() => setView(null)}>
          <div className="beerlist-modal-card" onClick={(e) => e.stopPropagation()}>
            <h3 className="beerlist-modal-title">{view.nombre}</h3>
            <p className="beerlist-modal-meta">
              <b>Tipo:</b> {view.tipo} • <b>ABV:</b> {view.alcohol}% • <b>IBU:</b> {view.ibu}
            </p>
            <p className="beerlist-modal-text">{view.descripcion}</p>
            <p className="beerlist-modal-text">
              <b>Precio:</b> ${view.precio} • <b>Stock:</b> {view.stock}
            </p>
            <p className="beerlist-modal-text">
              {view.fechaProduccion && (
                <>
                  <b>Producción:</b>{" "}
                  {new Date(view.fechaProduccion).toLocaleDateString()}
                  {"  "}
                </>
              )}
              {view.fechaCaducidad && (
                <>
                  <b>Caducidad:</b>{" "}
                  {new Date(view.fechaCaducidad).toLocaleDateString()}
                </>
              )}
            </p>
            {view.imagen && (
              <img className="beerlist-modal-img" src={view.imagen} alt={view.nombre} />
            )}

            <div className="beerlist-modal-actions">
              <button className="cta-button secondary" onClick={() => setView(null)}>
                Cerrar
              </button>
              <button
                className="cta-button primary"
                onClick={() => {
                  setEditing(view);
                  setView(null);
                }}
              >
                Editar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
