import classNames from "classnames";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";

interface ButtonProperties {
  link?: string;
  text: string;
  dark?: boolean;
  className?: string;
}

export default function Button({
  link,
  text,
  dark,
  className,
}: ButtonProperties) {
  return link ? (
    <Link
      href={link}
      className={classNames(
        "flex gap-2 items-center group rounded-full p-1 transition border-2",
        {
          "bg-black-light hover:bg-custom-orange border-white": dark,
          "bg-custom-orange hover:bg-white border-black-light": !dark,
        },
        className,
      )}
    >
      <span
        className={classNames("px-4 text-white transition", {
          "group-hover:text-neutral-950": !dark,
        })}
      >
        {text}
      </span>
      <span
        className={classNames("p-1 rounded-full", {
          "bg-custom-orange": dark,
          "bg-black-light": !dark,
        })}
      >
        <BiRightArrowAlt className="size-5 group-hover:translate-x-1.5 transition duration-300" />
      </span>
    </Link>
  ) : (
    <button
      className={classNames(
        "flex gap-2 items-center group rounded-full p-1 transition border-2",
        {
          "bg-black-light hover:bg-custom-orange border-white": dark,
          "bg-custom-orange hover:bg-white border-black-light": !dark,
        },
        className,
      )}
    >
      <span
        className={classNames("px-4 text-white transition", {
          "group-hover:text-neutral-950": !dark,
        })}
      >
        {text}
      </span>
      <span
        className={classNames("p-1 rounded-full", {
          "bg-custom-orange": dark,
          "bg-black-light": !dark,
        })}
      >
        <BiRightArrowAlt className="size-5 group-hover:translate-x-1.5 transition duration-300" />
      </span>
    </button>
  );
}
