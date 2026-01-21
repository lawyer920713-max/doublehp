import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Clock, Target, MapPin, Building2, UserPlus, Briefcase, FileText, ChevronRight, CheckCircle2, Globe2, Trophy, ArrowUpRight } from 'lucide-react';
import { Page } from '../App';

interface ContentProps {
  page: Page;
}

export const Features: React.FC<ContentProps> = ({ page }) => {
  
  // Dummy data for portfolios
  const residentialProjects = [
    { title: '더 리버스 청담', loc: '서울 강남구 청담동', type: 'High-End Villa', status: 'Sale Completed', img: 'https://images.unsplash.com/photo-1600596542815-6ad4c7213aa8?auto=format&fit=crop&q=80&w=1000' },
    { title: '한남 더 힐 2차', loc: '서울 용산구 한남동', type: 'Luxury Apartment', status: 'Consulting', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000' },
    { title: '아크로 서울 포레스트', loc: '서울 성동구 성수동', type: 'Complex', status: 'Leasing', img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1000' },
    { title: '시그니엘 레지던스', loc: '서울 송파구 신천동', type: 'Residence', status: 'Management', img: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&q=80&w=1000' },
  ];

  const nonResidentialProjects = [
    { title: '강남 파이낸스 센터', loc: '서울 강남구 역삼동', type: 'Office Tower', status: 'Sale Advisory', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000' },
    { title: '판교 테크노밸리 사옥', loc: '경기 성남시 판교', type: 'R&D Center', status: 'Development', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000' },
    { title: '여의도 물류 센터', loc: '서울 영등포구 여의도동', type: 'Logistics', status: 'Investment', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000' },
    { title: '성수 지식산업센터', loc: '서울 성동구 성수동', type: 'Knowledge Ind.', status: 'Leasing', img: 'https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&q=80&w=1000' },
  ];

  const renderContent = () => {
    switch (page) {
      case 'ceo':
        return (
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="relative">
                <div className="aspect-[3/4] bg-gray-100 rounded-sm overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
                    {/* Placeholder for CEO Image */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                        <UserPlus className="w-24 h-24 opacity-10" />
                    </div>
                    {/* Abstract overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent opacity-60"></div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold-50 -z-10 rounded-full blur-2xl"></div>
            </div>
            
            <div className="space-y-10 pt-8">
              <div className="space-y-4">
                 <span className="text-gold-500 font-bold tracking-[0.2em] text-xs uppercase">CEO Message</span>
                 <h2 className="text-4xl md:text-5xl font-serif font-medium leading-tight text-navy-900">
                    "고객의 성공이<br/>
                    우리의 <span className="italic text-gold-500">자부심</span>입니다."
                 </h2>
              </div>
              
              <div className="space-y-6 text-gray-600 leading-loose font-light text-lg">
                <p>
                  안녕하십니까, <strong className="text-black font-medium">(주)더블에이치파트너스</strong> 대표이사 이용현입니다.
                </p>
                <p>
                  저희 회사는 급변하는 부동산 시장 환경 속에서도 끊임없는 혁신과 전문성을 바탕으로 
                  고객 여러분께 최상의 부동산 솔루션을 제공해 왔습니다.
                </p>
                <p>
                  단순한 중개를 넘어, 고객의 자산 가치를 극대화하고 성공적인 미래를 함께 설계하는 
                  진정한 파트너로서 늘 곁에 있겠습니다. 신뢰와 정직을 최우선으로, 
                  대한민국 최고의 부동산 종합 서비스 그룹으로 도약하겠습니다.
                </p>
                <p>
                  감사합니다.
                </p>
              </div>
              
              <div className="pt-8 border-t border-gray-100 flex items-center justify-between">
                 <div>
                    <p className="font-serif text-xl font-bold text-navy-900">Lee Yong-Hyeon</p>
                    <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Chief Executive Officer</p>
                 </div>
                 <img src="https://dummyimage.com/200x60/fff/000&text=Lee+Y.H" alt="Signature" className="opacity-80 h-10 object-contain mix-blend-multiply" />
              </div>
            </div>
          </div>
        );

      case 'history':
        return (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
                <span className="text-gold-500 font-bold tracking-[0.2em] text-xs uppercase mb-3 block">History</span>
                <h2 className="text-4xl md:text-5xl font-serif font-medium text-navy-900">걸어온 길</h2>
            </div>
            
            <div className="relative">
               {/* Vertical Line */}
               <div className="absolute left-[20px] top-4 bottom-0 w-px bg-gradient-to-b from-gold-500 via-gray-200 to-gray-50"></div>

               <div className="space-y-16">
                {[
                    { year: '2026', month: 'Vision', title: 'Global Leap', text: '매출이익 80억원 달성 및 글로벌 시장 진출' },
                    { year: '2022', month: '06', title: 'R&D Center', text: '기업부설연구소 설립 및 데이터 분석 시스템 구축' },
                    { year: '2021', month: '09', title: 'Expansion', text: '본사 확장 이전 (강남구 테헤란로)' },
                    { year: '2020', month: '05', title: 'Foundation', text: '(주)더블에이치파트너스 법인 설립 (2020.05.18)' },
                ].map((item, idx) => (
                    <div key={idx} className="group flex gap-10 items-start relative">
                        {/* Dot */}
                        <div className={`w-[10px] h-[10px] rounded-full absolute left-[15.5px] top-[10px] z-10 ring-4 ring-white transition-all duration-300 group-hover:scale-125 ${idx === 0 ? 'bg-gold-500 shadow-[0_0_15px_rgba(197,160,89,0.5)]' : 'bg-gray-300 group-hover:bg-gold-400'}`}></div>

                        <div className="flex-1 grid md:grid-cols-[120px_1fr] gap-4 md:gap-10 pt-1">
                            <div className="text-right md:text-left">
                                <span className={`text-2xl font-serif font-bold block leading-none ${idx === 0 ? 'text-gold-500' : 'text-navy-900'}`}>{item.year}</span>
                                <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">{item.month}</span>
                            </div>
                            <div className="bg-white p-6 rounded-lg border border-gray-50 shadow-sm group-hover:shadow-md transition-shadow group-hover:border-gold-100">
                                <h3 className={`text-sm font-bold uppercase tracking-wider mb-2 ${idx === 0 ? 'text-gold-600' : 'text-gray-400'}`}>{item.title}</h3>
                                <p className="text-lg text-gray-800 font-light">{item.text}</p>
                            </div>
                        </div>
                    </div>
                ))}
               </div>
            </div>
          </div>
        );

      case 'philosophy':
        return (
          <div className="space-y-24">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto space-y-6">
              <span className="text-gold-500 font-bold tracking-[0.2em] text-xs uppercase">Management Philosophy</span>
              <h2 className="text-4xl md:text-6xl font-serif font-medium text-navy-900 leading-tight">
                바른 생각으로<br/> 
                <span className="italic text-gold-600">새로운 기준</span>을 만듭니다.
              </h2>
              <p className="text-gray-500 text-lg font-light leading-relaxed">
                (주)더블에이치파트너스는 투명성과 전문성을 핵심 가치로 삼아<br/>
                부동산 산업의 긍정적인 변화를 주도합니다.
              </p>
            </div>
            
            {/* Mission & Vision Circle */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-px bg-gold-300 z-0"></div>

                <div className="bg-navy-900 text-white p-12 rounded-full aspect-square flex flex-col items-center justify-center text-center relative z-10 shadow-2xl hover:scale-105 transition-transform duration-500 group">
                    <div className="absolute inset-0 border border-white/10 rounded-full scale-90 group-hover:scale-95 transition-transform duration-700"></div>
                    <Globe2 className="w-12 h-12 mb-6 text-gold-500" />
                    <span className="text-gold-500 font-bold tracking-widest text-sm uppercase mb-2">Mission</span>
                    <h3 className="text-2xl md:text-3xl font-serif font-medium mb-4">Creating<br/>Future Value</h3>
                    <p className="text-white/60 text-sm font-light max-w-[200px]">고객의 자산 가치 극대화 및<br/>지속 가능한 성장 도모</p>
                </div>

                <div className="bg-white border border-gray-100 text-navy-900 p-12 rounded-full aspect-square flex flex-col items-center justify-center text-center relative z-10 shadow-xl hover:scale-105 transition-transform duration-500 group">
                    <div className="absolute inset-0 border border-navy-900/5 rounded-full scale-90 group-hover:scale-95 transition-transform duration-700"></div>
                    <Trophy className="w-12 h-12 mb-6 text-navy-900" />
                    <span className="text-navy-900 font-bold tracking-widest text-sm uppercase mb-2">Vision</span>
                    <h3 className="text-2xl md:text-3xl font-serif font-medium mb-4">Global Real Estate<br/>Partner</h3>
                    <p className="text-gray-500 text-sm font-light max-w-[200px]">대한민국을 넘어 세계로 뻗어나가는<br/>글로벌 부동산 그룹</p>
                </div>
            </div>

            {/* Core Values */}
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                     <h3 className="text-2xl font-serif font-bold text-navy-900">Core Values</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { 
                            title: 'TRUST', 
                            kor: '신뢰', 
                            desc: '투명하고 정직한 업무 처리로 고객과의 약속을 생명처럼 여깁니다.',
                            icon: <CheckCircle2 className="w-6 h-6" />
                        },
                        { 
                            title: 'EXPERTISE', 
                            kor: '전문성', 
                            desc: '끊임없는 연구와 분석을 통해 차별화된 솔루션을 제공합니다.',
                            icon: <Building2 className="w-6 h-6" />
                        },
                        { 
                            title: 'INNOVATION', 
                            kor: '혁신', 
                            desc: '현실에 안주하지 않고 끊임없이 새로운 가치를 창출합니다.',
                            icon: <Target className="w-6 h-6" />
                        },
                    ].map((item, idx) => (
                        <div key={idx} className="bg-surface p-10 rounded-sm hover:shadow-xl transition-all duration-300 border-t-2 border-transparent hover:border-gold-500 group">
                            <div className="flex justify-between items-start mb-8">
                                <span className="font-serif text-3xl font-bold text-gray-200 group-hover:text-gold-200 transition-colors">0{idx+1}</span>
                                <div className="text-gray-400 group-hover:text-gold-500 transition-colors">{item.icon}</div>
                            </div>
                            <h4 className="text-xl font-bold mb-1 group-hover:text-gold-600 transition-colors">{item.title}</h4>
                            <span className="text-sm text-gray-400 mb-4 block font-serif italic">{item.kor}</span>
                            <p className="text-gray-600 font-light leading-relaxed text-sm">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        );

      case 'location':
        return (
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
                 <h2 className="text-4xl font-serif font-medium text-navy-900 mb-4">Location</h2>
                 <p className="text-gray-500 font-light">언제나 열려있는 소통의 공간입니다.</p>
            </div>
            
            <div className="grid lg:grid-cols-[1.5fr_1fr] gap-0 border border-gray-100 shadow-lg rounded-xl overflow-hidden">
              <div className="bg-gray-100 min-h-[500px] relative group">
                {/* Map Placeholder */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 bg-gray-200">
                   <MapPin className="w-16 h-16 mb-4 text-gray-300" />
                   <span className="font-serif italic text-xl">Interactive Map Area</span>
                </div>
                {/* Overlay on hover (simulated interactivity) */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors pointer-events-none"></div>
              </div>

              <div className="bg-white p-12 lg:p-16 flex flex-col justify-center space-y-12">
                  <div className="space-y-2">
                     <span className="text-gold-500 font-bold text-xs uppercase tracking-widest">Head Office</span>
                     <h3 className="text-2xl font-serif font-bold text-navy-900">본사 오시는 길</h3>
                  </div>

                  <div className="space-y-8">
                    <div className="flex gap-6">
                      <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-gold-600 shrink-0">
                          <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-bold text-sm text-navy-900 mb-1">ADDRESS</p>
                        <p className="text-gray-600 font-light">서울 강남구 영동대로 602, 6층 에스지비017 (삼성동,미켈란107)</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-6">
                      <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-gold-600 shrink-0">
                          <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-bold text-sm text-navy-900 mb-1">OPENING HOURS</p>
                        <p className="text-gray-600 font-light">평일 09:00 - 18:00</p>
                        <p className="text-gray-400 text-xs mt-1">주말 및 공휴일 휴무</p>
                      </div>
                    </div>

                    <div className="flex gap-6">
                      <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-gold-600 shrink-0">
                          <Target className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-bold text-sm text-navy-900 mb-1">CONTACT</p>
                        <p className="text-gray-600 font-light">02-1234-5678</p>
                        <p className="text-gray-600 font-light text-sm">info@doubleh.co.kr</p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        );

      case 'residential':
      case 'non_residential':
        const projects = page === 'residential' ? residentialProjects : nonResidentialProjects;
        const pageTitle = page === 'residential' ? 'Residential' : 'Non-Residential';
        const pageKorTitle = page === 'residential' ? '주거부문' : '비주거부문';

        return (
          <div className="max-w-7xl mx-auto">
             <div className="text-center mb-20 space-y-4">
               <span className="text-gold-500 font-bold tracking-[0.2em] text-xs uppercase">Portfolio</span>
               <h2 className="text-4xl font-serif font-medium text-navy-900">{pageKorTitle} 실적</h2>
               <p className="text-gray-500 font-light">더블에이치파트너스의 성공적인 프로젝트를 소개합니다.</p>
             </div>

             <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-16">
               {projects.map((project, idx) => (
                  <motion.div 
                     key={idx}
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6, delay: idx * 0.1 }}
                     className="group cursor-pointer"
                  >
                     <div className="aspect-[4/3] bg-gray-200 overflow-hidden relative mb-6 rounded-sm">
                        <img 
                          src={project.img} 
                          alt={project.title} 
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] uppercase font-bold tracking-widest text-navy-900">
                           {project.status}
                        </div>
                        <div className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                           <ArrowUpRight className="w-5 h-5 text-black" />
                        </div>
                     </div>
                     <div className="flex justify-between items-start">
                        <div>
                           <span className="text-gold-500 text-xs font-bold uppercase tracking-widest mb-1 block">{project.type}</span>
                           <h3 className="text-2xl font-serif font-bold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">{project.title}</h3>
                           <div className="flex items-center text-gray-400 text-sm font-light">
                              <MapPin className="w-4 h-4 mr-1" />
                              {project.loc}
                           </div>
                        </div>
                     </div>
                  </motion.div>
               ))}
             </div>
          </div>
        );

      case 'careers':
        return (
          <div className="max-w-5xl mx-auto">
             <div className="text-center mb-20 space-y-4">
               <span className="text-gold-500 font-bold tracking-[0.2em] text-xs uppercase">Join Us</span>
               <h2 className="text-4xl font-serif font-medium text-navy-900">인재채용</h2>
               <p className="text-gray-500 font-light">최고의 전문가들과 함께 성장할 당신을 기다립니다.</p>
             </div>

             <div className="space-y-4">
                {/* Job Listing Item */}
                <div className="group border border-gray-100 bg-white p-8 hover:shadow-xl transition-all duration-300 cursor-pointer relative overflow-hidden">
                   <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                   
                   <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div>
                           <div className="flex items-center gap-3 mb-3">
                              <span className="inline-block px-2 py-1 bg-navy-900 text-white text-[10px] font-bold uppercase tracking-wider">Hiring</span>
                              <span className="text-gray-400 text-xs">~ 2024.12.31</span>
                           </div>
                           <h3 className="text-2xl font-serif font-bold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">부동산 컨설턴트 경력직 채용</h3>
                           <div className="flex gap-4 text-sm text-gray-500 font-light">
                              <span>중개영업팀</span>
                              <span className="w-px h-4 bg-gray-200"></span>
                              <span>서울 본사</span>
                           </div>
                        </div>
                        <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-navy-900 group-hover:border-navy-900 group-hover:text-white transition-colors">
                            <ChevronRight className="w-4 h-4" />
                        </div>
                   </div>
                </div>
                
                <div className="border border-gray-100 bg-gray-50 p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 opacity-60">
                   <div>
                      <div className="flex items-center gap-3 mb-3">
                         <span className="inline-block px-2 py-1 bg-gray-300 text-white text-[10px] font-bold uppercase tracking-wider">Closed</span>
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-gray-500 mb-2">마케팅 기획 신입 채용</h3>
                      <div className="flex gap-4 text-sm text-gray-400 font-light">
                         <span>경영지원팀</span>
                         <span className="w-px h-4 bg-gray-200"></span>
                         <span>서울 본사</span>
                      </div>
                   </div>
                   <span className="text-xs text-gray-400">지원 마감</span>
                </div>
             </div>

             <div className="mt-20 bg-navy-900 text-white p-10 rounded-sm text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10">
                    <FileText className="w-8 h-8 mx-auto mb-6 text-gold-500" />
                    <h4 className="font-serif font-bold text-2xl mb-2">입사 지원 문의</h4>
                    <p className="text-gray-400 text-sm mb-6 font-light">채용 관련 궁금한 사항은 언제든 문의해주세요.</p>
                    <a href="mailto:recruit@doubleh.co.kr" className="inline-block border-b border-gold-500 pb-1 text-gold-500 font-mono hover:text-white hover:border-white transition-colors">
                        recruit@doubleh.co.kr
                    </a>
                </div>
             </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="pt-32 pb-32 px-6 min-h-screen bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto"
      >
        {renderContent()}
      </motion.div>
    </section>
  );
};