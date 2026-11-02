import { motion } from 'motion/react';
import { 
  Coffee, 
  Bus, 
  Shield, 
  ShoppingCart, 
  AlertTriangle, 
  History, 
  Plus, 
  MoreVertical,
  Activity,
  Radar,
  Antenna
} from 'lucide-react';
// Recharts not used in this view for specific grid layout

const chartData = [
  { val: 40, color: '#94a3b8' },
  { val: 60, color: '#94a3b8' },
  { val: 90, color: '#005da6' },
  { val: 30, color: '#94a3b8' },
  { val: 100, color: '#ef4444' },
  { val: 55, color: '#94a3b8' },
  { val: 75, color: '#005da6' },
];

export default function Dashboard() {
  return (
    <div className="flex-grow flex h-screen bg-slate-50 overflow-hidden pr-3 relative">
      {/* Lateral Status Bar */}
      <aside className="fixed right-0 top-0 bottom-0 w-3 bg-white border-l border-slate-200 z-50 flex flex-col justify-end rounded-l-md overflow-hidden">
        <div className="absolute top-10 right-4 text-primary font-mono text-[8px] rotate-90 origin-right whitespace-nowrap opacity-50">
          BORROWED_CAP_V2.0
        </div>
        <div className="w-full bg-waste h-[65%] shadow-[0_0_15px_rgba(239,68,68,0.3)] relative">
          <div className="absolute -left-12 bottom-1/2 rotate-90 font-mono text-[10px] text-waste font-bold">
            65% UTIL
          </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col min-w-0">
        {/* Top Grid Sections */}
        <section className="grid grid-cols-4 grid-rows-4 gap-[1px] bg-slate-200 min-h-[400px]">
          {/* Daily Vol */}
          <div className="bg-slate-50 p-3 flex flex-col justify-between relative overflow-hidden">
            <span className="text-[9px] text-primary/60 uppercase font-mono font-bold">D_VOL_DAILY</span>
            <div className="font-mono text-xl font-black text-slate-900">₹142.50</div>
            <div className="flex items-end gap-1 h-8">
              {[8, 16, 12, 24, 6, 32, 14].map((h, i) => (
                <div key={i} className="w-1.5 bg-primary rounded-t-sm" style={{ height: `${h}px` }} />
              ))}
            </div>
          </div>

          {/* Leak Warn */}
          <div className="bg-slate-50 p-3 flex flex-col justify-between border-l border-slate-200">
            <span className="text-[9px] text-waste font-bold uppercase font-mono">W_LEAK_WARN</span>
            <div className="font-mono text-xl font-black text-waste">12.4%</div>
            <div className="text-[8px] text-waste font-bold leading-tight uppercase">Critical Threshold Reached</div>
          </div>

          {/* Efficiency */}
          <div className="bg-slate-50 p-3 flex flex-col justify-between">
            <span className="text-[9px] text-slate-500 font-bold uppercase font-mono">NET_EFFICIENCY</span>
            <div className="font-mono text-xl font-bold text-slate-900">0.88</div>
            <div className="h-1.5 bg-slate-200 w-full rounded-full overflow-hidden">
              <div className="bg-primary w-[88%] h-full"></div>
            </div>
          </div>

          {/* Status Scanning */}
          <div className="bg-slate-50 p-3 flex items-center justify-center border-l border-slate-200 relative">
            <Radar className="absolute w-12 h-12 text-primary opacity-5 animate-pulse" />
            <div className="text-center relative">
              <div className="text-[8px] opacity-50 font-bold">STATUS</div>
              <div className="text-xs font-mono font-black text-primary">SCANNING</div>
            </div>
          </div>

          {/* 7D Resource Flow */}
          <div className="bg-slate-50 p-3 col-span-2 flex flex-col justify-between border-t border-slate-200">
            <div className="flex justify-between items-center">
              <span className="text-[9px] text-slate-500 font-bold font-mono">7D_RESOURCE_FLOW</span>
              <span className="text-[9px] text-primary font-black font-mono">AVG: ₹112.4/D</span>
            </div>
            <div className="flex items-end justify-between h-16 gap-1 px-1">
              {chartData.map((d, i) => (
                <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${d.val}%`, backgroundColor: d.color }} />
              ))}
            </div>
          </div>

          {/* Logistics Cost */}
          <div className="bg-slate-50 p-3 border-t border-l border-slate-200 flex flex-col justify-between">
            <span className="text-[9px] text-consumption font-black font-mono">LOGISTICS_COST</span>
            <span className="font-mono text-sm text-slate-900 font-bold">
              ₹2.75 <span className="text-[8px] text-slate-500">/AVG</span>
            </span>
          </div>

          {/* U Index */}
          <div className="bg-slate-50 p-3 border-t border-l border-slate-200 flex flex-col justify-between">
            <span className="text-[9px] text-slate-500 font-bold font-mono">U_INDEX</span>
            <span className="font-mono text-sm text-primary font-black">S_ALPHA</span>
          </div>

          {/* Buffers */}
          <div className="bg-slate-50 p-3 border-t border-slate-200 flex flex-col gap-1.5 justify-center">
            {[1, 1, 0.4, 1].map((o, i) => (
              <div key={i} className="w-full h-1 bg-slate-300 rounded-full" style={{ opacity: o }} />
            ))}
            <div className="text-[8px] text-slate-500 font-bold mt-1 font-mono uppercase">BUF_STK_OVR</div>
          </div>

          {/* Stats Bar */}
          <div className="bg-slate-50 p-3 border-t border-l border-slate-200 col-span-3 flex items-center justify-between">
            <div className="flex gap-8">
              <div>
                <div className="text-[8px] text-slate-500 font-bold">CPU_LOAD</div>
                <div className="font-mono text-[10px] text-slate-700 font-black">12%</div>
              </div>
              <div>
                <div className="text-[8px] text-slate-500 font-bold">BEH_AUTH</div>
                <div className="font-mono text-[10px] text-primary font-black">ACTIVE</div>
              </div>
            </div>
            <div className="flex gap-1.5">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="w-2 h-2 rounded-full bg-slate-200"></span>
              <span className="w-2 h-2 rounded-full bg-slate-200"></span>
            </div>
          </div>

          {/* Allocated Resources */}
          <div className="bg-slate-50 p-3 border-t border-slate-200 col-span-2 flex flex-col justify-center">
            <div className="text-[9px] text-slate-500 font-black mb-2 uppercase font-mono tracking-tighter">Allocated_Resources</div>
            <div className="flex w-full h-2 rounded-full overflow-hidden bg-slate-200">
              <div className="w-1/4 bg-primary" />
              <div className="w-1/12 bg-amber-500" />
            </div>
          </div>

          {/* Icons */}
          <div className="bg-slate-50 border-t border-l border-slate-200 flex items-center justify-center">
            <Antenna className="w-4 h-4 text-primary" />
          </div>
          <div className="bg-slate-50 border-t border-l border-slate-200 flex items-center justify-center">
            <Shield className="w-4 h-4 text-waste" />
          </div>
        </section>

        {/* Live Ledger Section */}
        <section className="flex-1 flex flex-col bg-slate-50 overflow-hidden relative">
          <div className="px-4 py-3 bg-white border-b border-slate-200 flex justify-between items-center shadow-sm z-10">
            <span className="text-[10px] font-black text-slate-800 tracking-[0.2em] uppercase">Live_Ledger_Stream</span>
            <span className="text-[10px] text-primary font-black font-mono">VECT_01</span>
          </div>

          <div className="flex-1 overflow-y-auto no-scrollbar pb-32 p-3 space-y-3 scanline">
            {/* Simple Small Items */}
            <div className="flex items-center p-3 bg-white/50 border-b border-slate-200 transition-colors hover:bg-white group">
              <Coffee className="w-4 h-4 text-primary/60 mr-4" />
              <div className="flex-1">
                <div className="text-[10px] font-black text-slate-700 uppercase tracking-tight">Artisan Roasters</div>
                <div className="text-[8px] text-slate-500 font-bold uppercase font-mono">08:14 • CON</div>
              </div>
              <div className="font-mono text-sm font-black text-slate-800">-₹6.50</div>
            </div>

            {/* Major Highlight Item */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-waste/5 border-y border-waste/20 p-5 relative overflow-hidden rounded-xl shadow-inner group"
            >
              <AlertTriangle className="absolute -right-6 -top-6 w-32 h-32 text-waste opacity-5 rotate-12" />
              <div className="flex items-center gap-4 mb-3 relative z-10">
                <div className="w-14 h-14 bg-waste flex items-center justify-center rounded-lg shadow-lg">
                  <ShoppingCart className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-black text-waste uppercase leading-none">Impulse Retail</div>
                  <div className="text-[10px] font-mono text-waste font-black mt-1.5 tracking-widest uppercase">Unplanned_Waste_Protocol</div>
                </div>
              </div>
              <div className="text-5xl font-mono font-black text-slate-900 relative z-10">-₹45.00</div>
              <div className="absolute bottom-4 right-6 text-[10px] text-waste font-black animate-pulse uppercase font-mono">System_Clog_Detected</div>
            </motion.div>

            {/* Other Items */}
            <div className="flex items-center p-3 bg-white/50 border-b border-slate-200 group">
              <Bus className="w-4 h-4 text-primary/60 mr-4" />
              <div className="flex-1">
                <div className="text-[10px] font-black text-slate-700 uppercase">City Transit</div>
                <div className="text-[8px] text-slate-500 font-bold font-mono">YEST • LOG</div>
              </div>
              <div className="font-mono text-sm font-black text-slate-800">-₹2.75</div>
            </div>

            <div className="flex items-center p-3 bg-white/50 border-b border-slate-200 group">
              <Shield className="w-4 h-4 text-primary/60 mr-4" />
              <div className="flex-1">
                <div className="text-[10px] font-black text-slate-700 uppercase">Security_Sub</div>
                <div className="text-[8px] text-slate-500 font-bold font-mono">YEST • FIX</div>
              </div>
              <div className="font-mono text-sm font-black text-slate-800">-₹12.00</div>
            </div>

            {/* Second Highlight */}
            <div className="bg-waste/10 border border-waste/20 p-5 rounded-xl space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-[10px] text-waste font-black tracking-widest uppercase mb-1">Secondary_Leakage</div>
                  <div className="text-xl font-black text-slate-900 uppercase">Late Fee: Digital</div>
                  <div className="text-[9px] text-waste/80 font-bold uppercase mt-1">Behavioral failure at 23:59</div>
                </div>
                <div className="text-3xl font-mono font-black text-waste">-₹25.00</div>
              </div>
              <div className="w-full h-2 bg-waste/20 rounded-full overflow-hidden">
                <div className="w-3/4 h-full bg-waste rounded-full" />
              </div>
            </div>
          </div>
        </section>

        {/* Global Action Bar */}
        <div className="h-20 bg-white border-t border-slate-200 flex items-center px-6 justify-between shadow-[0_-4px_24px_rgba(0,0,0,0.05)]">
          <button className="bg-primary/5 hover:bg-primary/10 w-12 h-12 flex items-center justify-center rounded-xl transition-all border border-primary/20">
            <History className="w-5 h-5 text-primary" />
          </button>
          
          <button className="flex-1 mx-6 bg-primary text-white h-12 flex items-center justify-center gap-3 font-black uppercase text-xs tracking-tighter shadow-lg hover:shadow-xl active:scale-95 transition-all rounded-xl">
            <Plus className="w-5 h-5" />
            Engage Tactical Entry
          </button>
          
          <button className="bg-slate-100 hover:bg-slate-200 w-12 h-12 flex items-center justify-center rounded-xl transition-all border border-slate-200">
            <MoreVertical className="w-5 h-5 text-slate-400" />
          </button>
        </div>
      </main>

      {/* Extreme Left Rail Marker */}
      <nav className="fixed left-0 top-0 bottom-0 w-1.5 flex flex-col justify-around py-24 pointer-events-none z-50">
        <div className="w-full h-12 bg-primary rounded-r-full shadow-[0_0_8px_rgba(0,93,166,0.3)]" />
        {[1, 2, 3].map(i => (
          <div key={i} className="w-full h-12 bg-slate-300 rounded-r-full opacity-50" />
        ))}
      </nav>
    </div>
  );
}
