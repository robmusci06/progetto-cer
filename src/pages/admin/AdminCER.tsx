import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Zap, Shield, Globe,
  TrendingUp, Settings2, Users,
  Battery, CheckCircle2,
  Save,
  MapPin, X, Lock, Euro
} from 'lucide-react'

export default function AdminCER() {
  const navigate = useNavigate()
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

  const producer = allocation.comunita
  const consumer = allocation.produttore
  const ente = allocation.cer

  const members = [
    { id: 'MEM-005', name: 'Azienda Sole Srl', type: 'Producer', initials: 'AS', quota: 'Quota Fissa (45%)', stima: '562,50 €' },
    { id: 'MEM-004', name: 'Sofia Gentile', type: 'Prosumer', initials: 'SG', quota: '30%', stima: '112,50 €' },
    { id: 'MEM-001', name: 'Marco Bianchi', type: 'Consumer', initials: 'MB', quota: '30%', stima: '112,50 €' },
    { id: 'MEM-002', name: 'Laura Ferretti', type: 'Consumer', initials: 'LF', quota: '30%', stima: '112,50 €' },
    { id: 'MEM-003', name: 'Giovanni Mazza', type: 'Consumer', initials: 'GM', quota: '30%', stima: '112,50 €' },
  ]

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10 animate-in fade-in duration-700">

      {/* Header View */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">Gestione CER</h1>
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

      {/* Navigation & Global Actions Bar */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex bg-zinc-100/80 dark:bg-zinc-900/80 backdrop-blur-md p-1 rounded-2xl w-full sm:w-fit border border-zinc-200 dark:border-zinc-800 overflow-x-auto no-scrollbar transition-colors shadow-sm">
            {[
              { id: 'general', icon: Globe, label: 'Dati Generali' },
              { id: 'incentives', icon: TrendingUp, label: 'Ripartizione Incentivi' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-[11px] sm:text-sm font-bold transition-all whitespace-nowrap ${activeTab === tab.id ? 'bg-white dark:bg-zinc-800 text-indigo-700 dark:text-indigo-400 shadow-sm border border-zinc-100 dark:border-zinc-700' : 'text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200'}`}
              >
                <tab.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Page Content Container ── */}
      <div className="bg-white dark:bg-zinc-900 rounded-2xl sm:rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-zinc-200 dark:border-zinc-800 overflow-hidden min-h-[600px] transition-colors">

        {/* ── TAB: GENERAL (Dati Generali & Asset) ── */}
        {activeTab === 'general' && (
          <div className="p-4 sm:p-8 space-y-8 lg:space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">

            {/* TOP SECTION: Header Card & Map */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Header Info Card */}
              <div className="bg-white dark:bg-zinc-800 rounded-3xl p-6 border border-zinc-100 dark:border-zinc-700 shadow-sm flex flex-col justify-between transition-colors">
                <div className="flex items-center gap-4 border-b border-zinc-50 dark:border-zinc-700 pb-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-500 dark:text-emerald-400 flex items-center justify-center shadow-sm transition-colors">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight transition-colors">CER SOLE</h2>
                  </div>
                </div>

                <div className="flex items-center gap-6 text-zinc-500 dark:text-zinc-400 font-medium mb-6">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-emerald-500 dark:text-emerald-400" /> <span>54 kW</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-emerald-500 dark:text-emerald-400" /> <span>5 Membri</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-emerald-500 dark:text-emerald-400" /> <span>Matera, Italia</span>
                  </div>
                </div>

                <div className="space-y-4 border-t border-zinc-50 dark:border-zinc-700 pt-4 transition-colors">
                  <div className="flex items-center flex-wrap gap-2">
                    <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest min-w-[140px]">Stato della Comunità:</span>
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-3 py-1 rounded-full">active</span>
                  </div>
                  <div className="flex items-center flex-wrap gap-2">
                    <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest min-w-[140px]">Struttura Legale:</span>
                    <span className="text-xs font-bold text-white bg-emerald-500 dark:bg-emerald-600 px-3 py-1 rounded-full">Associazione di diritto civile riconosciuta</span>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-zinc-100 dark:bg-zinc-800 rounded-3xl overflow-hidden border border-zinc-100 dark:border-zinc-700 shadow-sm h-64 relative transition-colors">
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  title="Matera Map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=16.58,40.65,16.62,40.68&layer=mapnik&marker=40.66,16.60"
                  className="filter brightness-100 dark:brightness-75 contrast-125 saturate-50 dark:saturate-100"
                ></iframe>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-3xl p-4 sm:p-8 border border-zinc-100 dark:border-zinc-700 shadow-sm transition-colors">
              <h3 className="text-lg font-bold text-zinc-900 flex items-center gap-2 mb-6">
                <Settings2 className="w-5 h-5 text-indigo-500" /> Anagrafica CER
              </h3>

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

              <div className="flex justify-start mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-700">
                <button className="text-[11px] font-bold text-white bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 px-5 py-2.5 rounded-xl flex items-center gap-1.5 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-sm">
                  <Save className="w-3.5 h-3.5" /> Salva modifiche
                </button>
              </div>
            </div>

            {/* BOTTOM SECTION: Asset & POD Collegati */}
            <div className="space-y-8 pt-4 border-t border-zinc-100">

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

              <div className="space-y-6 pt-4 border-t border-zinc-100">
                <div className="flex items-center justify-between px-1">
                  <h3 className="text-lg font-bold text-zinc-900">POD Collegati alla CER</h3>
                  <span className="text-[10px] font-bold text-zinc-400 bg-zinc-100 px-3 py-1 rounded-full uppercase tracking-widest">
                    5 Membri attivi
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {[
                    { name: 'Azienda Sole Srl', type: 'Producer', pod: 'IT001E12388822', status: 'Online', icon: <Zap className="w-4 h-4" />, color: 'text-amber-600', bg: 'bg-amber-50', memberId: 'MEM-005' },
                    { name: 'Sofia Gentile', type: 'Prosumer', pod: 'IT001E87654321', status: 'Online', icon: <Battery className="w-4 h-4" />, color: 'text-indigo-600', bg: 'bg-indigo-50', memberId: 'MEM-004' },
                    { name: 'Marco Bianchi', type: 'Consumer', pod: 'IT001E11223344', status: 'Online', icon: <Users className="w-4 h-4" />, color: 'text-emerald-600', bg: 'bg-emerald-50', memberId: 'MEM-001' },
                    { name: 'Laura Ferretti', type: 'Consumer', pod: 'IT001E55667788', status: 'Online', icon: <Users className="w-4 h-4" />, color: 'text-emerald-600', bg: 'bg-emerald-50', memberId: 'MEM-002' },
                    { name: 'Giovanni Mazza', type: 'Consumer', pod: 'IT001E99001122', status: 'Online', icon: <Users className="w-4 h-4" />, color: 'text-emerald-600', bg: 'bg-emerald-50', memberId: 'MEM-003' },
                  ].map((pod, i) => (
                    <div key={i} onClick={() => navigate(`/admin/community/${pod.memberId}`)} className="flex items-center justify-between p-4 rounded-2xl border border-zinc-100 bg-zinc-50/50 hover:bg-white hover:shadow-sm transition-all cursor-pointer group">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${pod.bg} ${pod.color}`}>
                          {pod.icon}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-zinc-900 group-hover:text-indigo-600 transition-colors">{pod.name}</p>
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
          <div className="p-4 sm:p-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 relative">

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
              <div>
                <h3 className="text-xl font-bold text-zinc-900 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-indigo-500" /> Analisi e Riparto Incentivi
                </h3>
                <p className="text-sm text-zinc-500 mt-1">
                  Visualizza il modello di ripartizione e l'allocazione stimata per i membri.
                </p>
              </div>
              <button onClick={handleOpenModal} className="self-end md:self-auto text-[11px] font-bold text-white bg-zinc-900 px-5 py-2.5 rounded-xl flex items-center gap-1.5 hover:bg-zinc-800 transition-all shadow-lg active:scale-95">
                 <Settings2 className="w-3.5 h-3.5" /> Modifica Regolamento
              </button>
            </div>

            {/* KPI SECTION: TOP BOXES */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
              </div>

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
              </div>
            </div>

            {/* Modello Proporzionale Box */}
            <div className="bg-white rounded-[1.25rem] p-6 sm:p-8 border border-zinc-100 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                  <h3 className="text-lg font-bold text-zinc-900">Modello Proporzionale</h3>
                </div>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full uppercase tracking-wider border border-emerald-100 w-fit">Attivo</span>
              </div>
              <p className="text-sm text-zinc-500 mb-10 sm:pl-9">
                L'incentivo viene distribuito in base all'energia effettivamente condivisa nel periodo di riferimento (sharing).
              </p>

              <div className="sm:pl-9 space-y-12">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Suddivisione del Ricavo Totale</p>
                    <div className="flex items-center gap-4 text-[10px] font-bold">
                       <span className="flex items-center gap-2 text-amber-600"><span className="w-2 h-2 rounded-full bg-amber-400" /> Produttori {producer}%</span>
                       <span className="flex items-center gap-2 text-emerald-600"><span className="w-2 h-2 rounded-full bg-emerald-500" /> Consumatori {consumer}%</span>
                       <span className="flex items-center gap-2 text-indigo-600"><span className="w-2 h-2 rounded-full bg-indigo-500" /> CER {ente}%</span>
                    </div>
                  </div>

                  <div className="h-2 w-full bg-zinc-100 rounded-full flex overflow-hidden border border-zinc-100 shadow-inner">
                    <div style={{ width: `${producer}%` }} className="h-full bg-amber-400 transition-all duration-1000" />
                    <div style={{ width: `${consumer}%` }} className="h-full bg-emerald-500 transition-all duration-1000" />
                    <div style={{ width: `${ente}%` }} className="h-full bg-indigo-500 transition-all duration-1000" />
                  </div>
                </div>

                {/* Individual Quotes Sections */}
                <div className="space-y-6">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 px-1">Quote Individuali dei Membri</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {members.map((m, i) => (
                      <div key={i} className="bg-white p-5 rounded-2xl border border-zinc-100 shadow-sm flex items-center justify-between hover:shadow-md transition-all group">
                        <div className="flex items-center gap-4">
                           <div className="w-12 h-12 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-sm font-black text-zinc-600 shadow-sm group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                              {m.initials}
                           </div>
                           <div>
                              <p className="text-sm font-bold text-zinc-900">{m.name}</p>
                              <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{m.type}</p>
                           </div>
                        </div>
                        <div className="flex gap-8 text-right">
                           <div>
                              <p className="text-[8px] font-bold text-zinc-400 uppercase tracking-widest mb-0.5">Ripartizione</p>
                              <p className="text-xs font-bold text-zinc-900">{m.quota}</p>
                           </div>
                           <div>
                              <p className="text-[8px] font-bold text-zinc-400 uppercase tracking-widest mb-0.5">Stima Mensile</p>
                              <p className="text-sm font-black text-indigo-600">{m.stima}</p>
                           </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>

      {/* Rules Configuration Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-zinc-900/40 backdrop-blur-md z-[100] flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="bg-white rounded-[2rem] w-full max-w-lg shadow-2xl overflow-hidden border border-zinc-200 animate-in zoom-in-95 duration-200">
            <div className="p-6 border-b border-zinc-100 flex items-center justify-between bg-zinc-50/50">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-indigo-100 text-indigo-600 rounded-xl">
                  <Settings2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900">Configura Ripartizione</h3>
              </div>
              <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-zinc-200 rounded-full transition-colors text-zinc-400">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-8 space-y-8">
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest px-1">Quota Consumer (%)</label>
                    <span className="text-lg font-black text-emerald-600">{tempAllocation.produttore}%</span>
                  </div>
                  <input
                    type="range"
                    min="0" max="100"
                    value={tempAllocation.produttore}
                    onChange={(e) => setTempAllocation({...tempAllocation, produttore: parseInt(e.target.value)})}
                    className="w-full h-2 bg-zinc-100 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest px-1">Quota Producer (%)</label>
                    <span className="text-lg font-black text-amber-600">{tempAllocation.comunita}%</span>
                  </div>
                  <input
                    type="range"
                    min="0" max="100"
                    value={tempAllocation.comunita}
                    onChange={(e) => setTempAllocation({...tempAllocation, comunita: parseInt(e.target.value)})}
                    className="w-full h-2 bg-zinc-100 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest px-1">Quota CER (%)</label>
                    <span className="text-lg font-black text-indigo-600">{tempAllocation.cer}%</span>
                  </div>
                  <input
                    type="range"
                    min="0" max="100"
                    value={tempAllocation.cer}
                    onChange={(e) => setTempAllocation({...tempAllocation, cer: parseInt(e.target.value)})}
                    className="w-full h-2 bg-zinc-100 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                  />
                </div>
              </div>

              <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-100 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Totale Allocazione</p>
                  <p className={`text-xl font-black ${tempAllocation.comunita + tempAllocation.produttore + tempAllocation.cer === 100 ? 'text-emerald-600' : 'text-rose-500'}`}>
                    {tempAllocation.comunita + tempAllocation.produttore + tempAllocation.cer}%
                  </p>
                </div>
                {tempAllocation.comunita + tempAllocation.produttore + tempAllocation.cer !== 100 && (
                  <p className="text-[10px] font-bold text-rose-500 border border-rose-200 bg-rose-50 px-2 py-1 rounded-md">Deve essere 100%</p>
                )}
              </div>

              <div className="space-y-4">
                 <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest px-1">Spese Gestione Fisse (€/mese)</label>
                 <div className="relative">
                   <Euro className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                   <input
                     type="number"
                     value={tempFee}
                     onChange={(e) => setTempFee(parseFloat(e.target.value))}
                     className="w-full bg-zinc-50 border border-zinc-200 rounded-xl pl-10 pr-4 py-3 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:bg-white transition-colors"
                   />
                 </div>
              </div>
            </div>

            <div className="p-6 border-t border-zinc-100 bg-zinc-50/50 flex gap-3">
              <button onClick={() => setIsModalOpen(false)} className="flex-1 px-6 py-3 rounded-xl text-sm font-bold text-zinc-600 hover:bg-zinc-200 transition-colors">Annulla</button>
              <button
                onClick={handleSaveRules}
                disabled={tempAllocation.comunita + tempAllocation.produttore + tempAllocation.cer !== 100}
                className="flex-1 px-6 py-3 rounded-xl text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg shadow-indigo-200"
              >
                Conferma Regole
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
