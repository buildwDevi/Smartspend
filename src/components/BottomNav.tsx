import { Brain, Wallet, Activity, Shield } from 'lucide-react';
import { cn } from '../lib/utils';

interface BottomNavProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

export default function BottomNav({ currentView, onNavigate }: BottomNavProps) {
  const items = [
    { id: 'coach', label: 'Coach', icon: Brain },
    { id: 'ledger', label: 'Ledger', icon: Wallet },
    { id: 'pulse', label: 'Pulse', icon: Activity },
    { id: 'focus', label: 'Focus', icon: Shield },
  ];

  return (
    <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-sm flex justify-around items-center h-16 bg-white/80 backdrop-blur-xl z-50 rounded-2xl shadow-2xl border border-outline-variant/30 px-2 overflow-hidden">
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = currentView === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={cn(
              "flex flex-col items-center justify-center transition-all gap-1 h-full px-4 rounded-xl",
              isActive 
                ? "text-primary bg-primary/5" 
                : "text-on-surface-variant opacity-60 hover:opacity-100"
            )}
          >
            <Icon className={cn("w-5 h-5", isActive && "fill-primary/20")} />
            <span className={cn(
              "text-[9px] font-bold tracking-widest uppercase",
              isActive && "text-primary"
            )}>
              {item.label}
            </span>
            {isActive && (
              <div className="absolute top-0 w-8 h-0.5 bg-primary rounded-full transition-all" />
            )}
          </button>
        );
      })}
    </nav>
  );
}
