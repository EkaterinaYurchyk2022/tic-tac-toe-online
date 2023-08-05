import Image from "next/image";
import avatarSrc from "./avatar.png";
import { clsx } from "clsx";

export function Profile({ classname, name, rating, avatar = avatarSrc }) {
  return (
    <div
      className={clsx(
        classname,
        "flex items-center gap-2 text-start text-teal-600 ",
      )}
    >
      <Image src={avatar} width={48} height={48} alt="avatar" unoptimized />
      <div className="overflow-hidden">
        <div className="text-lg leading-tight truncate">{name}</div>
        <div className="text-slate-400 text-xs leading-tight">
          Рейтинг: {rating}
        </div>
      </div>
    </div>
  );
}
