import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Users, Search, Plus, MapPin, Zap, Sun, Clock, Cpu, Wifi, WifiOff, ArrowRight, LayoutDashboard, Euro } from 'lucide-react'

// ─────────────────────────────────────────────
// Dati mock — UC-G03: 3 Consumer, 1 Prosumer, 1 Producer
// ─────────────────────────────────────────────
const mockMembers = [
  {
    id: 'MEM-001',
    pod: 'IT001E00012345',
    name: 'Marco Bianchi',
    email: 'm.bianchi@example.com',
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

// ─────────────────────────────────────────────
// Stili per ruolo e stato
// ─────────────────────────────────────────────
const roleConfig = {
  Consumer: {
    badge: 'bg-blue-50 text-blue-700 border border-blue-200',
    avatar: 'from-blue-500 to-blue-400',
    topBorder: 'border-t-blue-400',
    icon: <Users className="h-3 w-3" />,
  },
  Prosumer: {
    badge: 'bg-orange-50 text-orange-700 border border-orange-200',
    avatar: 'from-orange-500 to-amber-400',
    topBorder: 'border-t-orange-400',
    icon: <Zap className="h-3 w-3" />,
  },
  Producer: {
    badge: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    avatar: 'from-emerald-500 to-teal-400',
    topBorder: 'border-t-emerald-400',
    icon: <Sun className="h-3 w-3" />,
  },
}

const statusConfig = {
  Attivo: {
    dot: 'bg-emerald-500',
    text: 'text-emerald-700',
    pill: 'bg-emerald-50 border border-emerald-200',
    icon: <Wifi className="h-3 w-3" />,
    pulse: true,
  },
  'In Attesa GSE': {
    dot: 'bg-amber-400',
    text: 'text-amber-700',
    pill: 'bg-amber-50 border border-amber-200',
    icon: <Clock className="h-3 w-3" />,
    pulse: false,
  },
  Offline: {
    dot: 'bg-rose-500',
    text: 'text-rose-700',
    pill: 'bg-rose-50 border border-rose-200',
    icon: <WifiOff className="h-3 w-3" />,
    pulse: false,
  },
}

type RoleFilter = 'Tutti' | 'Consumer' | 'Prosumer' | 'Producer'

// ─────────────────────────────────────────────
// Componente
// ─────────────────────────────────────────────
export default function AdminCommunity() {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [activeFilter, setActiveFilter] = useState<RoleFilter>('Tutti')

  const filtered = mockMembers.filter((m) => {
    const matchRole = activeFilter === 'Tutti' || m.role === activeFilter
    const q = searchTerm.toLowerCase()
    const matchSearch =
      m.name.toLowerCase().includes(q) ||
      m.pod.toLowerCase().includes(q) ||
      m.email.toLowerCase().includes(q) ||
      m.role.toLowerCase().includes(q)
    return matchRole && matchSearch
  })

  const countByRole = (role: string) => mockMembers.filter((m) => m.role === role).length

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-10">

      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900">Comunità &amp; Membri</h1>
          <p className="text-zinc-500 mt-1">Gestisci l'anagrafica, verifica le adesioni e monitora lo stato dei nodi.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-indigo-50 px-4 py-2 rounded-xl border border-indigo-100 flex items-center gap-2">
            <Users className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-bold text-indigo-900">5 Membri CER</span>
          </div>
          <button className="bg-zinc-900 hover:bg-zinc-800 text-white px-4 py-2 text-sm font-medium rounded-xl transition-all shadow-sm flex items-center gap-1.5">
            <Plus className="w-4 h-4" /> Nuovo Membro
          </button>
        </div>
      </div>

      {/* Search + Filters */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
          <input
            type="text"
            placeholder="Cerca per nome, POD o ruolo..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9 pr-4 py-2 w-full border border-zinc-200 rounded-xl bg-white text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors shadow-sm"
          />
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {(['Tutti', 'Consumer', 'Prosumer', 'Producer'] as RoleFilter[]).map((f) => {
            const count = f === 'Tutti' ? mockMembers.length : countByRole(f)
            const isActive = activeFilter === f
            return (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-medium transition-all border ${
                  isActive
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                    : 'bg-white text-zinc-600 border-zinc-200 hover:border-indigo-300 hover:text-indigo-600'
                }`}
              >
                {f}
                <span className={`text-xs rounded-full px-1.5 py-0.5 font-semibold ${isActive ? 'bg-white/20 text-white' : 'bg-zinc-100 text-zinc-500'}`}>
                  {count}
                </span>
              </button>
            )
          })}
          <span className="ml-2 text-xs text-zinc-400">{filtered.length} risultat{filtered.length === 1 ? 'o' : 'i'}</span>
        </div>
      </div>

      {/* ── Cards Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {filtered.length === 0 ? (
          <div className="col-span-3 flex flex-col items-center justify-center py-20 text-zinc-400">
            <Search className="h-10 w-10 mb-3 opacity-30" />
            <p className="text-lg font-medium">Nessun membro trovato</p>
            <p className="text-sm mt-1">Prova a modificare il filtro o la ricerca</p>
          </div>
        ) : (
          filtered.map((member) => {
            const rc = roleConfig[member.role]
            const sc = statusConfig[member.status]
            return (
              <div
                key={member.id}
                className={`group relative bg-white rounded-2xl border border-zinc-100 border-t-4 ${rc.topBorder} shadow-[0_2px_16px_rgb(0,0,0,0.05)] hover:shadow-[0_8px_32px_rgb(0,0,0,0.10)] hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer`}
                onClick={() => navigate(`/admin/community/${member.id}`)}
              >
                {/* Glassmorphism hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-indigo-50/40 to-transparent" />

                <div className="p-6">
                  {/* Header: avatar + name + role badge */}
                  <div className="flex items-start gap-4 mb-5">
                    <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${rc.avatar} flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-sm`}>
                      {member.name.split(' ').map((n) => n[0]).join('').substring(0, 2).toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-zinc-900 text-base leading-tight truncate group-hover:text-indigo-700 transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-xs text-zinc-400 mt-0.5 flex items-center gap-1 truncate">
                        <MapPin className="h-3 w-3 flex-shrink-0" />
                        {member.address}
                      </p>
                    </div>
                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold flex-shrink-0 ${rc.badge}`}>
                      {rc.icon}{member.role}
                    </span>
                  </div>

                  {/* Info rows */}
                  <div className="space-y-3 mb-5">

                    {/* POD */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-zinc-400 flex items-center gap-1.5">
                        <Cpu className="h-3.5 w-3.5" /> ID POD
                      </span>
                      <code className="text-xs font-mono text-zinc-700 bg-zinc-50 border border-zinc-200 px-2 py-0.5 rounded-md">
                        {member.pod}
                      </code>
                    </div>

                    {/* Tipologia */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-zinc-400 flex items-center gap-1.5">
                        <LayoutDashboard className="h-3.5 w-3.5" /> Tipologia
                      </span>
                      <span className="text-xs font-medium text-zinc-700">{member.type}</span>
                    </div>

                    {/* Consumo/Produzione */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-zinc-400 flex items-center gap-1.5">
                        <Zap className="h-3.5 w-3.5" />
                        {member.role === 'Producer' ? 'Produzione' : 'Consumo'} (oggi)
                      </span>
                      <span className="text-xs font-semibold text-zinc-800">{member.consumption}</span>
                    </div>

                    {/* Incentivo maturato */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-zinc-400 flex items-center gap-1.5">
                        <Euro className="h-3.5 w-3.5" /> Incentivo (mese)
                      </span>
                      {member.incentive ? (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md">
                          {member.incentive}
                        </span>
                      ) : (
                        <span className="text-xs text-zinc-400 italic">Sospeso</span>
                      )}
                    </div>

                    {/* Ultimo aggiornamento */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-zinc-400 flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" /> Ultimo agg.
                      </span>
                      <span className="text-xs text-zinc-500">{member.lastUpdate}</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-zinc-100 -mx-6 mb-4" />

                  {/* Footer: status + CTA */}
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full ${sc.pill} ${sc.text}`}>
                      <span className={`h-1.5 w-1.5 rounded-full flex-shrink-0 ${sc.dot} ${sc.pulse ? 'animate-pulse' : ''}`} />
                      {sc.icon}
                      {member.status}
                    </span>
                    <button
                      className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors group/btn"
                      onClick={(e) => { e.stopPropagation(); navigate(`/admin/community/${member.id}`) }}
                    >
                      Vedi Dettaglio
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                    </button>
                  </div>
                </div>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}
