
import React, { useState, useEffect } from 'react';
import { COMPANY_INFO, ICONS } from './constants';
import { generateBusinessDescription, askBusinessAssistant } from './services/geminiService';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

const App: React.FC = () => {
  const [businessCopy, setBusinessCopy] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await generateBusinessDescription();
      if (data) {
        setBusinessCopy(data);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-purple-600/10 blur-[120px] rounded-full"></div>
      </div>

      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 space-y-32 pb-32">
        <Hero 
          name={COMPANY_INFO.name} 
          mission={businessCopy?.mission || "Soluções estratégicas e excelência em serviços para impulsionar seu negócio."}
          loading={loading}
        />
        
        <Services 
          services={businessCopy?.services} 
          loading={loading}
        />

        <ContactSection />
      </main>

      <Footer />

      <ChatBot />
    </div>
  );
};

export default App;
