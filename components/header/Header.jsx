import Image from "next/image";
import logoSrc from "./logo.svg";
import { Profile } from "../profile";
import { ArrowDownIcon } from "./icons/ArrowDownIcon";
import { UiButton } from "../uikit/UiButton";

export function Header() {
  return (
    <header className="flex h-24 px-8 items-center bg-white shadow-lg">
      <Image src={logoSrc} alt="logo" />
      <div className="w-px h-8 bg-slate-200 mx-6" />
      <UiButton className="w-44" size="lg" variant="primary">
        Играть
      </UiButton>

      <button className="ml-auto flex items-center gap-2 text-teal-600">
        <Profile name="Ivan" rating="1230" />
        <ArrowDownIcon />
      </button>
    </header>
  );
}
