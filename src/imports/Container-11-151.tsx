import svgPaths from "./svg-eyy2qfsyjj";

function ChevronBack() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="chevron-back">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron-back">
          <path clipRule="evenodd" d={svgPaths.p2bd04900} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-end px-0 relative shrink-0" data-name="Text">
      <p className="font-['DM_Sans:Black',_sans-serif] font-black leading-[normal] relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.266px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Back
      </p>
    </div>
  );
}

function BackButton() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Back Button">
      <ChevronBack />
      <Text />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute content-stretch flex gap-[32px] h-[50.146px] items-center left-[24px] top-[16px] w-[327px]" data-name="Header">
      <BackButton />
    </div>
  );
}

function SearchInputContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[174px]" data-name="Search Input Container">
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',_sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[16px] text-black text-center text-nowrap tracking-[-0.304px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal] whitespace-pre">Scarlett House</p>
      </div>
    </div>
  );
}

function SearchIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Search Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Search Icon">
          <path d={svgPaths.p275a6000} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function SearchIconContainer() {
  return (
    <div className="bg-[#6e0915] box-border content-stretch flex gap-[10px] h-full items-center p-[8px] relative rounded-[32px] shrink-0" data-name="Search Icon Container">
      <SearchIcon />
    </div>
  );
}

function Search() {
  return (
    <div className="absolute bg-white box-border content-stretch flex items-center justify-between left-[20px] pl-[24px] pr-[8px] py-[8px] rounded-[10000px] top-[90px] w-[337px]" data-name="Search">
      <SearchInputContainer />
      <div className="flex flex-row items-center self-stretch">
        <SearchIconContainer />
      </div>
    </div>
  );
}

function PlaceInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[1.2] relative shrink-0 text-black w-[295px]" data-name="Place Info">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold relative shrink-0 text-[16px] tracking-[-0.304px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Scarlett House Blok M
      </p>
      <p className="font-['DM_Sans:9pt_Regular',_sans-serif] font-normal h-[12px] opacity-50 overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] tracking-[-0.266px] w-full" style={{ fontVariationSettings: "'opsz' 9" }}>
        Jl. Sultan Hasanudin, Melawai, Jakarta, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12160
      </p>
    </div>
  );
}

function PlaceInfo1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[1.2] relative shrink-0 text-black w-full" data-name="Place Info">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold relative shrink-0 text-[16px] tracking-[-0.304px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Name of Place
      </p>
      <p className="font-['DM_Sans:9pt_Regular',_sans-serif] font-normal h-[12px] opacity-50 overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] tracking-[-0.266px] w-full" style={{ fontVariationSettings: "'opsz' 9" }}>
        City, Area, Street
      </p>
    </div>
  );
}

function PlaceInfo7() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[1.2] not-italic relative shrink-0 text-black w-full" data-name="Place Info">
      <p className="font-['Snowflake_Sans:Bold',_sans-serif] relative shrink-0 text-[16px] tracking-[-0.304px] w-[322px]">Name of Place</p>
      <p className="[white-space-collapse:collapse] font-['Snowflake_Sans:Book',_sans-serif] h-[12px] opacity-50 overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap tracking-[-0.266px] w-full">City, Area, Street</p>
    </div>
  );
}

function PlaceInfo8() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Place Info">
      <p className="font-['Snowflake_Sans:Bold',_sans-serif] leading-[1.2] not-italic relative shrink-0 text-[16px] text-black tracking-[-0.304px] w-[322px]">Name of Place</p>
      <p className="[white-space-collapse:collapse] font-['Snowflake_Sans:Book',_sans-serif] h-[12px] leading-[1.2] not-italic opacity-50 overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.266px] w-full">City, Area, Street</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 321 2">
            <path d="M0 1H321" id="Vector 1" stroke="var(--stroke-0, #E0E0E0)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[16px] grow h-[445px] items-start min-h-px min-w-px overflow-x-clip overflow-y-auto px-0 py-[24px] relative shrink-0" data-name="Content">
      <PlaceInfo />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 321 2">
            <path d="M0 1H321" id="Vector 1" stroke="var(--stroke-0, #E0E0E0)" />
          </svg>
        </div>
      </div>
      <PlaceInfo1 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 321 2">
            <path d="M0 1H321" id="Vector 1" stroke="var(--stroke-0, #E0E0E0)" />
          </svg>
        </div>
      </div>
      <PlaceInfo1 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 321 2">
            <path d="M0 1H321" id="Vector 1" stroke="var(--stroke-0, #E0E0E0)" />
          </svg>
        </div>
      </div>
      <PlaceInfo1 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 321 2">
            <path d="M0 1H321" id="Vector 1" stroke="var(--stroke-0, #E0E0E0)" />
          </svg>
        </div>
      </div>
      <PlaceInfo1 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 321 2">
            <path d="M0 1H321" id="Vector 1" stroke="var(--stroke-0, #E0E0E0)" />
          </svg>
        </div>
      </div>
      <PlaceInfo1 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 321 2">
            <path d="M0 1H321" id="Vector 1" stroke="var(--stroke-0, #E0E0E0)" />
          </svg>
        </div>
      </div>
      <PlaceInfo1 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 321 2">
            <path d="M0 1H321" id="Vector 1" stroke="var(--stroke-0, #E0E0E0)" />
          </svg>
        </div>
      </div>
      <PlaceInfo7 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 321 2">
            <path d="M0 1H321" id="Vector 1" stroke="var(--stroke-0, #E0E0E0)" />
          </svg>
        </div>
      </div>
      <PlaceInfo8 />
      <PlaceInfo7 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 321 2">
            <path d="M0 1H321" id="Vector 1" stroke="var(--stroke-0, #E0E0E0)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ResultBox() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[8px] h-[426.854px] items-start left-[20px] overflow-clip pl-[16px] pr-0 py-0 rounded-[24px] top-[162px] w-[337px]" data-name="Result Box">
      <Content />
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-[#cf010e] relative size-full" data-name="Container">
      <Header />
      <Search />
      <ResultBox />
    </div>
  );
}