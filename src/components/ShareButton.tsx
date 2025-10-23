import svgPaths from "../imports/svg-dni0wsdfsm";

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

export function ShareButton() {
  return (
    <button 
      className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 hover:opacity-80 transition-opacity" 
      data-name="Share Button"
      onClick={() => {
        if (navigator.share) {
          navigator.share({
            title: 'Share this page',
            url: window.location.href,
          }).catch(() => {});
        }
      }}
    >
      <Share />
      <p className="font-['DM_Sans:Black',_sans-serif] font-black leading-[normal] relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.266px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Share
      </p>
    </button>
  );
}
