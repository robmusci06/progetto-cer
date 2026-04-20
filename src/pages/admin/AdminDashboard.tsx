import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend } from 'recharts'
import { Zap, Battery, ArrowDownToLine, Activity, Leaf, Euro, BarChart3, AlertTriangle } from 'lucide-react'

const mockData = [
  { name: 'Lun', prelievo: 400, produzione: 240, autoconsumo: 240 },
  { name: 'Mar', prelievo: 300, produzione: 139, autoconsumo: 139 },
  { name: 'Mer', prelievo: 200, produzione: 380, autoconsumo: 200 },
  { name: 'Gio', prelievo: 278, produzione: 390, autoconsumo: 278 },
  { name: 'Ven', prelievo: 189, produzione: 480, autoconsumo: 189 },
  { name: 'Sab', prelievo: 239, produzione: 380, autoconsumo: 239 },
  { name: 'Dom', prelievo: 349, produzione: 430, autoconsumo: 349 },
]

export default function AdminDashboard() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900">Dashboard</h1>
          <p className="text-zinc-500 mt-1">Visione d'insieme aggregata della Comunità Energetica Rinnovabile.</p>
        </div>
        <div className="bg-white px-4 py-2 rounded-lg border border-zinc-200 shadow-sm text-sm font-medium text-zinc-600">
          Ultimo aggiornamento: <span className="text-zinc-900">Oggi, 14:30</span>
        </div>
      </div>

      {/* Riga 1: KPI 2x2 (sinistra) + Impatto Ambientale (destra) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* KPI Cards - Griglia 2x2 compatta */}
        <div className="lg:col-span-2 grid grid-cols-2 gap-3">
          {[
            { title: "Produzione Comunitaria", value: "1,240 kWh", trend: "+12%", icon: Zap, color: "text-amber-500", bg: "bg-amber-50" },
            { title: "Prelievo da Rete", value: "850 kWh", trend: "-5%", icon: ArrowDownToLine, color: "text-rose-500", bg: "bg-rose-50" },
            { title: "Autoconsumo Virtuale", value: "920 kWh", trend: "+18%", icon: Activity, color: "text-emerald-500", bg: "bg-emerald-50" },
            { title: "Capacità Accumulo", value: "85%", trend: "Stabile", icon: Battery, color: "text-indigo-500", bg: "bg-indigo-50" },
          ].map((kpi, i) => (
            <div key={i} className="bg-white px-4 py-3.5 rounded-2xl shadow-sm border border-zinc-200 flex items-center gap-3">
              <div className={`p-2 rounded-xl ${kpi.bg} flex-shrink-0`}>
                <kpi.icon className={`w-4 h-4 ${kpi.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-medium text-zinc-400 truncate">{kpi.title}</p>
                <h3 className="text-xl font-bold text-zinc-900 leading-tight">{kpi.value}</h3>
              </div>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${kpi.trend.startsWith('+') ? 'bg-emerald-100 text-emerald-700' : kpi.trend.startsWith('-') ? 'bg-rose-100 text-rose-700' : 'bg-zinc-100 text-zinc-600'}`}>
                {kpi.trend}
              </span>
            </div>
          ))}
        </div>

        {/* Impatto Ambientale (destra) - compatto */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-zinc-200 flex flex-col justify-between">
          <h3 className="text-sm font-bold text-zinc-900 mb-4 flex items-center gap-2">
            <Leaf className="w-4 h-4 text-emerald-500" />
            Impatto Ambientale
          </h3>
          <div className="space-y-3">
            {/* Punteggio Green + valore affiancati */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-zinc-400 mb-1">Punteggio Green</p>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4].map(i => <Leaf key={i} className="w-4 h-4 text-emerald-500 fill-emerald-500" />)}
                  <Leaf className="w-4 h-4 text-emerald-100 fill-emerald-100" />
                </div>
              </div>
              <span className="text-3xl font-bold text-zinc-900">4.6</span>
            </div>
            <div className="pt-3 border-t border-zinc-100 space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="text-zinc-500">CO2 Evitata</span>
                <span className="font-bold text-zinc-900">8.631 kg</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-zinc-500">Alberi Equivalenti</span>
                <span className="font-bold text-zinc-900">719</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Riga 2: Incentivi, Risparmio, Efficienza - 3 colonne */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Box Incentivi Maturati */}
        <div className="bg-amber-50/80 rounded-2xl p-5 shadow-sm border border-amber-200/80 flex items-center justify-between">
          <div>
            <h3 className="text-xs font-bold text-amber-900 mb-1 flex items-center gap-1.5">
              <Euro className="w-3.5 h-3.5 text-amber-600" />
              Incentivi Maturati
            </h3>
            <p className="text-[11px] text-amber-700/70 mb-2">Energia condivisa e consumata</p>
            <h4 className="text-2xl font-bold text-amber-900">€ 1.250,00</h4>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-200/50 px-2.5 py-1 rounded-md self-start">In attesa GSE</span>
        </div>

        {/* Box Risparmio in Bolletta */}
        <div className="bg-indigo-50/80 rounded-2xl p-5 shadow-sm border border-indigo-200/80 flex items-center justify-between">
          <div>
            <h3 className="text-xs font-bold text-indigo-900 mb-1 flex items-center gap-1.5">
              <Euro className="w-3.5 h-3.5 text-indigo-600" />
              Risparmio in Bolletta
            </h3>
            <p className="text-[11px] text-indigo-700/70 mb-2">Stima complessiva comunità</p>
            <h4 className="text-2xl font-bold text-indigo-900">€ 3.420,00</h4>
          </div>
          <span className="text-[10px] font-semibold text-indigo-600 bg-indigo-100 px-2.5 py-1 rounded-md self-start flex items-center gap-1">
            <ArrowDownToLine className="w-3 h-3" />
            -16%
          </span>
        </div>

        {/* Box Efficienza e Sincronismo */}
        <div className="bg-sky-50/80 rounded-2xl p-5 shadow-sm border border-sky-200/80 flex items-center justify-between">
          <div>
            <h3 className="text-xs font-bold text-sky-900 mb-1 flex items-center gap-1.5">
              <BarChart3 className="w-3.5 h-3.5 text-sky-600" />
              Efficienza & Sincronismo
            </h3>
            <div className="flex items-baseline gap-3 mt-2">
              <div>
                <p className="text-[11px] text-zinc-500 mb-0.5">Indice</p>
                <h4 className="text-2xl font-bold text-zinc-900">42%</h4>
              </div>
              <div className="w-px h-8 bg-zinc-200"></div>
              <div>
                <p className="text-[11px] text-zinc-500 mb-0.5">Non incentivata</p>
                <h4 className="text-2xl font-bold text-zinc-900">320 kWh</h4>
              </div>
            </div>
          </div>
          <span className="text-rose-500 flex items-center gap-1 text-xs font-bold self-start bg-rose-50 px-2.5 py-1 rounded-md">
            <AlertTriangle className="w-3 h-3" />
            Basso
          </span>
        </div>
      </div>

      {/* Charts Area + Membri */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-1 lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-zinc-200">
          <h3 className="text-lg font-bold text-zinc-900 mb-6">Andamento Settimanale (kWh)</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e4e4e7" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#71717a' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#71717a' }} />
                <Tooltip
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
                <Line type="monotone" dataKey="produzione" name="Produzione" stroke="#f59e0b" strokeWidth={3} dot={false} activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="prelievo" name="Prelievo" stroke="#f43f5e" strokeWidth={3} dot={false} />
                <Line type="monotone" dataKey="autoconsumo" name="Autoconsumo" stroke="#10b981" strokeWidth={3} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-zinc-200 flex flex-col">
          <h3 className="text-lg font-bold text-zinc-900 mb-6">Membri CER</h3>

          <div className="space-y-4 flex-1">
            {[
              { id: 'MEM-001', name: 'Mario Rossi', role: 'Consumer', status: 'Attivo', color: 'bg-emerald-500' },
              { id: 'MEM-002', name: 'Azienda X', role: 'Prosumer', status: 'Attivo', color: 'bg-emerald-500' },
              { id: 'MEM-003', name: 'Luca Verdi', role: 'Producer', status: 'Offline', color: 'bg-rose-500' },
              { id: 'MEM-004', name: 'Anna Neri', role: 'Consumer', status: 'In Attesa', color: 'bg-amber-500' },
              { id: 'MEM-005', name: 'Condominio Sole', role: 'Prosumer', status: 'Attivo', color: 'bg-emerald-500' },
            ].map(member => (
              <div key={member.id} className="flex items-center justify-between p-3 hover:bg-zinc-50 rounded-xl transition-colors border border-transparent hover:border-zinc-100 cursor-default">
                <div className="flex items-center gap-3">
                  <div className={`w-2.5 h-2.5 rounded-full ${member.color} flex-shrink-0`} />
                  <div className="min-w-0">
                    <p className="font-semibold text-zinc-900 text-sm truncate">{member.name}</p>
                    <p className="text-xs text-zinc-500 truncate">{member.role}</p>
                  </div>
                </div>
                <div className="text-xs font-medium text-zinc-700 whitespace-nowrap bg-zinc-100 px-2.5 py-1 rounded-md ml-3">
                  {member.status}
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-4 py-2 border border-zinc-200 rounded-lg text-sm font-medium text-indigo-600 hover:bg-indigo-50 transition-colors">
            Vedi tutti i membri
          </button>
        </div>
      </div>
    </div>
  )
}
