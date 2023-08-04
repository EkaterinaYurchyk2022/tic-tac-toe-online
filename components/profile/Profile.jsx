import Image from "next/image";
import avatarSrc from "./avatar.png";
import { clsx } from "clsx";

export function Profile({ classname }) {
  return (
    <div
      className={clsx(
        classname,
        "flex items-center gap-2 text-start text-teal-600 ",
      )}
    >
      <Image src={avatarSrc} width={48} height={48} alt="avatar" unoptimized />
      <div>
        <div className="text-lg leading-tight">Ivan</div>
        <div className="text-slate-400 text-xs leading-tight">
          Рейтинг: 1230
        </div>
      </div>
    </div>
  );
}