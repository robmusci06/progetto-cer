import { useState } from 'react'
import { Search, Plus, Filter, UserCheck, UserX, Shield, ChevronLeft, ChevronRight } from 'lucide-react'

// Layout type data
type AppUser = {
  id: string;
  code: string;
  name: string;
  email: string;
  status: 'active' | 'disabled' | 'inactive';
  role: 'Super Admin' | 'Admin CER' | 'Operatore';
}

const initialUsers: AppUser[] = [
  { id: '1', code: '#790841', name: 'Anna Bianchi', email: 'anna.bianchi@mail.com', status: 'active', role: 'Super Admin' },
  { id: '2', code: '#790842', name: 'Mario Rossi', email: 'mario.rossi@mail.com', status: 'disabled', role: 'Admin CER' },
  { id: '3', code: '#798699', name: 'Anna Bianchi', email: 'anna.bianchi@mail.com', status: 'active', role: 'Operatore' },
  { id: '4', code: '#790752', name: 'Anna Bianchi', email: 'anna.bianchi@mail.com', status: 'active', role: 'Admin CER' },
  { id: '5', code: '#790955', name: 'Mario Rossi', email: 'mario.rossi@mail.com', status: 'active', role: 'Operatore' },
  { id: '6', code: '#790843', name: 'Anna Bianchi', email: 'anna.bianchi@mail.com', status: 'disabled', role: 'Admin CER' },
  { id: '7', code: '#790844', name: 'Luca Neri', email: 'luca.neri@mail.com', status: 'active', role: 'Operatore' },
  { id: '8', code: '#790845', name: 'Elena Gialli', email: 'elena.gialli@mail.com', status: 'active', role: 'Admin CER' },
  { id: '9', code: '#790846', name: 'Sara Verde', email: 'sara.verde@mail.com', status: 'inactive', role: 'Operatore' },
  { id: '10', code: '#790847', name: 'Paolo Blu', email: 'paolo.blu@mail.com', status: 'active', role: 'Super Admin' },
]

export default function AdminUsers() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterRole, setFilterRole] = useState<string>('Tutti')
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  
  const filteredUsers = initialUsers.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          user.code.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRole = filterRole === 'Tutti' || user.role === filterRole
    return matchesSearch && matchesRole
  })

  const getStatusBadge = (status: AppUser['status']) => {
    switch(status) {
      case 'active':
        return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-50 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-800"><UserCheck className="w-3 h-3" /> Attivo</span>
      case 'disabled':
        return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-50 dark:bg-red-900/40 text-red-600 dark:text-red-400 border border-red-100 dark:border-red-800"><UserX className="w-3 h-3" /> Disabilitato</span>
      case 'inactive':
        return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700">Inattivo</span>
    }
  }

  const getRoleBadge = (role: AppUser['role']) => {
    switch(role) {
      case 'Super Admin': return <div className="flex items-center gap-1.5 text-sm font-semibold text-zinc-700 dark:text-zinc-300 bg-zinc-50 dark:bg-zinc-800/60 w-fit px-2.5 py-1 rounded-lg border border-zinc-200 dark:border-zinc-700"><Shield className="w-3.5 h-3.5 text-indigo-500" /> {role}</div>
      case 'Admin CER': return <div className="flex items-center gap-1.5 text-sm font-semibold text-zinc-700 dark:text-zinc-300 bg-zinc-50 dark:bg-zinc-800/60 w-fit px-2.5 py-1 rounded-lg border border-zinc-200 dark:border-zinc-700"><Shield className="w-3.5 h-3.5 text-blue-500" /> {role}</div>
      case 'Operatore': return <div className="flex items-center gap-1.5 text-sm font-semibold text-zinc-700 dark:text-zinc-300 bg-zinc-50 dark:bg-zinc-800/60 w-fit px-2.5 py-1 rounded-lg border border-zinc-200 dark:border-zinc-700"><Shield className="w-3.5 h-3.5 text-zinc-400" /> {role}</div>
    }
  }

  return (
    <div className="space-y-4 lg:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-7xl mx-auto pb-20 md:pb-0">
      
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Gestione Utenti</h1>
          <p className="text-zinc-500 dark:text-zinc-400 mt-1 text-sm">Gestisci gli accessi, i ruoli e i privilegi degli operatori della piattaforma.</p>
        </div>
        {/* Desktop CTA - hidden on mobile, shown as FAB instead */}
        <button className="hidden sm:flex bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 text-sm font-semibold rounded-xl transition-all shadow-sm items-center gap-2 whitespace-nowrap active:scale-95">
          <Plus className="w-4 h-4" /> Nuovo Utente
        </button>
      </div>

      {/* Control Bar (Filters & Search) */}
      <div className="bg-white dark:bg-zinc-900 p-3 md:p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row gap-3 md:gap-4 items-stretch md:items-center justify-between transition-colors">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
          <input
            type="text"
            placeholder="Cerca per nome, email o codice..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9 pr-4 py-3 md:py-2.5 w-full border border-zinc-200 dark:border-zinc-800 rounded-xl bg-zinc-50 dark:bg-zinc-950 text-base md:text-sm dark:text-zinc-100 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all font-medium"
          />
        </div>
        
        <div className="flex items-center gap-4 w-full md:w-auto relative">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={`flex items-center gap-2 px-4 py-3 md:py-2 rounded-xl text-sm font-semibold transition-all border active:scale-95 ${
                isFilterOpen || filterRole !== 'Tutti'
                  ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800'
                  : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-600'
              }`}
            >
              <Filter className="w-4 h-4 text-indigo-500" />
              <span>Filtri</span>
              {filterRole !== 'Tutti' && (
                <span className="ml-1 w-5 h-5 flex items-center justify-center bg-indigo-600 text-white text-[10px] rounded-full">{1}</span>
              )}
            </button>
          </div>

          {/* Filter Dropdown */}
          {isFilterOpen && (
            <>
              <div 
                className="fixed inset-0 z-10" 
                onClick={() => setIsFilterOpen(false)}
              ></div>
              <div className="absolute left-0 md:right-0 md:left-auto top-full mt-2 w-56 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-xl z-20 animate-in fade-in zoom-in-95 duration-200 p-2">
                <div className="px-3 py-2 text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-1">Filtra per Ruolo</div>
                {['Tutti', 'Super Admin', 'Admin CER', 'Operatore'].map(role => (
                  <button
                    key={role}
                    onClick={() => {
                      setFilterRole(role)
                      setIsFilterOpen(false)
                    }}
                    className={`w-full text-left px-3 py-3 md:py-2.5 rounded-lg text-sm font-medium transition-colors active:scale-[0.98] ${
                      filterRole === role
                        ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400'
                        : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                    }`}
                  >
                    {role}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Mobile: Card-based layout */}
      <div className="md:hidden space-y-3">
        {filteredUsers.length > 0 ? (
          filteredUsers.map(user => (
            <div key={user.id} className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 shadow-sm transition-colors active:scale-[0.99]">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-100 to-indigo-50 dark:from-indigo-900/50 dark:to-indigo-800/50 border border-indigo-200 dark:border-indigo-700 flex items-center justify-center text-indigo-700 dark:text-indigo-400 font-bold text-sm uppercase shrink-0">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100 truncate">{user.name}</p>
                    <p className="text-xs text-zinc-400 dark:text-zinc-500 font-mono">{user.code}</p>
                  </div>
                </div>
                {getStatusBadge(user.status)}
              </div>
              <div className="mt-3 pt-3 border-t border-zinc-100 dark:border-zinc-800/60 space-y-2">
                <p className="text-sm text-zinc-500 dark:text-zinc-400 truncate">{user.email}</p>
                {getRoleBadge(user.role)}
              </div>
            </div>
          ))
        ) : (
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 text-center">
            <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium">Nessun utente trovato con i filtri correnti.</p>
          </div>
        )}
      </div>

      {/* Desktop: Table layout */}
      <div className="hidden md:block bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden transition-colors">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-zinc-50/80 dark:bg-zinc-950/50 border-b border-zinc-200 dark:border-zinc-800">
                <th className="px-6 py-4 text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider font-mono w-[15%]">Codice</th>
                <th className="px-6 py-4 text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider w-[25%]">Utente</th>
                <th className="px-6 py-4 text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider w-[30%]">Email</th>
                <th className="px-6 py-4 text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider w-[15%]">Ruolo</th>
                <th className="px-6 py-4 text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider w-[15%]">Stato</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800/60">
              {filteredUsers.length > 0 ? (
                filteredUsers.map(user => (
                  <tr key={user.id} className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30 transition-colors group">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-xs font-bold text-zinc-400 dark:text-zinc-500 font-mono bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded-md">{user.code}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-100 to-indigo-50 dark:from-indigo-900/50 dark:to-indigo-800/50 border border-indigo-200 dark:border-indigo-700 flex items-center justify-center text-indigo-700 dark:text-indigo-400 font-bold text-xs uppercase">
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">{user.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-500 dark:text-zinc-400 font-medium">
                      {user.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getRoleBadge(user.role)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getStatusBadge(user.status)}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-zinc-500 dark:text-zinc-400 text-sm font-medium">
                    Nessun utente trovato con i filtri correnti.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        {/* Desktop Pagination */}
        <div className="bg-zinc-50/50 dark:bg-zinc-900/50 border-t border-zinc-200 dark:border-zinc-800 px-6 py-5 flex items-center justify-between gap-4">
          <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Mostrando 10 di 500 utenti totali</span>
          
          <div className="flex items-center gap-1">
             <button className="p-2.5 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-400 dark:hover:bg-zinc-700 hover:bg-zinc-50 transition-colors">
               <ChevronLeft className="w-4 h-4" />
             </button>
             
             <button className="w-10 h-10 flex items-center justify-center rounded-lg text-sm font-semibold border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors">1</button>
             <span className="w-10 h-10 flex items-center justify-center text-zinc-400">...</span>
             
             <button className="w-10 h-10 flex items-center justify-center rounded-lg text-sm font-semibold border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors">4</button>
             <button className="w-10 h-10 flex items-center justify-center rounded-lg text-sm font-semibold border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors">5</button>
             <button className="w-10 h-10 flex items-center justify-center rounded-lg text-sm font-bold border-2 border-indigo-500 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 shadow-sm relative z-10 transition-colors">6</button>
             <button className="w-10 h-10 flex items-center justify-center rounded-lg text-sm font-semibold border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors">7</button>
             <button className="w-10 h-10 flex items-center justify-center rounded-lg text-sm font-semibold border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors">8</button>
             
             <span className="w-10 h-10 flex items-center justify-center text-zinc-400">...</span>
             <button className="w-10 h-10 flex items-center justify-center rounded-lg text-sm font-semibold border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors">50</button>
             
             <button className="p-2.5 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors">
               <ChevronRight className="w-4 h-4" />
             </button>
          </div>
        </div>
      </div>

      {/* Mobile Pagination — simplified, larger touch targets */}
      <div className="md:hidden bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-semibold text-sm border border-zinc-200 dark:border-zinc-700 active:scale-95 transition-all">
            <ChevronLeft className="w-4 h-4" /> Prec.
          </button>
          <div className="text-center px-4">
            <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">6 / 50</span>
            <p className="text-[11px] text-zinc-400 dark:text-zinc-500 mt-0.5">500 utenti</p>
          </div>
          <button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-semibold text-sm border border-zinc-200 dark:border-zinc-700 active:scale-95 transition-all">
            Succ. <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Mobile FAB — Primary CTA in thumb zone (bottom-right) */}
      <button className="sm:hidden fixed bottom-6 right-6 z-40 w-14 h-14 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl shadow-lg shadow-indigo-500/30 flex items-center justify-center active:scale-90 transition-all">
        <Plus className="w-6 h-6" />
      </button>
    </div>
  )
}
