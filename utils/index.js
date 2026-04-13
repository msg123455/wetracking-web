export function createPageUrl(pageName) {
  const routes = {
    'Home': '/',
    'Activos': '/activos',
    'Bodegas': '/bodegas',
    'Clubes': '/clubes',
    'Manufactura': '/manufactura',
    'Inventarios': '/inventarios',
    'Locativos': '/locativos',
    'Academia': '/academia',
    'Nosotros': '/nosotros',
    'TecnologiaRFID': '/tecnologia-rfid',
    'TrazabilidadRFID': '/trazabilidad-rfid',
    'IndustriaPetrolera': '/industria-petrolera',
    'PoliticaDatos': '/politica-datos',
  }
  return routes[pageName] || '/' + pageName.toLowerCase()
}