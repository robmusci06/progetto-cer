import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { LayoutDashboard, LogOut, Settings, Users, Zap, BarChart3, Bell, Search, Plus, MoreVertical, MapPin, Sun, UserCheck, ArrowUpRight } from "lucide-react"

const members = [
  { id: 1, name: "Mario Rossi", role: "Prosumer", type: "Residenziale", power: "4.5 kWp", status: "Attivo", location: "Via Roma, 12" },
  { id: 2, name: "Azienda Agricola Verdi", role: "Producer", type: "Impresa", power: "25.0 kWp", status: "Attivo", location: "Strada Prov. 4" },
  { id: 3, name: "Condominio Fiori", role: "Consumer", type: "Condominio", power: "-", status: "Attivo", location: "Via Milano, 45" },
  { id: 4, name: "Luigi Bianchi", role: "Consumer", type: "Residenziale", power: "-", status: "In Attesa", location: "Piazza Garibaldi, 2" },
  { id: 5, name: "Scuola Elementare", role: "Consumer", type: "PA", power: "-", status: "Attivo", location: "Via Dante, 8" },
]

export default function Community() {
  return (
    <div className="flex min-h-screen bg-zinc-50 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-zinc-950 text-zinc-400 flex flex-col transition-all duration-300">
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
          <a href="/community" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-indigo-500/10 text-indigo-500 transition-colors">
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
           <button onClick={() => window.location.href = '/'} className="flex items-center gap-3 px-3 py-2 w-full rounded-lg hover:bg-zinc-900 hover:text-zinc-100 transition-colors text-left">
             <LogOut className="h-5 w-5" />
             <span className="font-medium">Logout</span>
           </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-zinc-200 flex items-center justify-between px-8 z-10 sticky top-0">
           <div className="flex items-center w-96 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
              <Input placeholder="Cerca membri, POD o ruoli..." className="pl-10 bg-zinc-50 border-none focus-visible:ring-1 focus-visible:ring-zinc-300" />
           </div>
           
           <div className="flex items-center gap-4">
              <button className="relative p-2 text-zinc-400 hover:bg-zinc-100 rounded-full transition-colors">
                 <Bell className="h-5 w-5" />
              </button>
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400 flex items-center justify-center text-white font-medium text-sm shadow-sm cursor-pointer">
                 A
              </div>
           </div>
        </header>

        {/* Community Content */}
        <div className="flex-1 overflow-auto p-8">
           <div className="flex justify-between items-end mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
             <div>
               <h1 className="text-3xl font-bold tracking-tight text-zinc-900">Gestione Comunità</h1>
               <p className="text-zinc-500 mt-1">Supervisiona i membri della CER e approva nuove richieste.</p>
             </div>
             <Button className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm transition-all h-10">
               <Plus className="mr-2 h-4 w-4" /> Nuovo Membro
             </Button>
           </div>
           
           {/* Metric Cards */}
           <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
              <Card className="border-none shadow-[0_2px_10px_rgb(0,0,0,0.04)]">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                     <div>
                        <p className="text-sm font-medium text-zinc-500">Totale Membri</p>
                        <h3 className="text-3xl font-bold text-zinc-900 mt-2">5</h3>
                     </div>
                     <div className="h-10 w-10 rounded-full bg-indigo-50 flex items-center justify-center">
                        <Users className="h-5 w-5 text-indigo-600" />
                     </div>
                  </div>
                  <div className="mt-4 flex items-center text-sm">
                     <span className="text-emerald-600 font-medium flex items-center"><ArrowUpRight className="h-3 w-3 mr-1"/> +12</span>
                     <span className="text-zinc-400 ml-2">questo mese</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-[0_2px_10px_rgb(0,0,0,0.04)]">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                     <div>
                        <p className="text-sm font-medium text-zinc-500">Potenza Installata</p>
                        <h3 className="text-3xl font-bold text-zinc-900 mt-2">142 kWp</h3>
                     </div>
                     <div className="h-10 w-10 rounded-full bg-amber-50 flex items-center justify-center">
                        <Sun className="h-5 w-5 text-amber-600" />
                     </div>
                  </div>
                  <div className="mt-4 flex items-center text-sm">
                     <span className="text-emerald-600 font-medium flex items-center"><ArrowUpRight className="h-3 w-3 mr-1"/> +5.4 kWp</span>
                     <span className="text-zinc-400 ml-2">questo mese</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-[0_2px_10px_rgb(0,0,0,0.04)]">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                     <div>
                        <p className="text-sm font-medium text-zinc-500">Richieste in Sospeso</p>
                        <h3 className="text-3xl font-bold text-zinc-900 mt-2">8</h3>
                     </div>
                     <div className="h-10 w-10 rounded-full bg-rose-50 flex items-center justify-center">
                        <UserCheck className="h-5 w-5 text-rose-600" />
                     </div>
                  </div>
                  <div className="mt-4 flex items-center text-sm">
                     <span className="text-rose-600 font-medium flex items-center">Azione richiesta</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-[0_2px_10px_rgb(0,0,0,0.04)] border border-indigo-100 bg-gradient-to-br from-indigo-50 to-white">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                     <div>
                        <p className="text-sm font-medium text-indigo-600">Salute della CER</p>
                        <h3 className="text-3xl font-bold text-indigo-900 mt-2">Eccellente</h3>
                     </div>
                     <div className="h-10 w-10 rounded-full bg-white shadow-sm flex items-center justify-center">
                        <Zap className="h-5 w-5 text-indigo-600 fill-indigo-100" />
                     </div>
                  </div>
                  <div className="mt-4 flex items-center text-sm">
                     <span className="text-indigo-600 font-medium">85% Sincronismo Medio</span>
                  </div>
                </CardContent>
              </Card>
           </div>
           
           {/* Members List */}
           <div className="bg-white rounded-xl shadow-[0_2px_10px_rgb(0,0,0,0.04)] border border-zinc-100 overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
             <div className="px-6 py-4 border-b border-zinc-100 flex justify-between items-center bg-zinc-50/50">
                <h3 className="font-semibold text-zinc-900">Elenco Membri</h3>
                <div className="flex gap-2">
                   <Button variant="outline" size="sm" className="h-8 text-xs bg-white">Filtra per Ruolo</Button>
                   <Button variant="outline" size="sm" className="h-8 text-xs bg-white">Esporta CSV</Button>
                </div>
             </div>
             <div className="overflow-x-auto">
               <table className="w-full text-sm text-left">
                  <thead className="text-xs text-zinc-500 bg-white border-b border-zinc-100">
                     <tr>
                        <th className="px-6 py-4 font-medium">Membro</th>
                        <th className="px-6 py-4 font-medium">Ruolo</th>
                        <th className="px-6 py-4 font-medium">Tipologia</th>
                        <th className="px-6 py-4 font-medium">Potenza</th>
                        <th className="px-6 py-4 font-medium">Stato</th>
                        <th className="px-6 py-4 font-medium text-right">Azioni</th>
                     </tr>
                  </thead>
                  <tbody>
                     {members.map((member) => (
                        <tr key={member.id} className="border-b border-zinc-50 hover:bg-zinc-50/50 transition-colors group">
                           <td className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                 <div className="h-9 w-9 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 font-medium text-xs">
                                    {member.name.substring(0,2).toUpperCase()}
                                 </div>
                                 <div>
                                    <div className="font-medium text-zinc-900">{member.name}</div>
                                    <div className="text-xs text-zinc-500 flex items-center mt-0.5"><MapPin className="h-3 w-3 mr-1 inline"/> {member.location}</div>
                                 </div>
                              </div>
                           </td>
                           <td className="px-6 py-4">
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                 member.role === 'Prosumer' ? 'bg-indigo-50 text-indigo-700' :
                                 member.role === 'Producer' ? 'bg-amber-50 text-amber-700' :
                                 'bg-emerald-50 text-emerald-700'
                              }`}>
                                 {member.role === 'Prosumer' && <Zap className="h-3 w-3 mr-1" />}
                                 {member.role === 'Producer' && <Sun className="h-3 w-3 mr-1" />}
                                 {member.role === 'Consumer' && <Users className="h-3 w-3 mr-1" />}
                                 {member.role}
                              </span>
                           </td>
                           <td className="px-6 py-4 text-zinc-600">{member.type}</td>
                           <td className="px-6 py-4 font-medium text-zinc-900">{member.power}</td>
                           <td className="px-6 py-4">
                              <div className="flex items-center">
                                 <div className={`h-2 w-2 rounded-full mr-2 ${member.status === 'Attivo' ? 'bg-emerald-500' : 'bg-amber-500'}`}></div>
                                 <span className={member.status === 'Attivo' ? 'text-zinc-700' : 'text-amber-600 font-medium'}>{member.status}</span>
                              </div>
                           </td>
                           <td className="px-6 py-4 text-right">
                              <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                 <MoreVertical className="h-4 w-4" />
                              </Button>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
             </div>
             <div className="px-6 py-4 border-t border-zinc-100 flex items-center justify-between bg-zinc-50/50">
               <span className="text-xs text-zinc-500">Mostrando 5 di 5 membri</span>
               <div className="flex gap-1">
                  <Button variant="outline" size="sm" className="h-8 px-2" disabled>Precedente</Button>
                  <Button variant="outline" size="sm" className="h-8 px-2 bg-indigo-50 text-indigo-600 border-indigo-100">1</Button>
                  <Button variant="outline" size="sm" className="h-8 px-2">2</Button>
                  <Button variant="outline" size="sm" className="h-8 px-2">3</Button>
                  <span className="px-2 text-zinc-400">...</span>
                  <Button variant="outline" size="sm" className="h-8 px-2">Successivo</Button>
               </div>
             </div>
           </div>
        </div>
      </main>
    </div>
  )
}
