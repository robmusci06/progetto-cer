import { useNavigate } from 'react-router-dom'
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend } from 'recharts'
import { Zap, Battery, ArrowDownToLine, Activity, Leaf, Euro, BarChart3, AlertTriangle, Sun, Cloud, CloudRain, Wind, Thermometer, Lightbulb } from 'lucide-react'

const mockData = [
  { name: 'Lun', prelievo: 400, produzione: 240, autoconsumo: 240 },
  { name: 'Mar', prelievo: 300, produzione: 139, autoconsumo: 139 },
  { name: 'Mer', prelievo: 200, produzione: 380, autoconsumo: 200 },
  { name: 'Gio', prelievo: 278, produzione: 390, autoconsumo: 278 },
  { name: 'Ven', prelievo: 189, produzione: 480, autoconsumo: 189 },
  { name: 'Sab', prelievo: 239, produzione: 380, autoconsumo: 239 },
  { name: 'Dom', prelievo: 349, produzione: 430, autoconsumo: 349 },
]

// Forecast orario (mock)
const hourlyForecast = [
  { time: '07:00', icon: 'cloudy', temp: 13, irr: 120 },
  { time: '08:00', icon: 'sunny', temp: 15, irr: 280 },
  { time: '09:00', icon: 'sunny', temp: 16, irr: 420 },
  { time: '10:00', icon: 'sunny', temp: 17, irr: 580 },
  { time: '11:00', icon: 'sunny', temp: 18, irr: 680 },
  { time: '12:00', icon: 'sunny', temp: 19, irr: 720 },
  { time: '13:00', icon: 'sunny', temp: 19, irr: 690 },
  { time: '14:00', icon: 'sunny', temp: 18, irr: 610 },
  { time: '15:00', icon: 'partly', temp: 17, irr: 480 },
  { time: '16:00', icon: 'partly', temp: 16, irr: 320 },
  { time: '17:00', icon: 'cloudy', temp: 15, irr: 160 },
  { time: '18:00', icon: 'cloudy', temp: 14, irr: 60 },
  { time: '19:00', icon: 'cloudy', temp: 13, irr: 10 },
]

function WeatherIcon({ type, size = 'sm' }: { type: string; size?: 'sm' | 'lg' }) {
  const cls = size === 'lg' ? 'w-12 h-12' : 'w-4 h-4'
  if (type === 'sunny') return <Sun className={`${cls} text-amber-400`} />
  if (type === 'partly') return <Cloud className={`${cls} text-sky-400`} />
  if (type === 'cloudy') return <Cloud className={`${cls} text-zinc-400`} />
  if (type === 'rainy') return <CloudRain className={`${cls} text-blue-400`} />
  return <Sun className={`${cls} text-amber-400`} />
}

const smartTips = [
  { time: '10:00 – 14:00', tip: "È previsto un picco di irradianza (680–720 W/m²) che porterà l'impianto alla massima capacità produttiva. Ti consigliamo di avviare i tuoi carichi più energivori (come lavatrici, lavastoviglie o ricarica di veicoli elettrici) in questa fascia oraria.", highlight: true },
]

export default function AdminDashboard() {
  const navigate = useNavigate()
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Dashboard</h1>
          <p className="text-zinc-500 dark:text-zinc-400 mt-1 text-sm">Visione d'insieme aggregata della Comunità Energetica Rinnovabile.</p>
        </div>
        <div className="bg-white dark:bg-zinc-900 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 shadow-sm text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400 shrink-0">
          Ultimo agg: <span className="text-zinc-900 dark:text-zinc-100">Oggi, 14:30</span>
        </div>
      </div>



      {/* ── Meteo & Previsioni ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 animate-in fade-in slide-in-from-top-2 duration-500">

        {/* Widget Meteo Unificato — compatto */}
        <div className="bg-gradient-to-br from-sky-500 to-indigo-600 rounded-2xl shadow-lg relative overflow-hidden text-white flex flex-col">
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/5 rounded-full pointer-events-none" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/5 rounded-full pointer-events-none" />

          {/* Header compatto */}
          <div className="relative z-10 p-4 pb-2">
            <p className="text-[9px] font-semibold uppercase tracking-widest text-sky-100/70 mb-2">Meteo · Matera</p>
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <WeatherIcon type="sunny" size="lg" />
                <div>
                  <p className="text-4xl font-bold tracking-tight leading-none">16.1°</p>
                  <p className="text-xs text-sky-100 mt-0.5 font-medium">Soleggiato</p>
                </div>
              </div>
              <div className="flex flex-col gap-1 text-right shrink-0">
                <span className="inline-flex items-center gap-1 bg-emerald-400/20 border border-emerald-300/30 text-emerald-100 text-[9px] font-bold px-2 py-1 rounded-full">
                  😊 Produzione Ottimale
                </span>
                <div className="flex items-center justify-end gap-1 text-[10px] mt-0.5">
                  <Wind className="w-2.5 h-2.5 text-sky-200 flex-shrink-0" />
                  <span className="text-sky-100">Nuv. <strong className="text-white">0%</strong></span>
                </div>
                <div className="flex items-center justify-end gap-1 text-[10px]">
                  <Thermometer className="w-2.5 h-2.5 text-sky-200 flex-shrink-0" />
                  <span className="text-sky-100">Irr. <strong className="text-white">327 W/m²</strong></span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 mx-4 border-t border-white/20 my-2" />

          {/* Timeline — Slot quadrati, scroll orizzontale, 3 visibili */}
          <div className="relative z-10 px-4 pb-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-[9px] font-bold uppercase tracking-widest text-sky-100/60">Oggi</p>
              <span className="text-[9px] text-sky-200/50">Irr. W/m²</span>
            </div>
            <div
              className="flex gap-2 overflow-x-auto pb-1 customize-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              onWheel={(e) => {
                if (e.deltaY !== 0) {
                  e.preventDefault();
                  e.currentTarget.scrollLeft += e.deltaY;
                }
              }}
            >
              {hourlyForecast.map((h) => {
                const isPeak = h.irr >= 600
                return (
                  <div
                    key={h.time}
                    className={`flex flex-col items-center justify-between py-2 px-1 rounded-xl transition-all cursor-default shrink-0 w-[72px] h-[72px] ${isPeak
                        ? 'bg-white/20 border border-white/30'
                        : 'bg-white/10 border border-white/10'
                      }`}
                  >
                    <span className="text-[8px] font-semibold text-sky-100/70">{h.time}</span>
                    <WeatherIcon type={h.icon} size="sm" />
                    <div className="flex flex-col items-center leading-none">
                      <span className="text-[12px] font-bold text-white">{h.temp}°</span>
                      <span className={`text-[7px] font-bold ${isPeak ? 'text-amber-300' : 'text-sky-200/50'}`}>
                        {h.irr}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Smart Tips — Unificato in box giallo */}
        <div className="lg:col-span-2 bg-amber-50/70 dark:bg-amber-950/20 rounded-2xl p-6 shadow-sm border border-amber-200 dark:border-amber-900/50 flex flex-col justify-between transition-colors">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-amber-100 dark:bg-amber-900/40 border border-amber-200 dark:border-amber-800 shadow-sm">
                <Lightbulb className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <h3 className="text-base font-bold text-amber-900 dark:text-amber-100">Smart Tips</h3>
                <p className="text-[11px] text-amber-700/60 dark:text-amber-500/60 font-semibold uppercase tracking-wider">Programmazione Carichi · Oggi</p>
              </div>
            </div>

            {smartTips.map((tip, idx) => (
              <div key={idx} className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-zinc-800 shadow-sm border border-amber-200 dark:border-amber-800">
                    <Sun className="w-4 h-4 text-amber-500" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-amber-700 dark:text-amber-500">
                    Fascia Oraria: <span className="text-amber-900 dark:text-amber-200">{tip.time}</span>
                  </span>
                </div>
                <p className="leading-relaxed text-[15px] font-medium text-amber-900/80 dark:text-zinc-300">
                  {tip.tip}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-4 border-t border-amber-200/50 dark:border-amber-900/30 flex items-center justify-between text-[10px] text-amber-700/50 dark:text-amber-500/40 font-medium">
            <span className="flex items-center gap-1.5">
              <div className="w-1 h-1 rounded-full bg-amber-400" />
              Basato su previsioni Meteologix
            </span>
            <span className="font-bold">Aggiornato: 09:00</span>
          </div>
        </div>

      </div>


      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* KPI Cards - Responsive Grid */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { title: "Produzione Comunitaria", value: "1,240 kWh", trend: "+12%", icon: Zap, color: "text-amber-500", bg: "bg-amber-50 dark:bg-amber-950/30" },
            { title: "Prelievo da Rete", value: "850 kWh", trend: "-5%", icon: ArrowDownToLine, color: "text-rose-500", bg: "bg-rose-50 dark:bg-rose-950/30" },
            { title: "Autoconsumo Virtuale", value: "920 kWh", trend: "+18%", icon: Activity, color: "text-emerald-500", bg: "bg-emerald-50 dark:bg-emerald-950/30" },
            { title: "Capacità Accumulo", value: "85%", trend: "Stabile", icon: Battery, color: "text-indigo-500", bg: "bg-indigo-50 dark:bg-indigo-950/30" },
          ].map((kpi, i) => (
            <div key={i} className="bg-white dark:bg-zinc-900 px-4 py-3.5 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800 flex items-center gap-3 transition-colors">
              <div className={`p-2 rounded-xl ${kpi.bg} flex-shrink-0`}>
                <kpi.icon className={`w-4 h-4 ${kpi.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-medium text-zinc-400 dark:text-zinc-500 truncate">{kpi.title}</p>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 leading-tight">{kpi.value}</h3>
              </div>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${kpi.trend.startsWith('+') ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400' : kpi.trend.startsWith('-') ? 'bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-400' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'}`}>
                {kpi.trend}
              </span>
            </div>
          ))}
        </div>

        {/* Impatto Ambientale (destra) - compatto */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl p-5 shadow-sm border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between transition-colors">
          <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mb-4 flex items-center gap-2">
            <Leaf className="w-4 h-4 text-emerald-500" />
            Impatto Ambientale
          </h3>
          <div className="space-y-3">
            {/* Punteggio Green + valore affiancati */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-zinc-400 dark:text-zinc-500 mb-1">Punteggio Green</p>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4].map(i => <Leaf key={i} className="w-4 h-4 text-emerald-500 fill-emerald-500" />)}
                  <Leaf className="w-4 h-4 text-emerald-100 dark:text-emerald-900 fill-emerald-100 dark:fill-emerald-900" />
                </div>
              </div>
              <span className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">4.6</span>
            </div>
            <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="text-zinc-500 dark:text-zinc-400">CO2 Evitata</span>
                <span className="font-bold text-zinc-900 dark:text-zinc-100">8.631 kg</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-zinc-500 dark:text-zinc-400">Alberi Equivalenti</span>
                <span className="font-bold text-zinc-900 dark:text-zinc-100">719</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Riga 2: Incentivi, Risparmio, Efficienza - Responsive columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Box Incentivi Maturati */}
        <div className="bg-amber-50/80 dark:bg-amber-950/20 rounded-2xl p-5 shadow-sm border border-amber-200 dark:border-amber-900/50 flex items-center justify-between transition-colors">
          <div>
            <h3 className="text-xs font-bold text-amber-900 dark:text-amber-100 mb-1 flex items-center gap-1.5">
              <Euro className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              Incentivi Maturati
            </h3>
            <p className="text-[11px] text-amber-700/70 dark:text-amber-500/70 mb-2">Energia condivisa e consumata</p>
            <h4 className="text-2xl font-bold text-amber-900 dark:text-amber-100">€ 1.250,00</h4>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 bg-amber-200/50 dark:bg-amber-900/40 px-2.5 py-1 rounded-md self-start">In attesa GSE</span>
        </div>

        {/* Box Risparmio in Bolletta */}
        <div className="bg-indigo-50/80 dark:bg-indigo-950/20 rounded-2xl p-5 shadow-sm border border-indigo-200/80 dark:border-indigo-900/50 flex items-center justify-between transition-colors">
          <div>
            <h3 className="text-xs font-bold text-indigo-900 dark:text-indigo-100 mb-1 flex items-center gap-1.5">
              <Euro className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
              Risparmio in Bolletta
            </h3>
            <p className="text-[11px] text-indigo-700/70 dark:text-indigo-500/70 mb-2">Stima complessiva comunità</p>
            <h4 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100">€ 3.420,00</h4>
          </div>
          <span className="text-[10px] font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/40 px-2.5 py-1 rounded-md self-start flex items-center gap-1">
            <ArrowDownToLine className="w-3 h-3" />
            -16%
          </span>
        </div>

        {/* Box Efficienza e Sincronismo */}
        <div className="bg-sky-50/80 dark:bg-sky-950/20 rounded-2xl p-5 shadow-sm border border-sky-200/80 dark:border-sky-900/50 flex items-center justify-between transition-colors">
          <div>
            <h3 className="text-xs font-bold text-sky-900 dark:text-sky-100 mb-1 flex items-center gap-1.5">
              <BarChart3 className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
              Efficienza & Sincronismo
            </h3>
            <div className="flex items-baseline gap-3 mt-2">
              <div>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mb-0.5">Indice</p>
                <h4 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">42%</h4>
              </div>
              <div className="w-px h-8 bg-zinc-200 dark:bg-zinc-700"></div>
              <div>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mb-0.5">Non incentivata</p>
                <h4 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">320 kWh</h4>
              </div>
            </div>
          </div>
          <span className="text-rose-500 dark:text-rose-400 flex items-center gap-1 text-xs font-bold self-start bg-rose-50 dark:bg-rose-900/30 px-2.5 py-1 rounded-md">
            <AlertTriangle className="w-3 h-3" />
            Basso
          </span>
        </div>
      </div>

      {/* Charts Area + Membri */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-1 lg:col-span-2 bg-white dark:bg-zinc-900 rounded-2xl p-4 sm:p-6 shadow-sm border border-zinc-200 dark:border-zinc-800 flex flex-col h-full transition-colors">
          <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-4 sm:mb-6">Andamento Settimanale (kWh)</h3>
          <div className="flex-1 w-full min-h-[280px] md:min-h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e4e4e7" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#71717a', fontSize: 11 }} dy={10} />
                <YAxis width={40} axisLine={false} tickLine={false} tick={{ fill: '#71717a', fontSize: 11 }} />
                <Tooltip
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Legend iconType="circle" wrapperStyle={{ paddingTop: '50px' }} />
                <Line type="monotone" dataKey="produzione" name="Produzione" stroke="#f59e0b" strokeWidth={3} dot={false} activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="prelievo" name="Prelievo" stroke="#f43f5e" strokeWidth={3} dot={false} />
                <Line type="monotone" dataKey="autoconsumo" name="Autoconsumo" stroke="#10b981" strokeWidth={3} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-2xl p-4 sm:p-6 shadow-sm border border-zinc-200 dark:border-zinc-800 flex flex-col transition-colors">
          <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-4 sm:mb-6">Membri CER</h3>

          <div className="space-y-4 flex-1">
            {[
              { id: 'MEM-001', name: 'Marco Bianchi', role: 'Consumer', status: 'Attivo', color: 'bg-emerald-500', incentive: '€ 12,40' },
              { id: 'MEM-002', name: 'Laura Ferretti', role: 'Consumer', status: 'In Attesa', color: 'bg-amber-500', incentive: null },
              { id: 'MEM-003', name: 'Giovanni Mazza', role: 'Consumer', status: 'Attivo', color: 'bg-emerald-500', incentive: '€ 8,90' },
              { id: 'MEM-004', name: 'Sofia Gentile', role: 'Prosumer', status: 'Attivo', color: 'bg-emerald-500', incentive: '€ 34,20' },
              { id: 'MEM-005', name: 'Azienda Sole Srl', role: 'Producer', status: 'Offline', color: 'bg-rose-500', incentive: null },
            ].map(member => (
              <div key={member.id} onClick={() => navigate(`/admin/community/${member.id}`)} className="flex items-center justify-between p-3 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-xl transition-colors border border-transparent hover:border-zinc-100 dark:hover:border-zinc-700 cursor-pointer group">
                <div className="flex items-center gap-3 min-w-0">
                  <div className={`w-2.5 h-2.5 rounded-full ${member.color} flex-shrink-0`} />
                  <div className="min-w-0">
                    <p className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{member.name}</p>
                    <div className="flex items-center gap-2">
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate">{member.role}</p>
                      {member.incentive && (
                        <>
                          <span className="text-zinc-300 dark:text-zinc-600">•</span>
                          <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400">{member.incentive}</p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="text-xs font-medium text-zinc-700 dark:text-zinc-300 whitespace-nowrap bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 rounded-md ml-3 shrink-0">
                  {member.status}
                </div>
              </div>
            ))}
          </div>

          <button onClick={() => navigate('/admin/community')} className="w-full mt-4 py-2 border border-zinc-200 dark:border-zinc-700 rounded-lg text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors">
            Vedi tutti i membri
          </button>
        </div>
      </div>


      {/* ── Flussi Energetici Real-time ── */}
      <div className="bg-white dark:bg-zinc-900 rounded-2xl p-4 sm:p-6 shadow-sm border border-zinc-200 dark:border-zinc-800 animate-in fade-in duration-500 transition-colors">
        <div className="mb-6 sm:mb-10">
          <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100">Ultimi flussi rilevati</h3>
          <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-0.5 font-medium tracking-tight">Ultimo aggiornamento: Oggi, 14:30:00</p>
        </div>

        {/* Mobile: Card-based energy flow */}
        <div className="md:hidden space-y-3">
          {[
            { emoji: '☀️', label: 'Prodotta', value: '24.54 kW', color: 'border-blue-300 bg-blue-50 dark:bg-blue-950/30 dark:border-blue-800', textColor: 'text-blue-700 dark:text-blue-300' },
            { emoji: '🏘️', label: 'Consumata', value: '28.6 kW', color: 'border-rose-300 bg-rose-50 dark:bg-rose-950/30 dark:border-rose-800', textColor: 'text-rose-700 dark:text-rose-300' },
            { emoji: '⚡', label: 'Immessa in rete', value: '18.28 kW', color: 'border-amber-300 bg-amber-50 dark:bg-amber-950/30 dark:border-amber-800', textColor: 'text-amber-700 dark:text-amber-300' },
            { emoji: '🔄', label: 'Autoconsumata', value: '6.26 kW', color: 'border-sky-300 bg-sky-50 dark:bg-sky-950/30 dark:border-sky-800', textColor: 'text-sky-700 dark:text-sky-300' },
            { emoji: '🔋', label: 'Accumulo', value: '0 kW', color: 'border-zinc-300 bg-zinc-50 dark:bg-zinc-800 dark:border-zinc-700', textColor: 'text-zinc-600 dark:text-zinc-300' },
            { emoji: '🔵', label: 'Prelevata', value: '22.34 kW', color: 'border-red-300 bg-red-50 dark:bg-red-950/30 dark:border-red-800', textColor: 'text-red-700 dark:text-red-300', sub: 'di cui 18.28 kW autocons. virt.' },
          ].map((flow) => (
            <div key={flow.label} className={`flex items-center justify-between p-3.5 rounded-xl border-2 ${flow.color} transition-colors`}>
              <div className="flex items-center gap-3">
                <span className="text-xl">{flow.emoji}</span>
                <div>
                  <p className="text-xs font-bold text-zinc-600 dark:text-zinc-300 uppercase tracking-wider">{flow.label}</p>
                  {flow.sub && <p className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold mt-0.5">{flow.sub}</p>}
                </div>
              </div>
              <span className={`text-lg font-black tracking-tight ${flow.textColor}`}>{flow.value}</span>
            </div>
          ))}
        </div>

        {/* Desktop: SVG Flow Diagram */}
        <div className="hidden md:block relative w-full" style={{ height: '320px' }}>
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 900 320" preserveAspectRatio="xMidYMid meet">
            <defs>
              <style>{`
                @keyframes dash-flow { to { stroke-dashoffset: -24; } }
                @keyframes dash-flow-rev { to { stroke-dashoffset: 24; } }
                .flow-yellow { animation: dash-flow 0.8s linear infinite; }
                .flow-red    { animation: dash-flow-rev 0.8s linear infinite; }
                .flow-blue   { animation: dash-flow 0.8s linear infinite; }
              `}</style>
              <marker id="arrow-yellow" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
                <path d="M0,0 L7,3.5 L0,7 Z" fill="#eab308" />
              </marker>
              <marker id="arrow-red" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
                <path d="M0,0 L7,3.5 L0,7 Z" fill="#ef4444" />
              </marker>
              <marker id="arrow-blue" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
                <path d="M0,0 L7,3.5 L0,7 Z" fill="#3b82f6" />
              </marker>
            </defs>

            {/* === LINEE DI FLUSSO === */}

            {/* 🟡 Immessa in rete: Arco alto di giunzione tra Prodotta e Rete */}
            <path
              d="M 120,70 L 120,38 L 780,38 L 780,70"
              fill="none" stroke="#eab308" strokeWidth="2"
              strokeDasharray="8 6" className="flow-yellow"
              markerEnd="url(#arrow-yellow)"
            />

            {/* 🔵 Autoconsumata: Dal basso di prodotta verso Consumata */}
            <path
              d="M 120,185 L 120,245 L 398,245"
              fill="none" stroke="#3b82f6" strokeWidth="2"
              strokeDasharray="8 6" className="flow-blue"
              markerEnd="url(#arrow-blue)"
            />

            {/* 🔴 Prelevata: Dal nodo Rete verso Consumata (abbassata leggermente) */}
            <path
              d="M 725,140 L 515,245"
              fill="none" stroke="#ef4444" strokeWidth="2"
              strokeDasharray="8 6" className="flow-red"
              markerEnd="url(#arrow-red)"
            />

            {/* === VALORI E ETICHETTE (kW) === */}

            {/* Immessa in Rete (Centro-Top) */}
            <text x="450" y="22" textAnchor="middle" fontSize="15" fontWeight="800" fill="#ca8a04">18.28 kW</text>
            <text x="450" y="34" textAnchor="middle" fontSize="10" fontWeight="600" fill="#a16207">Immessa in rete</text>

            {/* Autoconsumata (Basso-Sinistra) */}
            <text x="260" y="215" textAnchor="middle" fontSize="14" fontWeight="800" fill="#1d4ed8">6.26 kW</text>
            <text x="260" y="228" textAnchor="middle" fontSize="10" fontWeight="600" fill="#3b82f6">Autoconsumata</text>

            {/* Prelevata (Destra) — Spostata più in ALTO per evitare la freccia */}
            <text x="680" y="125" textAnchor="middle" fontSize="14" fontWeight="800" fill="#dc2626">22.34 kW</text>
            <text x="680" y="137" textAnchor="middle" fontSize="10" fontWeight="600" fill="#ef4444">Prelevata</text>

            {/* Autoconsumo Virtuale (Dettaglio Prelevata) — Spostata decisamente in GIÙ per stare sotto la freccia */}
            <text x="680" y="200" textAnchor="middle" fontSize="10" fontStyle="italic" fontWeight="700" fill="#22c55e">di cui</text>
            <text x="680" y="213" textAnchor="middle" fontSize="13" fontWeight="800" fill="#16a34a">18.28 kW</text>
            <text x="680" y="225" textAnchor="middle" fontSize="10" fontWeight="600" fill="#22c55e">Autoconsumata virt.</text>

            {/* === NODI (Disposti su due livelli) === */}

            {/* Prodotta (Sinistra) */}
            <circle cx="120" cy="128" r="55" fill="white" stroke="#93c5fd" strokeWidth="2.5" />
            <text x="120" y="115" textAnchor="middle" fontSize="14">☀️</text>
            <text x="120" y="132" textAnchor="middle" fontSize="16" fontWeight="900" fill="#1d4ed8">24.54 kW</text>
            <text x="120" y="148" textAnchor="middle" fontSize="10" fontWeight="700" fill="#6b7280">Prodotta</text>

            {/* Accumulo (Al centro tra Prodotta e Rete) */}
            <circle cx="300" cy="128" r="42" fill="white" stroke="#d1d5db" strokeWidth="2" />
            <text x="300" y="118" textAnchor="middle" fontSize="13">🔋</text>
            <text x="300" y="136" textAnchor="middle" fontSize="16" fontWeight="900" fill="#6b7280">0 kW</text>
            <text x="300" y="152" textAnchor="middle" fontSize="10" fontWeight="700" fill="#9ca3af">Accumulo</text>

            {/* Rete (Destra) */}
            <circle cx="780" cy="128" r="55" fill="white" stroke="#fde047" strokeWidth="2.5" />
            <text x="780" y="115" textAnchor="middle" fontSize="18">⚡</text>
            <text x="780" y="138" textAnchor="middle" fontSize="11" fontWeight="700" fill="#9ca3af">Rete</text>

            {/* Consumata (In basso al centro) */}
            <circle cx="450" cy="245" r="52" fill="white" stroke="#fca5a5" strokeWidth="2.5" />
            <text x="450" y="232" textAnchor="middle" fontSize="14">🏘️</text>
            <text x="450" y="250" textAnchor="middle" fontSize="17" fontWeight="900" fill="#dc2626">28.6 kW</text>
            <text x="450" y="265" textAnchor="middle" fontSize="10" fontWeight="700" fill="#9ca3af">Consumata</text>
          </svg>
        </div>
      </div>
    </div>
  )
}
