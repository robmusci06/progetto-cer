import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { mockMembers, type EnergyDataPoint } from '../../data/mockMembers'
import {
  Mail, Phone, MapPin,
  TrendingUp, Zap,
  Calendar, Euro, Activity,
  Send, FileText, Cpu, Info, Users
} from 'lucide-react'
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts'

type PeriodFilter = 'settimana' | 'mese' | 'anno'

const generatePeriodData = (period: PeriodFilter, baseData: EnergyDataPoint[]): EnergyDataPoint[] => {
  if (period === 'settimana') {
    return baseData
  }
  if (period === 'mese') {
    const monthlyData: EnergyDataPoint[] = []
    const days = ['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom']
    for (let week = 0; week < 4; week++) {
      days.forEach(day => {
        monthlyData.push({
          time: `${day} ${week + 1}`,
          consumo: Math.round((Math.random() * 4 + 1) * 10) / 10,
          produzione: Math.round((Math.random() * 10) * 10) / 10,
        })
      })
    }
    return monthlyData
  }
  const yearlyData: EnergyDataPoint[] = [
    { time: 'Gen', consumo: 45, produzione: 12 },
    { time: 'Feb', consumo: 52, produzione: 18 },
    { time: 'Mar', consumo: 48, produzione: 35 },
    { time: 'Apr', consumo: 55, produzione: 48 },
    { time: 'Mag', consumo: 62, produzione: 65 },
    { time: 'Giu', consumo: 70, produzione: 82 },
    { time: 'Lug', consumo: 75, produzione: 90 },
    { time: 'Ago', consumo: 72, produzione: 85 },
    { time: 'Set', consumo: 58, produzione: 62 },
    { time: 'Ott', consumo: 45, produzione: 38 },
    { time: 'Nov', consumo: 42, produzione: 15 },
    { time: 'Dic', consumo: 38, produzione: 8 },
  ]
  return yearlyData
}

export default function AdminMemberDetail() {
  const { id } = useParams()
  const member = mockMembers.find(m => m.id === id) || mockMembers[0]
  const isProducerRole = member.role === 'Producer' || member.role === 'Prosumer'

  const [period, setPeriod] = useState<PeriodFilter>('settimana')
  const [chartData, setChartData] = useState<EnergyDataPoint[]>(() => generatePeriodData('settimana', member.energyData))

  useEffect(() => {
    setChartData(generatePeriodData(period, member.energyData))
  }, [period, member.energyData])

  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'))

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'))
    })
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  return (
    <div className="space-y-6 animate-in fade-in duration-700 pb-10">

      {/* Main Header Card */}
      <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-100 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">{member.name}</h1>
          <div className="flex items-center gap-2 mt-3 flex-wrap">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider">
              <Users className="w-3 h-3" /> {member.role}
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> {member.status}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <button className="flex-1 md:flex-none bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 px-6 py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 hover:bg-black dark:hover:bg-white transition-all shadow-sm active:scale-95 touch-manipulation">
            <Send className="w-4 h-4" /> Invia Messaggio
          </button>
          <button className="flex-1 md:flex-none bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 px-6 py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-all shadow-sm touch-manipulation">
            <FileText className="w-4 h-4" /> Esporta Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* ── Left Column: Registry ── */}
        <div className="lg:col-span-4">
          <div className="bg-white dark:bg-zinc-900 p-6 md:p-8 rounded-[2rem] border border-zinc-100 dark:border-zinc-800 shadow-sm h-fit">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-8 flex items-center gap-2 tracking-tight">
              <Info className="w-5 h-5 text-indigo-500" /> Anagrafica membro
            </h3>

            <div className="space-y-6">
              {[
                { label: 'ID POD', value: member.pod, mono: true },
                { label: 'Indirizzo', value: member.address },
                { label: 'Email', value: member.email },
                { label: 'Telefono', value: member.phone },
                { label: 'Tipologia', value: member.type },
                { label: 'Membro dal', value: member.joinedAt },
              ].map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">
                    {item.label}
                  </div>
                  <p className={`text-sm font-bold text-zinc-900 dark:text-zinc-100 ${
                    item.mono
                      ? 'font-mono bg-zinc-50 dark:bg-zinc-800 px-2 py-0.5 rounded border border-zinc-200 dark:border-zinc-700 w-fit'
                      : ''
                  }`}>
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
              { label: 'Consumo oggi', value: member.consumption, icon: <Zap className="w-4 h-4 text-amber-500" />, bg: 'bg-amber-50 dark:bg-amber-950/30', trend: member.trends.consumption },
              { label: 'Incentivo mese', value: member.incentive, icon: <Euro className="w-4 h-4 text-emerald-500" />, bg: 'bg-emerald-50 dark:bg-emerald-950/30', trend: member.trends.incentive },
              { label: 'Energy score', value: '88/100', icon: <TrendingUp className="w-4 h-4 text-indigo-500" />, bg: 'bg-indigo-50 dark:bg-indigo-950/30', trend: member.trends.score },
            ].map((kpi, idx) => (
              <div key={idx} className="bg-white dark:bg-zinc-900 px-4 py-3.5 rounded-2xl border border-zinc-100 dark:border-zinc-800 shadow-sm flex items-center gap-3 transition-all">
                <div className={`p-2 rounded-xl ${kpi.bg} flex-shrink-0`}>
                  {kpi.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 truncate">{kpi.label}</p>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 leading-tight">{kpi.value}</h3>
                </div>
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${
                  kpi.trend.startsWith('+') ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400' :
                  kpi.trend.startsWith('-') ? 'bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-400' :
                  'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'
                }`}>
                  {kpi.trend}
                </span>
              </div>
            ))}
          </div>

          {/* Graph Card */}
          <div className="bg-white dark:bg-zinc-900 p-6 md:p-8 rounded-[2rem] border border-zinc-100 dark:border-zinc-800 shadow-sm flex flex-col">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
              <div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">Andamento energetico</h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 font-bold uppercase tracking-widest mt-1">Dettaglio flussi orari nelle ultime 24 ore</p>
              </div>
            </div>

            <div className="h-[240px] md:h-[280px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={member.energyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorConsumo" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.15}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorProduzione" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.15}/>
                      <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={isDark ? '#27272a' : '#f4f4f5'} />
                  <XAxis
                    dataKey="time"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: isDark ? '#71717a' : '#a1a1aa', fontSize: 10, fontWeight: 700 }}
                    dy={10}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: isDark ? '#71717a' : '#a1a1aa', fontSize: 10, fontWeight: 700 }}
                  />
                  <Tooltip
                    contentStyle={{
                      borderRadius: '16px',
                      border: 'none',
                      boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.2)',
                      backgroundColor: isDark ? '#18181b' : '#ffffff',
                      color: isDark ? '#f4f4f5' : '#09090b',
                    }}
                  />
                  <Legend
                    iconType="circle"
                    verticalAlign="top"
                    align="right"
                    wrapperStyle={{ paddingBottom: '20px', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', color: isDark ? '#a1a1aa' : '#71717a' }}
                  />
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
