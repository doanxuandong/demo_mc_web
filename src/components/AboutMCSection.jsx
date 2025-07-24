import React, { useEffect, useState, useRef } from 'react';
import laShu from '../images/lashudon.png';
import laMap from '../images/lamapdon.png';

export default function AboutMCSection({ isActive }) {
  // State để lưu giá trị scroll của vùng scroll riêng
  const [scrollY, setScrollY] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [enableScroll, setEnableScroll] = useState(false);
  const scrollRef = useRef(null);
  const [count, setCount] = useState(0);
  const [showDesc, setShowDesc] = useState(false);

  // Khi vừa vào section, lá đứng yên, không scroll được
  useEffect(() => {
    setEnableScroll(false);
    setScrollY(0);
    setShowContent(false);
  }, [isActive]);

  // Khi user scroll thêm lần nữa (hoặc wheel), enableScroll=true
  useEffect(() => {
    if (!isActive || enableScroll) return;
    const handleWheel = (e) => {
      setEnableScroll(true);
    };
    window.addEventListener('wheel', handleWheel, { once: true });
    return () => window.removeEventListener('wheel', handleWheel, { once: true });
  }, [isActive, enableScroll]);

  // Lắng nghe scroll trên vùng scroll riêng khi enableScroll
  useEffect(() => {
    if (!enableScroll || !isActive) {
      setScrollY(0);
      setShowContent(false);
      return;
    }
    const handleScroll = () => {
      if (scrollRef.current) {
        setScrollY(scrollRef.current.scrollTop);
        setShowContent(scrollRef.current.scrollTop > 60);
      }
    };
    const node = scrollRef.current;
    if (node) node.addEventListener('scroll', handleScroll);
    return () => {
      if (node) node.removeEventListener('scroll', handleScroll);
    };
  }, [enableScroll, isActive]);

  // Các lá luôn cố định trên màn hình, giữ đúng vị trí ban đầu, chỉ xoay và di chuyển khi scroll
  const maxScroll = 200;
  const progress = enableScroll ? Math.min(scrollY / maxScroll, 1) : 0;

  const laShuStyle = {
    position: 'absolute',
    top: '0%',
    right: '7%',
    left: 'auto',
    width: '28vw',
    minWidth: 100,
    zIndex: 10,
    opacity: 0.96,
    pointerEvents: 'none',
    transform: `translate(${-progress * 1250}px, ${-progress * 50}px) rotate(${-10 + progress * 20}deg) scale(1.05)`,
    transition: 'transform 0.6s cubic-bezier(0.4,0,0.2,1)',
  };

  const laMapLeftStyle = {
    position: 'absolute',
    bottom: '0%',
    right: '20%',
    left: 'auto',
    width: '26vw',
    minWidth: 100,
    zIndex: 10,
    opacity: 0.92,
    pointerEvents: 'none',
    transform: `translate(${-progress * 1100}px, ${progress * 320}px) rotate(${-60 + progress * 120}deg) scale(1.08)`,
    transition: 'transform 0.6s cubic-bezier(0.4,0,0.2,1)',
  };

  const laMapRightStyle = {
    position: 'absolute',
    bottom: '0%',
    right: '1%',
    width: '24vw',
    minWidth: 100,
    zIndex: 10,
    opacity: 0.91,
    pointerEvents: 'none',
    transform: `translate(${progress * 220}px, ${progress * 110}px) rotate(${160 - progress * 190}deg) scale(1.1)`,
    transition: 'transform 0.6s cubic-bezier(0.4,0,0.2,1)',
  };

  return (
    <section className="relative min-h-screen bg-blue-900 flex flex-col justify-between overflow-hidden" style={{fontFamily: 'Segoe UI', sansSerif: true}}>
      <img src={laShu} alt="leaf" style={laShuStyle} />
      <img src={laMap} alt="leaf" style={laMapLeftStyle} />
      <img src={laMap} alt="leaf" style={laMapRightStyle} />
      <div className="absolute left-0 w-full flex flex-col items-center pointer-events-none z-20" style={{top: '15%'}}>
        <h1 className="text-[10vw] font-extrabold text-white leading-none tracking-tight" style={{WebkitTextStroke:'2px #fff', color:'transparent', fontFamily:'Segoe UI, sans-serif'}}>ABOUT</h1>
        <h2 className="text-[10vw] font-extrabold text-white leading-none tracking-tight -mt-6" style={{fontFamily:'Segoe UI, sans-serif'}}>MC</h2>
      </div>
        <div className="w-full flex justify-center z-10" style={{
            position: 'absolute',
            bottom: '20%',
            left: 0,
            width: '100%',
            opacity: showContent ? 1 : 0,
            transition: 'opacity 0.6s cubic-bezier(0.4,0,0.2,1)',
            pointerEvents: showContent ? 'auto' : 'none',
          }}>
          <div className="max-w-2xl mx-auto text-white text-lg font-medium text-justify">
            MC Group is a premier Below-the-Line (BTL) marketing agency with over 25 years of expertise in creating memorable, results-driven brand experiences. With 4 subsidiary companies all backed by global business quality management systems ISO 9001 & ISO 27001, MC Group is proud to deliver the maximum impact on every campaign & be the Greatest Partner of clients in the journey to achieve sustainable growth.
          </div>
        </div>
    </section>
  );
}