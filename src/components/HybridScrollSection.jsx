import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HybridScrollSection = ({ 
  children, 
  className = '', 
  fullpageSection = false,
  animationConfig = null 
}) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !animationConfig) return;

    // Disable ScrollTrigger when using fullpage to avoid conflicts
    if (fullpageSection) {
      // Use fullpage events instead
      const handleFullpageEvent = (event) => {
        if (event.type === 'afterLoad' && event.item.index === animationConfig.sectionIndex) {
          // Trigger animation when fullpage section loads
          gsap.timeline()
            .fromTo(section, 
              animationConfig.from || { opacity: 0, y: 50 },
              animationConfig.to || { opacity: 1, y: 0, duration: 1 }
            );
        }
      };

      // Add fullpage event listener
      document.addEventListener('fullpage:afterLoad', handleFullpageEvent);
      
      return () => {
        document.removeEventListener('fullpage:afterLoad', handleFullpageEvent);
      };
    } else {
      // Use ScrollTrigger for non-fullpage sections
      const trigger = ScrollTrigger.create({
        trigger: section,
        start: animationConfig.start || 'top center',
        end: animationConfig.end || 'bottom center',
        toggleActions: animationConfig.toggleActions || 'play none none reverse',
        onEnter: () => {
          gsap.timeline()
            .fromTo(section,
              animationConfig.from || { opacity: 0, y: 50 },
              animationConfig.to || { opacity: 1, y: 0, duration: 1 }
            );
        }
      });

      return () => trigger.kill();
    }
  }, [fullpageSection, animationConfig]);

  return (
    <div ref={sectionRef} className={`section ${className}`}>
      {children}
    </div>
  );
};

export default HybridScrollSection; 