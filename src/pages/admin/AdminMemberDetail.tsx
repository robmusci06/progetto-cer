import { useParams } from 'react-router-dom'
import { mockMembers } from '../../data/mockMembers'
import { 
  Mail, Phone, MapPin, 
  TrendingUp, Zap, 
  Calendar, Euro, Activity, 
  Send, FileText, Cpu, Info, Users
} from 'lucide-react'
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts'

export default function AdminMemberDetail() {
  const { id } = useParams()

  // Find the member by ID or fallback to the first one
  const member = mockMembers.find(m => m.id === id) || mockMembers[0]

  const isProducerRole = member.role === 'Producer' || member.role === 'Prosumer'

  return (
    <div className="space-y-6 animate-in fade-in duration-700 pb-10">
      
      {/* Main Header Card */}
      <div className="bg-white p-6 rounded-3xl border border-zinc-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-2xl bg-blue-500 text-white flex items-center justify-center text-2xl font-bold">
            {member.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <h1 className="text-3xl font-bold text-zinc-900 tracking-tight">{member.name}</h1>
            <div className="flex items-center gap-2 mt-1">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-indigo-50 text-indigo-600 text-[10px] font-bold uppercase tracking-wider">
                <Users className="w-3 h-3" /> {member.role}
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase tracking-wider">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> {member.status}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="bg-zinc-900 text-white px-6 py-3 rounded-xl text-xs font-bold flex items-center gap-2 hover:bg-black transition-all shadow-sm active:scale-95">
             <Send className="w-4 h-4" /> Invia Messaggio
          </button>
          <button className="bg-white text-zinc-600 border border-zinc-200 px-6 py-3 rounded-xl text-xs font-bold flex items-center gap-2 hover:bg-zinc-50 transition-all shadow-sm">
             <FileText className="w-4 h-4" /> Esporta Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* ── Left Column: Registry ── */}
        <div className="lg:col-span-4">
          <div className="bg-white p-8 rounded-[2rem] border border-zinc-100 shadow-sm h-fit">
            <h3 className="text-lg font-bold text-zinc-900 mb-8 flex items-center gap-2 tracking-tight">
              <Info className="w-5 h-5 text-indigo-500" /> Anagrafica membro
            </h3>
            
            <div className="space-y-6">
              {[
                { icon: <Cpu className="w-3.5 h-3.5" />, label: 'ID POD', value: member.pod, mono: true },
                { icon: <MapPin className="w-3.5 h-3.5" />, label: 'Indirizzo', value: member.address },
                { icon: <Mail className="w-3.5 h-3.5" />, label: 'Email', value: member.email },
                { icon: <Phone className="w-3.5 h-3.5" />, label: 'Telefono', value: member.phone },
                { icon: <Activity className="w-3.5 h-3.5" />, label: 'Tipologia', value: member.type },
                { icon: <Calendar className="w-3.5 h-3.5" />, label: 'Membro dal', value: member.joinedAt },
              ].map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                    {item.label}
                  </div>
                  <p className={`text-sm text-zinc-900 font-bold ${item.mono ? 'bg-zinc-50 px-2 py-0.5 rounded border border-zinc-100/50 w-fit font-mono' : ''}`}>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Right Column: Analysis ── */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* KPIs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: 'Consumo oggi', value: member.consumption, icon: <Zap className="w-4 h-4" />, color: 'text-amber-500', trend: member.trends.consumption },
              { label: 'Incentivo mese', value: member.incentive, icon: <Euro className="w-4 h-4" />, color: 'text-emerald-500', trend: member.trends.incentive },
              { label: 'Energy score', value: '88/100', icon: <TrendingUp className="w-4 h-4" />, color: 'text-indigo-500', trend: member.trends.score },
            ].map((kpi, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
                <div className="flex justify-between items-start mb-4">
                   <div className={`w-8 h-8 rounded-xl bg-white border border-zinc-100 flex items-center justify-center shadow-sm ${kpi.color}`}>
                      {kpi.icon}
                   </div>
                   <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg">
                      {kpi.trend}
                   </span>
                </div>
                <div>
                   <p className="text-xs font-medium text-zinc-400 mb-0.5">{kpi.label}</p>
                   <p className="text-2xl font-bold text-zinc-900 tracking-tight">{kpi.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Graph Card */}
          <div className="bg-white p-8 rounded-[2rem] border border-zinc-100 shadow-sm flex flex-col">
             <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 tracking-tight">Andamento energetico</h3>
                  <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest mt-1">Dettaglio flussi orari nelle ultime 24 ore</p>
                </div>
             </div>
             
             <div className="h-[280px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={member.energyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorConsumo" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorProduzione" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f4f4f5" />
                    <XAxis 
                      dataKey="time" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#a1a1aa', fontSize: 10, fontWeight: 700 }} 
                      dy={10}
                    />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#a1a1aa', fontSize: 10, fontWeight: 700 }} 
                    />
                    <Tooltip 
                      contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                    />
                    <Legend iconType="circle" verticalAlign="top" align="right" wrapperStyle={{ paddingBottom: '20px', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase' }} />
                    <Area 
                      type="monotone" 
                      dataKey="consumo" 
                      name="Consumo (kWh)" 
                      stroke="#3b82f6" 
                      strokeWidth={3} 
                      fillOpacity={1} 
                      fill="url(#colorConsumo)" 
                    />
                    {isProducerRole && (
                      <Area 
                        type="monotone" 
                        dataKey="produzione" 
                        name="Produzione (kWh)" 
                        stroke="#f59e0b" 
                        strokeWidth={3} 
                        fillOpacity={1} 
                        fill="url(#colorProduzione)" 
                      />
                    )}
                  </AreaChart>
                </ResponsiveContainer>
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}
