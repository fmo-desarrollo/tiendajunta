/* ============================================================
   Tienda FMO · MasterClass y Foro Educativo — datos compartidos
   ============================================================
   Lo usan index.html (tienda) y admin.html (panel de la Fundación).

   En este prototipo la "base de datos" vive en localStorage del
   navegador, para poder probar la tienda y el panel juntos.
   En Lovable, el objeto `db` (al final) se reemplaza por Lovable
   Cloud: tablas pedidos_masterclass y config_tienda.
   ============================================================ */

/* Programas: colores oficiales del Sistema de Marca FMO (plataforma-fmo/src/brand.js) */
const PROGRAMAS = {
  hse:       { nombre: 'Habilidades Socioemocionales', color: '#F4C400' },
  ingles:    { nombre: 'Inglés',                       color: '#E0321C' },
  robotica:  { nombre: 'Robótica',                     color: '#0A3C63' },
  teachlabs: { nombre: 'TeachLabs',                    color: '#7b2cbf' },
  nt:        { nombre: 'Nuevas Tecnologías',           color: '#2CACD0' },
  becas:     { nombre: 'Voluntarios y Becas',          color: '#abd037' },
  fmo:       { nombre: 'Institucional FMO',            color: '#013a52' },
};

/* Un diseño por página de los catálogos 00_CAMISETAS y MO_hoodies_2 (págs. 2–17).
   Fotos: img/<tipo>-<id>-espalda.jpg y img/<tipo>-<id>-frente.jpg */
const DISENOS = [
  { id: 'hse-beige',          prog: 'hse',       nombre: 'Social Emotional Skills',  color: 'Beige · tinta amarilla',     muestra: '#ECE7DA' },
  { id: 'hse-amarillo',       prog: 'hse',       nombre: 'Nice People',              color: 'Amarillo',                   muestra: '#E3A21A' },
  { id: 'ingles-beige',       prog: 'ingles',    nombre: 'Citizens of the World',    color: 'Beige · tinta roja',         muestra: '#ECE7DA' },
  { id: 'ingles-rojo',        prog: 'ingles',    nombre: 'Citizens of the World',    color: 'Rojo',                       muestra: '#D8441F' },
  { id: 'robotica-beige',     prog: 'robotica',  nombre: 'Fr13ndly Robots',          color: 'Beige · tinta azul',         muestra: '#ECE7DA' },
  { id: 'robotica-azul',      prog: 'robotica',  nombre: 'Robots 100% Made in Col',  color: 'Azul petróleo',              muestra: '#0E4A5C' },
  { id: 'teachlabs-beige',    prog: 'teachlabs', nombre: 'Century Masters',          color: 'Beige · tinta morada',       muestra: '#ECE7DA' },
  { id: 'teachlabs-morado',   prog: 'teachlabs', nombre: 'Masters',                  color: 'Morado',                     muestra: '#574C9E' },
  { id: 'nt-beige',           prog: 'nt',        nombre: 'Citizens of the Future',   color: 'Beige · tinta azul',         muestra: '#ECE7DA' },
  { id: 'nt-azul',            prog: 'nt',        nombre: 'Future',                   color: 'Azul',                       muestra: '#3AA5C0' },
  { id: 'becas-beige-verde',  prog: 'becas',     nombre: 'Real Impact',              color: 'Beige · tinta verde',        muestra: '#ECE7DA' },
  { id: 'becas-verde',        prog: 'becas',     nombre: 'Real Impact',              color: 'Verde',                      muestra: '#9DC23E' },
  { id: 'becas-beige-bosque', prog: 'becas',     nombre: 'Real Impact',              color: 'Beige · tinta verde bosque', muestra: '#ECE7DA' },
  { id: 'becas-bosque',       prog: 'becas',     nombre: 'Real Impact',              color: 'Verde bosque',               muestra: '#173A2C' },
  { id: 'fmo-beige',          prog: 'fmo',       nombre: 'Educating for the Future', color: 'Beige · tinta naranja',      muestra: '#ECE7DA' },
  { id: 'fmo-negro',          prog: 'fmo',       nombre: 'Educating for the Future', color: 'Negro',                      muestra: '#1E1A1A' },
];

const TIPOS = {
  camiseta: { nombre: 'Camiseta', detalle: '100 % algodón · manga corta' },
  hoodie:   { nombre: 'Hoodie',   detalle: 'Con capota · interior perchado' },
};
const TALLAS = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
const DIAS = ['Lunes a viernes', 'Sábado'];
const FRANJAS = ['Mañana (8:00 – 12:00)', 'Tarde (12:00 – 5:00)', 'Cualquier hora'];

const ESTADOS = {
  pendiente:  { nombre: 'Pendiente de pago', color: '#B9770E', fondo: '#FDF3E1' },
  confirmado: { nombre: 'Pago confirmado',   color: '#1F7A4D', fondo: '#E3F4EA' },
  entregado:  { nombre: 'Entregado',         color: '#013A53', fondo: '#D7F0F6' },
  anulado:    { nombre: 'Anulado',           color: '#8A97A3', fondo: '#EEF1F3' },
};

/* Configuración editable desde el panel (pestaña Configuración).
   Los valores marcados POR DEFINIR los debe completar la Fundación
   antes de abrir la tienda. */
const CONFIG_INICIAL = {
  abierta: true,
  precios: { camiseta: 0, hoodie: 0 },          // en pesos; 0 = aún sin precio
  entrega: {
    stand:     { activo: true, nombre: 'Recoger en el stand de la FMO', detalle: 'Durante el evento, 11 de noviembre · Cámara de Comercio de Medellín, sede Centro' },
    domicilio: { activo: true, nombre: 'Envío a domicilio', detalle: 'Medellín y área metropolitana', costo: 0 },
  },
  pagos: {
    transferencia: { activo: true,  nombre: 'Transferencia bancaria', datos: 'Banco: POR DEFINIR\nCuenta de ahorros N.º POR DEFINIR\nTitular: Fundación Marina Orth\nNIT: POR DEFINIR' },
    llave:         { activo: true,  nombre: 'Nequi o llave Bre-B',    datos: 'Llave / número: POR DEFINIR\nA nombre de: Fundación Marina Orth' },
    stand:         { activo: true,  nombre: 'Pago en el stand',       datos: 'Paga en efectivo o con tarjeta cuando recojas tu pedido en el stand de la FMO.' },
    link:          { activo: false, nombre: 'Link de pago con tarjeta', datos: 'Te enviaremos un link de pago a tu correo.' },
  },
  contacto: 'POR DEFINIR (correo o WhatsApp para dudas y comprobantes)',
};

const pesos = (n) => '$' + Math.round(n || 0).toLocaleString('es-CO');
const fotoDe = (tipo, id, lado = 'espalda') => `img/${tipo}-${id}-${lado}.jpg`;
const disenoDe = (id) => DISENOS.find((d) => d.id === id);

/* ---------- "Base de datos" de prueba (localStorage) ----------
   Lovable: reemplazar estas funciones por consultas a Lovable Cloud.
   Mismas firmas, todas async. */
const db = (() => {
  const K_PED = 'fmo-mc-pedidos', K_CFG = 'fmo-mc-config';
  const leer = (k, def) => { try { return JSON.parse(localStorage.getItem(k)) ?? def; } catch { return def; } };
  const escribir = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} };
  return {
    async leerConfig() {
      const c = leer(K_CFG, null);
      return c ? { ...CONFIG_INICIAL, ...c } : structuredClone(CONFIG_INICIAL);
    },
    async guardarConfig(cfg) { escribir(K_CFG, cfg); },
    async listarPedidos() { return leer(K_PED, []); },
    async crearPedido(p) {
      const lista = leer(K_PED, []);
      const n = lista.reduce((m, x) => Math.max(m, Number(x.codigo.split('-').pop())), 0) + 1;
      const pedido = { ...p, codigo: `MC-${String(n).padStart(4, '0')}`, estado: 'pendiente', creado: new Date().toISOString(), historial: [] };
      lista.push(pedido); escribir(K_PED, lista);
      return pedido;
    },
    async actualizarPedido(codigo, cambios) {
      const lista = leer(K_PED, []);
      const i = lista.findIndex((x) => x.codigo === codigo);
      if (i < 0) return null;
      lista[i] = { ...lista[i], ...cambios, actualizado: new Date().toISOString() };
      escribir(K_PED, lista);
      return lista[i];
    },
  };
})();
