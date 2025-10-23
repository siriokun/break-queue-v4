import { Logo } from "./Logo";
import { ShareButton } from "./ShareButton";

export function Header() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[24px] top-[24px] w-[calc(100%-48px)] max-w-[327px] md:left-1/2 md:-translate-x-1/2 animate-fade-in" data-name="Header">
      <Logo />
      <ShareButton />
    </div>
  );
}
