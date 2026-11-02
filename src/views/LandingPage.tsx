import { motion } from 'motion/react';
import { Shield } from 'lucide-react';

interface LandingPageProps {
  onStart: () => void;
}

export default function LandingPage({ onStart }: LandingPageProps) {
  return (
    <div className="flex-grow flex flex-col relative overflow-hidden">
      {/* Hero Visual Section */}
      <div className="relative w-full h-[600px] bg-slate-900">
        <img 
          className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtav6EZ90KNT-lDcqGPZgSV-Vc3fvKhp15i76blEbA85csquNLIRw7k1S0DPQ4YZt1QFNpSeSMYx8xq7XE2VHOAB8-kfaFLvNa1nQzye6lj3LJ9jKIOi5hE5GV0d4OW1jVbiNWw37FMgC_0ZZkaToFIrGniZMT9i8pKxgIOn246bcYY_yD6-n9vuC-70lBViO3oDDbdJxaq_lNJIf6WUJNY3Gr6fdXuVrnC6mVFSlD0hIaOQOFTIdtno3741zfyDduirBxNn-u878"
          alt="Hand holding thread"
          referrerPolicy="no-referrer"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent"></div>
      </div>

      {/* Content Card */}
      <div className="relative z-10 px-4 -mt-32 pb-24 flex justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-surface/85 backdrop-blur-[30px] rounded-lg p-8 md:p-12 shadow-[0_24px_64px_rgba(0,0,0,0.1)] border border-outline-variant/20 flex flex-col gap-8 max-w-2xl"
        >
          <h1 className="font-headline text-4xl md:text-6xl font-black tracking-tight text-on-background leading-[0.9]">
            Don't Let Today<br />Steal Tomorrow.
          </h1>
          
          <div className="space-y-6">
            <p className="font-sans text-lg md:text-xl text-on-surface-variant leading-relaxed">
              Every impulse purchase is a silent theft. It is a fraction of your future freedom, traded away for a fleeting moment today.
            </p>
            <p className="font-sans text-lg md:text-xl text-on-surface-variant leading-relaxed">
              That glowing thread is your integrity—the literal connection between who you are right now and who you need to be. When you compromise, you fray the line. Do not let it snap.
            </p>
          </div>

          <div className="pt-6">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onStart}
              className="w-full bg-primary text-white font-bold text-sm tracking-[0.1em] uppercase py-5 rounded shadow-lg hover:bg-primary-dim transition-all flex items-center justify-center gap-3"
            >
              <span>Hold the Line</span>
              <Shield className="w-5 h-5 fill-current" />
            </motion.button>
            <p className="text-[10px] text-center text-on-surface-variant mt-6 tracking-[0.2em] uppercase font-bold opacity-60">
              Commit to the discipline protocol
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
