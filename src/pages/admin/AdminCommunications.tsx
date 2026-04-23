import { useState } from 'react'
import { Send, MessageSquareWarning, Megaphone, BellRing, Users, Search } from 'lucide-react'

export default function AdminCommunications() {
  const [message, setMessage] = useState('')
  const [type, setType] = useState('alert') // alert, info, promo
  const [isSending, setIsSending] = useState(false)
  const [showParticle, setShowParticle] = useState(false)

  const handleSend = () => {
    if (!message.trim()) return
    setIsSending(true)
    setTimeout(() => {
      setIsSending(false)
      setShowParticle(true)
      setMessage('')
      setTimeout(() => setShowParticle(false), 4000)
    }, 800)
  }

  const quickAlerts = [
    "La produzione della CER crollerà per maltempo tra un'ora. Sospendere pompe di calore.",
    "Picco di produzione solare imminente! Avviate gli elettrodomestici per massimizzare il cashback.",
    "Manutenzione programmata stasera alle 22:00. Il calcolo rimborsi potrebbe essere sospeso per 1 ora."
  ]

  return (
    <div className="space-y-8 max-w-5xl mx-auto h-full pb-10">
      <div className="flex flex-col sm:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">Centro Comunicazioni</h1>
          <p className="text-zinc-500 mt-1">Gestisci l'alerting alla Community ("Smart Comms").</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Composer */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-zinc-200 overflow-hidden relative">
            <div className="p-6 border-b border-zinc-100 bg-zinc-50/50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                 <div className="p-2.5 bg-indigo-100 text-indigo-600 rounded-lg">
                    <Megaphone className="w-5 h-5" />
                 </div>
                 <h2 className="text-lg font-bold text-zinc-900">Nuovo Broadcast</h2>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-zinc-600 bg-white px-3 py-1.5 rounded-full border border-zinc-200">
                 <Users className="w-4 h-4 text-indigo-500" />
                 144 Membri
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div className="flex gap-3">
                 <button 
                   onClick={() => setType('alert')}
                   className={`flex-1 py-2.5 px-4 rounded-xl border flex items-center justify-center gap-2 font-bold text-xs transition-all ${type === 'alert' ? 'bg-rose-50 border-rose-200 text-rose-700 shadow-sm' : 'bg-white border-zinc-200 text-zinc-600 hover:bg-zinc-50'}`}
                 >
                   <MessageSquareWarning className="w-4 h-4" /> Critico
                 </button>
                 <button 
                   onClick={() => setType('info')}
                   className={`flex-1 py-2.5 px-4 rounded-xl border flex items-center justify-center gap-2 font-bold text-xs transition-all ${type === 'info' ? 'bg-blue-50 border-blue-200 text-blue-700 shadow-sm' : 'bg-white border-zinc-200 text-zinc-600 hover:bg-zinc-50'}`}
                 >
                   <BellRing className="w-4 h-4" /> Informativo
                 </button>
              </div>

              <div>
                <textarea 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Scrivi il messaggio da inviare alla community..."
                  className="w-full h-48 p-4 border border-zinc-200 rounded-2xl bg-zinc-50 text-zinc-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none transition-all font-medium"
                />
                <p className="text-[10px] text-right text-zinc-400 font-bold mt-2 uppercase tracking-widest">{message.length}/250 caratteri</p>
              </div>

              <div className="pt-4 border-t border-zinc-100 flex justify-start">
                <button 
                  onClick={handleSend}
                  disabled={isSending || !message.trim()}
                  className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-3 rounded-xl text-xs font-bold transition-all shadow-lg active:scale-95"
                >
                   {isSending ? (
                     <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent inline-block"></span>
                   ) : (
                     <Send className="w-4 h-4" />
                   )}
                   Invia Notifica Push
                </button>
              </div>
            </div>

            {/* Particle Effect Overlay */}
            {showParticle && (
              <div className="absolute inset-0 bg-white/60 backdrop-blur-sm z-10 flex flex-col items-center justify-center animate-in fade-in duration-300">
                 <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4 animate-bounce">
                    <Send className="w-8 h-8 text-emerald-600" />
                 </div>
                 <h3 className="text-xl font-bold text-emerald-700">Notifiche Inviate!</h3>
                 <p className="text-emerald-600/80 font-medium">144 membri hanno ricevuto l'alert.</p>
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions & History */}
        <div className="space-y-6">
           <div className="bg-white rounded-2xl p-6 shadow-sm border border-zinc-200">
              <h3 className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-4">Modelli Rapidi</h3>
              <div className="space-y-3">
                 {quickAlerts.map((qa, i) => (
                    <button 
                      key={i}
                      onClick={() => setMessage(qa)}
                      className="w-full text-left p-3 rounded-xl bg-zinc-50 border border-transparent hover:border-indigo-200 hover:bg-indigo-50/50 transition-colors group"
                    >
                       <p className="text-sm text-zinc-600 font-medium leading-relaxed group-hover:text-indigo-900 transition-colors line-clamp-2">{qa}</p>
                    </button>
                 ))}
              </div>
           </div>

           <div className="bg-white rounded-2xl p-6 shadow-sm border border-zinc-200">
              <div className="flex justify-between items-center mb-4">
                 <h3 className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Cronologia</h3>
                 <button className="text-zinc-400 hover:text-indigo-600 transition-colors">
                    <Search className="w-4 h-4" />
                 </button>
              </div>
              <div className="space-y-4">
                 {[
                   { msg: "Riunione condominiale CER", time: "Ieri, 18:00", type: "info" },
                   { msg: "Guasto Inverter 02", time: "3 gg fa", type: "alert" }
                 ].map((log, i) => (
                    <div key={i} className="flex gap-3 border-b border-zinc-100 pb-3 last:border-0 last:pb-0">
                       <div className={`mt-1 flex-shrink-0 w-2 h-2 rounded-full ${log.type === 'alert' ? 'bg-rose-500' : 'bg-blue-500'}`} />
                       <div>
                         <p className="text-sm font-medium text-zinc-800 line-clamp-1">{log.msg}</p>
                         <p className="text-xs text-zinc-400 mt-1">{log.time}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </div>

      </div>
    </div>
  )
}
