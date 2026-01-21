import React from 'react';
import { motion } from 'framer-motion';
import { MousePointer2, Building2, TrendingUp, ArrowDown, PieChart, Users, Globe, Building } from 'lucide-react';

export const Hero: React.FC = () => {
  // Corporate Partners with logos
  // Using Clearbit Logo API for consistent corporate branding
  const partners = [
    { name: "SK ECOPLANT", url: "https://logo.clearbit.com/skecoplant.com" },
    { name: "GS E&C Xi", url: "https://logo.clearbit.com/xi.co.kr" },
    { name: "PRUGIO", url: "https://logo.clearbit.com/prugio.com" },
    { name: "POSCO E&C", url: "https://logo.clearbit.com/poscoenc.com" },
    { name: "KOLON GLOBAL", url: "https://logo.clearbit.com/kolonglobal.com" },
    { name: "SM GROUP", url: "https://logo.clearbit.com/smgroup.co.kr" },
    { name: "HYUNDAI E&C", url: "https://logo.clearbit.com/hdec.kr" },
    { name: "HYUNDAI ENGINEERING", url: "https://logo.clearbit.com/hec.co.kr" },
    { name: "HDC", url: "https://logo.clearbit.com/hdc-dvp.com" },
  ];

  return (
    <section className="w-full bg-white flex flex-col pt-20">
      
      {/* Top Section: 3D Robot (Large) */}
      <div className="w-full h-[70vh] relative bg-gradient-to-b from-gray-50 to-white overflow-hidden border-b border-gray-100">
         <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="w-full h-full"
         >
            <iframe 
              src='https://my.spline.design/nexbotrobotcharacterconcept-icXRpBR5wXVMtYGCOzYAoDWB/' 
              frameBorder='0' 
              width='100%' 
              height='100%'
              className="w-full h-full pointer-events-auto mix-blend-multiply"
              title="Interactive Robot"
            ></iframe>
         </motion.div>

         {/* Interaction Hint */}
         <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3 pointer-events-none z-10"
         >
            <div className="flex items-center gap-2 text-gray-400 text-[10px] tracking-[0.2em] uppercase font-sans px-4 py-1.5 rounded-full border border-gray-100 bg-white/50 backdrop-blur-sm">
                <MousePointer2 className="w-3 h-3 text-gold-500" />
                Interactive 3D Experience
            </div>
            <ArrowDown className="w-4 h-4 text-gray-300 animate-bounce" />
         </motion.div>
      </div>

      {/* Intro Text Section */}
      <div className="w-full bg-white py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-32">
            
            {/* Left Content */}
            <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative pl-4 border-l-2 border-gold-500/30"
            >
                {/* Decoration */}
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-gray-50 rounded-full blur-3xl opacity-50 -z-10"></div>
                
                <div className="flex items-center gap-3 text-gold-600 font-bold tracking-[0.2em] text-xs uppercase mb-6 font-sans">
                    <Building2 className="w-4 h-4" />
                    <span>Premium Assets</span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-serif font-medium leading-[1.1] text-black mb-8">
                    UNLIMITED<br />
                    <span className="italic text-gold-500">VALUE</span>
                </h1>
                <p className="text-gray-500 font-light tracking-wide text-lg leading-relaxed font-sans">
                    공간, 그 이상의 가치를 창조합니다.<br/>
                    <strong className="font-medium text-black">더블에이치파트너스</strong>는 당신의 자산 가치를<br/>
                    극대화하는 최고의 전략을 제시합니다.
                </p>
            </motion.div>

            {/* Right Content */}
            <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="relative md:text-right flex flex-col md:items-end pr-4 md:border-r-2 border-gold-500/30"
            >
                {/* Decoration */}
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gold-50 rounded-full blur-3xl opacity-50 -z-10"></div>

                <div className="flex items-center gap-3 text-gold-600 font-bold tracking-[0.2em] text-xs uppercase mb-6 font-sans">
                    <span>Visionary Growth</span>
                    <TrendingUp className="w-4 h-4" />
                </div>
                <h1 className="text-5xl lg:text-6xl font-serif font-medium leading-[1.1] text-black mb-8">
                    FUTURE<br />
                    <span className="italic text-navy-900">LEADER</span>
                </h1>
                <p className="text-gray-500 font-light tracking-wide text-lg leading-relaxed font-sans">
                    성공을 위한 최고의 비즈니스 파트너.<br/>
                    미래를 내다보는 <strong className="font-medium text-black">통찰력</strong>으로<br/>
                    새로운 비즈니스 기회를 만들어갑니다.
                </p>
            </motion.div>

        </div>
      </div>

      {/* New Section: Corporate Statistics & Impact */}
      <div className="w-full bg-navy-900 text-white py-24 px-6 relative overflow-hidden">
         {/* Background Decoration */}
         <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-3xl"></div>
         
         <div className="max-w-7xl mx-auto relative z-10">
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="text-center mb-16"
            >
               <span className="text-gold-500 font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Our Impact</span>
               <h2 className="text-3xl md:text-5xl font-serif font-medium text-white mb-6">Numbers that Speak</h2>
               <p className="text-gray-400 font-light max-w-2xl mx-auto">
                  더블에이치파트너스는 수치로 증명되는 신뢰와 전문성을 바탕으로<br/> 
                  부동산 시장의 새로운 역사를 써내려가고 있습니다.
               </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center divide-x divide-white/10">
               {[
                  { value: '80', suffix: '억+', label: '2026 매출이익 목표', icon: <TrendingUp className="w-6 h-6" /> },
                  { value: '150', suffix: '+', label: 'Corporate Clients', icon: <Building className="w-6 h-6" /> },
                  { value: '98', suffix: '%', label: 'Client Satisfaction', icon: <Users className="w-6 h-6" /> },
                  { value: '2020', suffix: '', label: 'Founded', icon: <Globe className="w-6 h-6" /> },
               ].map((stat, idx) => (
                  <motion.div 
                     key={idx}
                     initial={{ opacity: 0, scale: 0.9 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5, delay: idx * 0.1 }}
                     className="flex flex-col items-center p-4"
                  >
                     <div className="text-gold-500 mb-4 opacity-50">{stat.icon}</div>
                     <div className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">
                        {stat.value}<span className="text-gold-500 text-2xl md:text-3xl ml-1">{stat.suffix}</span>
                     </div>
                     <div className="text-sm text-gray-400 uppercase tracking-widest font-sans">{stat.label}</div>
                  </motion.div>
               ))}
            </div>
         </div>
      </div>

      {/* New Section: Business Areas */}
      <div className="w-full bg-gray-50 py-24 px-6">
         <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
               {[
                  { title: 'Real Estate Consulting', desc: '전문적인 시장 분석을 통한 최적의 매입/매각 솔루션 제공', icon: <PieChart className="w-8 h-8" /> },
                  { title: 'Asset Management', desc: '자산 가치 증대를 위한 체계적인 관리 및 운용 전략 수립', icon: <Building2 className="w-8 h-8" /> },
                  { title: 'Market Research', desc: '빅데이터 기반의 심도 있는 시장 조사 및 트렌드 분석', icon: <Globe className="w-8 h-8" /> },
               ].map((item, idx) => (
                  <motion.div 
                     key={idx}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5, delay: idx * 0.2 }}
                     className="bg-white p-10 rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 border-t-2 border-transparent hover:border-gold-500 group"
                  >
                     <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-6 text-navy-900 group-hover:bg-navy-900 group-hover:text-gold-500 transition-colors">
                        {item.icon}
                     </div>
                     <h3 className="text-xl font-serif font-bold text-navy-900 mb-3">{item.title}</h3>
                     <p className="text-gray-500 font-light leading-relaxed">{item.desc}</p>
                  </motion.div>
               ))}
            </div>
         </div>
      </div>

       {/* Trusted By Section (Infinite Slider with Logos) */}
       <div className="w-full bg-white border-t border-gray-100 py-16 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 mb-10">
             <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-[0.3em] font-sans">Trusted by Industry Leaders</p>
          </div>
          <div className="relative w-full flex overflow-hidden group">
             {/* Fade edges */}
             <div className="absolute left-0 top-0 bottom-0 w-8 md:w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
             <div className="absolute right-0 top-0 bottom-0 w-8 md:w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
             
             {/* Using animate-scroll for horizontal infinite scrolling */}
             <div className="flex animate-scroll w-max whitespace-nowrap items-center hover:[animation-play-state:paused]">
                {[...partners, ...partners].map((partner, i) => (
                   <div key={i} className="mx-8 md:mx-12 flex items-center justify-center h-16 w-32 md:w-40 grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer">
                      <img 
                        src={partner.url} 
                        alt={partner.name}
                        title={partner.name}
                        className="max-h-10 md:max-h-12 max-w-full object-contain mix-blend-multiply"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          // Check if text fallback already exists
                          if (!e.currentTarget.parentElement?.querySelector('span')) {
                            const span = document.createElement('span');
                            span.innerText = partner.name;
                            span.className = "text-sm md:text-base font-serif font-bold text-gray-400 uppercase text-center leading-tight";
                            e.currentTarget.parentElement?.appendChild(span);
                          }
                        }}
                      />
                   </div>
                ))}
             </div>
          </div>
       </div>

    </section>
  );
};