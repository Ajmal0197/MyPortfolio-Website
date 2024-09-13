import { FC } from "react";
import { HERO_CONTENT } from '../constants'

const Hero: FC = () => {
  return <div className="border-b border-neutral-900 mt-32 pb-4 lg:mb-32">
    <div className="flex flex-wrap">
      <div className="w-full lg:w-1/2">
        <div className="flex flex-col items-center lg:items-start">
          <h2 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Ajmal Hasan</h2>
          <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">React Native | MERNN Stack
          </span>
          <div className="my-2 max-w-xl py-6 font-light tracking-wide">
            {HERO_CONTENT.split('\n').map((line, index) => (
              <p key={index}>{line.trim()}<br /></p>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default Hero;