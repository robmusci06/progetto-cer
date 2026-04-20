import { Outlet, NavLink } from 'react-router-dom'
import { LayoutDashboard, Bell, Trophy, Settings, LogOut, Users } from 'lucide-react'
import { useState } from 'react'

export default function AdminLayout() {
  const [tenant, setTenant] = useState('cer-centro')

  const navItems = [
    { name: 'Dashboard Globale', path: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Comunità & Membri', path: '/admin/community', icon: Users },
    { name: 'Ripartizioni', path: '/admin/settings', icon: Settings },
    { name: 'Comunicazioni', path: '/admin/communications', icon: Bell },
    { name: 'Gamification & Premi', path: '/admin/gamification', icon: Trophy },
  ]

  return (
    <div className="flex min-h-screen bg-zinc-50 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-zinc-950 text-zinc-300 flex flex-col border-r border-zinc-800 sticky top-0 h-screen">
        <div className="p-6 border-b border-zinc-800 flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
            <Settings className="w-4 h-4 text-indigo-400" />
          </div>
          <span className="font-semibold text-white tracking-wide">Brilla Admin</span>
        </div>
        
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 xl:px-4 py-2.5 rounded-xl transition-all font-medium text-sm ${
                  isActive
                    ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shadow-[0_0_10px_rgba(99,102,241,0.1)]'
                    : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50'
                }`
              }
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-zinc-800">
          <button 
            onClick={() => window.location.href = '/'}
            className="flex items-center gap-3 px-4 py-2 w-full text-zinc-400 hover:text-red-400 transition-colors text-sm font-medium"
          >
            <LogOut className="w-5 h-5" />
            Esci
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar / Tenant Switch */}
        <header className="h-16 flex items-center justify-between px-8 bg-white/70 backdrop-blur-md border-b border-zinc-200 sticky top-0 z-10 w-full transition-all">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-zinc-500 uppercase tracking-wider">Tenant Attivo:</span>
            <select
              value={tenant}
              onChange={(e) => setTenant(e.target.value)}
              className="bg-white border hover:bg-zinc-50 transition border-zinc-200 text-zinc-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-64 p-2 shadow-sm font-medium"
            >
              <option value="cer-centro">🏢 CER Centro Città - Condominio A</option>
              <option value="cer-industriale">🏭 CER Area Industriale Est</option>
              <option value="cer-nord">🏡 CER Quartiere Nord</option>
            </select>
            {/* Note: I use a plain select here because Radix Select doesn't seem to have a mock component readily available in the workspace context, standard select is safer */}
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-zinc-600 bg-zinc-100 px-3 py-1.5 rounded-full border border-zinc-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Sistema Operativo
            </div>
            <div className="w-8 h-8 rounded-full bg-indigo-100 border border-indigo-200 flex items-center justify-center text-indigo-700 font-bold text-xs">
              AD
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
