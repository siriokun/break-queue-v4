import svgPaths from "./svg-zefyn3ff7r";

function Logo() {
  return (
    <div className="h-[50.146px] relative shrink-0 w-[81px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 81 51">
        <g clipPath="url(#clip0_11_240)" id="Logo">
          <path d={svgPaths.p166f0100} fill="var(--fill-0, #BA0018)" id="Vector" />
          <path d={svgPaths.p1927c300} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_11_240">
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
    <div className="content-stretch flex gap-[4px] items-start justify-end relative shrink-0" data-name="Share Button">
      <Share />
      <p className="font-['DM_Sans:Black',_sans-serif] font-black leading-[normal] relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.266px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Share
      </p>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Header">
      <Logo />
      <ShareButton />
    </div>
  );
}

function Percent() {
  return (
    <div className="bg-[#6e0915] box-border content-stretch flex gap-[2.883px] items-center justify-center mr-[-7.111px] p-[2.883px] relative rounded-[288.288px] shrink-0 size-[28.444px]" data-name="percent">
      <p className="font-['Intro_Black:Regular',_sans-serif] leading-[1.2] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16.144px] text-center text-nowrap text-white tracking-[-0.3067px] whitespace-pre">%</p>
    </div>
  );
}

function Component15() {
  return (
    <div className="box-border content-stretch flex items-end pl-0 pr-[7.111px] py-0 relative shrink-0" data-name="15%">
      <p className="font-['Intro_Black:Regular',_sans-serif] leading-[1.2] mr-[-7.111px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[60px] text-center text-nowrap text-white tracking-[-1.14px] whitespace-pre">15</p>
      <Percent />
    </div>
  );
}

function SpikyElement() {
  return (
    <div className="absolute h-[8.702px] left-[191.27px] top-[-12.8px] w-[17.404px]" data-name="Spiky Element">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 9">
        <g clipPath="url(#clip0_11_234)" id="Spiky Element">
          <path clipRule="evenodd" d={svgPaths.p31f5c200} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p1bb83080} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_11_234">
            <rect fill="white" height="8.70198" width="17.404" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SpikyElement1() {
  return (
    <div className="h-[6.988px] relative w-[14.139px]" data-name="Spiky Element">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 7">
        <g clipPath="url(#clip0_11_231)" id="Spiky Element">
          <path clipRule="evenodd" d={svgPaths.p34a9e00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_11_231">
            <rect fill="white" height="6.9881" width="14.1387" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex gap-[4px] items-start justify-center relative shrink-0" data-name="Title">
      <Component15 />
      <p className="font-['Intro_Black:Regular',_sans-serif] leading-[1.2] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[60px] text-center text-nowrap text-white tracking-[-1.14px] whitespace-pre">OFF</p>
      <SpikyElement />
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.9659258127212524)+(var(--transform-inner-height)*0.2588190734386444)))] items-center justify-center left-[-7.77px] top-[4.74px] w-[calc(1px*((var(--transform-inner-height)*0.9659258127212524)+(var(--transform-inner-width)*0.258819043636322)))]" style={{ "--transform-inner-width": "14.125", "--transform-inner-height": "6.96875" } as React.CSSProperties}>
        <div className="flex-none rotate-[255deg]">
          <SpikyElement1 />
        </div>
      </div>
    </div>
  );
}

function TextContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="Text Container">
      <Title />
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[#f2f2f2] text-[14px] text-center tracking-[-0.266px] w-[min-content]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Enjoy a discounted drink on us!
        <br aria-hidden="true" />
        You deserve a break.
        <br aria-hidden="true" />
        Claim your prize now.
      </p>
    </div>
  );
}

function Coupon() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[16px] h-[160px] items-center justify-center overflow-clip relative rounded-[21.333px] shadow-[0px_0px_16px_0px_rgba(0,0,0,0.25)] shrink-0 w-[300px]" data-name="Coupon">
      <div className="absolute bottom-0 h-[160px] left-0 w-[297.778px]" data-name="Shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 298 160">
          <path d={svgPaths.pdda58c0} fill="var(--fill-0, #BA1221)" id="Shape" />
        </svg>
      </div>
      <TextContainer />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative w-[335px]" data-name="Title">
      <p className="font-['Intro_Black:Regular',_sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[24px] text-center text-white tracking-[-0.456px] w-[min-content]">CONGRATULATIONS!</p>
      <Coupon />
    </div>
  );
}

function Coupon1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Coupon">
      <Header />
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*0.08715574443340302)+(var(--transform-inner-height)*0.9961947202682495)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*0.08715574443340302)+(var(--transform-inner-width)*0.9961947202682495)))]" style={{ "--transform-inner-width": "334.984375", "--transform-inner-height": "204.765625" } as React.CSSProperties}>
        <div className="flex-none rotate-[355deg]">
          <Title1 />
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white box-border content-stretch flex items-center justify-center overflow-clip px-[32px] py-[12px] relative rounded-[1200px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['DM_Sans:Black',_sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#cf010e] text-[20px] text-nowrap tracking-[-0.38px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">Buy Now in Grab</p>
      </div>
    </div>
  );
}

function ButtonContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0" data-name="Button Container">
      <Button />
      <p className="[text-underline-position:from-font] decoration-solid font-['DM_Sans:Black',_sans-serif] font-black leading-[normal] relative shrink-0 text-[12px] text-center text-nowrap text-white tracking-[-0.228px] underline whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>{`Terms & Conditions here`}</p>
    </div>
  );
}

function DescriptionContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0" data-name="Description Container">
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#f2f2f2] text-[16px] text-center tracking-[-0.304px] w-[335px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <span>
          Try our delicious new
          <br aria-hidden="true" />
        </span>
        <span className="font-['DM_Sans:Bold',_sans-serif] font-bold" style={{ fontVariationSettings: "'opsz' 14" }}>
          KitKat’s Ready to Drink
        </span>
        <span>
          {` and`}
          <br aria-hidden="true" />
          take a break in your long queue.
        </span>
      </p>
      <ButtonContainer />
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-[#cf010e] relative size-full" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-between pb-[56px] pt-[24px] px-[142px] relative size-full">
          <div className="absolute h-[560px] left-[calc(50%-0.5px)] top-[-180px] translate-x-[-50%] w-[666px]" data-name="Ellipse Background">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 666 560">
              <ellipse cx="333" cy="280" fill="var(--fill-0, #6E0915)" id="Ellipse Background" rx="333" ry="280" />
            </svg>
          </div>
          <Coupon1 />
          <DescriptionContainer />
        </div>
      </div>
    </div>
  );
}