import { useParams, useNavigate } from 'react-router-dom'
import { 
  ArrowLeft, Mail, Phone, MapPin, 
  TrendingUp, Zap, 
  Calendar, Euro, Activity, 
  Send, FileText, Cpu, Info, Save
} from 'lucide-react'

export default function AdminMemberDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  // Mock data for a member
  const member = {
    id: id || 'MEM-001',
    name: 'Marco Bianchi',
    email: 'm.bianchi@example.com',
    phone: '+39 347 123 4567',
    address: 'Via Roma, 12, 75100 Matera (MT)',
    pod: 'IT001E00012345',
    type: 'Residenziale',
    role: 'Consumer', // Producer, Consumer, Prosumer
    status: 'Attivo',
    joinedAt: '12 Gen 2026',
    consumption: '420 kWh',
    incentive: '€ 42.50',
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Attivo': return { pill: 'bg-emerald-50 dark:bg-emerald-900/30', text: 'text-emerald-600', dot: 'bg-emerald-500' }
      case 'Offline': return { pill: 'bg-rose-50 dark:bg-rose-900/30', text: 'text-rose-600', dot: 'bg-rose-500' }
      default: return { pill: 'bg-zinc-100', text: 'text-zinc-600', dot: 'bg-zinc-400' }
    }
  }

  const sc = getStatusColor(member.status);

  return (
    <div className="space-y-8 animate-in fade-in duration-700 pb-10">
      
      {/* Header with Breadcrumbs & Main Actions */}
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => navigate('/admin/community')}
            className="flex items-center gap-2 text-zinc-500 hover:text-indigo-600 font-bold transition-colors text-sm group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Torna alla Community
          </button>
          
          <div className="flex items-center gap-2">
            <button className="p-2.5 bg-white border border-zinc-200 rounded-xl text-zinc-500 hover:text-indigo-600 transition-all hover:shadow-sm">
                <Send className="w-4 h-4" />
            </button>
            <button className="p-2.5 bg-white border border-zinc-200 rounded-xl text-zinc-500 hover:text-indigo-600 transition-all hover:shadow-sm">
                <FileText className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-2">
          <div className="flex items-center gap-4">
            <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-3xl flex items-center justify-center text-3xl font-black ${member.role === 'Producer' ? 'bg-amber-100 text-amber-600' : 'bg-indigo-100 text-indigo-600 shadow-inner'}`}>
              {member.name.charAt(0)}
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-zinc-900 tracking-tight">{member.name}</h1>
               <div className="flex items-center gap-2 mt-1">
                 <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest bg-zinc-100 px-2.5 py-1 rounded-md">
                   {member.role}
                 </span>
                 <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${sc.pill} ${sc.text}`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${sc.dot} ${member.status === 'Attivo' ? 'animate-pulse' : ''}`} />
                    {member.status}
                 </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* ── Left Column: Registry & Info ── */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-[2rem] border border-zinc-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] transition-all">
            <h3 className="text-lg font-bold text-zinc-900 mb-6 flex items-center gap-2">
              <Info className="w-5 h-5 text-indigo-500" /> 
              Anagrafica Membro
            </h3>
            
            <div className="space-y-6">
              {[
                { icon: <Cpu className="w-4 h-4" />, label: 'ID POD', value: member.pod, mono: true },
                { icon: <MapPin className="w-4 h-4" />, label: 'Indirizzo', value: member.address },
                { icon: <Mail className="w-4 h-4" />, label: 'Email', value: member.email },
                { icon: <Phone className="w-4 h-4" />, label: 'Telefono', value: member.phone },
                { icon: <Activity className="w-4 h-4" />, label: 'Tipologia', value: member.type },
                { icon: <Calendar className="w-4 h-4" />, label: 'Membro dal', value: member.joinedAt },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-1.5">
                    {item.icon} {item.label}
                  </span>
                  <p className={`text-sm text-zinc-800 font-bold ${item.mono ? 'font-mono bg-zinc-50 px-2.5 py-1 rounded border border-zinc-100 w-fit' : ''}`}>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-100 flex justify-start">
               <button className="bg-zinc-900 hover:bg-zinc-800 text-white px-5 py-2.5 rounded-xl text-[11px] font-bold transition-all shadow-sm flex items-center gap-2">
                 <Save className="w-3.5 h-3.5" /> Salva modifiche
               </button>
            </div>
          </div>
        </div>

        {/* ── Right Column: Energy Analysis ── */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Energy KPIs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { label: 'Consumo Oggi', value: member.consumption, icon: <Zap className="w-5 h-5" />, color: 'bg-amber-50 text-amber-600 border-amber-100' },
              { label: 'Incentivo Mese', value: member.incentive, icon: <Euro className="w-5 h-5" />, color: 'bg-emerald-50 text-emerald-600 border-emerald-100' },
              { label: 'Energy Score', value: '88/100', icon: <TrendingUp className="w-5 h-5" />, color: 'bg-indigo-50 text-indigo-600 border-indigo-100' },
            ].map((kpi, idx) => (
              <div key={idx} className={`p-5 rounded-2xl border shadow-sm flex flex-col gap-4 ${kpi.color} bg-white dark:bg-zinc-800 transition-all`}>
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                   {kpi.icon}
                </div>
                <div>
                   <p className="text-[10px] font-bold uppercase tracking-widest opacity-70">{kpi.label}</p>
                   <p className="text-2xl font-black">{kpi.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Progress Card */}
          <div className="bg-white p-6 sm:p-8 rounded-[2rem] border border-zinc-100 shadow-sm relative overflow-hidden">
             <h3 className="text-lg font-bold text-zinc-900 mb-6 flex items-center gap-2">
                <Activity className="w-5 h-5 text-emerald-500" /> Sincronia Energetica
             </h3>
             <div className="flex items-end gap-1 h-32 mb-4">
                {[40, 65, 80, 55, 90, 70, 85, 45, 60, 75, 50, 35].map((val, i) => (
                   <div key={i} className="flex-1 bg-indigo-50 rounded-t-md relative group">
                      <div className="absolute bottom-0 left-0 right-0 bg-indigo-500 rounded-t-md transition-all duration-500 group-hover:bg-indigo-600" style={{ height: `${val}%` }} />
                   </div>
                ))}
             </div>
             <div className="flex justify-between text-[10px] font-bold text-zinc-400 uppercase tracking-widest px-1">
                <span>00:00</span>
                <span>12:00</span>
                <span>23:59</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}
