export default function Footer() {
  return (
    <footer className="w-full py-12 bg-slate-200 border-t border-outline-variant/30 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-8 gap-6">
        <div className="font-headline font-bold text-slate-900">
          Behavioral Authority
        </div>
        
        <div className="flex gap-8">
          <a href="#" className="text-xs tracking-widest text-on-surface-variant hover:text-primary transition-colors uppercase font-medium">Terms of Discipline</a>
          <a href="#" className="text-xs tracking-widest text-on-surface-variant hover:text-primary transition-colors uppercase font-medium">Privacy</a>
          <a href="#" className="text-xs tracking-widest text-on-surface-variant hover:text-primary transition-colors uppercase font-medium">Protocol</a>
        </div>
        
        <div className="text-xs tracking-widest text-on-surface-variant opacity-70">
          © {new Date().getFullYear()} Behavioral Authority. Kinetic Strategy Applied.
        </div>
      </div>
    </footer>
  );
}
