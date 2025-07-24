import React from 'react';
import la4 from '../images/4la.png';
import CountUp from './CountUp'
import BlurText from "./BlurText";

const handleAnimationComplete = () => {
            console.log('Animation completed!');
          };

export default function KeyFiguresSection() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-blue-900" style={{fontFamily: 'Montserrat, sans-serif'}}>
      <div className="w-full max-w-7xl flex flex-row items-center justify-between px-16">
        {/* Cột trái: KEY + 4 lá + FIGUERS */}
        <div className="flex-1 flex flex-col justify-center">
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
            <img src={la4} alt="4 leaves" className="w-[20vw] max-w-[500px] min-w-[350px] drop-shadow-xl ml-2" style={{filter: 'drop-shadow(0 6px 24px rgba(0,0,0,0.18))', marginBottom: '-29px'}} />
          </div>
          <span
            className="font-extrabold text-[9vw] leading-none tracking-tight text-blue-600 mt-2 block"
            style={{letterSpacing: '-2px', lineHeight: 1, display: 'block'}}
          >
            FIGUERS
          </span>
        </div>
        {/* Số 25 và mô tả bên phải */}
        <div className="flex-1 flex flex-col items-center justify-center pl-8">
          <CountUp
            from={0}
            to={25}
            separator=","
            direction="up"
            duration={1}
            className="count-up-text text-white text-[9vw] font-extrabold leading-none text-center"
          />
          <BlurText
            text="25 year of experience "
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-yellow-400 text-[3vw] font-bold mt-2 text-center"
            style={{maxWidth: 500}}
          />
          <BlurText
            text="in BTL industry "
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-yellow-400 text-[3vw] font-bold text-center"
            style={{maxWidth: 500}}
          />
          {/* <div className="text-yellow-400 text-[3vw] font-bold mt-2 text-center" style={{maxWidth: 500}}>
            25 year of experience<br />in BTL industry
          </div> */}
        </div>
      </div>
    </section>
  );
} 