import React, { useEffect, useState } from "react";
import "./BeerForm.css";

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
        fechaProduccion: beer?.fechaProduccion ? beer.fechaProduccion.substring(0, 10) : "",
        fechaCaducidad: beer?.fechaCaducidad ? beer.fechaCaducidad.substring(0, 10) : "",
      });
    } else {
      setForm(EMPTY);
    }
  }, [beer]);

  const handle = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const submit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
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
      if (!beer) setForm(EMPTY);
    } finally {
      setSaving(false);
    }
  };

  return (
    <form className="beer-form" onSubmit={submit}>
      <div className="form-row">
        <label>Nombre *</label>
        <input name="nombre" required value={form.nombre} onChange={handle} />
      </div>

      <div className="form-row">
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

      <div className="form-row">
        <label>Alcohol (ABV %) *</label>
        <input type="number" step="0.1" min="0" name="alcohol" required value={form.alcohol} onChange={handle} />
      </div>

      <div className="form-row">
        <label>IBU *</label>
        <input type="number" min="0" name="ibu" required value={form.ibu} onChange={handle} />
      </div>

      <div className="form-row">
        <label>Descripción *</label>
        <textarea name="descripcion" required value={form.descripcion} onChange={handle} />
      </div>

      <div className="form-row">
        <label>URL de imagen</label>
        <input name="imagen" value={form.imagen} onChange={handle} placeholder="https://..." />
      </div>

      <div className="form-row">
        <label>Precio *</label>
        <input type="number" step="0.1" min="0" name="precio" required value={form.precio} onChange={handle} />
      </div>

      <div className="form-row">
        <label>Stock *</label>
        <input type="number" min="0" name="stock" required value={form.stock} onChange={handle} />
      </div>

      <div className="form-row">
        <label>Fecha Producción</label>
        <input type="date" name="fechaProduccion" value={form.fechaProduccion} onChange={handle} />
      </div>

      <div className="form-row">
        <label>Fecha Caducidad *</label>
        <input type="date" name="fechaCaducidad" required value={form.fechaCaducidad} onChange={handle} />
      </div>

      <div className="form-actions">
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
