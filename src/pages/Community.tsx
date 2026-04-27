import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  LayoutDashboard, LogOut, Settings, Users, Zap, BarChart3, Bell,
  Search, Plus, MapPin, Sun, UserCheck, ArrowUpRight, ArrowRight,
  Wifi, WifiOff, Clock, Cpu
} from "lucide-react"

// ──────────────────────────────────────────────
// Dati membri (UC-G03: 3 Consumer, 1 Prosumer, 1 Producer)
// ──────────────────────────────────────────────
const members = [
  {
    id: 1,
    name: "Marco Bianchi",
    role: "Consumer" as const,
    type: "Residenziale",
    pod: "IT001E00012345",
    status: "Attivo" as const,
    location: "Via Roma, 12",
    lastUpdate: "Oggi, 09:42",
    consumption: "3.2 kWh",
  },
  {
    id: 2,
    name: "Laura Ferretti",
    role: "Consumer" as const,
    type: "Residenziale",
    pod: "IT001E00067890",
    status: "In Attesa GSE" as const,
    location: "Corso Italia, 5",
    lastUpdate: "Ieri, 23:59",
    consumption: "1.8 kWh",
  },
  {
    id: 3,
    name: "Giovanni Mazza",
    role: "Consumer" as const,
    type: "Condominio",
    pod: "IT001E00054321",
    status: "Attivo" as const,
    location: "Via Dante, 8",
    lastUpdate: "Oggi, 08:15",
    consumption: "5.7 kWh",
  },
  {
    id: 4,
    name: "Sofia Gentile",
    role: "Prosumer" as const,
    type: "Residenziale",
    pod: "IT001E00098765",
    status: "Attivo" as const,
    location: "Piazza Garibaldi, 2",
    lastUpdate: "Oggi, 10:01",
    consumption: "2.1 kWh",
  },
  {
    id: 5,
    name: "Azienda Sole Srl",
    role: "Producer" as const,
    type: "Impresa",
    pod: "IT001E00011111",
    status: "Offline" as const,
    location: "Strada Prov. 4",
    lastUpdate: "3 giorni fa",
    consumption: "—",
  },
]

// ──────────────────────────────────────────────
// Costanti di stile per ruolo e stato
// ──────────────────────────────────────────────
const roleConfig = {
  Consumer: {
    badge: "bg-blue-100 text-blue-700 border border-blue-200",
    avatar: "bg-blue-500",
    border: "border-t-blue-400",
    icon: <Users className="h-3 w-3 mr-1" />,
  },
  Prosumer: {
    badge: "bg-orange-100 text-orange-700 border border-orange-200",
    avatar: "bg-orange-500",
    border: "border-t-orange-400",
    icon: <Zap className="h-3 w-3 mr-1" />,
  },
  Producer: {
    badge: "bg-emerald-100 text-emerald-700 border border-emerald-200",
    avatar: "bg-emerald-500",
    border: "border-t-emerald-400",
    icon: <Sun className="h-3 w-3 mr-1" />,
  },
}

const statusConfig = {
  Attivo: {
    dot: "bg-emerald-500",
    text: "text-emerald-700",
    bg: "bg-emerald-50",
    icon: <Wifi className="h-3 w-3" />,
  },
  "In Attesa GSE": {
    dot: "bg-amber-400",
    text: "text-amber-700",
    bg: "bg-amber-50",
    icon: <Clock className="h-3 w-3" />,
  },
  Offline: {
    dot: "bg-rose-500",
    text: "text-rose-700",
    bg: "bg-rose-50",
    icon: <WifiOff className="h-3 w-3" />,
  },
}

type RoleFilter = "Tutti" | "Consumer" | "Prosumer" | "Producer"

// ──────────────────────────────────────────────
// Component
// ──────────────────────────────────────────────
export default function Community() {
  const [search, setSearch] = useState("")
  const [activeFilter, setActiveFilter] = useState<RoleFilter>("Tutti")

  const filtered = members.filter((m) => {
    const matchRole = activeFilter === "Tutti" || m.role === activeFilter
    const q = search.toLowerCase()
    const matchSearch =
      m.name.toLowerCase().includes(q) ||
      m.pod.toLowerCase().includes(q) ||
      m.role.toLowerCase().includes(q)
    return matchRole && matchSearch
  })

  const countByRole = (role: string) => members.filter((m) => m.role === role).length

  return (
    <div className="flex min-h-screen bg-zinc-50 font-sans">
      {/* ── Sidebar ── */}
      <aside className="hidden md:flex w-64 bg-zinc-950 text-zinc-400 flex-col transition-all duration-300">
        <div className="p-6 flex items-center gap-3 text-white">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center p-[1px]">
            <div className="h-full w-full bg-zinc-950 rounded-[7px] flex items-center justify-center">
              <span className="font-bold text-xs">B</span>
            </div>
          </div>
          <span className="font-semibold tracking-wide">Admin Brilla</span>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          <a href="/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-zinc-900 hover:text-zinc-100 transition-colors">
            <LayoutDashboard className="h-5 w-5" />
            <span className="font-medium">Dashboard</span>
          </a>
          <a href="/community" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-indigo-500/10 text-indigo-400 transition-colors">
            <Users className="h-5 w-5" />
            <span className="font-medium">Comunità (CER)</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-zinc-900 hover:text-zinc-100 transition-colors">
            <Zap className="h-5 w-5" />
            <span className="font-medium">Produzione</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-zinc-900 hover:text-zinc-100 transition-colors">
            <BarChart3 className="h-5 w-5" />
            <span className="font-medium">Report</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-zinc-900 hover:text-zinc-100 transition-colors">
            <Settings className="h-5 w-5" />
            <span className="font-medium">Impostazioni</span>
          </a>
        </nav>

        <div className="p-4 mt-auto">
          <button
            onClick={() => (window.location.href = "/")}
            className="flex items-center gap-3 px-3 py-2 w-full rounded-lg hover:bg-zinc-900 hover:text-zinc-100 transition-colors text-left"
          >
            <LogOut className="h-5 w-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* ── Main ── */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-zinc-200 flex items-center justify-between px-4 md:px-8 z-10 sticky top-0">
          <div className="flex items-center w-96 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
            <Input
              placeholder="Cerca per nome, POD o ruolo..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 bg-zinc-50 border-none focus-visible:ring-1 focus-visible:ring-zinc-300"
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-zinc-500 hover:bg-zinc-100 rounded-full transition-colors">
              <Bell className="h-5 w-5" />
            </button>
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400 flex items-center justify-center text-white font-medium text-sm shadow-sm cursor-pointer">
              A
            </div>
          </div>
        </header>

        {/* ── Content ── */}
        <div className="flex-1 overflow-auto p-4 md:p-8">

          {/* Page Header */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-3 mb-5 md:mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900">Gestione Comunità</h1>
              <p className="text-zinc-500 mt-1 text-sm">Supervisiona i membri della CER e approva nuove richieste.</p>
            </div>
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm transition-all w-full sm:w-auto">
              <Plus className="mr-2 h-4 w-4" /> Nuovo Membro
            </Button>
          </div>

          {/* KPI Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-5 md:mb-8 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            {[
              { label: "Totale Membri", value: "5", sub: "+12 questo mese", icon: <Users className="h-5 w-5 text-indigo-600" />, bg: "bg-indigo-50", color: "text-emerald-600" },
              { label: "Attivi", value: "3", sub: "60% del totale", icon: <Wifi className="h-5 w-5 text-emerald-600" />, bg: "bg-emerald-50", color: "text-emerald-600" },
              { label: "In Attesa GSE", value: "1", sub: "Azione richiesta", icon: <UserCheck className="h-5 w-5 text-amber-600" />, bg: "bg-amber-50", color: "text-amber-600" },
              { label: "Offline", value: "1", sub: "Ultimo contatto 3gg fa", icon: <WifiOff className="h-5 w-5 text-rose-600" />, bg: "bg-rose-50", color: "text-rose-600" },
            ].map((kpi) => (
              <div key={kpi.label} className="bg-white rounded-xl border border-zinc-100 p-5 shadow-[0_2px_10px_rgb(0,0,0,0.04)]">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-zinc-500">{kpi.label}</p>
                    <p className="text-3xl font-bold text-zinc-900 mt-1">{kpi.value}</p>
                  </div>
                  <div className={`h-10 w-10 rounded-full ${kpi.bg} flex items-center justify-center`}>{kpi.icon}</div>
                </div>
                <p className={`text-xs mt-3 font-medium flex items-center gap-1 ${kpi.color}`}>
                  <ArrowUpRight className="h-3 w-3" /> {kpi.sub}
                </p>
              </div>
            ))}
          </div>

          {/* Filter row */}
          <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-4 md:mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">
            <span className="text-xs font-medium text-zinc-500 mr-1">Filtra per ruolo:</span>
            {(["Tutti", "Consumer", "Prosumer", "Producer"] as RoleFilter[]).map((f) => {
              const count = f === "Tutti" ? members.length : countByRole(f)
              const isActive = activeFilter === f
              return (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                    isActive
                      ? "bg-indigo-600 text-white border-indigo-600 shadow-sm"
                      : "bg-white text-zinc-600 border-zinc-200 hover:border-indigo-300 hover:text-indigo-600"
                  }`}
                >
                  {f}
                  <span className={`text-xs rounded-full px-1.5 py-0.5 ${isActive ? "bg-indigo-500 text-white" : "bg-zinc-100 text-zinc-500"}`}>
                    {count}
                  </span>
                </button>
              )
            })}
            <span className="ml-auto text-xs text-zinc-500">{filtered.length} risultat{filtered.length === 1 ? "o" : "i"}</span>
          </div>

          {/* ── Member Cards Grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            {filtered.length === 0 ? (
              <div className="col-span-3 flex flex-col items-center justify-center py-20 text-zinc-500">
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
                    className={`group relative bg-white rounded-2xl border border-zinc-100 border-t-4 ${rc.border} shadow-[0_2px_16px_rgb(0,0,0,0.05)] transition-all duration-300 overflow-hidden`}
                  >
                    {/* Glassmorphism accent */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-white/60 to-transparent" />

                    <div className="p-6">
                      {/* Header: avatar + name + role badge */}
                      <div className="flex items-start gap-4 mb-5">
                        <div className={`h-12 w-12 rounded-xl ${rc.avatar} flex items-center justify-center text-white font-bold text-xs flex-shrink-0 shadow-sm`}>
                          {member.name.split(" ").map((n) => n[0]).join("").substring(0, 2).toUpperCase()}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2 mb-0.5">
                            <h3 className="font-semibold text-zinc-900 text-base leading-tight truncate">{member.name}</h3>
                            <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold flex-shrink-0 ${rc.badge}`}>
                              {rc.icon}{member.role}
                            </span>
                          </div>
                          <p className="text-xs text-zinc-500 flex items-center gap-1">
                            <MapPin className="h-3 w-3 flex-shrink-0" />
                            <span className="truncate">{member.location}</span>
                          </p>
                        </div>
                      </div>

                      {/* Info rows */}
                      <div className="space-y-3 mb-5">
                        {/* POD */}
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-zinc-500 flex items-center gap-1.5">
                            <Cpu className="h-3.5 w-3.5" /> ID POD
                          </span>
                          <code className="text-xs font-mono text-zinc-700 bg-zinc-50 border border-zinc-200 px-2 py-0.5 rounded-md">
                            {member.pod}
                          </code>
                        </div>

                        {/* Tipologia */}
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-zinc-500 flex items-center gap-1.5">
                            <LayoutDashboard className="h-3.5 w-3.5" /> Tipologia
                          </span>
                          <span className="text-xs font-medium text-zinc-700">{member.type}</span>
                        </div>

                        {/* Consumo / Produzione */}
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-zinc-500 flex items-center gap-1.5">
                            <Zap className="h-3.5 w-3.5" /> {member.role === "Producer" ? "Produzione" : "Consumo"} (oggi)
                          </span>
                          <span className="text-xs font-semibold text-zinc-800">{member.consumption}</span>
                        </div>

                        {/* Ultimo aggiornamento */}
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-zinc-500 flex items-center gap-1.5">
                            <Clock className="h-3.5 w-3.5" /> Ultimo agg.
                          </span>
                          <span className="text-xs text-zinc-500">{member.lastUpdate}</span>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="border-t border-zinc-100 -mx-6 mb-4" />

                      {/* Footer: status + CTA */}
                      <div className="flex items-center justify-between">
                        <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full ${sc.bg} ${sc.text}`}>
                          <span className={`h-1.5 w-1.5 rounded-full ${sc.dot} animate-${member.status === "Attivo" ? "pulse" : "none"}`} />
                          {sc.icon}
                          {member.status}
                        </span>
                        <button className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors group/btn">
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
      </main>
    </div>
  )
}
