import React, { useContext, useRef } from "react";
import s from "../styles/skills.module.css";
import { ScrollContext } from "../utils/scroll-observer";


interface Props{
  commits:number
}


const opacityForBlock = (sectionProgress: number, blockNo: number) => {
  const progress = sectionProgress - blockNo;
  if (progress >= 0 && progress < 1) return 1;
  return 0.2;
};

const Skills: React.FC<Props> = ({commits}) => {
  const { scrollY } = useContext(ScrollContext);
  const refContainer = useRef<HTMLDivElement>(null);
  const numberOfPages = 3;
  let progress = 0;
  const { current: elContainer } = refContainer;
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight;
    progress = Math.min(
      numberOfPages - 0.5,
      Math.max(0.5, percentY * numberOfPages)
    );    
  }
  const numOfCommits = Math.round(commits || 0).toLocaleString()
  return (
    <div ref={refContainer} className="bg-black text-white">
      <div className="min-h-screen max-w-5xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36 flex flex-col justify-center items-center text-4xl md:text-6xl lg:text-7xl tracking-tight font-semibold">
        <div className="leading-[1.15]">
          <div
            className={s.skillText}
            style={{ opacity: opacityForBlock(progress, 0) }}
          >
            We Know our tools inside out.
          </div>
          <span
            className={`${s.skillText} inline-block after:content-['_']`}
            style={{ opacity: opacityForBlock(progress, 1) }}
          >
            Out team has contributed {numOfCommits} commits to React Native core, powering
            thouands of apps worldwide.
          </span>
          <span
            className={`${s.skillText} inline-block`}
            style={{ opacity: opacityForBlock(progress, 2) }}
          >
            We&apos;re maintaining some of the most populate open-source
            projects with our <strong>1234</strong> download.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
