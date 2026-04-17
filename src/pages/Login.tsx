import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight, Lock, Mail } from "lucide-react"

export default function Login() {
  return (
    <div className="flex min-h-screen bg-zinc-950 font-sans">
      {/* Left Panel */}
      <div className="hidden lg:flex flex-1 flex-col justify-between p-12 text-white relative overflow-hidden bg-black/95">
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-900/40 via-[#0a0a0a] to-black"></div>
         
         {/* Top Logo */}
         <div className="relative z-10 flex items-center gap-3">
             <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center p-[2px]">
                <div className="h-full w-full bg-black/50 rounded-[10px] flex items-center justify-center backdrop-blur-md">
                   <span className="font-bold text-lg text-white">B</span>
                </div>
             </div>
             <span className="font-semibold text-xl tracking-wide text-zinc-100">Brilla Platform</span>
         </div>
         
         {/* Main Copy */}
         <div className="relative z-10 mb-20 max-w-lg">
             <h1 className="text-5xl font-bold tracking-tight mb-6 leading-tight text-white">
                 Gestisci l'energia del futuro con <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">precisione</span>.
             </h1>
             <p className="text-zinc-400 text-lg leading-relaxed">
                 Monitora i consumi, amministra le comunità energetiche e ottimizza le risorse. Tutto in un'unica piattaforma potente e intuitiva.
             </p>
         </div>
         
         {/* Footer Left */}
         <div className="relative z-10 text-zinc-500 text-sm">
             &copy; 2026 Brilla Energy. Tutti i diritti riservati.
         </div>
         
         {/* Decorative Blur Orbs */}
         <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none"></div>
         <div className="absolute bottom-[20%] left-[-20%] w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      </div>
      
      {/* Right Panel */}
      <div className="flex flex-1 items-center justify-center p-8 bg-zinc-50 relative">
        <div className="w-full max-w-md space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
           
           <div className="text-center">
             <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Accedi all'Area Admin</h2>
             <p className="text-zinc-500 mt-2">Inserisci le tue credenziali per proseguire.</p>
           </div>
           
           <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-zinc-100">
             <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); window.location.href = '/dashboard'; }}>
               
               <div className="space-y-2">
                 <Label htmlFor="email" className="text-zinc-700 font-medium">Email</Label>
                 <div className="relative">
                   <Mail className="absolute left-3 top-3 h-4 w-4 text-zinc-400" />
                   <Input 
                      id="email" 
                      type="email" 
                      placeholder="admin@brilla.it" 
                      className="pl-10 bg-zinc-50 border-zinc-200 focus-visible:ring-indigo-500 focus-visible:border-indigo-500 transition-colors h-10" 
                      required 
                   />
                 </div>
               </div>
               
               <div className="space-y-2">
                 <div className="flex items-center justify-between">
                   <Label htmlFor="password" className="text-zinc-700 font-medium">Password</Label>
                   <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500 transition-colors">
                     Password dimenticata?
                   </a>
                 </div>
                 <div className="relative">
                   <Lock className="absolute left-3 top-3 h-4 w-4 text-zinc-400" />
                   <Input 
                      id="password" 
                      type="password" 
                      placeholder="••••••••" 
                      className="pl-10 bg-zinc-50 border-zinc-200 focus-visible:ring-indigo-500 focus-visible:border-indigo-500 transition-colors h-10" 
                      required 
                   />
                 </div>
               </div>
               
               <Button className="w-full bg-zinc-900 hover:bg-zinc-800 text-white shadow-md transition-all mt-6 group h-11" size="lg">
                 Entra nella Dashboard
                 <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
               </Button>
               
             </form>
           </div>
           
        </div>
      </div>
    </div>
  )
}
