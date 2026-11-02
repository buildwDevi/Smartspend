import { motion } from 'motion/react';
import { Gavel, Download, TrendingUp, Brain, CheckCircle2, AlertOctagon } from 'lucide-react';
import { cn } from '../lib/utils';

const infractions = [
  {
    id: 1,
    rule: 'Rule Alpha-7 Violated',
    title: 'Unauthorized Market Entry',
    description: 'Deviated from pre-market structural plan by 15% allocation without explicit authorization protocol.',
    date: 'Oct 12, 2023 • 09:42 AM',
    penalty: '3 DAYS',
    type: 'severe'
  },
  {
    id: 2,
    rule: 'Rule Beta-2 Violated',
    title: 'Observation Fatigue',
    description: 'Excessive portfolio refreshing outside of designated review windows, leading to reactive tension.',
    date: 'Oct 09, 2023 • 14:15 PM',
    penalty: '1 DAY',
    type: 'moderate'
  },
  {
    id: 3,
    rule: 'Rule Gamma-1 Violated',
    title: 'Hedging Hesitation',
    description: 'Failed to execute programmed risk-mitigation trade upon threshold breach.',
    date: 'Oct 04, 2023 • 11:00 AM',
    penalty: '2 DAYS',
    type: 'moderate'
  }
];

export default function Ledger() {
  return (
    <main className="flex-1 pb-32 pt-10 px-6 max-w-7xl mx-auto w-full">
      {/* Hero Header */}
      <section className="mb-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-200 text-slate-800 text-[10px] tracking-[0.15em] uppercase font-bold border border-slate-300">
              <Gavel className="w-3.5 h-3.5" />
              Disciplinary Record
            </div>
            <h1 className="font-headline font-black text-5xl md:text-7xl tracking-tight text-slate-900 leading-none">
              The Audit Vault
            </h1>
            <p className="font-sans text-on-surface-variant text-xl leading-relaxed max-w-xl">
              A strict accounting of structural discipline. Review infractions, acknowledge failures in protocol, and calibrate future strategy.
            </p>
          </div>

          {/* Compressed Metric */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-error text-white rounded-2xl p-8 shadow-2xl min-w-[320px] relative overflow-hidden"
          >
            <AlertOctagon className="absolute -right-4 -bottom-4 w-32 h-32 opacity-10 rotate-12" />
            <div className="flex items-start justify-between mb-4 relative z-10">
              <span className="text-[10px] tracking-[0.2em] uppercase font-black opacity-80">Compromised Tomorrows</span>
              <AlertOctagon className="w-5 h-5 text-white/50" />
            </div>
            <div className="font-headline font-black text-7xl tracking-tighter mb-2 relative z-10">14</div>
            <div className="text-sm font-bold opacity-80 uppercase tracking-widest">Days lost to impulsive variance</div>
          </motion.div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Infractions List */}
        <div className="lg:col-span-8 bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-10">
          <div className="flex items-center justify-between mb-10 pb-6 border-b border-slate-100">
            <h2 className="font-headline font-bold text-2xl text-slate-900 tracking-tight">Recent Infractions</h2>
            <button className="text-[10px] tracking-[0.1em] text-primary hover:opacity-70 uppercase font-black transition-all flex items-center gap-2 group">
              Download Report 
              <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>

          <div className="space-y-4">
            {infractions.map((inf, idx) => (
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                key={inf.id}
                className="flex bg-slate-50 hover:bg-slate-100/80 transition-all rounded-2xl overflow-hidden group border border-slate-200/50"
              >
                <div className={cn(
                  "w-2 shrink-0 transition-all group-hover:w-3",
                  inf.type === 'severe' ? "bg-error" : "bg-tertiary"
                )} />
                <div className="p-6 flex-1 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="space-y-2">
                    <div className={cn(
                      "text-[9px] tracking-[0.2em] uppercase font-black mb-1",
                      inf.type === 'severe' ? "text-error" : "text-tertiary"
                    )}>
                      {inf.rule}
                    </div>
                    <h3 className="font-headline font-bold text-xl text-slate-900 group-hover:text-primary transition-colors">
                      {inf.title}
                    </h3>
                    <p className="font-sans text-sm text-on-surface-variant max-w-lg leading-relaxed">
                      {inf.description}
                    </p>
                  </div>
                  <div className="md:text-right shrink-0 flex md:flex-col items-center md:items-end justify-between gap-4">
                    <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">{inf.date}</span>
                    <span className={cn(
                      "inline-block font-sans text-[10px] font-black px-4 py-2 rounded-lg tracking-[0.1em] shadow-sm",
                      inf.type === 'severe' 
                        ? "bg-red-100 text-red-700" 
                        : "bg-slate-200 text-slate-700"
                    )}>
                      PENALTY: {inf.penalty}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sidebar Analysis */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          {/* Glass Card */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-56 flex flex-col justify-center p-8 bg-white border border-slate-200">
            <div className="absolute inset-0 bg-gradient-to-br from-tertiary/5 via-white to-slate-100 opacity-90 z-0" />
            <div className="absolute -right-12 -top-12 w-48 h-48 bg-tertiary/10 rounded-full blur-3xl z-0" />
            
            <div className="relative z-10 space-y-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-tertiary" />
                <span className="text-[10px] tracking-[0.2em] uppercase text-tertiary font-black">Kinetic Variance</span>
              </div>
              <div className="font-headline font-black text-6xl text-slate-900 tracking-tighter">
                3.2<span className="text-3xl text-tertiary ml-1">x</span>
              </div>
              <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider leading-relaxed opacity-80">
                Velocity of deviations vs previous quarter. Requires friction.
              </p>
            </div>
          </div>

          {/* Coaching Node */}
          <div className="bg-slate-800 rounded-3xl p-8 shadow-2xl flex-1 flex flex-col border border-slate-700">
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-700">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white">
                <Brain className="w-6 h-6 fill-white opacity-40" />
              </div>
              <h3 className="font-headline font-bold text-2xl text-white tracking-tight">The Strategist</h3>
            </div>
            
            <div className="font-sans text-base text-slate-300 leading-relaxed space-y-6 mb-10 flex-1">
              <p className="font-bold text-white italic">"Observation without structure is merely anxiety disguised as research."</p>
              <p>Your recent entries indicate friction is missing from your execution layer. You are acting on observation rather than protocol. </p>
              <p className="font-bold text-white bg-white/10 p-4 rounded-xl border border-white/5 shadow-inner">
                Reinstate the 2-hour Friction Gate on all non-scheduled actions immediately.
              </p>
            </div>

            <button className="w-full bg-white text-slate-900 font-black text-sm tracking-[0.1em] uppercase py-5 rounded-2xl hover:bg-slate-100 transform active:scale-95 transition-all flex justify-center items-center gap-3 shadow-xl">
              <CheckCircle2 className="w-5 h-5" />
              Acknowledge Protocol
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
