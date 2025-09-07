import React, { useEffect, useState } from "react";

const EMPTY = {
  nombre: "",
  tipo: "IPA",
  alcohol: "",
  ibu: "",
  descripcion: "",
  imagen: "",
  precio: "",
  stock: "",
  fechaProduccion: "",
  fechaCaducidad: "",
};

export default function BeerForm({ beer, onSave, onCancel }) {
  const [form, setForm] = useState(EMPTY);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (beer) {
      setForm({
        ...EMPTY,
        ...beer,
        // Normalizamos fechas a yyyy-mm-dd para el <input type="date" />
        fechaProduccion: beer?.fechaProduccion ? beer.fechaProduccion.substring(0, 10) : "",
        fechaCaducidad: beer?.fechaCaducidad ? beer.fechaCaducidad.substring(0, 10) : "",
      });
    } else {
      setForm(EMPTY);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [beer]);

  const handle = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const submit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      // Parsear numéricos y fechas (el backend espera Number/Date)
      const payload = {
        ...form,
        alcohol: form.alcohol !== "" ? parseFloat(form.alcohol) : null,
        ibu: form.ibu !== "" ? parseInt(form.ibu, 10) : null,
        precio: form.precio !== "" ? parseFloat(form.precio) : null,
        stock: form.stock !== "" ? parseInt(form.stock, 10) : null,
        fechaProduccion: form.fechaProduccion || null,
        fechaCaducidad: form.fechaCaducidad || null,
      };
      await onSave(payload);
      if (!beer) setForm(EMPTY); // si fue creación, limpia el form
    } finally {
      setSaving(false);
    }
  };

  return (
    <form className="beer-form" onSubmit={submit} style={{ marginBottom: "1.25rem" }}>
      <div className="form-grid" style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
        <div>
          <label>Nombre *</label>
          <input name="nombre" required value={form.nombre} onChange={handle} />
        </div>

        <div>
          <label>Tipo *</label>
          <select name="tipo" value={form.tipo} onChange={handle} required>
            <option>IPA</option>
            <option>APA</option>
            <option>Stout</option>
            <option>Lager</option>
            <option>Porter</option>
            <option>Wheat</option>
          </select>
        </div>

        <div>
          <label>Alcohol (ABV %) *</label>
          <input type="number" step="0.1" min="0" name="alcohol" required value={form.alcohol} onChange={handle} />
        </div>

        <div>
          <label>IBU *</label>
          <input type="number" min="0" name="ibu" required value={form.ibu} onChange={handle} />
        </div>

        <div className="col-span-2" style={{ gridColumn: "1 / -1" }}>
          <label>Descripción *</label>
          <textarea name="descripcion" required value={form.descripcion} onChange={handle} />
        </div>

        <div className="col-span-2" style={{ gridColumn: "1 / -1" }}>
          <label>URL de imagen</label>
          <input name="imagen" value={form.imagen} onChange={handle} placeholder="https://..." />
        </div>

        <div>
          <label>Precio *</label>
          <input type="number" step="0.1" min="0" name="precio" required value={form.precio} onChange={handle} />
        </div>

        <div>
          <label>Stock *</label>
          <input type="number" min="0" name="stock" required value={form.stock} onChange={handle} />
        </div>

        <div>
          <label>Fecha Producción</label>
          <input type="date" name="fechaProduccion" value={form.fechaProduccion} onChange={handle} />
        </div>

        <div>
          <label>Fecha Caducidad *</label>
          <input type="date" name="fechaCaducidad" required value={form.fechaCaducidad} onChange={handle} />
        </div>
      </div>

      <div className="form-actions" style={{ marginTop: "0.75rem", display: "flex", gap: "0.5rem" }}>
        <button className="cta-button primary" disabled={saving}>
          {saving ? "Guardando..." : beer ? "Actualizar" : "Crear"}
        </button>
        {beer && (
          <button type="button" className="cta-button secondary" onClick={onCancel}>
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
}
