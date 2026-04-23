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

  // Build crumbs (skip 'admin')
  const crumbs = pathnames
    .map((value, index) => {
      if (value === 'admin') return null
      const to = `/${pathnames.slice(0, index + 1).join('/')}`
      let label = routeLabels[value] || value
      if (!routeLabels[value] && /[0-9]/.test(value)) {
        label = 'Dettaglio'
      }
      const isLast = index === pathnames.length - 1
      return { to, label, isLast }
    })
    .filter(Boolean) as { to: string; label: string; isLast: boolean }[]

  // On mobile: show Home + ellipsis + last crumb (if > 1 level)
  // On desktop: show all crumbs
  const showEllipsisMobile = crumbs.length > 1

  return (
    <nav className="flex items-center gap-1 md:gap-1.5 text-xs md:text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-3 md:mb-6 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm px-3 md:px-4 py-2 md:py-2.5 rounded-xl border border-zinc-200/50 dark:border-zinc-800/50 max-w-full shadow-sm animate-in slide-in-from-top-1 fade-in duration-500 overflow-hidden">
      {/* Home icon — always visible */}
      <Link 
        to="/admin/dashboard" 
        className="flex items-center hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors shrink-0"
      >
        <Home className="w-3.5 h-3.5 md:w-4 md:h-4" />
        <span className="sr-only">Home</span>
      </Link>

      {/* Desktop: all crumbs */}
      {crumbs.map((crumb, i) => (
        <div key={crumb.to} className={`flex items-center gap-1 md:gap-1.5 shrink-0 ${
          // On mobile, hide intermediate crumbs (not first, not last) when > 1 level
          showEllipsisMobile && !crumb.isLast && i !== 0
            ? 'hidden md:flex'
            : showEllipsisMobile && i === 0 && !crumb.isLast
            ? 'hidden md:flex'
            : ''
        }`}>
          <ChevronRight className="w-3 h-3 md:w-3.5 md:h-3.5 text-zinc-300 dark:text-zinc-600 shrink-0" />
          {crumb.isLast ? (
            <span className="text-zinc-900 dark:text-zinc-100 font-bold truncate max-w-[140px] sm:max-w-none">{crumb.label}</span>
          ) : (
            <Link 
              to={crumb.to} 
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors whitespace-nowrap"
            >
              {crumb.label}
            </Link>
          )}
        </div>
      ))}

      {/* Mobile ellipsis — only shown when there are intermediate levels */}
      {showEllipsisMobile && (
        <div className="flex md:hidden items-center gap-1 shrink-0 order-first ml-0">
          <ChevronRight className="w-3 h-3 text-zinc-300 dark:text-zinc-600 shrink-0" />
          <span className="text-zinc-300 dark:text-zinc-600 text-xs">…</span>
        </div>
      )}
    </nav>
  )
}
