import { Outlet, NavLink } from 'react-router-dom'
import { 
  LayoutDashboard, Bell, LogOut, Users, Zap, 
  ChevronLeft, Menu, Moon, Sun as SunIcon,
  Settings, ChevronDown, ChevronRight
} from 'lucide-react'
import { useState, useEffect } from 'react'
import Breadcrumbs from '../components/Breadcrumbs'

export default function AdminLayout() {
  const [tenant, setTenant] = useState('cer-centro')
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark' || 
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
  })

  // Theme synchronization
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDarkMode])

  const navItems = [
    { name: 'Dashboard Globale', path: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'CER', path: '/admin/cer', icon: Zap },
    { name: 'Comunità & Membri', path: '/admin/community', icon: Users },
    { name: 'Comunicazioni', path: '/admin/communications', icon: Bell },
  ]

  return (
    <div className="flex min-h-screen bg-zinc-100 dark:bg-zinc-950 font-sans relative transition-colors duration-300">
      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden animate-in fade-in duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar Wrapper - Dedicated responsive logic */}
      <div className={`
        fixed lg:sticky top-0 lg:top-4 h-screen lg:h-[calc(100vh-2rem)] transition-all duration-500 ease-in-out z-[70] p-4 lg:p-0 lg:ml-4 flex shrink-0
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <aside 
          className={`${
            isCollapsed ? 'lg:w-20' : 'w-64'
          } bg-zinc-950 text-zinc-300 flex flex-col border border-zinc-800 dark:border-zinc-800/50 rounded-3xl shadow-[4px_0_24px_rgba(0,0,0,0.2)] h-full transition-all duration-300 ease-in-out overflow-hidden`}
        >
          <div className={`p-6 border-b border-zinc-800/80 bg-zinc-950/50 flex items-center ${isCollapsed ? 'lg:justify-center' : 'justify-between'} transition-all`}>
            <div className={`flex items-center transition-all duration-500 overflow-hidden ${isCollapsed ? 'lg:w-10' : 'w-[100px]'}`}>
              <img 
                src="/Brillalogo.svg" 
                alt="Brilla Admin Logo" 
                className="h-10 w-auto max-w-none object-left shrink-0"
              />
            </div>
            {!isCollapsed && (
              <button 
                onClick={() => setIsCollapsed(true)}
                className="hidden lg:block p-1.5 rounded-lg hover:bg-zinc-900 text-zinc-500 hover:text-white transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
            )}
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="lg:hidden p-1.5 rounded-lg bg-zinc-900 text-zinc-400"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
          
          {isCollapsed && (
            <div className="hidden lg:flex justify-center p-4 border-b border-zinc-800/50">
               <button 
                 onClick={() => setIsCollapsed(false)}
                 className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-indigo-400 transition-all border border-zinc-800"
               >
                 <Menu className="w-5 h-5" />
               </button>
            </div>
          )}
          
          <nav className="flex-1 p-3 lg:p-4 space-y-1 lg:space-y-2 overflow-y-auto">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center ${isCollapsed ? 'lg:justify-center' : 'gap-3 px-4'} py-3.5 lg:py-3 rounded-xl transition-all font-medium text-sm group relative active:scale-[0.98] ${
                    isActive
                      ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shadow-[0_0_10px_rgba(99,102,241,0.1)]'
                      : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50'
                  }`
                }
              >
                <item.icon className="w-5 h-5 shrink-0" />
                <span className={`lg:animate-in lg:fade-in lg:slide-in-from-left-2 duration-300 ${isCollapsed ? 'lg:hidden' : 'block'}`}>{item.name}</span>
                
                {isCollapsed && (
                  <div className="absolute left-full ml-4 px-2 py-1 bg-zinc-800 text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap z-50">
                    {item.name}
                  </div>
                )}
              </NavLink>
            ))}

            {/* Impostazioni Menu */}
            <div className="mt-2 pt-2 border-t border-zinc-800/50">
              <button
                onClick={() => {
                  setIsSettingsOpen(!isSettingsOpen)
                  if (isCollapsed) setIsCollapsed(false)
                }}
                className={`w-full flex items-center ${isCollapsed ? 'lg:justify-center' : 'justify-between px-4'} py-3.5 lg:py-3 rounded-xl transition-all font-medium text-sm group relative text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50 active:scale-[0.98]`}
              >
                <div className="flex items-center gap-3">
                  <Settings className="w-5 h-5 shrink-0" />
                  <span className={`lg:animate-in lg:fade-in lg:slide-in-from-left-2 duration-300 ${isCollapsed ? 'lg:hidden' : 'block'}`}>Impostazioni</span>
                </div>
                {!isCollapsed && (
                  isSettingsOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />
                )}
                
                {isCollapsed && (
                  <div className="absolute left-full ml-4 px-2 py-1 bg-zinc-800 text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap z-50">
                    Impostazioni
                  </div>
                )}
              </button>

              {/* Sottomenu Utenti */}
              {isSettingsOpen && !isCollapsed && (
                <div className="mt-1 pl-4 space-y-1 animate-in fade-in slide-in-from-top-2 duration-300">
                  <NavLink
                    to="/admin/settings/users"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3.5 lg:py-2.5 rounded-xl transition-all font-medium text-sm group relative active:scale-[0.98] ${
                        isActive
                          ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shadow-[0_0_10px_rgba(99,102,241,0.1)]'
                          : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50'
                      }`
                    }
                  >
                    <Users className="w-4 h-4 shrink-0" />
                    <span>Utenti</span>
                  </NavLink>
                </div>
              )}
            </div>
          </nav>

          <div className="p-3 lg:p-4 border-t border-zinc-800">
            <button 
              onClick={() => window.location.href = '/'}
              className={`flex items-center ${isCollapsed ? 'lg:justify-center' : 'gap-3 px-4'} py-3 lg:py-2 w-full text-zinc-400 hover:text-red-400 transition-colors text-sm font-medium group relative active:scale-[0.98]`}
            >
              <LogOut className="w-5 h-5 shrink-0" />
              <span className={isCollapsed ? 'lg:hidden' : 'block'}>Esci</span>
              
              {isCollapsed && (
                <div className="absolute left-full ml-4 px-2 py-1 bg-red-900 text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap z-50">
                  Esci
                </div>
              )}
            </button>
          </div>
        </aside>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 p-3 lg:p-4 lg:pl-6">
        {/* Topbar / Tenant Switch (Floating) */}
        <header className="h-16 lg:h-16 flex items-center justify-between px-4 lg:px-6 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-3xl sticky top-0 lg:top-4 z-50 w-full inset-x-0 transition-all shadow-sm">
          <div className="flex items-center gap-3 lg:gap-4 overflow-hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 shrink-0"
            >
              <Menu className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-2 lg:gap-4 flex-1">
              <span className="hidden sm:inline text-xs lg:text-sm font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider shrink-0">Tenant Active:</span>
              <select
                value={tenant}
                onChange={(e) => setTenant(e.target.value)}
                className="bg-white dark:bg-zinc-900 border hover:bg-zinc-50 dark:hover:bg-zinc-800 transition border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 text-xs lg:text-sm rounded-xl focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:w-64 p-1.5 lg:p-2 shadow-sm font-medium overflow-hidden text-ellipsis whitespace-nowrap"
              >
                <option value="cer-centro">🏢 CER Centro Città</option>
                <option value="cer-industriale">🏭 CER Ind. Est</option>
                <option value="cer-nord">🏡 CER Quartiere Nord</option>
              </select>
            </div>
          </div>
          
          <div className="flex items-center gap-2 lg:gap-4 shrink-0">
            {/* Theme Toggle */}
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 lg:p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all shadow-sm"
              title={isDarkMode ? 'Attiva testata chiara' : 'Attiva modalità scura'}
            >
              {isDarkMode ? <SunIcon className="w-4 h-4 lg:w-5 lg:h-5" /> : <Moon className="w-4 h-4 lg:w-5 lg:h-5" />}
            </button>

            <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-indigo-100 dark:bg-indigo-900/50 border border-indigo-200 dark:border-indigo-800 flex items-center justify-center text-indigo-700 dark:text-indigo-400 font-bold text-xs lg:text-sm ring-4 ring-white dark:ring-zinc-950">
              AD
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 px-0 pt-3 pb-4 lg:p-8">
          <Breadcrumbs />
          <div className="mt-2 text-zinc-500 block lg:hidden">
            {/* Visual spacer for mobile */}
          </div>
          <Outlet />
        </main>
      </div>
    </div>
  )
}
