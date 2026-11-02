/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';
import LandingPage from './views/LandingPage';
import Dashboard from './views/Dashboard';
import Pulse from './views/Pulse';
import Ledger from './views/Ledger';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentView, setCurrentView] = useState('landing');

  const renderView = () => {
    switch (currentView) {
      case 'landing':
        return <LandingPage onStart={() => setCurrentView('dashboard')} />;
      case 'dashboard':
        return <Dashboard />;
      case 'pulse':
        return <Pulse />;
      case 'ledger':
        return <Ledger />;
      case 'coach':
        return (
          <div className="flex-grow flex items-center justify-center p-8 bg-slate-50">
            <div className="max-w-md text-center space-y-6">
              <h2 className="text-4xl font-headline font-black text-slate-900">Behavioral Coach</h2>
              <p className="text-on-surface-variant font-sans text-lg">Integrating protocol into your daily routine. Coming soon to the behavioral architecture.</p>
              <button 
                onClick={() => setCurrentView('dashboard')}
                className="bg-primary text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs shadow-lg"
              >
                Return to War Room
              </button>
            </div>
          </div>
        );
      case 'focus':
        return (
          <div className="flex-grow flex items-center justify-center p-8 bg-slate-50">
            <div className="max-w-md text-center space-y-6">
              <h2 className="text-4xl font-headline font-black text-slate-900">Focus Protocol</h2>
              <p className="text-on-surface-variant font-sans text-lg">Active distraction shielding and structural priority management.</p>
              <button 
                onClick={() => setCurrentView('dashboard')}
                className="bg-primary text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs shadow-lg"
              >
                Return to War Room
              </button>
            </div>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary/20 selection:text-primary">
      {currentView !== 'landing' && (
        <Header currentView={currentView} onNavigate={setCurrentView} />
      )}
      
      <main className="flex-grow flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex-grow flex flex-col"
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {currentView !== 'landing' && (
        <>
          <Footer />
          <BottomNav currentView={currentView} onNavigate={setCurrentView} />
        </>
      )}
    </div>
  );
}
