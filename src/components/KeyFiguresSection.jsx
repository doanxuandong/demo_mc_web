import React, { useRef, useEffect, useState } from 'react';
import la4 from '../images/4la.png';
import CountUp from './CountUp';
import BlurText from './BlurText';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const blocks = [
  {
    count: 25,
    blur1: "25 year of experience",
    blur2: "in BTL industry"
  },
  {
    count: 5000,
    blur1: "5,000 successful local",
    blur2: "& regional projects"
  },
  {
    count: 9001,
    blur1: "Quality",
    blur2: "control system"
  }
];

export default function KeyFiguresSection({ onFinish }) {
  const [activeBlock, setActiveBlock] = useState(0);
  const imgRef = useRef();
  const blockRefs = useRef([]);
  const sectionRef = useRef();
  const hasCalledFinish = useRef(false);

  useEffect(() => {
    // Trigger chuyển block khi scroll
    const triggers = [];
    blocks.forEach((block, i) => {
      const trigger = ScrollTrigger.create({
        trigger: blockRefs.current[i],
        start: 'center center',
        end: 'bottom center',
        onEnter: () => setActiveBlock(i),
        onEnterBack: () => setActiveBlock(i),
        once: false
      });
      triggers.push(trigger);
    });
    return () => triggers.forEach(t => t.kill());
  }, []);

  // Xoay ảnh 4 lá khi activeBlock đổi
  useEffect(() => {
    if (imgRef.current) {
      gsap.to(imgRef.current, {
        rotate: activeBlock * 90,
        duration: 0.1, 
        ease: "power2.inOut"
      });
    }
  }, [activeBlock]);

  // Gọi onFinish khi block cuối cùng được active lần đầu
  useEffect(() => {
    if (onFinish && activeBlock === blocks.length - 1 && !hasCalledFinish.current) {
      hasCalledFinish.current = true;
      onFinish();
    }
  }, [activeBlock, onFinish]);

  return (
    <section ref={sectionRef} className="w-full min-h-screen flex items-center justify-center bg-blue-900" style={{fontFamily: 'Montserrat, sans-serif', position: 'relative'}}>
      <div className="w-full max-w-7xl flex flex-row items-start justify-between px-16" style={{position: 'relative'}}>
        {/* Cột trái: KEY + 4 lá + FIGUERS (sticky) */}
        <div className="flex-1 flex flex-col justify-center sticky top-0 h-screen" style={{zIndex: 2}}>
          <div className="flex flex-row items-end">
            <span
              className="font-extrabold text-[9vw] leading-none tracking-tight"
              style={{
                color: 'transparent',
                WebkitTextStroke: '2px #2b6cb0',
                textStroke: '2px #2b6cb0',
                letterSpacing: '-2px',
                lineHeight: 1,
                display: 'block',
              }}
            >
              KEY
            </span>
            <img ref={imgRef} src={la4} alt="4 leaves" className="w-[20vw] max-w-[500px] min-w-[350px] drop-shadow-xl ml-2" style={{filter: 'drop-shadow(0 6px 24px rgba(0,0,0,0.18))', marginBottom: '-29px', transition: 'transform 0.8s'}} />
          </div>
          <span
            className="font-extrabold text-[9vw] leading-none tracking-tight text-blue-600 mt-2 block"
            style={{letterSpacing: '-2px', lineHeight: 1, display: 'block'}}
          >
            FIGUERS
          </span>
        </div>
        {/* Cột phải: các block động xếp dọc */}
        <div className="flex-1 flex flex-col items-center justify-center pl-8" style={{minHeight: '100vh', position: 'relative'}}>
          {blocks.map((block, i) => (
            <div
              key={i}
              ref={el => blockRefs.current[i] = el}
              style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                // opacity: activeBlock === i ? 1 : 0.3,
                transition: 'opacity 0.5s',
                width: '100%',
                zIndex: activeBlock === i ? 2 : 1
              }}
            >
              <CountUp
                from={0}
                to={block.count}
                separator="" 
                direction="up"
                duration={0.02}
                className="count-up-text text-white text-[9vw] font-extrabold leading-none text-center"
              />
              <BlurText
                text={block.blur1}
                delay={150}
                animateBy="words"
                direction="top"
                className="text-yellow-400 text-[3vw] font-bold mt-2 text-center"
                style={{maxWidth: 500}}
              />
              <BlurText
                text={block.blur2}
                delay={150}
                animateBy="words"
                direction="top"
                className="text-yellow-400 text-[3vw] font-bold text-center"
                style={{maxWidth: 500}}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 