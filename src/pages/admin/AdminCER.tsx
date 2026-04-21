import { useState } from 'react'
import { 
  Zap, Shield, Globe, Share2, 
  TrendingUp, Settings2, Users, ArrowRight, Activity
} from 'lucide-react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const mockTrendData = [
  { name: 'Gen', fondo: 400 },
  { name: 'Feb', fondo: 850 },
  { name: 'Mar', fondo: 1250 },
]

export default function AdminCER() {
  const [activeTab, setActiveTab] = useState<'params' | 'plant' | 'incentives'>('params')

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-10 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900">Gestione CER & Configurazione</h1>
          <p className="text-zinc-500 mt-1">Amministra i parametri tecnici, gli impianti e le logiche di ripartizione incentivi.</p>
        </div>
        <div className="bg-indigo-50 px-4 py-2 rounded-xl border border-indigo-100 flex items-center gap-2">
           <Shield className="w-4 h-4 text-indigo-600" />
           <span className="text-sm font-bold text-indigo-900">ID CER: CER-SOLE-2026</span>
        </div>
      </div>

      {/* Internal Navigation Tabs */}
      <div className="flex bg-zinc-100 p-1 rounded-xl w-fit">
        <button 
          onClick={() => setActiveTab('params')}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${activeTab === 'params' ? 'bg-white text-indigo-700 shadow-sm' : 'text-zinc-500 hover:text-zinc-700'}`}
        >
          <Globe className="w-4 h-4" /> Dati e Parametri
        </button>
        <button 
          onClick={() => setActiveTab('plant')}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${activeTab === 'plant' ? 'bg-white text-indigo-700 shadow-sm' : 'text-zinc-500 hover:text-zinc-700'}`}
        >
          <Zap className="w-4 h-4" /> Gestione Impianto
        </button>
        <button 
          onClick={() => setActiveTab('incentives')}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${activeTab === 'incentives' ? 'bg-white text-indigo-700 shadow-sm' : 'text-zinc-500 hover:text-zinc-700'}`}
        >
          <TrendingUp className="w-4 h-4" /> Ripartizione Incentivi
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-zinc-200 overflow-hidden min-h-[500px]">
        
        {/* ── TAB: PARAMS ── */}
        {activeTab === 'params' && (
          <div className="p-8 space-y-8 animate-in fade-in duration-500">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: 'Anagrafica CER', desc: 'Denominazione, P.IVA e Sede Legale.', icon: <Globe className="w-5 h-5 text-indigo-500" /> },
                  { title: 'Configurazione GSE', desc: 'Codice univoco e parametri di contratto.', icon: <Shield className="w-5 h-5 text-emerald-500" /> },
                  { title: 'Area Sottesa', desc: 'Perimetro geografico della cabina primaria.', icon: <Share2 className="w-5 h-5 text-amber-500" /> },
                ].map((item, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-zinc-50 border border-zinc-100">
                    <div className="h-10 w-10 rounded-xl bg-white border border-zinc-100 flex items-center justify-center mb-4 shadow-sm">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-zinc-900">{item.title}</h3>
                    <p className="text-sm text-zinc-500 mt-1">{item.desc}</p>
                    <button className="text-xs font-bold text-indigo-600 mt-4 flex items-center gap-1 hover:gap-2 transition-all">
                      Modifica Parametri <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                ))}
             </div>
          </div>
        )}

        {/* ── TAB: PLANT ── */}
        {activeTab === 'plant' && (
          <div className="p-8 space-y-8 animate-in fade-in duration-500">
            <div className="flex items-center justify-between mb-2">
               <div>
                  <h3 className="text-xl font-bold text-zinc-900">Nodi di Produzione</h3>
                  <p className="text-zinc-500 text-sm">Monitoraggio in tempo reale degli impianti fotovoltaici della CER.</p>
               </div>
               <button className="bg-zinc-900 text-white px-4 py-2 rounded-xl text-sm font-medium">Aggiungi Impianto</button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {[
                 { name: 'Impianto Nord-1', cap: '120 kWp', status: 'Online', yield: '4.2 kWh' },
                 { name: 'Impianto Centrale', cap: '85 kWp', status: 'In Manutenzione', yield: '0 kWh' },
               ].map((plant, i) => (
                 <div key={i} className="flex items-center gap-4 p-5 rounded-2xl border border-zinc-100 bg-white shadow-sm">
                    <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${plant.status === 'Online' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                      <Activity className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                       <p className="font-bold text-zinc-900">{plant.name}</p>
                       <p className="text-xs text-zinc-500">Capacità: {plant.cap}</p>
                    </div>
                    <div className="text-right">
                       <p className="text-sm font-bold text-zinc-900">{plant.yield}</p>
                       <p className="text-[10px] uppercase font-bold text-zinc-400">{plant.status}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        )}

        {/* ── TAB: INCENTIVES ── */}
        {activeTab === 'incentives' && (activeTab === 'incentives' && (
          <div className="p-8 space-y-8 animate-in fade-in duration-500">
             <div className="flex flex-col lg:flex-row gap-8">
                
                {/* Rules Section (Summarized from old Settings) */}
                <div className="flex-1 space-y-6">
                   <h3 className="text-lg font-bold text-zinc-900 flex items-center gap-2">
                     <Settings2 className="w-5 h-5 text-indigo-500" /> Regole di Ripartizione
                   </h3>
                   <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-100 space-y-6">
                      <div className="flex items-center justify-between text-sm">
                         <span className="font-medium text-zinc-600">Quota Producer</span>
                         <span className="font-bold text-zinc-950 text-lg">40%</span>
                      </div>
                      <div className="h-2 w-full bg-zinc-200 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-400" style={{ width: '40%' }} />
                      </div>
                      
                      <div className="flex items-center justify-between text-sm pt-2">
                         <span className="font-medium text-zinc-600">Quota Consumer</span>
                         <span className="font-bold text-zinc-950 text-lg">40%</span>
                      </div>
                      <div className="h-2 w-full bg-zinc-200 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-400" style={{ width: '40%' }} />
                      </div>

                      <div className="flex items-center justify-between text-sm pt-2">
                         <span className="font-medium text-zinc-600">Quota Ente</span>
                         <span className="font-bold text-zinc-950 text-lg">20%</span>
                      </div>
                      <div className="h-2 w-full bg-zinc-200 rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-400" style={{ width: '20%' }} />
                      </div>
                   </div>
                   <button className="w-full py-3 bg-white border border-zinc-200 rounded-xl text-sm font-bold text-zinc-600 hover:bg-zinc-50 transition-colors">
                     Gestisci Regole Avanzate
                   </button>
                </div>

                {/* Per Member Allocation Section */}
                <div className="flex-1 space-y-6">
                   <h3 className="text-lg font-bold text-zinc-900 flex items-center gap-2">
                     <Users className="w-5 h-5 text-indigo-500" /> Ripartizione per Membro
                   </h3>
                   <div className="bg-white rounded-2xl border border-zinc-100 overflow-hidden shadow-sm">
                      <table className="w-full text-left text-sm">
                         <thead className="bg-zinc-50 border-b border-zinc-100 text-zinc-500 text-[10px] uppercase font-bold tracking-widest">
                            <tr>
                               <th className="p-4">Membro</th>
                               <th className="p-4 text-right">Incentivo Maturato</th>
                            </tr>
                         </thead>
                         <tbody className="divide-y divide-zinc-50">
                            {[
                              { name: 'Marco Bianchi', val: '€ 12,40' },
                              { name: 'Laura Ferretti', val: '€ 0,00' },
                              { name: 'Sofia Gentile', val: '€ 34,20' },
                            ].map((m, i) => (
                              <tr key={i} className="hover:bg-zinc-50/50">
                                 <td className="p-4 font-medium text-zinc-900">{m.name}</td>
                                 <td className="p-4 text-right font-bold text-emerald-600">{m.val}</td>
                              </tr>
                            ))}
                         </tbody>
                      </table>
                   </div>
                   <button className="w-full py-3 bg-zinc-900 text-white rounded-xl text-sm font-bold shadow-md hover:bg-zinc-800 transition-colors">
                     Scarica Report Mensile
                   </button>
                </div>
             </div>

             {/* Trend Mini-Box */}
             <div className="pt-8 border-t border-zinc-100">
                <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-[0.2em] mb-6 text-center">Trend Fondo Comunità</h4>
                <div className="h-48 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={mockTrendData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorFondoCER" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#10b981" stopOpacity={0.2}/>
                          <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis dataKey="name" hide />
                      <YAxis hide />
                      <Tooltip />
                      <Area type="monotone" dataKey="fondo" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorFondoCER)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  )
}
