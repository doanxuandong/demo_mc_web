import React, { useEffect, useRef } from 'react';
import logoMC from '../images/logomctrang.png';
import laShu from '../images/lashudon.png';
import laMap from '../images/lamapdon.png';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutMCSection() {
  const sectionRef = useRef(null);
  const laShuRef = useRef(null);
  const laMapLeftRef = useRef(null);
  const laMapRightRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Giai đoạn 1: Hiển thị tiêu đề và lá (0-40% scroll)
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top center',
        end: '40% center',
        scrub: 1,
        markers: false,
      }
    });

    // Giai đoạn 2: Di chuyển lá và hiển thị nội dung đồng thời (40-100% scroll)
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: '40% center',
        end: 'bottom center',
        scrub: 1,
        markers: false,
      }
    });

    // Giai đoạn 1: Hiển thị tiêu đề và lá
    tl1
      .fromTo(laShuRef.current, 
        { 
          opacity: 0,
          x: 0,
          y: 0,
          rotation: -10,
          scale: 1.05
        },
        { 
          opacity: 0.96,
          x: 0,
          y: 0,
          rotation: -10,
          scale: 1.05,
          duration: 1
        }
      )
      .fromTo(laMapLeftRef.current,
        {
          opacity: 0,
          x: 0,
          y: 0,
          rotation: -60,
          scale: 1.08
        },
        {
          opacity: 0.92,
          x: 0,
          y: 0,
          rotation: -60,
          scale: 1.08,
          duration: 1
        },
        '-=0.5'
      )
      .fromTo(laMapRightRef.current,
        {
          opacity: 0,
          x: 0,
          y: 0,
          rotation: 160,
          scale: 1.1
        },
        {
          opacity: 0.91,
          x: 0,
          y: 0,
          rotation: 160,
          scale: 1.1,
          duration: 1
        },
        '-=0.5'
      );

    // Giai đoạn 2: Di chuyển lá và hiển thị nội dung đồng thời
    tl2
      .to(laShuRef.current, {
        x: -1000,        
        y: -30,          
        rotation: 10,    
        scale: 1.1,      
        duration: 1
      })
      .to(laMapLeftRef.current, {
        x: -900,        
        y: 250,          
        rotation: 80,    
        scale: 1.1,     
        duration: 1
      }, '-=1')
      .to(laMapRightRef.current, {
        x: 120,          
        y: 150,          
        rotation: -45,   
        scale: 1.15,     
        duration: 1
      }, '-=1')
      .fromTo(contentRef.current, {
        y: 100
      }, {
        y: 0,
        duration: 1.5,
        ease: "power2.out"
      }, '-=0.5'); 
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[120vh] bg-blue-900 flex flex-col justify-between overflow-hidden" 
      style={{fontFamily: 'Montserrat, sans-serif'}}
    >
      {/* Main content */}
      <div className="flex-1 flex flex-col justify-start relative px-12" style={{paddingTop: '90px', paddingBottom: '80px'}}>
        {/* Lá động */}
        <img 
          ref={laShuRef}
          src={laShu} 
          alt="leaf" 
          style={{
            position: 'absolute',
            top: '0%',
            right: '7%',
            left: 'auto',
            width: '28vw',
            minWidth: 100,
            zIndex: 10,
            pointerEvents: 'none',
          }} 
        />
        <img 
          ref={laMapLeftRef}
          src={laMap} 
          alt="leaf" 
          style={{
            position: 'absolute',
            bottom: '15%',
            right: '20%',
            left: 'auto',
            width: '26vw',
            minWidth: 100,
            zIndex: 10,
            pointerEvents: 'none',
          }} 
        />
        <img 
          ref={laMapRightRef}
          src={laMap} 
          alt="leaf" 
          style={{
            position: 'absolute',
            bottom: '15%',
            right: '1%',
            width: '24vw',
            minWidth: 100,
            zIndex: 10,
            pointerEvents: 'none',
          }} 
        />
        
        {/* Chữ ABOUT MC */}
        <div className="absolute left-0 w-full flex flex-col items-center pointer-events-none z-20" style={{top: '25%'}}>
          <h1 className="text-[10vw] font-extrabold text-white leading-none tracking-tight" style={{WebkitTextStroke:'2px #fff', color:'transparent', fontFamily:'Montserrat, sans-serif'}}>ABOUT</h1>
          <h2 className="text-[10vw] font-extrabold text-white leading-none tracking-tight -mt-6" style={{fontFamily:'Montserrat, sans-serif'}}>MC</h2>
        </div>
        
        {/* Nội dung */}
        <div
          ref={contentRef}
          className="w-full flex justify-center z-10"
          style={{
            position: 'absolute',
            bottom: '35%',
            left: 0,
            width: '100%',
            pointerEvents: 'auto',
            opacity: 1, 
            transform: 'translateY(100px)', 
          }}
        >
          <div className="max-w-2xl mx-auto text-white text-lg font-medium text-justify">
            MC Group is a premier Below-the-Line (BTL) marketing agency with over 25 years of expertise in creating memorable, results-driven brand experiences. With 4 subsidiary companies all backed by global business quality management systems ISO 9001 & ISO 27001, MC Group is proud to deliver the maximum impact on every campaign & be the Greatest Partner of clients in the journey to achieve sustainable growth.
          </div>
        </div>
      </div>
    </section>
  );
}