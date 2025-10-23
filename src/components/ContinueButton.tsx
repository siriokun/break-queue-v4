export function ContinueButton() {
  return (
    <button 
      className="absolute bg-white box-border content-stretch flex items-center justify-center left-1/2 -translate-x-1/2 overflow-clip px-[32px] py-[12px] rounded-[1200px] top-[500px] hover:scale-105 transition-transform shadow-lg" 
      data-name="Button"
      onClick={() => {
        console.log('Continue clicked');
      }}
    >
      <div className="flex flex-col font-['DM_Sans:Black',_sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#cf010e] text-[16px] text-nowrap tracking-[-0.304px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">Continue</p>
      </div>
    </button>
  );
}
