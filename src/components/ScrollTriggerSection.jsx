import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollTriggerSection = ({ children, className = '', triggerOptions = {} }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Default trigger options
    const defaultOptions = {
      trigger: section,
      start: 'top center',
      end: 'bottom center',
      toggleActions: 'play none none reverse',
      ...triggerOptions
    };

    // Create ScrollTrigger
    const trigger = ScrollTrigger.create(defaultOptions);

    return () => {
      trigger.kill();
    };
  }, [triggerOptions]);

  return (
    <div ref={sectionRef} className={`section ${className}`}>
      {children}
    </div>
  );
};

export default ScrollTriggerSection; 