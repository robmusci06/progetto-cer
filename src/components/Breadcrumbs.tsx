import { useLocation, Link } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'

const routeLabels: Record<string, string> = {
  admin: 'Home',
  dashboard: 'Dashboard',
  cer: 'Gestione CER',
  community: 'Comunità',
  communications: 'Comunicazioni',
}

export default function Breadcrumbs() {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter((x) => x)

  return (
    <nav className="flex items-center space-x-2 text-sm font-medium text-zinc-500 mb-6 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-xl border border-zinc-200/50 w-fit shadow-sm animate-in slide-in-from-top-1 fade-in duration-500">
      <Link 
        to="/admin/dashboard" 
        className="flex items-center hover:text-indigo-600 transition-colors gap-1.5"
      >
        <Home className="w-3.5 h-3.5" />
        <span className="sr-only">Home</span>
      </Link>

      {pathnames.map((value, index) => {
        // Skip 'admin' if we want to start from the second level or handle it specially
        if (value === 'admin') return null

        const last = index === pathnames.length - 1
        const to = `/${pathnames.slice(0, index + 1).join('/')}`
        
        // Handle IDs or special segments
        let label = routeLabels[value] || value
        
        // If it looks like an ID (contains digits or uppercase and is not in our map)
        if (!routeLabels[value] && (/[0-9]/.test(value) || value.length > 5)) {
            label = 'Dettaglio Membro'
        }

        return (
          <div key={to} className="flex items-center space-x-2">
            <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
            {last ? (
              <span className="text-zinc-900 font-bold">{label}</span>
            ) : (
              <Link 
                to={to} 
                className="hover:text-indigo-600 transition-colors"
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
