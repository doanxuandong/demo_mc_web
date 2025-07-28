import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AdvancedScrollAnimation = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;
    const image = imageRef.current;

    if (!container || !text || !image) return;

    // Timeline cho text animation
    const textTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: text,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
        markers: true, // Remove in production
      }
    });

    textTimeline
      .from(text, { 
        opacity: 0, 
        y: 100, 
        duration: 1,
        ease: 'power2.out'
      })
      .from(text.querySelectorAll('.word'), {
        opacity: 0,
        y: 50,
        duration: 0.5,
        stagger: 0.1,
        ease: 'back.out(1.7)'
      }, '-=0.5');

    // Pin animation cho image
    const imageTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: image,
        start: 'top center',
        end: 'bottom center',
        pin: true,
        scrub: 1,
        markers: true, // Remove in production
      }
    });

    imageTimeline
      .fromTo(image, {
        scale: 0.8,
        rotation: -5
      }, {
        scale: 1.2,
        rotation: 5,
        duration: 1
      })
      .to(image, {
        scale: 1,
        rotation: 0,
        duration: 1
      });

    // Parallax effect
    gsap.to(image, {
      yPercent: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 p-8">
      <div className="max-w-6xl mx-auto">
        <div ref={textRef} className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-8">
            <span className="word">Advanced</span>{' '}
            <span className="word">Scroll</span>{' '}
            <span className="word">Animations</span>
          </h1>
          <p className="text-xl text-blue-200 word">
            Powered by GSAP ScrollTrigger
          </p>
        </div>

        <div ref={imageRef} className="flex justify-center mb-16">
          <div className="w-96 h-96 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-2xl shadow-2xl transform transition-transform hover:scale-105">
            <div className="w-full h-full flex items-center justify-center text-white text-2xl font-bold">
              Animated Element
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white"
              style={{
                opacity: 0,
                y: 50
              }}
              ref={(el) => {
                if (el) {
                  gsap.fromTo(el, 
                    { opacity: 0, y: 50 },
                    {
                      opacity: 1,
                      y: 0,
                      duration: 0.8,
                      ease: 'power2.out',
                      scrollTrigger: {
                        trigger: el,
                        start: 'top 90%',
                        toggleActions: 'play none none reverse'
                      }
                    }
                  );
                }
              }}
            >
              <h3 className="text-xl font-bold mb-4">Feature {item}</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvancedScrollAnimation; 