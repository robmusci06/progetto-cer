import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart3, Battery, LayoutDashboard, LogOut, Settings, Users, Zap, Bell, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const chartData = [
  { name: "Lun", value: 400 },
  { name: "Mar", value: 300 },
  { name: "Mer", value: 500 },
  { name: "Gio", value: 280 },
  { name: "Ven", value: 590 },
  { name: "Sab", value: 800 },
  { name: "Dom", value: 750 },
]

export default function Dashboard() {
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
          <a href="/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-indigo-500/10 text-indigo-400 transition-colors">
            <LayoutDashboard className="h-5 w-5" />
            <span className="font-medium">Dashboard</span>
          </a>
          <a href="/community" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-zinc-900 hover:text-zinc-100 transition-colors">
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
           <div className="flexitems-center w-96 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
              <Input placeholder="Cerca POD, utenti o comunità..." className="pl-10 bg-zinc-50 border-none focus-visible:ring-1 focus-visible:ring-zinc-300" />
           </div>
           
           <div className="flex items-center gap-4">
              <button className="relative p-2 text-zinc-400 hover:bg-zinc-100 rounded-full transition-colors">
                 <Bell className="h-5 w-5" />
                 <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-indigo-500"></span>
              </button>
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400 flex items-center justify-center text-white font-medium text-sm shadow-sm cursor-pointer">
                 A
              </div>
           </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-auto p-8">
           <div className="flex justify-between items-end mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
             <div>
               <h1 className="text-3xl font-bold tracking-tight text-zinc-900">Dashboard Overview</h1>
               <p className="text-zinc-500 mt-1">Benvenuto! Ecco la situazione energetica di oggi.</p>
             </div>
             <Button className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm transition-all h-10">
               <Zap className="mr-2 h-4 w-4" /> Esporta Report
             </Button>
           </div>
           
           {/* Metric Cards */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
              <Card className="border-none shadow-[0_2px_10px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-zinc-500">Energia Condivisa</CardTitle>
                  <div className="h-8 w-8 rounded-full bg-indigo-50 flex items-center justify-center">
                    <Zap className="h-4 w-4 text-indigo-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-zinc-900">12.4 MWh</div>
                  <p className="text-xs text-emerald-600 font-medium mt-1 inline-flex items-center">
                     <ArrowRight className="h-3 w-3 -rotate-45 mr-1" /> +14% rispetto a ieri
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-[0_2px_10px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-zinc-500">Impianti Attivi</CardTitle>
                  <div className="h-8 w-8 rounded-full bg-cyan-50 flex items-center justify-center">
                    <Battery className="h-4 w-4 text-cyan-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-zinc-900">342</div>
                  <p className="text-xs text-emerald-600 font-medium mt-1 inline-flex items-center">
                     <ArrowRight className="h-3 w-3 -rotate-45 mr-1" /> 12 nuovi questo mese
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-[0_2px_10px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-zinc-500">Membri CER</CardTitle>
                  <div className="h-8 w-8 rounded-full bg-rose-50 flex items-center justify-center">
                    <Users className="h-4 w-4 text-rose-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-zinc-900">1,204</div>
                  <p className="text-xs text-zinc-500 font-medium mt-1 inline-flex items-center">
                     Stabile questa settimana
                  </p>
                </CardContent>
              </Card>
           </div>
           
           {/* Chart Section */}
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
             <Card className="lg:col-span-2 border-none shadow-[0_2px_10px_rgb(0,0,0,0.04)]">
               <CardHeader>
                 <CardTitle className="text-lg text-zinc-900">Andamento Produzione (kWh)</CardTitle>
                 <CardDescription>Visualizzazione della produzione aggregata nell'ultima settimana</CardDescription>
               </CardHeader>
               <CardContent>
                 <div className="h-[300px] w-full mt-4">
                   <ResponsiveContainer width="100%" height="100%">
                     <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                       <defs>
                         <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                           <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                           <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                         </linearGradient>
                       </defs>
                       <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#a1a1aa', fontSize: 12}} dy={10} />
                       <YAxis axisLine={false} tickLine={false} tick={{fill: '#a1a1aa', fontSize: 12}} />
                       <Tooltip 
                         contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
                         itemStyle={{ color: '#4f46e5', fontWeight: 600 }}
                       />
                       <Area 
                         type="monotone" 
                         dataKey="value" 
                         stroke="#6366f1" 
                         strokeWidth={3}
                         fillOpacity={1} 
                         fill="url(#colorValue)" 
                         activeDot={{ r: 6, strokeWidth: 0, fill: '#4f46e5' }}
                       />
                     </AreaChart>
                   </ResponsiveContainer>
                 </div>
               </CardContent>
             </Card>
             
             <Card className="border-none shadow-[0_2px_10px_rgb(0,0,0,0.04)]">
               <CardHeader>
                 <CardTitle className="text-lg text-zinc-900">Attività Recenti</CardTitle>
                 <CardDescription>Ultimi eventi dal sistema</CardDescription>
               </CardHeader>
               <CardContent>
                 <div className="space-y-6 mt-2">
                   {[
                     { title: "Nuovo POD registrato", time: "10 min fa", status: "success" },
                     { title: "Allarme: Calo produzione Impianto Nord", time: "1 ora fa", status: "warning" },
                     { title: "Report mensile generato", time: "Ieri", status: "info" },
                     { title: "Manutenzione programmata completata", time: "Ieri", status: "success" },
                   ].map((item, i) => (
                     <div key={i} className="flex gap-4 group">
                       <div className="relative mt-1">
                         <div className={`h-3 w-3 rounded-full flex-shrink-0 ${
                           item.status === 'success' ? 'bg-emerald-500' : 
                           item.status === 'warning' ? 'bg-amber-500' : 'bg-blue-500'
                         }`}></div>
                         {i !== 3 && <div className="absolute top-4 left-[5px] w-[2px] h-full bg-zinc-100 group-hover:bg-zinc-200 transition-colors"></div>}
                       </div>
                       <div>
                         <p className="text-sm font-medium text-zinc-900 group-hover:text-indigo-600 transition-colors">{item.title}</p>
                         <p className="text-xs text-zinc-500 mt-1">{item.time}</p>
                       </div>
                     </div>
                   ))}
                 </div>
               </CardContent>
             </Card>
           </div>
        </div>
      </main>
    </div>
  )
}
