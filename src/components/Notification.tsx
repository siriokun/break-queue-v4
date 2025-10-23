export function Notification() {
  return (
    <div className="absolute bg-[#660016] flex gap-[8px] items-center justify-center leading-[normal] left-[20px] md:left-1/2 md:-translate-x-1/2 px-0 py-[12px] rounded-[10000px] text-[#f2f2f2] text-center text-nowrap top-[-68px] w-[335px] max-w-[calc(100%-40px)] whitespace-pre" data-name="Notification">
      <p className="font-['FranklinGothic_URW:Heavy',_sans-serif] not-italic relative shrink-0 text-[20px] tracking-[-0.38px]">💔</p>
      <p className="font-['DM_Sans:Black',_sans-serif] font-black relative shrink-0 text-[16px] tracking-[-0.304px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Please allow location to continue
      </p>
    </div>
  );
}
