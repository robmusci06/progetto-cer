import { Outlet, NavLink } from 'react-router-dom'
import { 
  LayoutDashboard, Bell, LogOut, Users, Zap, 
  ChevronLeft, Menu, Moon, Sun as SunIcon,
  Settings, ChevronDown, ChevronRight, User, LogIn
} from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

export default function AdminLayout() {
  const [tenant, setTenant] = useState('cer-centro')
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark' || 
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
  })

  const userMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) {
        setIsUserMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

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
    <div className="flex min-h-screen bg-zinc-100 dark:bg-zinc-950 font-sans relative transition-colors duration-300 lg:p-6 lg:gap-6">
      {/* Sidebar - Fixed floating on all screens with glassmorphism, collapsible */}
      <div className={`
        fixed lg:relative lg:left-0 z-[70] flex shrink-0 transition-all duration-300 
        m-4 h-[calc(100vh-2rem)] lg:m-0 lg:h-[calc(100vh-3rem)]
        ${isCollapsed ? 'lg:w-20' : 'lg:w-56'} w-64
        ${isMobileMenuOpen 
          ? 'translate-x-0 opacity-100 animate-in fade-in slide-in-from-left-full duration-300' 
          : '-translate-x-full opacity-0 animate-out fade-out slide-out-to-left-full duration-300 lg:opacity-100 lg:translate-x-0 lg:animate-none'}
        ${!isMobileMenuOpen ? 'hidden lg:flex' : 'flex'}
      `}>
        <aside 
          className={`
            w-full
            bg-zinc-950/90 dark:bg-zinc-950/90 text-zinc-300 flex flex-col border border-zinc-800 dark:border-zinc-700/50 backdrop-blur-md rounded-2xl
            h-full
            transition-all duration-300 ease-in-out overflow-hidden
            ${isMobileMenuOpen ? 'w-64' : ''}
          `}
        >
          <div className={`p-4 lg:p-4 border-b border-zinc-800/80 bg-zinc-950/50 flex items-center ${isCollapsed ? 'lg:justify-center' : 'justify-between'} transition-all`}>
            {!isCollapsed && (
              <div className={`flex items-center transition-all duration-500 overflow-hidden ${isCollapsed ? 'lg:w-10' : 'w-full'}`}>
                <img 
                  src="/Brillalogo.svg" 
                  alt="Brilla Admin Logo" 
                  className="h-10 w-auto max-w-none object-left shrink-0"
                />
              </div>
            )}
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="lg:hidden p-1.5 rounded-lg bg-zinc-900 text-zinc-400"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            {/* Desktop toggle button */}
            <button 
              onClick={() => setIsCollapsed(!isCollapsed)}
              className={`hidden lg:block p-1.5 rounded-lg hover:bg-zinc-800 text-zinc-500 hover:text-white transition-colors ${isCollapsed ? 'hidden' : 'block'}`}
            >
              <ChevronLeft className="w-4 h-4" />
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
          
          <nav className="flex-1 p-3 lg:p-3 space-y-1 lg:space-y-2 overflow-y-auto">
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
        </aside>
      </div>

      {/* Mobile overlay for closing sidebar */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar - Responsive: fixed/inset on mobile, floating on desktop */}
        <header className="lg:relative lg:h-14 lg:flex lg:items-center lg:justify-between lg:bg-white/70 lg:dark:bg-zinc-900/70 lg:backdrop-blur-md lg:border lg:border-zinc-200 lg:dark:border-zinc-800 lg:rounded-2xl lg:shadow-sm lg:mb-4
        fixed top-0 left-0 right-0 z-50 px-4 h-14 flex items-center justify-between bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 shadow-sm w-full">
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
          
          <div className="flex items-center gap-2 lg:gap-4 shrink-0 relative" ref={userMenuRef}>
            {/* User Avatar with Dropdown */}
            <button 
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              className="relative w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-indigo-100 dark:bg-indigo-900/50 border border-indigo-200 dark:border-indigo-800 flex items-center justify-center text-indigo-700 dark:text-indigo-400 font-bold text-xs lg:text-sm ring-4 ring-white dark:ring-zinc-950 hover:ring-indigo-100 dark:hover:ring-indigo-900/30 transition-all"
            >
              AD
            </button>
            
            {/* User Dropdown Menu */}
            {isUserMenuOpen && (
              <div className="absolute top-full right-0 mt-2 w-64 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-lg overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="p-3 border-b border-zinc-100 dark:border-zinc-800">
                  <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Admin User</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">admin@brilla.it</p>
                </div>
                <div className="p-2 space-y-1">
                  {/* Dark Mode Toggle */}
                  <button 
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className="w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-sm text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      {isDarkMode ? <SunIcon className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                      {isDarkMode ? 'Modo Chiaro' : 'Modo Scuro'}
                    </div>
                    <div className={`w-9 h-5 rounded-full transition-colors ${isDarkMode ? 'bg-indigo-600' : 'bg-zinc-300'}`}>
                      <div className={`w-4 h-4 m-0.5 rounded-full bg-white transform transition-transform ${isDarkMode ? 'translate-x-4' : 'translate-x-0'}`} />
                    </div>
                  </button>
                  
                  <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                    <User className="w-4 h-4" />
                    Profilo
                  </button>
                  <button 
                    onClick={() => window.location.href = '/'}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    Esci
                  </button>
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 px-4 py-4 lg:p-0 pt-20">
          <Outlet />
        </main>
      </div>
    </div>
  )
}