import { BarChart3 } from 'lucide-react';
import { cn } from '../lib/utils';

interface HeaderProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

export default function Header({ currentView, onNavigate }: HeaderProps) {
  const navItems = [
    { id: 'coach', label: 'Coach' },
    { id: 'ledger', label: 'Ledger' },
    { id: 'pulse', label: 'Pulse' },
    { id: 'focus', label: 'Focus' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-100/80 backdrop-blur-md border-b border-outline-variant/20">
      <div className="flex justify-between items-center px-6 py-4 w-full max-w-7xl mx-auto">
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => onNavigate('landing')}
        >
          <BarChart3 className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
          <span className="text-lg font-black tracking-tighter text-primary font-headline">
            Behavioral Authority
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={cn(
                "text-sm font-medium transition-all px-3 py-1.5 rounded-md",
                currentView === item.id 
                  ? "text-primary bg-primary/10 font-bold" 
                  : "text-on-surface-variant hover:bg-slate-200/50"
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface font-bold text-xs overflow-hidden border-2 border-transparent hover:border-primary transition-colors cursor-pointer">
            <img 
              src="https://picsum.photos/seed/user123/100/100" 
              alt="Avatar" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
