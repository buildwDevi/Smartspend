import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AlertTriangle, ShieldCheck, FileText, Plus, X, Bell, Zap, Clock, IndianRupee } from 'lucide-react';
import { BarChart, Bar, ResponsiveContainer, XAxis, Cell, Tooltip } from 'recharts';
import { cn } from '../lib/utils';

const timelineData = [
  { day: 'M', value: 16, type: 'essential' },
  { day: 'T', value: 12, type: 'essential' },
  { day: 'W', value: 20, type: 'essential' },
  { day: 'T', value: 14, type: 'essential' },
  { day: 'F', value: 48, type: 'waste' },
  { day: 'S', value: 56, type: 'waste' },
  { day: 'S', value: 24, type: 'essential' },
];

interface ProtocolGate {
  id: string;
  name: string;
  threshold: string;
  category: string;
  type: 'spending' | 'timing' | 'frequency';
  status: 'active' | 'paused';
}

export default function Pulse() {
  const [gates, setGates] = useState<ProtocolGate[]>([
    { id: '1', name: 'Late Night Leisure Gate', threshold: 'Before 07:00', category: 'Entertainment', type: 'timing', status: 'active' },
    { id: '2', name: 'Weekend Impulse Guard', threshold: '> ₹1,000', category: 'Retail', type: 'spending', status: 'active' },
  ]);

  const [isAdding, setIsAdding] = useState(false);
  const [newName, setNewName] = useState('');
  const [newThreshold, setNewThreshold] = useState('');
  const [newCategory, setNewCategory] = useState('Retail');
  const [newType, setNewType] = useState<'spending' | 'timing' | 'frequency'>('spending');

  const addGate = () => {
    if (!newName || !newThreshold) return;
    const newGate: ProtocolGate = {
      id: Math.random().toString(36).substr(2, 9),
      name: newName,
      threshold: newThreshold,
      category: newCategory,
      type: newType,
      status: 'active'
    };
    setGates([...gates, newGate]);
    setIsAdding(false);
    setNewName('');
    setNewThreshold('');
  };

  const toggleStatus = (id: string) => {
    setGates(gates.map(g => g.id === id ? { ...g, status: g.status === 'active' ? 'paused' : 'active' } : g));
  };

  const deleteGate = (id: string) => {
    setGates(gates.filter(g => g.id !== id));
  };

  return (
    <main className="flex-grow flex flex-col items-center px-4 md:px-8 py-10 w-full max-w-5xl mx-auto gap-8 mb-32 md:mb-12">
      {/* Page Header */}
      <section className="w-full">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-headline font-bold text-4xl md:text-5xl tracking-tight text-on-background mb-3"
        >
          Behavioral Metrics
        </motion.h1>
        <p className="font-sans text-on-surface-variant text-lg">Analyzing the human cost of financial decisions.</p>
      </section>

      {/* Main Grid */}
      <section className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Stolen Tomorrow Time */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-2 bg-slate-50 p-8 rounded-2xl border border-outline-variant/20 relative overflow-hidden group shadow-sm"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200/50 z-0" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1.5 h-8 bg-error rounded-full block" />
              <h2 className="font-headline font-bold text-2xl text-on-surface">Stolen Tomorrow Time</h2>
            </div>
            
            <p className="font-sans text-on-surface-variant mb-10 max-w-lg leading-relaxed">
              This metric visualizes the hours of future freedom compromised by current non-essential spending patterns.
            </p>

            <div className="space-y-8">
              <div className="flex items-end gap-6">
                <div className="flex flex-col gap-2 w-full max-w-xs">
                  <span className="font-bold text-[10px] tracking-[0.2em] uppercase text-on-surface-variant">This Month</span>
                  <div className="h-14 bg-white rounded-lg relative overflow-hidden border border-slate-200">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '75%' }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="absolute top-0 left-0 h-full bg-error rounded-l-lg shadow-[4px_0_12px_rgba(239,68,68,0.3)]" 
                    />
                  </div>
                </div>
                <div className="pb-1">
                  <span className="font-headline font-black text-4xl text-error">42</span>
                  <span className="font-sans text-xs font-bold text-on-surface-variant ml-2 uppercase tracking-widest">hours lost</span>
                </div>
              </div>

              <div className="flex items-end gap-6">
                <div className="flex flex-col gap-2 w-full max-w-xs">
                  <span className="font-bold text-[10px] tracking-[0.2em] uppercase text-on-surface-variant opacity-70">Last Month</span>
                  <div className="h-10 bg-white/50 rounded-lg relative overflow-hidden border border-slate-200/50">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '60%' }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                      className="absolute top-0 left-0 h-full bg-slate-400 rounded-l-lg opacity-40" 
                    />
                  </div>
                </div>
                <div className="pb-1">
                  <span className="font-headline font-bold text-2xl text-on-surface-variant">36</span>
                  <span className="font-sans text-xs font-bold text-on-surface-variant ml-2 uppercase tracking-widest">hours lost</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Context Sidebar Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 flex flex-col justify-between"
        >
          <div>
            <div className="w-12 h-12 bg-tertiary/10 rounded-xl flex items-center justify-center mb-6 text-tertiary">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h3 className="font-headline font-bold text-xl mb-4 text-slate-900 tracking-tight">The Behavioral Cost</h3>
            <p className="font-sans text-base text-on-surface-variant leading-relaxed mb-8">
              Your tendency towards impulse convenience spending on weekends is accelerating. This pattern is systematically eroding your planned sabbatical buffer.
            </p>
          </div>
          
          <button className="w-full bg-tertiary text-white font-bold py-4 rounded-xl text-sm hover:opacity-95 transform active:scale-[0.98] transition-all flex justify-center items-center gap-3 shadow-lg shadow-tertiary/20">
            <FileText className="w-5 h-5" />
            Review Discipline Protocol
          </button>
        </motion.div>
      </section>

      {/* Protocol Gates Section */}
      <section className="w-full space-y-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-primary" />
            <h2 className="font-headline font-bold text-2xl text-on-surface">Protocol Gates</h2>
          </div>
          <button 
            onClick={() => setIsAdding(true)}
            className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200"
          >
            <Plus className="w-4 h-4" />
            Establish New Gate
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {gates.map((gate) => (
              <motion.div
                key={gate.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className={cn(
                  "p-5 rounded-2xl border transition-all relative overflow-hidden group",
                  gate.status === 'active' 
                    ? "bg-white border-slate-200 shadow-sm" 
                    : "bg-slate-50 border-slate-100 opacity-60"
                )}
              >
                <div className="flex items-start justify-between mb-4 relative z-10">
                  <div className={cn(
                    "p-2 rounded-lg",
                    gate.type === 'spending' ? "bg-amber-100 text-amber-600" : 
                    gate.type === 'timing' ? "bg-blue-100 text-blue-600" : "bg-purple-100 text-purple-600"
                  )}>
                    {gate.type === 'spending' ? <IndianRupee className="w-4 h-4" /> : 
                     gate.type === 'timing' ? <Clock className="w-4 h-4" /> : <Zap className="w-4 h-4" />}
                  </div>
                  <div className="flex gap-1">
                    <button 
                      onClick={() => toggleStatus(gate.id)}
                      className="p-1.5 hover:bg-slate-100 rounded-md text-slate-400 hover:text-slate-600 transition-colors"
                    >
                      <Bell className={cn("w-4 h-4", gate.status === 'active' && "fill-current")} />
                    </button>
                    <button 
                      onClick={() => deleteGate(gate.id)}
                      className="p-1.5 hover:bg-red-50 rounded-md text-slate-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <h4 className="font-headline font-bold text-slate-900 group-hover:text-primary transition-colors cursor-pointer">{gate.name}</h4>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 border border-slate-100 px-2 py-0.5 rounded-full">
                    {gate.category}
                  </span>
                  <span className="text-sm font-mono font-bold text-primary">{gate.threshold}</span>
                </div>

                {gate.status === 'paused' && (
                  <div className="absolute top-2 right-12 text-[8px] font-bold text-slate-400 uppercase tracking-tighter">Inactive</div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Add Gate Form Modal Overlay */}
          <AnimatePresence>
            {isAdding && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
              >
                <motion.div 
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  className="bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl space-y-6"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-headline font-black text-2xl text-slate-900 uppercase tracking-tight">New Protocol</h3>
                    <button onClick={() => setIsAdding(false)} className="text-slate-400 hover:text-slate-600"><X /></button>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Gate Name</label>
                      <input 
                        type="text" 
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        placeholder="e.g., Starbucks Restriction"
                        className="w-full bg-slate-50 border-none rounded-xl p-4 font-sans text-sm outline-none focus:ring-2 ring-primary/20 transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Type</label>
                        <select 
                          value={newType}
                          onChange={(e) => setNewType(e.target.value as any)}
                          className="w-full bg-slate-50 border-none rounded-xl p-4 font-sans text-sm outline-none focus:ring-2 ring-primary/20 appearance-none"
                        >
                          <option value="spending">Spending</option>
                          <option value="timing">Timing</option>
                          <option value="frequency">Frequency</option>
                        </select>
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Category</label>
                        <input 
                          type="text" 
                          value={newCategory}
                          onChange={(e) => setNewCategory(e.target.value)}
                          placeholder="Food"
                          className="w-full bg-slate-50 border-none rounded-xl p-4 font-sans text-sm outline-none focus:ring-2 ring-primary/20 transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Threshold Condition</label>
                      <input 
                        type="text" 
                        value={newThreshold}
                        onChange={(e) => setNewThreshold(e.target.value)}
                        placeholder="e.g., > ₹200 or After 23:00"
                        className="w-full bg-slate-50 border-none rounded-xl p-4 font-mono text-sm outline-none focus:ring-2 ring-primary/20 transition-all"
                      />
                    </div>
                  </div>

                  <button 
                    onClick={addGate}
                    className="w-full bg-primary text-white py-4 rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-xl shadow-primary/20 hover:bg-primary-dim transition-all"
                  >
                    Confirm Protocol
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="w-full space-y-6">
        <h2 className="font-headline font-bold text-2xl text-on-surface">Timeline of Intent</h2>
        
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8">
          <div className="flex justify-between items-center mb-10 border-b border-slate-100 pb-6">
            <span className="text-[10px] font-black tracking-[0.3em] text-on-surface-variant uppercase">Current Cycle</span>
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Essential</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-error" />
                <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Waste</span>
              </div>
            </div>
          </div>

          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={timelineData} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
                <Bar 
                  dataKey="value" 
                  radius={[6, 6, 0, 0]}
                  animationDuration={1500}
                >
                  {timelineData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.type === 'essential' ? '#005da6' : '#ef4444'} 
                      fillOpacity={index === 4 || index === 5 ? 1 : 0.8}
                    />
                  ))}
                </Bar>
                <XAxis 
                  dataKey="day" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fontWeight: 'bold', fill: '#4b5b81' }}
                  dy={10}
                />
                <Tooltip 
                  cursor={{ fill: 'transparent' }}
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
    </main>
  );
}
