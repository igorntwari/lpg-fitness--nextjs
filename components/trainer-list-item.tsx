import { montserrat } from "@/app/assets";
import { Trainer } from "@/app/sections/trainers";
import classNames from "classnames";
import Image from "next/image";

export default function TrainerListItem({
  className,
  id,
  image,
  name,
}: Trainer & { className?: string }) {
  return (
    <div className={classNames(className, "rounded-xl")}>
      <Image
        src={image}
        alt={`${name} Image`}
        className="absolute size-full bg-black-light object-cover object-top"
      />
      <div className="absolute p-5 lg:p-10 size-full bg-black/30 flex flex-col justify-end">
        <p className={classNames(montserrat.className, "font-medium")}>
          {name}
        </p>
        <p className="text-sm">{`Trainer ${id + 1}`}</p>
      </div>
    </div>
  );
}
