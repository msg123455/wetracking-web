"use client"
import React from 'react';

const clients = [
  { name: 'ArcFire', logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693c7294336e4d84a582bd72/ae975cf44_image.png' },
  { name: 'Club de Golf de Panamá', logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693c7294336e4d84a582bd72/17ca4fc8f_image.png' },
  { name: 'Los Lagartos', logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693c7294336e4d84a582bd72/71855e774_image.png' },
  { name: 'Maqfa', logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693c7294336e4d84a582bd72/6c3fb2ba9_image.png' },
  { name: 'Bomaq', logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693c7294336e4d84a582bd72/cf2ea716b_image.png' },
  { name: 'Innergy', logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693c7294336e4d84a582bd72/abcd32e8f_image.png' },
  { name: 'Amplex Internet', logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693c7294336e4d84a582bd72/aa5693d9e_image.png' },
];

export default function ClientsSection() {
  return (
    <section className="py-16 px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-[#0b194f]/40 text-sm font-semibold uppercase tracking-widest mb-12">
          Empresas que confían en WeTracking
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 justify-items-center items-center">
          {clients.map((client, i) => (
            <div key={i} className="flex items-center justify-center w-full">
              <img
                src={client.logo}
                alt={client.name}
                className="h-28 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
