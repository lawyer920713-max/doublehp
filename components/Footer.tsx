import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111111] text-white py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-serif font-bold mb-6 flex items-center gap-2">
                <span className="w-6 h-6 bg-white text-black flex items-center justify-center text-sm rounded-sm">H</span>
                Double H Partners
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-light">
              고객의 성공적인 자산 관리를 위한 최상의 파트너.<br/>
              신뢰와 전문성을 바탕으로 부동산 시장을 선도합니다.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-xs tracking-widest text-gold-500 mb-6 uppercase">Company</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-light">
              <li className="hover:text-white cursor-pointer transition-colors">CEO 인사말</li>
              <li className="hover:text-white cursor-pointer transition-colors">회사연혁</li>
              <li className="hover:text-white cursor-pointer transition-colors">경영이념</li>
              <li className="hover:text-white cursor-pointer transition-colors">오시는 길</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs tracking-widest text-gold-500 mb-6 uppercase">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-light">
              <li>02-1234-5678</li>
              <li>info@doubleh.co.kr</li>
              <li className="text-xs text-gray-500 pt-2 break-keep">서울 강남구 영동대로 602, 6층 에스지비017 (삼성동,미켈란107)</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-[10px] text-gray-500 flex flex-col md:flex-row justify-between gap-6 font-light uppercase tracking-wide">
          <div className="space-y-1.5">
            <div className="flex flex-wrap gap-4">
                <span>상호명: (주)더블에이치파트너스</span>
                <span>대표자: 이용현</span>
                <span>사업자등록번호: 499-81-01644</span>
            </div>
            <p>법인등록번호: 110111-7483194 | 주소: 서울 강남구 영동대로 602, 6층 에스지비017 (삼성동,미켈란107)</p>
          </div>
          <p className="md:text-right">&copy; 2026 Double H Partners Co., Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};