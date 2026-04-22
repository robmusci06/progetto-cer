import { useState } from 'react'
import { 
  Zap, Shield, Globe, 
  TrendingUp, Settings2, Users,
  Battery, CheckCircle2,
  Save, 
  Sun, MapPin, X, Lock, Euro
} from 'lucide-react'
// Recharts removed as chart was replaced by unified boxes



export default function AdminCER() {
  const [activeTab, setActiveTab] = useState<'general' | 'incentives'>('general')
  
  // State for Incentives Allocation
  const [allocation, setAllocation] = useState({
    comunita: 30, // Consumatori
    produttore: 45, // Produttori
    cer: 25, // CER
  })
  const [fixedFee, setFixedFee] = useState(150.00)
  
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [tempAllocation, setTempAllocation] = useState(allocation)
  const [tempFee, setTempFee] = useState(fixedFee)

  const handleSaveRules = () => {
    // Only save if sum is exactly 100
    if (tempAllocation.comunita + tempAllocation.produttore + tempAllocation.cer === 100) {
      setAllocation(tempAllocation)
      setFixedFee(tempFee)
      setIsModalOpen(false)
    } else {
      alert("La somma delle percentuali deve essere esattamente 100%.");
    }
  }

  const handleOpenModal = () => {
    setTempAllocation(allocation)
    setTempFee(fixedFee)
    setIsModalOpen(true)
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

                  <div className="p-6 rounded-3xl bg-white border border-zinc-100 shadow-sm transition-all">
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
          <div className="p-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 relative">
             
             {/* Header with Edit Button */}
             <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
               <div>
                  <h3 className="text-xl font-bold text-zinc-900 flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-indigo-500" /> Analisi e Riparto Incentivi
                  </h3>
                  <p className="text-sm text-zinc-500 mt-1">
                    Visualizza il modello di ripartizione e l'allocazione stimata per i membri.
                  </p>
               </div>
               <button onClick={handleOpenModal} className="px-5 py-3 h-fit whitespace-nowrap bg-zinc-900 text-white rounded-xl text-sm font-bold flex items-center gap-2 shadow-lg shadow-zinc-900/20 hover:-translate-y-0.5 transition-all">
                 <Settings2 className="w-4 h-4" /> Modifica Regolamento
               </button>
             </div>

             {/* KPI SECTION: TOP BOXES */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Mature Incentives Card */}
                <div className="bg-[#FFFBEB] p-5 rounded-[1.5rem] border border-amber-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
                   <div className="flex items-start justify-between relative z-10">
                      <div className="flex items-center gap-3">
                         <div className="w-9 h-9 bg-amber-500 text-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                            <Euro className="w-4 h-4" />
                         </div>
                         <div>
                            <p className="text-sm font-bold text-[#451A03]">Incentivi Maturati</p>
                            <p className="text-[10px] text-[#92400E] opacity-60">Energia condivisa e consumata</p>
                         </div>
                      </div>
                      <div className="bg-amber-100/50 text-[#92400E] text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border border-amber-200">
                         In attesa GSE
                      </div>
                   </div>
                   <div className="mt-5 relative z-10">
                      <p className="text-3xl font-bold text-[#451A03] tracking-tighter">€ 1.250,00</p>
                   </div>
                   <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-amber-200/20 rounded-full blur-2xl group-hover:bg-amber-200/30 transition-colors" />
                </div>

                {/* Investment Recovery Card */}
                <div className="bg-white p-5 rounded-[1.5rem] border border-zinc-100 shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
                   <div className="flex items-start gap-3 relative z-10">
                      <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0 border border-indigo-100">
                        <Lock className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-zinc-900">Recupero Investimento</p>
                        <p className="text-[10px] text-zinc-400 opacity-80 leading-relaxed">Quota mensile per fondo e gestione.</p>
                      </div>
                   </div>
                   <div className="mt-5 relative z-10">
                      <p className="text-3xl font-bold text-zinc-900 tracking-tighter">{fixedFee.toFixed(2).replace('.', ',')} €</p>
                   </div>
                   <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-zinc-50 rounded-full blur-2xl group-hover:bg-indigo-50 transition-colors" />
                </div>
             </div>

             {/* Progress Bar Model View */}
             <div className="bg-white rounded-[1.25rem] p-6 sm:p-8 border border-zinc-100 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                     <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                     <h3 className="text-lg font-bold text-zinc-900">Modello Proporzionale</h3>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full uppercase tracking-wider border border-emerald-100 w-fit">Attivo</span>
                </div>
                <p className="text-sm text-zinc-500 mb-8 sm:pl-9">
                  L'incentivo viene distribuito in base all'energia effettivamente condivisa nel periodo di riferimento (sharing).
                </p>

                <div className="sm:pl-9">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Suddivisione del Ricavo Totale</p>
                    <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-zinc-700">
                       <span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-blue-400"></div>Produttori {allocation.produttore}%</span>
                       <span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-emerald-400"></div>Consumatori {allocation.comunita}%</span>
                       <span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-slate-400"></div>CER {allocation.cer}%</span>
                    </div>
                  </div>
                  <div className="w-full h-4 rounded-full flex overflow-hidden bg-zinc-100">
                     <div className="h-full bg-blue-400 transition-all duration-500" style={{ width: `${allocation.produttore}%` }}></div>
                     <div className="h-full bg-emerald-400 transition-all duration-500" style={{ width: `${allocation.comunita}%` }}></div>
                     <div className="h-full bg-slate-400 transition-all duration-500" style={{ width: `${allocation.cer}%` }}></div>
                  </div>
                </div>
             </div>

             {/* Quote Individuali section (now full width) */}
             <div className="space-y-6">
                <h4 className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest pl-1">Quote Individuali dei Membri</h4>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                   {[
                     { name: 'Azienda Sole Srl', initials: 'AS', role: 'PRODUCER', type: 'producer', weight: 100 },
                     { name: 'Sofia Gentile', initials: 'SG', role: 'PROSUMER', type: 'community', weight: 30 },
                     { name: 'Marco Bianchi', initials: 'MB', role: 'CONSUMER', type: 'community', weight: 30 },
                     { name: 'Laura Ferretti', initials: 'LF', role: 'CONSUMER', type: 'community', weight: 30 },
                     { name: 'Giovanni Mazza', initials: 'GM', role: 'CONSUMER', type: 'community', weight: 30 },
                   ].map((member, i) => {
                      const totalSim = 1250; // Use the matured value for estimation context
                      let myQuote = 0;
                      let textPerc = '';
                      if (member.type === 'producer') {
                        myQuote = totalSim * (allocation.produttore / 100);
                        textPerc = `Quota Fissa (${allocation.produttore}%)`;
                      } else {
                        const communityTotal = totalSim * (allocation.comunita / 100);
                        myQuote = communityTotal * (member.weight / 100);
                        textPerc = `${member.weight}%`;
                      }

                      return (
                        <div key={i} className="bg-white rounded-[1.25rem] p-5 lg:px-8 border border-zinc-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:shadow-md transition-shadow">
                          <div className="flex items-center gap-5">
                             <div className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center bg-zinc-50 text-xs font-bold text-zinc-400 flex-shrink-0">
                               {member.initials}
                             </div>
                             <div>
                               <p className="font-bold text-zinc-900">{member.name}</p>
                               <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-900 mt-1">{member.role}</p>
                             </div>
                          </div>
                          <div className="flex items-center gap-8 sm:gap-12">
                             <div className="text-left sm:text-right">
                               <p className="text-[9px] font-bold uppercase tracking-widest text-zinc-300 mb-1">Ripartizione</p>
                               <p className="text-sm font-bold text-zinc-900">{textPerc}</p>
                             </div>
                             <div className="text-left sm:text-right">
                               <p className="text-[9px] font-bold uppercase tracking-widest text-zinc-300 mb-1">Stima Mensile</p>
                               <p className="text-lg font-bold text-indigo-900">{myQuote.toFixed(2).replace('.', ',')} €</p>
                             </div>
                          </div>
                        </div>
                      )
                   })}
                </div>
             </div>

             {/* Modale Modifica Regolamento */}
             {isModalOpen && (
               <div className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-900/60 backdrop-blur-sm animate-in fade-in duration-200 p-4">
                  <div className="bg-white p-8 rounded-[2rem] w-full max-w-lg shadow-2xl relative animate-in zoom-in-95 duration-200 border border-zinc-100">
                     <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-zinc-400 hover:text-zinc-900 hover:rotate-90 transition-all bg-zinc-50 hover:bg-zinc-100 p-2 rounded-full">
                        <X className="w-5 h-5" />
                     </button>
                     
                     <h3 className="text-2xl font-bold text-zinc-900 mb-2 pr-10">Regolamento CER</h3>
                     <p className="text-sm text-zinc-500 mb-8 leading-relaxed">Aggiorna le percentuali per il riparto degli incentivi tra i soci. La somma deve essere 100%.</p>

                     <div className="space-y-4">
                        <div className="space-y-2">
                           <label className="text-[10px] font-bold text-blue-700 uppercase tracking-widest pl-1">Quota Produttori (%)</label>
                           <input type="number" step="1" max="100" min="0" value={tempAllocation.produttore} onChange={e => setTempAllocation({...tempAllocation, produttore: parseInt(e.target.value) || 0})} className="w-full bg-blue-50/50 border border-blue-100 rounded-xl px-4 py-3 text-sm font-bold text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all shadow-sm" />
                        </div>
                        <div className="space-y-2">
                           <label className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest pl-1">Quota Consumatori (%)</label>
                           <input type="number" step="1" max="100" min="0" value={tempAllocation.comunita} onChange={e => setTempAllocation({...tempAllocation, comunita: parseInt(e.target.value) || 0})} className="w-full bg-emerald-50/50 border border-emerald-100 rounded-xl px-4 py-3 text-sm font-bold text-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all shadow-sm" />
                        </div>
                        <div className="space-y-2">
                           <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest pl-1">Quota CER (%)</label>
                           <input type="number" step="1" max="100" min="0" value={tempAllocation.cer} onChange={e => setTempAllocation({...tempAllocation, cer: parseInt(e.target.value) || 0})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-500/20 transition-all shadow-sm" />
                        </div>
                        
                        {(tempAllocation.comunita + tempAllocation.produttore + tempAllocation.cer) !== 100 && (
                          <div className="text-xs font-bold text-red-500 bg-red-50 p-3 rounded-lg border border-red-100 flex items-center justify-between">
                            <span>Somma attuale: {tempAllocation.comunita + tempAllocation.produttore + tempAllocation.cer}%</span>
                            <span>Deve essere 100%</span>
                          </div>
                        )}

                        <div className="pt-6 mt-6 border-t border-zinc-100 space-y-2">
                           <label className="text-[10px] font-bold text-amber-600 uppercase tracking-widest pl-1 flex items-center gap-1.5"><Lock className="w-3 h-3"/> Quota Mensile Trattenuta (€)</label>
                           <input type="number" step="1" value={tempFee} onChange={e => setTempFee(parseFloat(e.target.value) || 0)} className="w-full bg-amber-50 text-amber-900 border border-amber-200 rounded-xl px-4 py-3 text-lg font-black focus:outline-none focus:ring-2 focus:ring-amber-500/20 shadow-sm" />
                        </div>

                        <button onClick={handleSaveRules} className="w-full mt-4 py-4 bg-indigo-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-indigo-600/20 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
                           <Save className="w-4 h-4" /> Applica Modifiche
                        </button>
                     </div>
                  </div>
               </div>
             )}
          </div>
        )}
      </div>
    </div>
  )
}
