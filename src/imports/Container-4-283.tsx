import svgPaths from "./svg-dni0wsdfsm";
import imgProduct from "../../src/assets/product.png";

function Logo() {
  return (
    <div className="absolute h-[140px] left-[44px] top-[109px] w-[287px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 287 140">
        <g clipPath="url(#clip0_4_293)" id="Logo">
          <g id="Group">
            <path d={svgPaths.p12acb800} fill="var(--fill-0, #FFFDFB)" id="Vector" />
            <path d={svgPaths.p1ad42b00} fill="var(--fill-0, #FFFDFB)" id="Vector_2" />
            <path d={svgPaths.p32c19300} fill="var(--fill-0, #FFFDFB)" id="Vector_3" />
            <path d={svgPaths.p1c43d200} fill="var(--fill-0, #FFFDFB)" id="Vector_4" />
            <path d={svgPaths.p2c59ce00} fill="var(--fill-0, #FFFDFB)" id="Vector_5" />
          </g>
          <g id="Group_2">
            <path d={svgPaths.p6eaa880} fill="var(--fill-0, #FFFDFB)" id="Vector_6" />
            <path d={svgPaths.p31d1e200} fill="var(--fill-0, #FFFDFB)" id="Vector_7" />
            <path d={svgPaths.pe7ba580} fill="var(--fill-0, #FFFDFB)" id="Vector_8" />
          </g>
          <path d={svgPaths.p1c52e5f0} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p2455d480} fill="var(--fill-0, #CF714C)" id="Vector_10" />
          <path d={svgPaths.p104c4100} fill="var(--fill-0, white)" id="Vector_11" />
          <path d={svgPaths.pabeb200} fill="var(--fill-0, white)" id="Vector_12" />
          <g id="Group_3">
            <path d={svgPaths.p5f60a00} fill="var(--fill-0, #FFFDFB)" id="Vector_13" />
            <path d={svgPaths.p375b9600} fill="var(--fill-0, #FFFDFB)" id="Vector_14" />
            <path d={svgPaths.p251cbf00} fill="var(--fill-0, #FFFDFB)" id="Vector_15" />
          </g>
          <path d={svgPaths.p388c7440} fill="var(--fill-0, #FFFDFB)" id="Vector_16" />
        </g>
        <defs>
          <clipPath id="clip0_4_293">
            <rect fill="white" height="140" width="287" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Logo1() {
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
    <div className="absolute content-stretch flex items-center justify-between left-1/2 top-[16px] translate-x-[-50%] w-[327px]" data-name="Header">
      <Logo1 />
      <ShareButton />
    </div>
  );
}

function Notification() {
  return (
    <div className="absolute bg-[#660016] box-border content-stretch flex gap-[8px] items-center justify-center leading-[normal] left-[20px] px-0 py-[12px] rounded-[10000px] text-[#f2f2f2] text-center text-nowrap top-[68px] w-[335px] whitespace-pre" data-name="Notification">
      <p className="font-['FranklinGothic_URW:Heavy',_sans-serif] not-italic relative shrink-0 text-[20px] tracking-[-0.38px]">💔</p>
      <p className="font-['DM_Sans:Black',_sans-serif] font-black relative shrink-0 text-[16px] tracking-[-0.304px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Please allow location to continue
      </p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-white box-border content-stretch flex items-center justify-center left-[127.5px] overflow-clip px-[32px] py-[12px] rounded-[1200px] top-[528px]" data-name="Button">
      <div className="flex flex-col font-['DM_Sans:Black',_sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#cf010e] text-[16px] text-nowrap tracking-[-0.304px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">Continue</p>
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-[#cf010e] relative size-full" data-name="Container">
      <Logo />
      <div className="absolute h-[226px] left-[144px] top-[274px] w-[86px]" data-name="Product">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgProduct} />
      </div>
      <Header />
      <p className="absolute font-['FranklinGothic_URW:Book',_sans-serif] h-[57px] leading-[normal] left-[187.5px] not-italic text-[#f2f2f2] text-[16px] text-center top-[624px] tracking-[-0.304px] translate-x-[-50%] w-[311px]">
        Prove your stress by showing us your
        <br aria-hidden="true" />
        current location and if we see you’re in
        <br aria-hidden="true" />
        the red zone - win a coupon.
      </p>
      <Notification />
      <Button />
    </div>
  );
}