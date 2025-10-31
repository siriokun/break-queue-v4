/* TypeScript can't find type declarations for this generated SVG module;
   suppress the type error because the runtime asset is provided. */
// @ts-ignore: Could not find module '../imports/svg-vl5fiuk6pd' or its type declarations
import svgPaths from "../imports/svg-vl5fiuk6pd";
import videoTransitionGif from '../assets/video-transition.gif';

function Day() {
  // Get current date in user's timezone
  const today = new Date();
  
  // Calculate yesterday and tomorrow
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  
  // Format day names
  const formatDay = (date: Date) => {
    return date.toLocaleDateString('en-US', { weekday: 'long' });
  };
  
  const yesterdayName = formatDay(yesterday);
  const todayName = formatDay(today);
  const tomorrowName = formatDay(tomorrow);
  
  return (
    <div className="content-stretch flex gap-[32px] items-center justify-center leading-[normal] relative shrink-0 text-[16px] text-center text-white tracking-[-0.304px]" data-name="Day">
      <p className="font-['DM_Sans:Light',_sans-serif] font-light opacity-50 relative shrink-0 w-[85px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        {yesterdayName}
      </p>
      <p className="font-['DM_Sans:Black',_sans-serif] font-black relative shrink-0 w-[80px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        {todayName}
      </p>
      <p className="font-['DM_Sans:Light',_sans-serif] font-light opacity-50 relative shrink-0 w-[80px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        {tomorrowName}
      </p>
    </div>
  );
}

function GraphContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full" data-name="Graph Container">
      <p className="font-['Intro_Black:Regular',_sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[28px] text-center text-white tracking-[-0.532px] w-[min-content]">Popular Time for Break</p>
      <Day />
      <div className="aspect-[375/227.146] relative shrink-0 w-full" data-name="video-transition.mp4">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={videoTransitionGif} 
            alt="Busyness graph animation"
            className="absolute h-[137.47%] left-[-23.31%] max-w-none top-[-12.77%] w-[146.37%] object-cover"
          />
        </div>
      </div>
    </div>
  );
}

function DescriptionTextContainer() {
  return (
    <div className="basis-0 bg-[#700808] grow min-h-px min-w-px relative shrink-0 w-full -mt-px" data-name="Description Text Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[32px] py-0 relative size-full">
          <p className="basis-0 font-['DM_Sans:Regular',_sans-serif] font-normal grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#f2f2f2] text-[16px] text-center tracking-[-0.304px] hidden" style={{ fontVariationSettings: "'opsz' 14" }}>
            Lorem ipsum dolor sit amet consectetur. Nibh convallis nam neque ut eget.
          </p>
        </div>
      </div>
    </div>
  );
}

function DescriptionContainer() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px relative shrink-0 w-[375px]" data-name="Description Container">
      <div className="h-[42.002px] relative shrink-0 w-[375px]" data-name="Intersect">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 375 42">
          <path d={svgPaths.pe471f00} fill="var(--fill-0, #700808)" id="Intersect" />
        </svg>
      </div>
      <DescriptionTextContainer />
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[54px] min-h-[94vh] items-center relative shrink-0 w-[375px] mt-15" data-name="Content Transition Container">
      <GraphContainer />
      <DescriptionContainer />
    </div>
  );
}

export function VideoTransition() {
  return (
    <div className="bg-[#cf010e] relative size-full min-h-[91vh] overflow-hidden" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-center relative size-full">
          <ContentContainer />
        </div>
      </div>
    </div>
  );
}
