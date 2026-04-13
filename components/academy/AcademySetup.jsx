"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { base44 } from '@/api/base44Client';
import { GraduationCap, User, Building2, CreditCard, AlertCircle, Search, HardHat, Briefcase } from 'lucide-react';

function validateCedulaColombia(cedula) {
  const digits = cedula.replace(/\D/g, '');
  if (digits.length < 6 || digits.length > 10) return false;
  if (/^0+$/.test(digits)) return false;
  return true;
}

function validateFullName(name) {
  const parts = name.trim().split(/\s+/);
  return parts.length >= 2 && parts.every(p => p.length >= 1);
}

export default function AcademySetup({ onProfileCreated }) {
  const [form, setForm] = useState({ full_name: '', cedula: '', company: '', company_id: '', user_type: 'operativo' });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [acceptedPolicy, setAcceptedPolicy] = useState(false);
  const [companies, setCompanies] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    base44.entities.Company.filter({ is_active: true }).then(setCompanies);
  }, []);

  const filteredCompanies = companies.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const selectCompany = (c) => {
    setForm(f => ({ ...f, company: c.name, company_id: c.id }));
    setSearch('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!validateFullName(form.full_name)) {
      setError('Ingresa tu nombre completo (nombre y apellido)');
      return;
    }

    const cedulaClean = form.cedula.replace(/\D/g, '');
    if (!validateCedulaColombia(cedulaClean)) {
      setError('La cédula no es válida. Debe tener entre 6 y 10 dígitos numéricos');
      return;
    }

    if (!form.company.trim()) {
      setError('Selecciona o ingresa el nombre de tu empresa');
      return;
    }

    if (!acceptedPolicy) {
      setError('Debes aceptar la política de protección de datos para continuar');
      return;
    }

    setSaving(true);

    const existing = await base44.entities.AcademyProfile.filter({ cedula: cedulaClean });
    if (existing.length > 0) {
      setError('Esta cédula ya está registrada. Si ya tienes cuenta, ingresa con tu cédula.');
      setSaving(false);
      return;
    }

    const fakeEmail = `cedula_${cedulaClean}@academy.wetracking.co`;
    const profile = await base44.entities.AcademyProfile.create({
      user_email: fakeEmail,
      full_name: form.full_name.trim(),
      cedula: cedulaClean,
      company: form.company.trim(),
      company_id: form.company_id || '',
      user_type: form.user_type
    });
    onProfileCreated(profile);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b194f] to-[#007aed] flex items-center justify-center px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md"
      >
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-[#00ffd7] rounded-full flex items-center justify-center mx-auto mb-4">
            <GraduationCap className="w-10 h-10 text-[#0b194f]" />
          </div>
          <h1 className="text-3xl font-extrabold text-[#0b194f]">Academia WeTracking</h1>
          <p className="text-[#0b194f]/60 mt-2">Crea tu perfil para comenzar</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Nombre */}
          <div>
            <label className="block text-sm font-semibold text-[#0b194f]/70 mb-1">Nombre y Apellido</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0b194f]/40" />
              <input
                type="text"
                value={form.full_name}
                onChange={e => setForm({ ...form, full_name: e.target.value })}
                className="w-full pl-10 pr-4 py-3 border-2 border-[#0b194f]/10 rounded-xl focus:border-[#007aed] outline-none transition-colors"
                placeholder="Ej: Juan Pérez"
              />
            </div>
          </div>

          {/* Cédula */}
          <div>
            <label className="block text-sm font-semibold text-[#0b194f]/70 mb-1">Número de Cédula</label>
            <div className="relative">
              <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0b194f]/40" />
              <input
                type="text"
                value={form.cedula}
                onChange={e => setForm({ ...form, cedula: e.target.value.replace(/\D/g, '') })}
                className="w-full pl-10 pr-4 py-3 border-2 border-[#0b194f]/10 rounded-xl focus:border-[#007aed] outline-none transition-colors"
                placeholder="Ej: 1023456789"
                maxLength={10}
              />
            </div>
            <p className="text-xs text-[#0b194f]/40 mt-1">Solo dígitos, entre 6 y 10 números</p>
          </div>

          {/* Empresa */}
          <div>
            <label className="block text-sm font-semibold text-[#0b194f]/70 mb-1">Empresa</label>
            {form.company_id ? (
              <div className="flex items-center gap-3 p-3 bg-blue-50 border-2 border-[#007aed]/30 rounded-xl">
                <Building2 className="w-5 h-5 text-[#007aed]" />
                <span className="flex-1 font-semibold text-[#0b194f]">{form.company}</span>
                <button type="button" onClick={() => setForm(f => ({ ...f, company: '', company_id: '' }))} className="text-[#0b194f]/40 hover:text-red-500 text-xs">Cambiar</button>
              </div>
            ) : (
              <div className="space-y-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0b194f]/40" />
                  <input
                    type="text"
                    value={search || form.company}
                    onChange={e => { setSearch(e.target.value); setForm(f => ({ ...f, company: e.target.value, company_id: '' })); }}
                    className="w-full pl-10 pr-4 py-3 border-2 border-[#0b194f]/10 rounded-xl focus:border-[#007aed] outline-none transition-colors"
                    placeholder="Busca o escribe el nombre de tu empresa"
                  />
                </div>
                {filteredCompanies.length > 0 && (search || form.company) && (
                  <div className="border-2 border-[#007aed]/20 rounded-xl overflow-hidden max-h-40 overflow-y-auto">
                    {filteredCompanies.map(c => (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => selectCompany(c)}
                        className="w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors flex items-center gap-3 border-b border-gray-100 last:border-0"
                      >
                        <Building2 className="w-4 h-4 text-[#007aed]" />
                        <span className="text-[#0b194f] font-medium">{c.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Tipo de usuario */}
          <div>
            <label className="block text-sm font-semibold text-[#0b194f]/70 mb-2">Tipo de usuario</label>
            <div className="flex gap-3">
              {[
                { value: 'operativo', label: 'Operativo', icon: HardHat, desc: 'Personal de campo' },
                { value: 'administrativo', label: 'Administrativo', icon: Briefcase, desc: 'Personal de oficina' }
              ].map(({ value, label, icon: Icon, desc }) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setForm(f => ({ ...f, user_type: value }))}
                  className={`flex-1 p-4 rounded-xl border-2 text-left transition-all ${
                    form.user_type === value
                      ? 'border-[#007aed] bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Icon className={`w-6 h-6 mb-1 ${form.user_type === value ? 'text-[#007aed]' : 'text-[#0b194f]/30'}`} />
                  <p className={`font-bold text-sm ${form.user_type === value ? 'text-[#007aed]' : 'text-[#0b194f]'}`}>{label}</p>
                  <p className="text-xs text-[#0b194f]/40">{desc}</p>
                </button>
              ))}
            </div>
          </div>

          {error && (
            <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-xl">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          {/* Política de datos */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="policy"
              checked={acceptedPolicy}
              onChange={e => setAcceptedPolicy(e.target.checked)}
              className="mt-1 w-4 h-4 accent-[#007aed] cursor-pointer flex-shrink-0"
            />
            <label htmlFor="policy" className="text-sm text-[#0b194f]/70 cursor-pointer leading-relaxed">
              He leído y acepto la{' '}
              <a
                href="/PoliticaDatos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#007aed] underline font-semibold hover:text-[#0b194f] transition-colors"
              >
                Política de Protección de Datos Personales
              </a>{' '}
              de WeTracking S.A.S., conforme a la Ley 1581 de 2012.
            </label>
          </div>

          <button
            type="submit"
            disabled={saving}
            className="w-full py-4 bg-[#007aed] text-white font-bold rounded-xl hover:bg-[#0b194f] transition-colors disabled:opacity-50 text-lg"
          >
            {saving ? 'Registrando...' : 'Ingresar a la Academia'}
          </button>
        </form>
      </motion.div>
    </div>
  );
}

