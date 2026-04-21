import { useParams } from 'react-router-dom'
import { 
  Users, Zap, Sun, MapPin, Cpu, Euro, 
  Mail, Calendar, FileText, Send, Phone, Info,
  TrendingUp, TrendingDown, Activity
} from 'lucide-react'
import { 
  XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, AreaChart, Area 
} from 'recharts'

// ─────────────────────────────────────────────
// Dati mock (stessi di AdminCommunity per coerenza)
// ─────────────────────────────────────────────
const mockMembers = [
  {
    id: 'MEM-001',
    pod: 'IT001E00012345',
    name: 'Marco Bianchi',
    email: 'm.bianchi@example.com',
    phone: '+39 347 123 4567',
    role: 'Consumer' as const,
    type: 'Residenziale',
    address: 'Via Roma, 12',
    status: 'Attivo' as const,
    joinedAt: '12 Gen 2026',
    consumption: '3.2 kWh',
    lastUpdate: 'Oggi, 09:42',
    incentive: '€ 12,40',
  },
  {
    id: 'MEM-002',
    pod: 'IT001E00067890',
    name: 'Laura Ferretti',
    email: 'l.ferretti@example.com',
    phone: '+39 333 987 6543',
    role: 'Consumer' as const,
    type: 'Residenziale',
    address: 'Corso Italia, 5',
    status: 'In Attesa GSE' as const,
    joinedAt: '16 Apr 2026',
    consumption: '1.8 kWh',
    lastUpdate: 'Ieri, 23:59',
    incentive: null,
  },
  {
    id: 'MEM-003',
    pod: 'IT001E00054321',
    name: 'Giovanni Mazza',
    email: 'g.mazza@example.com',
    phone: '+39 06 555 4433',
    role: 'Consumer' as const,
    type: 'Condominio',
    address: 'Via Dante, 8',
    status: 'Attivo' as const,
    joinedAt: '25 Gen 2026',
    consumption: '5.7 kWh',
    lastUpdate: 'Oggi, 08:15',
    incentive: '€ 8,90',
  },
  {
    id: 'MEM-004',
    pod: 'IT001E00098765',
    name: 'Sofia Gentile',
    email: 's.gentile@example.com',
    phone: '+39 349 000 1122',
    role: 'Prosumer' as const,
    type: 'Residenziale',
    address: 'Piazza Garibaldi, 2',
    status: 'Attivo' as const,
    joinedAt: '03 Feb 2026',
    consumption: '2.1 kWh',
    lastUpdate: 'Oggi, 10:01',
    incentive: '€ 34,20',
  },
  {
    id: 'MEM-005',
    pod: 'IT001E00011111',
    name: 'Azienda Sole Srl',
    email: 'admin@aziendas.it',
    phone: '+39 02 888 7766',
    role: 'Producer' as const,
    type: 'Impresa',
    address: 'Strada Prov. 4',
    status: 'Offline' as const,
    joinedAt: '14 Mar 2026',
    consumption: '—',
    lastUpdate: '3 giorni fa',
    incentive: null,
  },
]

// Dati mock per il grafico (24 ore)
const energyData = [
  { time: '00:00', prod: 0, cons: 0.2 },
  { time: '04:00', prod: 0, cons: 0.1 },
  { time: '08:00', prod: 0.5, cons: 1.2 },
  { time: '12:00', prod: 4.2, cons: 0.8 },
  { time: '16:00', prod: 2.8, cons: 1.5 },
  { time: '20:00', prod: 0.1, cons: 2.4 },
  { time: '23:59', prod: 0, cons: 0.6 },
]

// ─────────────────────────────────────────────
// Stili/Config (stessi di AdminCommunity)
// ─────────────────────────────────────────────
const roleConfig = {
  Consumer: {
    badge: 'bg-blue-50 text-blue-700 border border-blue-200',
    avatar: 'from-blue-500 to-blue-400',
    icon: <Users className="h-4 w-4" />,
  },
  Prosumer: {
    badge: 'bg-orange-50 text-orange-700 border border-orange-200',
    avatar: 'from-orange-500 to-amber-400',
    icon: <Zap className="h-4 w-4" />,
  },
  Producer: {
    badge: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    avatar: 'from-emerald-500 to-teal-400',
    icon: <Sun className="h-4 w-4" />,
  },
}

const statusConfig = {
  Attivo: {
    dot: 'bg-emerald-500',
    text: 'text-emerald-700',
    pill: 'bg-emerald-50 border border-emerald-200',
  },
  'In Attesa GSE': {
    dot: 'bg-amber-400',
    text: 'text-amber-700',
    pill: 'bg-amber-50 border border-amber-200',
  },
  Offline: {
    dot: 'bg-rose-500',
    text: 'text-rose-700',
    pill: 'bg-rose-50 border border-rose-200',
  },
}

export default function AdminMemberDetail() {
  const { id } = useParams()
  
  const member = mockMembers.find(m => m.id === id) || mockMembers[0]
  const rc = roleConfig[member.role]
  const sc = statusConfig[member.status]

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-10 animate-in fade-in duration-500">
      
      {/* ── Header ── */}
      <div className="flex flex-col gap-4">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm overflow-hidden relative">
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
             {member.role === 'Producer' ? <Sun className="w-32 h-32" /> : <Users className="w-32 h-32" />}
          </div>

          <div className="flex items-center gap-5">
            <div className={`h-20 w-20 rounded-2xl bg-gradient-to-br ${rc.avatar} flex items-center justify-center text-white font-bold text-2xl shadow-lg border-4 border-white`}>
              {member.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-zinc-900">{member.name}</h1>
              <div className="flex items-center gap-3 mt-1.5">
                 <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${rc.badge}`}>
                   {rc.icon} {member.role}
                 </span>
                 <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${sc.pill} ${sc.text}`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${sc.dot} ${member.status === 'Attivo' ? 'animate-pulse' : ''}`} />
                    {member.status}
                 </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <button className="flex-1 md:flex-none bg-zinc-900 hover:bg-zinc-800 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-all shadow-sm flex items-center justify-center gap-2">
              <Send className="w-4 h-4" /> Invia Messaggio
            </button>
            <button className="flex-1 md:flex-none bg-white hover:bg-zinc-50 text-zinc-700 border border-zinc-200 px-5 py-2.5 rounded-xl text-sm font-medium transition-all shadow-sm flex items-center justify-center gap-2">
              <FileText className="w-4 h-4" /> Esporta Report
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* ── Left Column: Registry & Info ── */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm">
            <h3 className="text-lg font-bold text-zinc-900 mb-6 flex items-center gap-2">
              <Info className="w-5 h-5 text-indigo-500" /> 
              Anagrafica Membro
            </h3>
            
            <div className="space-y-5">
              {[
                { icon: <Cpu className="w-4 h-4" />, label: 'ID POD', value: member.pod, mono: true },
                { icon: <MapPin className="w-4 h-4" />, label: 'Indirizzo', value: member.address },
                { icon: <Mail className="w-4 h-4" />, label: 'Email', value: member.email },
                { icon: <Phone className="w-4 h-4" />, label: 'Telefono', value: member.phone },
                { icon: <Activity className="w-4 h-4" />, label: 'Tipologia', value: member.type },
                { icon: <Calendar className="w-4 h-4" />, label: 'Membro dal', value: member.joinedAt },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col gap-1">
                  <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                    {item.icon} {item.label}
                  </span>
                  <p className={`text-sm text-zinc-800 font-medium ${item.mono ? 'font-mono bg-zinc-50 px-2 py-0.5 rounded border border-zinc-100 w-fit' : ''}`}>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>


        </div>

        {/* ── Right Column: Energy Analysis ── */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Energy KPIs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: member.role === 'Producer' ? 'Produzione Oggi' : 'Consumo Oggi', value: member.consumption, icon: <Zap className="w-5 h-5 text-amber-500" />, trend: '+4%', trendUp: true },
              { label: 'Incentivo Mese', value: member.incentive || '—', icon: <Euro className="w-5 h-5 text-emerald-500" />, trend: '+12%', trendUp: true },
              { label: 'Energy Score', value: '88/100', icon: <TrendingUp className="w-5 h-5 text-indigo-500" />, trend: 'Top 10%', trendUp: true },
            ].map((kpi, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-zinc-100 shadow-sm flex flex-col gap-3">
                <div className="flex justify-between items-start">
                  <div className="p-2 rounded-lg bg-zinc-50 border border-zinc-100">{kpi.icon}</div>
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-0.5 ${kpi.trendUp ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                    {kpi.trendUp ? <TrendingUp className="w-2.5 h-2.5" /> : <TrendingDown className="w-2.5 h-2.5" />}
                    {kpi.trend}
                  </span>
                </div>
                <div>
                  <p className="text-xs font-medium text-zinc-500">{kpi.label}</p>
                  <p className="text-2xl font-bold text-zinc-900">{kpi.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Chart Section */}
          <div className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm">
            <div className="flex justify-between items-end mb-8">
              <div>
                <h3 className="text-xl font-bold text-zinc-900">Andamento Energetico</h3>
                <p className="text-sm text-zinc-500 mt-1">Dettaglio flussi orari nelle ultime 24 ore.</p>
              </div>
              <div className="flex items-center gap-4 text-xs font-semibold">
                <div className="flex items-center gap-1.5">
                   <div className="w-3 h-3 rounded-full bg-indigo-500" />
                   <span className="text-zinc-600">Consumo (kWh)</span>
                </div>
                {member.role !== 'Consumer' && (
                  <div className="flex items-center gap-1.5">
                   <div className="w-3 h-3 rounded-full bg-emerald-500" />
                   <span className="text-zinc-600">Produzione (kWh)</span>
                  </div>
                )}
              </div>
            </div>

            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={energyData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorCons" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorProd" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis 
                    dataKey="time" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 10, fill: '#94a3b8' }} 
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 10, fill: '#94a3b8' }} 
                  />
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="cons" 
                    stroke="#6366f1" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorCons)" 
                  />
                  {member.role !== 'Consumer' && (
                    <Area 
                      type="monotone" 
                      dataKey="prod" 
                      stroke="#10b981" 
                      strokeWidth={3}
                      fillOpacity={1} 
                      fill="url(#colorProd)" 
                    />
                  )}
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Quick Stats / History */}
          <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-200/50 flex flex-col md:flex-row items-center gap-8">
             <div className="flex-1">
                <h4 className="font-bold text-zinc-900 mb-2 whitespace-nowrap">Riepilogo Incentivi</h4>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  L'utente ha contribuito per il 15% all'autoconsumo totale della CER in questa fascia oraria, maturando un incremento dell'incentivo rispetto alla media.
                </p>
             </div>
             <div className="h-10 w-px bg-zinc-200 hidden md:block" />
             <div className="flex gap-10">
                <div className="text-center">
                   <p className="text-2xl font-bold text-zinc-900">124 kWh</p>
                   <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mt-1">Tot. Mensile</p>
                </div>
                <div className="text-center">
                   <p className="text-2xl font-bold text-indigo-600">€ 42.10</p>
                   <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mt-1">Risparmio Stim.</p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  )
}
