"use client";
import { useEffect, useState } from "react";

const campos = [
  { name: "direccion", label: "Dirección", required: true },
  { name: "telefono", label: "Teléfono", required: true },
  { name: "correo", label: "Correo electrónico", required: true },
  { name: "horario", label: "Horario", required: true },
  { name: "whatsapp", label: "WhatsApp" },
  { name: "telegram", label: "Telegram" },
  { name: "linkedin", label: "LinkedIn" },
  { name: "facebook", label: "Facebook" },
  { name: "twitter", label: "Twitter" },
  { name: "instagram", label: "Instagram" },
];

export default function ContactInfoAdmin() {
  const [form, setForm] = useState<Record<string, string>>({
    direccion: "",
    telefono: "",
    correo: "",
    horario: "",
    whatsapp: "",
    telegram: "",
    linkedin: "",
    facebook: "",
    twitter: "",
    instagram: "",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("/api/admin/contact-info")
      .then((res) => res.json())
      .then((data) => {
        if (data) setForm((f) => ({ ...f, ...data }));
      })
      .finally(() => setLoading(false));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSaving(true);
    setMsg("");
    const res = await fetch("/api/admin/contact-info", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) setMsg("¡Información actualizada!");
    else setMsg("Error al guardar.");
    setSaving(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6 text-nexoria-orange">Información de Contacto</h1>
      {loading ? (
        <div className="text-center py-12">Cargando...</div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          {campos.map((campo) => (
            <div key={campo.name} className="flex flex-col gap-1">
              <label className="block text-sm font-medium text-gray-700" htmlFor={campo.name}>
                {campo.label}
                {campo.required && <span className="text-red-500 ml-1">*</span>}
              </label>
              <input
                type="text"
                id={campo.name}
                name={campo.name}
                value={form[campo.name] || ""}
                onChange={handleChange}
                required={campo.required}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-nexoria-orange text-gray-900 bg-gray-50"
              />
            </div>
          ))}
          <button
            type="submit"
            disabled={saving}
            className="w-full bg-nexoria-orange text-white font-bold py-3 rounded hover:bg-orange-600 transition-colors disabled:opacity-50 mt-2"
          >
            {saving ? "Guardando..." : "Guardar Cambios"}
          </button>
          {msg && <div className={`text-center mt-2 ${msg.startsWith("¡") ? "text-green-600" : "text-red-600"}`}>{msg}</div>}
        </form>
      )}
    </div>
  );
} 