import React from 'react';
import { MessageCircle, Activity, Map, Home, CheckCircle2 } from 'lucide-react';

const App = () => {
  const chatHistory = [
    { role: 'ai', text: 'Goedemorgen Mevrouw de Vries. Hoe gaat het vandaag met het bewegen in en om uw woning?' },
    { role: 'user', text: 'Nou, het gaat niet best. Ik wilde naar de supermarkt, maar ik durfde de straat niet op.' },
    { role: 'ai', text: 'Wat is de belangrijkste reden? Voelt uw lichaam niet goed, of is er iets anders aan de hand?' },
    { role: 'user', text: 'Mijn knieën zijn wat stram, maar de lift is kapot. Ik moet drie trappen af in het donker en het regent hard.' },
  ];

  const icfData = [
    { statement: "Knieën wat stram", code: "b710", type: "Lichaam", severity: "Matig", color: "bg-amber-100 text-amber-800" },
    { statement: "Lift is kapot", code: "e150", type: "Omgeving", severity: "Ernstig", color: "bg-red-100 text-red-800" },
    { statement: "Drie trappen af", code: "d4551", type: "Activiteit", severity: "Beperkt", color: "bg-slate-100 text-slate-800" },
    { statement: "Regent hard", code: "e225", type: "Omgeving", severity: "Tijdelijk", color: "bg-blue-100 text-blue-800" },
  ];

  return (
    <div className="min-h-screen bg-[#F9F8F3] text-[#2F4F4F] p-4 md:p-8 font-sans">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12 border-b border-[#E5E4DA] pb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-light tracking-widest uppercase">A-PROOF <span className="font-bold text-[#8A9A5B]">Analytics</span></h1>
          <p className="text-sm text-slate-500 mt-1 italic">Clinical Intelligence Mapping System</p>
        </div>
        <div className="mt-4 md:mt-0 md:text-right">
          <p className="font-medium text-lg text-[#2F4F4F]">Mevrouw de Vries</p>
          <p className="text-xs text-slate-400">ID: 80-2026-DV | Stand: 19 Feb 2026</p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left: Chat Interaction */}
        <div className="lg:col-span-1 flex flex-col space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#E5E4DA] flex-grow">
            <div className="flex items-center space-x-3 mb-6 border-b pb-4 border-[#F5F5DC]">
              <MessageCircle size={20} className="text-[#8A9A5B]" />
              <h2 className="text-sm font-semibold uppercase tracking-widest">Interactie</h2>
            </div>
            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
              {chatHistory.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'ai' ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'ai' 
                    ? 'bg-[#F5F5DC] rounded-tl-none text-[#2F4F4F]' 
                    : 'bg-[#8A9A5B] rounded-tr-none text-white'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Analysis & Advice */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Top Widgets */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#E5E4DA]">
              <div className="flex items-center space-x-3 mb-4">
                <Activity size={18} className="text-[#8A9A5B]" />
                <h2 className="text-xs font-semibold uppercase tracking-widest">Functioneringsniveau</h2>
              </div>
              <div className="flex items-end justify-between">
                <span className="text-4xl font-light">Niveau 3</span>
                <span className="text-xs text-red-500 font-bold mb-1 underline">ERNSTIGE BEPERKING</span>
              </div>
              <div className="w-full bg-[#F5F5DC] h-1.5 mt-4 rounded-full overflow-hidden">
                <div className="bg-[#8A9A5B] h-full w-[75%]"></div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#E5E4DA]">
              <div className="flex items-center space-x-3 mb-4 text-[#2F4F4F]">
                <Home size={18} />
                <h2 className="text-xs font-semibold uppercase tracking-widest text-[#2F4F4F]">Omgevingsbarrières</h2>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-4xl font-light">3</span>
                  <span className="text-[10px] text-slate-400 mt-1 uppercase">Gedetecteerde triggers</span>
                </div>
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-[#E5E4DA] border-2 border-white flex items-center justify-center text-xs">🏠</div>
                  <div className="w-8 h-8 rounded-full bg-[#E5E4DA] border-2 border-white flex items-center justify-center text-xs">☁️</div>
                  <div className="w-8 h-8 rounded-full bg-[#E5E4DA] border-2 border-white flex items-center justify-center text-xs">💡</div>
                </div>
              </div>
            </div>
          </div>

          {/* ICF Table */}
          <div className="bg-white p-4 md:p-8 rounded-2xl shadow-sm border border-[#E5E4DA] overflow-x-auto">
            <div className="flex items-center space-x-3 mb-8">
              <Map size={18} className="text-[#8A9A5B]" />
              <h2 className="text-xs font-semibold uppercase tracking-widest">ICF Mapping</h2>
            </div>
            <table className="w-full text-left min-w-[500px]">
              <thead>
                <tr className="text-[10px] uppercase tracking-[0.2em] text-slate-400 border-b border-[#F5F5DC]">
                  <th className="pb-4 font-medium italic">Gedetecteerde Uitspraak</th>
                  <th className="pb-4 font-medium">ICF Code</th>
                  <th className="pb-4 font-medium text-center">Type</th>
                  <th className="pb-4 font-medium text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F5F5DC]">
                {icfData.map((item, idx) => (
                  <tr key={idx} className="group hover:bg-[#F9F8F3] transition-colors duration-200">
                    <td className="py-5 text-sm font-medium">"{item.statement}"</td>
                    <td className="py-5 text-xs font-mono text-slate-400">{item.code}</td>
                    <td className="py-5 text-center">
                      <span className={`px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold ${item.color}`}>
                        {item.type}
                      </span>
                    </td>
                    <td className="py-5 text-right text-xs font-semibold">{item.severity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Advice Section */}
          <div className="bg-[#2F4F4F] text-[#F5F5DC] p-8 rounded-2xl shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <CheckCircle2 size={120} />
            </div>
            <div className="relative z-10">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-2 h-2 bg-[#8A9A5B] rounded-full animate-pulse"></div>
                <h2 className="text-xs font-semibold uppercase tracking-widest text-[#8A9A5B]">Klinisch Advies & Actie</h2>
              </div>
              <p className="text-lg font-light leading-relaxed mb-6">
                De patiënte heeft voldoende <span className="font-bold text-white underline decoration-[#8A9A5B]">fysieke capaciteit</span> voor haar doelen. 
                De beperking is 100% gerelateerd aan omgevingsfactoren (Lift & Verlichting).
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <p className="text-[10px] text-[#8A9A5B] uppercase font-bold mb-1">Interventie</p>
                  <p className="text-xs">Melding liftreparatie verzonden naar huisbeheerder.</p>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <p className="text-[10px] text-[#8A9A5B] uppercase font-bold mb-1">Oefening</p>
                  <p className="text-xs">Binnen-oefeningen focus op evenwicht tot herstel omgeving.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default App;
