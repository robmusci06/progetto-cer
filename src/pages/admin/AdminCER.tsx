import { useState } from 'react'
import { 
  Zap, Shield, Globe, 
  TrendingUp, Settings2, Users, ArrowRight,
  Battery, Cpu, FileText, CheckCircle2,
  AlertCircle, Download, Save, Info,
  Sun, MapPin, Building
} from 'lucide-react'
import { AreaChart, Area, ResponsiveContainer } from 'recharts'

const mockTrendData = [
  { name: 'Ott', fondo: 240 },
  { name: 'Nov', fondo: 520 },
  { name: 'Dic', fondo: 850 },
  { name: 'Gen', fondo: 1250 },
  { name: 'Feb', fondo: 1420 },
  { name: 'Mar', fondo: 1850 },
]

export default function AdminCER() {
  const [activeTab, setActiveTab] = useState<'general' | 'incentives'>('general')
  
  // State for interactive sliders
  const [allocation, setAllocation] = useState({
    producer: 40,
    consumer: 40,
    ente: 20
  })

  const handleAllocationChange = (type: keyof typeof allocation, value: number) => {
    // Basic logic to keep sum around 100 for demo purposes
    setAllocation(prev => ({ ...prev, [type]: value }))
  }

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10 animate-in fade-in duration-700">
      
      {/* Header View */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 px-4 sm:px-0">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900">Gestione CER</h1>
          <p className="text-zinc-500 mt-1">Configurazione tecnica, monitoraggio asset e regole finanziarie.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-white px-4 py-2 rounded-xl border border-zinc-200 shadow-sm flex items-center gap-2">
             <Shield className="w-4 h-4 text-emerald-600" />
             <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">ID CER:</span>
             <span className="text-sm font-black text-zinc-900 tracking-tight">CER-SOLE-2026</span>
          </div>
        </div>
      </div>

      {/* Main Tab Navigation */}
      <div className="flex bg-zinc-100/80 backdrop-blur-md p-1 rounded-2xl w-fit border border-zinc-200 ml-4 sm:ml-0">
        {[
          { id: 'general', icon: Globe, label: 'Dati Generali' },
          { id: 'incentives', icon: TrendingUp, label: 'Ripartizione Incentivi' },
        ].map(tab => (
          <button 
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${activeTab === tab.id ? 'bg-white text-indigo-700 shadow-sm border border-zinc-100' : 'text-zinc-500 hover:text-zinc-800'}`}
          >
            <tab.icon className="w-4 h-4" /> {tab.label}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-zinc-200 overflow-hidden min-h-[600px] mx-4 sm:mx-0">
        
        {/* ── TAB: GENERAL (Dati Generali & Asset) ── */}
        {activeTab === 'general' && (
          <div className="p-8 space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
            
             {/* TOP SECTION: Header Card & Map */}
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Header Info Card */}
                <div className="bg-white rounded-3xl p-6 border border-zinc-100 shadow-sm flex flex-col justify-between">
                  <div className="flex items-center gap-4 border-b border-zinc-50 pb-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center shadow-sm">
                      <Sun className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-zinc-900 tracking-tight">CER SOLE</h2>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6 text-zinc-500 font-medium mb-6">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-emerald-500" /> <span>54 kW</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-emerald-500" /> <span>5 Membri</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-emerald-500" /> <span>Matera, Italia</span>
                    </div>
                  </div>

                  <div className="space-y-4 border-t border-zinc-50 pt-4">
                    <div className="flex items-center flex-wrap gap-2">
                      <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest min-w-[140px]">Stato della Comunità:</span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">active</span>
                    </div>
                    <div className="flex items-center flex-wrap gap-2">
                       <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest min-w-[140px]">Struttura Legale:</span>
                       <span className="text-xs font-bold text-white bg-emerald-500 px-3 py-1 rounded-full">Associazione di diritto civile riconosciuta</span>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="bg-zinc-100 rounded-3xl overflow-hidden border border-zinc-100 shadow-sm h-64 relative">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    scrolling="no" 
                    marginHeight={0} 
                    marginWidth={0} 
                    title="Matera Map"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=16.58,40.65,16.62,40.68&layer=mapnik&marker=40.66,16.60" 
                    className="filter brightness-100 contrast-125 saturate-50"
                  ></iframe>
                </div>
             </div>

             {/* MIDDLE SECTION: Forms */}
             <div className="bg-white rounded-3xl p-8 border border-zinc-100 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-zinc-900 flex items-center gap-2">
                    <Settings2 className="w-5 h-5 text-indigo-500" /> Anagrafica CER
                  </h3>
                  <button className="text-[11px] font-bold text-white bg-zinc-900 px-4 py-2 rounded-xl flex items-center gap-1.5 hover:bg-zinc-800 transition-colors">
                    Salva modifiche
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest px-1">Nome CER</label>
                    <input type="text" defaultValue="Sole" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:bg-white transition-colors" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest px-1">Codice Fiscale CER</label>
                    <input type="text" defaultValue="AHDYEISBEUE7483" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:bg-white transition-colors" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest px-1">Codice Area</label>
                    <input type="text" defaultValue="AC5673638288" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:bg-white transition-colors" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest px-1">Indirizzo</label>
                    <input type="text" defaultValue="Via Roma 123, 75100 Matera (MT)" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:bg-white transition-colors" />
                  </div>
                  <div className="md:col-span-2 space-y-1.5">
                    <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest px-1">Descrizione</label>
                    <textarea rows={4} placeholder="Scrivi qui una descrizione dettagliata della CER Sole..." className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:bg-white transition-colors resize-none"></textarea>
                  </div>
                </div>
             </div>

             {/* BOTTOM SECTION: Asset & POD Collegati */}
             <div className="space-y-8 pt-4 border-t border-zinc-100">
                
                {/* 1. Unico Impianto */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-zinc-900 px-1">Impianto di Produzione</h3>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Online
                    </div>
                  </div>

                  <div className="p-6 rounded-3xl bg-white border border-zinc-100 shadow-sm hover:shadow-md hover:border-indigo-100 transition-all">
                     <div className="flex items-center justify-between mb-6">
                       <div className="flex items-center gap-4">
                         <div className="h-12 w-12 rounded-2xl flex items-center justify-center bg-emerald-50 text-emerald-600">
                           <Zap className="w-6 h-6" />
                         </div>
                         <div>
                           <p className="font-bold text-zinc-900 uppercase tracking-tight text-sm">Impianto FV CER Sole</p>
                           <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">Pannelli Fotovoltaici • 54 kWp</p>
                         </div>
                       </div>
                       <div className="text-right hidden sm:block">
                         <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Energia Real-time</p>
                         <p className="text-2xl font-black text-indigo-600 tracking-tighter">24.5 kW</p>
                       </div>
                     </div>
                     
                     <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-zinc-50">
                        <div>
                          <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Inverter</p>
                          <p className="text-xs font-semibold text-zinc-700 truncate">HUAWEI SUN2000-50KTL</p>
                        </div>
                        <div>
                          <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Stato</p>
                          <p className="text-xs font-bold text-emerald-600">Produzione Attiva</p>
                        </div>
                        <div className="sm:hidden">
                           <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Real-time</p>
                           <p className="text-sm font-bold text-indigo-600">24.5 kW</p>
                        </div>
                        <div className="text-right md:col-span-2 md:col-start-3">
                          <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Health Score</p>
                          <div className="flex items-center justify-end gap-2">
                             <div className="w-24 h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                                <div className="h-full bg-emerald-500" style={{ width: '98%' }} />
                             </div>
                             <span className="text-[10px] font-bold text-zinc-900">98%</span>
                          </div>
                        </div>
                     </div>
                  </div>
                </div>

                {/* 2. POD Associati */}
                <div className="space-y-6 pt-4 border-t border-zinc-100">
                  <div className="flex items-center justify-between px-1">
                    <h3 className="text-lg font-bold text-zinc-900">POD Collegati alla CER</h3>
                    <span className="text-[10px] font-bold text-zinc-400 bg-zinc-100 px-3 py-1 rounded-full uppercase tracking-widest">
                       5 Membri attivi
                    </span>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                     {[
                       { name: 'Azienda Sole Srl', type: 'Producer', pod: 'IT001E12388822', status: 'Online', icon: <Zap className="w-4 h-4"/>, color: 'text-amber-600', bg: 'bg-amber-50' },
                       { name: 'Sofia Gentile', type: 'Prosumer', pod: 'IT001E87654321', status: 'Online', icon: <Battery className="w-4 h-4"/>, color: 'text-indigo-600', bg: 'bg-indigo-50' },
                       { name: 'Marco Bianchi', type: 'Consumer', pod: 'IT001E11223344', status: 'Online', icon: <Users className="w-4 h-4"/>, color: 'text-emerald-600', bg: 'bg-emerald-50' },
                       { name: 'Laura Ferretti', type: 'Consumer', pod: 'IT001E55667788', status: 'Online', icon: <Users className="w-4 h-4"/>, color: 'text-emerald-600', bg: 'bg-emerald-50' },
                       { name: 'Giovanni Mazza', type: 'Consumer', pod: 'IT001E99001122', status: 'Online', icon: <Users className="w-4 h-4"/>, color: 'text-emerald-600', bg: 'bg-emerald-50' },
                     ].map((pod, i) => (
                       <div key={i} className="flex items-center justify-between p-4 rounded-2xl border border-zinc-100 bg-zinc-50/50 hover:bg-white hover:shadow-sm transition-all cursor-default">
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${pod.bg} ${pod.color}`}>
                              {pod.icon}
                            </div>
                            <div>
                               <p className="text-sm font-bold text-zinc-900">{pod.name}</p>
                               <div className="flex items-center gap-1.5 mt-0.5">
                                 <span className="text-[9px] font-black uppercase text-zinc-400">{pod.type}</span>
                                 <span className="text-zinc-300">•</span>
                                 <span className="text-[10px] font-mono text-zinc-500">{pod.pod}</span>
                               </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-1.5 flex-shrink-0">
                             <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                             <span className="text-[10px] font-bold text-zinc-600 uppercase hidden sm:block">{pod.status}</span>
                          </div>
                       </div>
                     ))}
                  </div>
                </div>
             </div>

          </div>
        )}

        {/* ── TAB: INCENTIVES (Ripartizione & Regole) ── */}
        {activeTab === 'incentives' && (
          <div className="p-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
             <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
                
                {/* Rules Section: Interactive Sliders */}
                <div className="space-y-8">
                   <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-zinc-900 flex items-center gap-2">
                        <TrendingUp className="w-6 h-6 text-indigo-500" /> Asset Allocation
                      </h3>
                      <div className="bg-amber-50 text-amber-700 text-[10px] font-bold px-3 py-1.5 rounded-lg border border-amber-200 flex items-center gap-1.5 uppercase tracking-wider">
                        <Info className="w-3.5 h-3.5" /> GSE Verified
                      </div>
                   </div>

                   <p className="text-sm text-zinc-500 leading-relaxed bg-zinc-50 p-4 rounded-2xl border border-zinc-100">
                     Le percentuali definiscono come gli incentivi erogati dal GSE per l'autoconsumo virtuale vengono ripartiti tra i membri e il fondo comune dell'Ente.
                   </p>

                   <div className="space-y-10 px-2 py-4">
                      {/* Producer Slider */}
                      <div className="space-y-4">
                        <div className="flex items-center justify-between px-1">
                           <span className="text-sm font-bold text-zinc-900 uppercase tracking-tighter">Quota Producer</span>
                           <span className="text-lg font-black text-indigo-600 bg-indigo-50 px-3 py-1 rounded-xl">{allocation.producer}%</span>
                        </div>
                        <input 
                          type="range" min="0" max="100" 
                          value={allocation.producer} 
                          onChange={(e) => handleAllocationChange('producer', parseInt(e.target.value))}
                          className="w-full h-3 bg-zinc-100 rounded-full appearance-none cursor-pointer accent-indigo-600 border border-zinc-200"
                        />
                        <p className="text-[10px] text-zinc-400 font-medium italic">Rimborsa l'investimento iniziale dei nodi di produzione.</p>
                      </div>

                      {/* Consumer Slider */}
                      <div className="space-y-4">
                        <div className="flex items-center justify-between px-1">
                           <span className="text-sm font-bold text-zinc-900 uppercase tracking-tighter">Quota Consumer</span>
                           <span className="text-lg font-black text-emerald-600 bg-emerald-50 px-3 py-1 rounded-xl">{allocation.consumer}%</span>
                        </div>
                        <input 
                          type="range" min="0" max="100" 
                          value={allocation.consumer} 
                          onChange={(e) => handleAllocationChange('consumer', parseInt(e.target.value))}
                          className="w-full h-3 bg-zinc-100 rounded-full appearance-none cursor-pointer accent-emerald-500 border border-zinc-200"
                        />
                        <p className="text-[10px] text-zinc-400 font-medium italic">Premi ai cittadini per i comportamenti energetici virtuosi.</p>
                      </div>

                      {/* Ente Slider */}
                      <div className="space-y-4 pt-2 border-t border-zinc-100">
                        <div className="flex items-center justify-between px-1">
                           <span className="text-sm font-bold text-zinc-900 uppercase tracking-tighter text-zinc-400">Quota Fondo Comune (Ente)</span>
                           <span className="text-lg font-black text-zinc-400 bg-zinc-100 px-3 py-1 rounded-xl">{allocation.ente}%</span>
                        </div>
                        <div className="h-3 w-full bg-zinc-50 rounded-full border border-zinc-100 relative">
                           <div className="absolute left-0 top-0 h-full bg-zinc-200 rounded-full" style={{ width: `${allocation.ente}%` }} />
                        </div>
                        <p className="text-[10px] text-zinc-400 font-medium italic tracking-tight">Utilizzato per nuovi investimenti e copertura spese amministrative.</p>
                      </div>
                   </div>

                   <button className="w-full py-4 bg-zinc-900 text-white rounded-2xl text-sm font-bold shadow-2xl shadow-zinc-900/20 hover:scale-[1.01] transition-all flex items-center justify-center gap-2">
                     <Save className="w-4 h-4" /> Salva ed Applica Nuova Ripartizione
                   </button>
                </div>

                {/* Per Member Summary View */}
                <div className="space-y-8">
                   <div className="flex items-center justify-between px-1">
                      <h3 className="text-xl font-bold text-zinc-900 flex items-center gap-2">
                        <Users className="w-6 h-6 text-emerald-500" /> Report Membri
                      </h3>
                      <button className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest flex items-center gap-1.5 hover:gap-2 transition-all">
                        Vedi tutti <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                   </div>

                   <div className="bg-zinc-50/50 rounded-3xl border border-zinc-100 p-2 shadow-sm overflow-hidden mb-6">
                      <table className="w-full text-left">
                         <thead className="bg-white/50 border-b border-zinc-100 text-zinc-400 text-[10px] uppercase font-bold tracking-widest">
                            <tr>
                               <th className="p-6">Comunità Membro</th>
                               <th className="p-6">Ruolo</th>
                               <th className="p-6 text-right">Maturato Mar.</th>
                            </tr>
                         </thead>
                         <tbody className="divide-y divide-zinc-100">
                            {[
                              { name: 'Marco Bianchi', role: 'Consumer', val: '€ 12,40', color: 'text-indigo-600' },
                              { name: 'Azienda Sole Srl', role: 'Producer', val: '€ 156,20', color: 'text-amber-600' },
                              { name: 'Sofia Gentile', role: 'Prosumer', val: '€ 34,20', color: 'text-emerald-600' },
                              { name: 'Giovanni Mazza', role: 'Consumer', val: '€ 8,90', color: 'text-indigo-600' },
                            ].map((m, i) => (
                              <tr key={i} className="group hover:bg-white transition-colors">
                                 <td className="p-6">
                                   <p className="font-bold text-zinc-900 tracking-tight">{m.name}</p>
                                 </td>
                                 <td className="p-6">
                                   <span className="text-[10px] font-black uppercase p-1.5 bg-zinc-100 rounded-md text-zinc-500 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                                     {m.role}
                                   </span>
                                 </td>
                                 <td className="p-6 text-right">
                                   <span className={`font-black text-sm ${m.color}`}>{m.val}</span>
                                 </td>
                              </tr>
                            ))}
                         </tbody>
                      </table>
                   </div>

                   <div className="p-8 rounded-[2rem] bg-indigo-900 text-white shadow-xl shadow-indigo-200 relative overflow-hidden">
                      <div className="absolute right-0 top-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl" />
                      <div className="relative z-10 space-y-4">
                         <div className="flex items-center justify-between">
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60">Proiezione Fondo Mensile</p>
                            <TrendingUp className="w-5 h-5 opacity-60" />
                         </div>
                         <div className="flex items-end gap-2">
                            <p className="text-4xl font-black tracking-tighter">€ 2.850,00</p>
                            <span className="text-xs font-bold text-emerald-400 pb-1">+12% vs Ieri</span>
                         </div>
                         <div className="h-16 w-full pt-4">
                            <ResponsiveContainer width="100%" height="100%">
                              <AreaChart data={mockTrendData}>
                                <Area type="monotone" dataKey="fondo" stroke="#818cf8" strokeWidth={3} fillOpacity={0.2} fill="#ffffff" />
                              </AreaChart>
                            </ResponsiveContainer>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        )}
      </div>
    </div>
  )
}
