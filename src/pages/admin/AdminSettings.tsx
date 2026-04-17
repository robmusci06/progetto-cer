import { useState } from 'react'
import { Save, AlertCircle, TrendingUp, Settings2 } from 'lucide-react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export default function AdminSettings() {
  const [activeTab, setActiveTab] = useState<'trend' | 'allocation'>('trend')
  
  const [producer, setProducer] = useState(40)
  const [consumer, setConsumer] = useState(40)
  const [ente, setEnte] = useState(20)
  
  const [isSaving, setIsSaving] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  // Logic to balance sliders to always sum to 100
  const handleSliderChange = (type: 'producer' | 'consumer' | 'ente', value: number) => {
    let newVal = Math.max(0, Math.min(100, value))
    
    if (type === 'producer') {
      const diff = newVal - producer
      setProducer(newVal)
      // Distribute diff equally if possible
      const cRatio = consumer / (consumer + ente || 1)
      const eRatio = ente / (consumer + ente || 1)
      setConsumer(Math.max(0, consumer - diff * cRatio))
      setEnte(Math.max(0, ente - diff * eRatio))
    } else if (type === 'consumer') {
      const diff = newVal - consumer
      setConsumer(newVal)
      const pRatio = producer / (producer + ente || 1)
      const eRatio = ente / (producer + ente || 1)
      setProducer(Math.max(0, producer - diff * pRatio))
      setEnte(Math.max(0, ente - diff * eRatio))
    } else {
      const diff = newVal - ente
      setEnte(newVal)
      const pRatio = producer / (producer + consumer || 1)
      const cRatio = consumer / (producer + consumer || 1)
      setProducer(Math.max(0, producer - diff * pRatio))
      setConsumer(Math.max(0, consumer - diff * cRatio))
    }
  }

  // Ensure strict sum to 100 on mouse up/blur
  const finalizeValues = () => {
    const total = producer + consumer + ente
    if (Math.abs(total - 100) > 0.1) {
       // Simple normalization
       setProducer(Math.round(producer / total * 100))
       setConsumer(Math.round(consumer / total * 100))
       setEnte(Math.round(ente / total * 100))
    } else {
       setProducer(Math.round(producer))
       setConsumer(Math.round(consumer))
       setEnte(Math.round(ente))
    }
  }

  const handleSave = () => {
    setIsSaving(true)
    setTimeout(() => {
      setIsSaving(false)
      setShowSuccess(true)
      setTimeout(() => setShowSuccess(false), 3000)
    }, 1200)
  }

  const mockTrendData = [
    { name: 'Gen', fondo: 400 },
    { name: 'Feb', fondo: 850 },
    { name: 'Mar', fondo: 1250 },
  ]

  return (
    <div className="space-y-8 max-w-4xl mx-auto h-full pb-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900">Monitoraggio e Configurazione Incentivi</h1>
        <p className="text-zinc-500 mt-1">Analizza il trend del fondo maturato e configura l'asset allocation degli incentivi GSE (Cashback CER).</p>
      </div>

      {/* Tabs */}
      <div className="flex bg-zinc-100 p-1 rounded-xl w-fit">
        <button 
          onClick={() => setActiveTab('trend')}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${activeTab === 'trend' ? 'bg-white text-indigo-700 shadow-sm' : 'text-zinc-500 hover:text-zinc-700'}`}
        >
          <TrendingUp className="w-4 h-4" /> Andamento Incentivi
        </button>
        <button 
          onClick={() => setActiveTab('allocation')}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${activeTab === 'allocation' ? 'bg-white text-indigo-700 shadow-sm' : 'text-zinc-500 hover:text-zinc-700'}`}
        >
          <Settings2 className="w-4 h-4" /> Configurazione Ripartizione
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-zinc-200 overflow-hidden">
        {activeTab === 'trend' ? (
           <div className="p-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
             <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-zinc-900">Fondo Comunità Attuale</h3>
                  <p className="text-zinc-500 text-sm mt-1">Stimato in base all'autoconsumo virtuale sincronizzato negli ultimi 3 mesi.</p>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-black text-emerald-600">€ 1.250,00</div>
                  <div className="text-sm font-bold text-emerald-700 bg-emerald-100 inline-block px-2 py-1 rounded-md mt-2">+15% vs trimestre princ.</div>
                </div>
             </div>
             
             <div className="h-80 w-full pt-6 border-t border-zinc-100">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={mockTrendData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorFondo" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f4f4f5" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#a1a1aa' }} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#a1a1aa' }} tickFormatter={(val) => `€ ${val}`} />
                    <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                    <Area type="monotone" dataKey="fondo" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorFondo)" />
                  </AreaChart>
                </ResponsiveContainer>
             </div>
           </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="p-6 border-b border-zinc-100 bg-zinc-50/50">
               <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-100 text-indigo-600 rounded-xl">
                 <AlertCircle className="w-6 h-6" />
              </div>
              <div>
                 <h3 className="text-lg font-bold text-zinc-900">Regolamento di Ripartizione</h3>
                 <p className="text-zinc-500 text-sm mt-1 max-w-2xl">
                   Modifica le percentuali di divisione degli incentivi. I tre valori sono matematicamente vincolati
                   per generare sempre un totale del 100%. Salva per applicare le nuove logiche contrattuali dal prossimo periodo di calcolo.
                 </p>
              </div>
           </div>
        </div>

        <div className="p-8 space-y-10">
           {/* Visualizza Barra 100% */}
           <div className="h-8 rounded-full flex overflow-hidden shadow-inner bg-zinc-100">
              <div style={{ width: `${producer}%` }} className="bg-amber-400 flex items-center justify-center text-xs font-bold text-amber-900 transition-all duration-300">
                {Math.round(producer)}%
              </div>
              <div style={{ width: `${consumer}%` }} className="bg-emerald-400 flex items-center justify-center text-xs font-bold text-emerald-900 transition-all duration-300">
                {Math.round(consumer)}%
              </div>
              <div style={{ width: `${ente}%` }} className="bg-indigo-400 flex items-center justify-center text-xs font-bold text-indigo-900 transition-all duration-300">
                {Math.round(ente)}%
              </div>
           </div>

           {/* Sliders */}
           <div className="space-y-8">
              
              <div className="space-y-4">
                 <div className="flex justify-between items-center">
                    <label className="text-sm font-bold text-zinc-700 uppercase tracking-wider flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-amber-400 inline-block"></span>
                      Quota Producer
                    </label>
                    <span className="text-xl font-bold text-amber-600">{Math.round(producer)}%</span>
                 </div>
                 <input 
                   type="range" 
                   min="0" max="100" 
                   value={producer} 
                   onChange={(e) => handleSliderChange('producer', parseFloat(e.target.value))}
                   onMouseUp={finalizeValues}
                   onTouchEnd={finalizeValues}
                   className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                 />
                 <p className="text-xs text-zinc-500">Percentuale destinata a chi possiede gli impianti fotovoltaici mettendo l'energia in rete.</p>
              </div>

              <div className="space-y-4">
                 <div className="flex justify-between items-center">
                    <label className="text-sm font-bold text-zinc-700 uppercase tracking-wider flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block"></span>
                      Quota Consumer
                    </label>
                    <span className="text-xl font-bold text-emerald-600">{Math.round(consumer)}%</span>
                 </div>
                 <input 
                   type="range" 
                   min="0" max="100" 
                   value={consumer} 
                   onChange={(e) => handleSliderChange('consumer', parseFloat(e.target.value))}
                   onMouseUp={finalizeValues}
                   onTouchEnd={finalizeValues}
                   className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                 />
                 <p className="text-xs text-zinc-500">Percentuale redistribuita sotto forma di sconto/cashback a chi consuma in sincronia (autoconsumo virtuale).</p>
              </div>

              <div className="space-y-4">
                 <div className="flex justify-between items-center">
                    <label className="text-sm font-bold text-zinc-700 uppercase tracking-wider flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-indigo-400 inline-block"></span>
                      Quota Ente
                    </label>
                    <span className="text-xl font-bold text-indigo-600">{Math.round(ente)}%</span>
                 </div>
                 <input 
                   type="range" 
                   min="0" max="100" 
                   value={ente} 
                   onChange={(e) => handleSliderChange('ente', parseFloat(e.target.value))}
                   onMouseUp={finalizeValues}
                   onTouchEnd={finalizeValues}
                   className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                 />
                 <p className="text-xs text-zinc-500">Fondo cassa trattenuto dal Gestore della CER per coprire i costi amministrativi e organizzativi.</p>
              </div>
           </div>

           {/* Actions */}
           <div className="pt-6 border-t border-zinc-100 flex items-center justify-between">
              <div>
                 {showSuccess && (
                     <div className="animate-in fade-in slide-in-from-left-4 text-emerald-600 font-medium text-sm flex items-center gap-2">
                       <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                       Configurazione salvata con successo.
                     </div>
                 )}
              </div>
              <button 
                onClick={handleSave}
                disabled={isSaving}
                className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-70 disabled:cursor-not-allowed text-white px-6 py-3 rounded-xl font-medium transition-all shadow-md hover:shadow-lg focus:ring-4 focus:ring-indigo-500/30"
              >
                 {isSaving ? (
                   <span className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent inline-block"></span>
                 ) : (
                   <Save className="w-5 h-5" />
                 )}
                 {isSaving ? 'Salvataggio...' : 'Swipe to Save (Conferma)'}
              </button>
           </div>
        </div>
      </div>
    )}
  </div>
</div>
  )
}
