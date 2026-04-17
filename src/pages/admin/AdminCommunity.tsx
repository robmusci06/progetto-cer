import { useState } from 'react'
import { Users, Search, Filter, MoreHorizontal, User, Mail } from 'lucide-react'

const mockMembers = [
  { id: 'MEM-001', pod: 'IT001E12345678', name: 'Mario Rossi', email: 'm.rossi@example.com', role: 'Consumer', address: 'Via Roma 12', status: 'Attivo', joinedAt: '12 Gen 2026', performance: 'Ottima' },
  { id: 'MEM-002', pod: 'IT001E87654321', name: 'Azienda X', email: 'admin@aziendax.it', role: 'Prosumer', address: 'Via Milano 45', status: 'Attivo', joinedAt: '03 Feb 2026', performance: 'Ottima' },
  { id: 'MEM-003', pod: 'IT001E11223344', name: 'Luca Verdi', email: 'l.verdi@example.com', role: 'Producer', address: 'Area Ind. Capannone 3', status: 'Offline', joinedAt: '14 Mar 2026', performance: 'Critica' },
  { id: 'MEM-004', pod: 'IT001E99887766', name: 'Anna Neri', email: 'a.neri@example.com', role: 'Consumer', address: 'Corso Genova 8', status: 'In Attesa di Validazione GSE', joinedAt: '16 Apr 2026', performance: 'N/A' },
  { id: 'MEM-005', pod: 'IT001E55443322', name: 'Condominio Sole', email: 'admin@condominiosole.it', role: 'Prosumer', address: 'Via Napoli 100', status: 'Attivo', joinedAt: '25 Gen 2026', performance: 'Buona' },
]

export default function AdminCommunity() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredMembers = mockMembers.filter(m => 
    m.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    m.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    m.role.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-8 max-w-7xl mx-auto h-full pb-10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900">Comunità & Membri</h1>
          <p className="text-zinc-500 mt-1">Gestisci l'anagrafica, verifica le adesioni e monitora lo stato dei nodi.</p>
        </div>
        <div className="flex items-center gap-3">
           <div className="bg-indigo-50 px-4 py-2 rounded-xl border border-indigo-100 flex items-center gap-2">
             <Users className="w-4 h-4 text-indigo-600" />
             <span className="text-sm font-bold text-indigo-900">144 Iscritti Totali</span>
           </div>
           <button className="bg-zinc-900 hover:bg-zinc-800 text-white px-4 py-2 text-sm font-medium rounded-xl transition-all shadow-sm">
             + Nuovo Membro
           </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-zinc-200 overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-zinc-100 flex flex-col sm:flex-row justify-between items-center gap-4 bg-zinc-50/50">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-zinc-400" />
            <input 
              type="text" 
              placeholder="Cerca per nome, email o ruolo..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 pr-4 py-2 w-full border border-zinc-200 rounded-xl bg-white text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
            />
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
             <button className="flex items-center gap-2 px-4 py-2 border border-zinc-200 bg-white rounded-xl text-sm font-medium text-zinc-700 hover:bg-zinc-50 transition-colors w-full sm:w-auto">
              <Filter className="w-4 h-4" />
              Filtra
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
             <thead>
               <tr className="bg-white border-b border-zinc-100 text-xs uppercase tracking-wider font-semibold text-zinc-500">
                 <th className="p-4 pl-6">Membro</th>
                 <th className="p-4">POD & Contatti</th>
                 <th className="p-4 hidden md:table-cell">Ruolo</th>
                 <th className="p-4 hidden lg:table-cell">Stato</th>
                 <th className="p-4 text-right pr-6">Azioni</th>
               </tr>
             </thead>
             <tbody className="divide-y divide-zinc-100 text-sm">
               {filteredMembers.map((member) => (
                 <tr 
                   key={member.id} 
                   className="hover:bg-zinc-50/80 transition-colors group cursor-pointer"
                   onClick={() => alert(`Apertura dettaglio consumi per: ${member.name}`)}
                 >
                   <td className="p-4 pl-6">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-500 font-bold overflow-hidden">
                           <User className="w-5 h-5 opacity-50" />
                        </div>
                        <div>
                          <p className="font-bold text-zinc-900 group-hover:text-indigo-600 transition-colors">{member.name}</p>
                          <p className="text-xs text-zinc-500 mt-0.5">ID: {member.id}</p>
                        </div>
                      </div>
                   </td>
                   <td className="p-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-zinc-900 font-mono text-xs font-semibold">
                           {member.pod}
                        </div>
                        <div className="flex items-center gap-2 text-zinc-500 hidden sm:flex">
                           <Mail className="w-3.5 h-3.5" />
                           <span className="text-xs">{member.email}</span>
                        </div>
                      </div>
                   </td>
                   <td className="p-4 hidden md:table-cell">
                      <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold border
                        ${member.role === 'Producer' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                          member.role === 'Prosumer' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                          'bg-indigo-50 text-indigo-700 border-indigo-200'}`}
                      >
                        {member.role}
                      </div>
                   </td>
                   <td className="p-4 hidden lg:table-cell">
                      <div className="flex items-center gap-2 text-xs">
                        <div className={`w-2 h-2 rounded-full ${
                          member.status === 'Attivo' ? 'bg-emerald-500' :
                          member.status === 'Offline' ? 'bg-rose-500' :
                          'bg-amber-500'
                        }`} />
                        <span className="font-medium text-zinc-700">{member.status}</span>
                      </div>
                   </td>
                   <td className="p-4 text-right pr-6">
                      <button className="p-2 text-zinc-400 hover:text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors" onClick={(e) => e.stopPropagation()}>
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                   </td>
                 </tr>
               ))}
               
               {filteredMembers.length === 0 && (
                 <tr>
                   <td colSpan={5} className="p-8 text-center text-zinc-500">
                     Nessun membro trovato con questa ricerca.
                   </td>
                 </tr>
               )}
             </tbody>
          </table>
        </div>
        
        {/* Pagination mock */}
        <div className="p-4 border-t border-zinc-100 flex items-center justify-between text-sm text-zinc-500 bg-zinc-50/30">
           <span>Visualizzati 1-5 di 144 membri</span>
           <div className="flex items-center gap-2">
             <button className="px-3 py-1 border border-zinc-200 rounded text-zinc-400 cursor-not-allowed">Precedente</button>
             <button className="px-3 py-1 border border-zinc-200 bg-white rounded text-zinc-700 hover:bg-zinc-50">Successivo</button>
           </div>
        </div>
      </div>
    </div>
  )
}
