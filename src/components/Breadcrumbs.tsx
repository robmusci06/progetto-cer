import { useLocation, Link } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'

const routeLabels: Record<string, string> = {
  admin: 'Home',
  dashboard: 'Dashboard',
  cer: 'Gestione CER',
  community: 'Comunità',
  communications: 'Comunicazioni',
  settings: 'Impostazioni',
  users: 'Utenti',
}

export default function Breadcrumbs() {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter((x) => x)

  return (
    <nav className="flex items-center space-x-1.5 md:space-x-2 text-xs md:text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-4 md:mb-6 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm px-3 md:px-4 py-2 md:py-2.5 rounded-xl border border-zinc-200/50 dark:border-zinc-800/50 w-fit shadow-sm animate-in slide-in-from-top-1 fade-in duration-500 overflow-x-auto max-w-full no-scrollbar">
      <Link 
        to="/admin/dashboard" 
        className="flex items-center hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors gap-1.5 shrink-0 min-w-[44px] min-h-[44px] md:min-w-0 md:min-h-0 justify-center md:justify-start"
      >
        <Home className="w-3.5 h-3.5 md:w-4 md:h-4" />
        <span className="sr-only">Home</span>
      </Link>

      {pathnames.map((value, index) => {
        // Skip 'admin' if we want to start from the second level or handle it specially
        if (value === 'admin') return null

        const last = index === pathnames.length - 1
        const to = `/${pathnames.slice(0, index + 1).join('/')}`
        
        // Handle IDs or special segments
        let label = routeLabels[value] || value
        
        // If it looks like an ID (contains digits AND is not in our map)
        if (!routeLabels[value] && /[0-9]/.test(value)) {
            label = 'Dettaglio Membro'
        }

        return (
          <div key={to} className="flex items-center space-x-1.5 md:space-x-2 shrink-0">
            <ChevronRight className="w-3 h-3 md:w-3.5 md:h-3.5 text-zinc-400 dark:text-zinc-600" />
            {last ? (
              <span className="text-zinc-900 dark:text-zinc-100 font-bold whitespace-nowrap">{label}</span>
            ) : (
              <Link 
                to={to} 
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors whitespace-nowrap min-h-[44px] md:min-h-0 flex items-center"
              >
                {label}
              </Link>
            )}
          </div>
        )
      })}
    </nav>
  )
}
