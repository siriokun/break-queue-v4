import svgPaths from "../imports/svg-y7wbb41l05";
import ellipseBackground from "../../src/assets/bg-b.png";

function Logo() {
  return (
    <div
      className="absolute h-[60px] left-[139.04px] top-[56px] w-[96.917px]"
      data-name="Logo"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 97 60"
      >
        <g clipPath="url(#clip0_36_161)" id="Logo">
          <path
            d={svgPaths.p35d520f0}
            fill="var(--fill-0, #BA0018)"
            id="Vector"
          />
          <path
            d={svgPaths.p3dc51160}
            fill="var(--fill-0, white)"
            id="Vector_2"
          />
        </g>
        <defs>
          <clipPath id="clip0_36_161">
            <rect fill="white" height="60" width="96.9167" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Subtitle() {
  return (
    <div
      className="h-[24px] relative shrink-0 w-[335px]"
      data-name="Subtitle"
    >
      <p className="absolute bottom-[-41.67%] font-['FranklinGothic_URW:Heavy',_sans-serif] leading-[1.2] left-0 not-italic right-0 text-[28px] text-center text-white top-0 tracking-[-0.532px]">
        NOT BUSY ENOUGH
      </p>
    </div>
  );
}

function ContentContainer() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full"
      data-name="Content Container"
    >
      <Subtitle />
      <div className="font-['FranklinGothic_URW:Book',_sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#f2f2f2] text-[16px] text-center tracking-[-0.304px] w-[min-content]">
        <p className="mb-0">
          This location isn't busy enough right now.
        </p>
        <p>Try another location or come back later!</p>
      </div>
    </div>
  );
}

function Button({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-white box-border content-stretch flex items-center justify-center overflow-clip px-[32px] py-[12px] relative rounded-[1200px] shrink-0 border-0 cursor-pointer"
      data-name="Button"
    >
      <div
        className="flex flex-col font-['DM_Sans:Black',_sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#cf010e] text-[20px] text-nowrap tracking-[-0.38px]"
        style={{ fontVariationSettings: "'opsz' 14" }}
      >
        <p className="leading-[normal] whitespace-pre">
          Try Again
        </p>
      </div>
    </button>
  );
}

function MessageContainer({
  onTryAgain,
}: {
  onTryAgain: () => void;
}) {
  return (
    <div
      className="content-stretch flex flex-col gap-[69px] items-center relative shrink-0 w-full"
      data-name="Message Container"
    >
      <ContentContainer />
      <Button onClick={onTryAgain} />
    </div>
  );
}

function BodyContent({
  onTryAgain,
}: {
  onTryAgain: () => void;
}) {
  return (
    <div
      className="absolute content-stretch flex flex-col h-[403px] items-center justify-center left-[20px] top-[172px] w-[335px]"
      data-name="Body Content"
    >
      <MessageContainer onTryAgain={onTryAgain} />
    </div>
  );
}

export function NotBusyScreen({
  onTryAgain,
}: {
  onTryAgain: () => void;
}) {
  return (
    <div
      className="bg-[#cf010e] absolute inset-0 z-30"
      data-name="Container"
    >
      <div
        className="absolute h-[645px] left-[calc(50%-0.5px)] top-[30px] translate-x-[-50%] w-[375px]"
        style={{
          backgroundImage: `url(${ellipseBackground})`,
          backgroundSize: "100%",
          backgroundPosition: "0",
          backgroundRepeat: "no-repeat",
        }}
      />
      <Logo />
      <BodyContent onTryAgain={onTryAgain} />
    </div>
  );
}