import svgPaths from "./svg-6b1s80ybh2";

function Logo() {
  return (
    <div className="h-[50.146px] relative shrink-0 w-[81px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 81 51">
        <g clipPath="url(#clip0_1_98)" id="Logo">
          <path d={svgPaths.p166f0100} fill="var(--fill-0, #BA0018)" id="Vector" />
          <path d={svgPaths.p18063300} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_98">
            <rect fill="white" height="50.1461" width="81" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Share() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Share">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Share">
          <path d={svgPaths.p3550bb80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ShareButton() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-end relative shrink-0" data-name="Share Button">
      <Share />
      <p className="font-['DM_Sans:Black',_sans-serif] font-black leading-[normal] relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.266px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Share
      </p>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[24px] opacity-0 top-[16px] w-[327px]" data-name="Header">
      <Logo />
      <ShareButton />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] box-border content-stretch flex items-center justify-center left-[127.5px] overflow-clip px-[32px] py-[12px] rounded-[1200px] top-[533.15px]" data-name="Button">
      <div className="flex flex-col font-['DM_Sans:Black',_sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#cf010e] text-[16px] text-nowrap tracking-[-0.304px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">Continue</p>
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-[#cf010e] relative size-full" data-name="Container">
      <Header />
      <div className="absolute h-[419px] left-[20px] top-[90.15px] w-[335px]" data-name="video preload">
        <video autoPlay className="absolute max-w-none object-contain size-full" controlsList="nodownload" loop playsInline>
          <source src="/_videos/v1/ce88de96ba4b0ad20e6948954015eb3ae2c89d5b" />
        </video>
      </div>
      <Button />
    </div>
  );
}