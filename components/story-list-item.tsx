import { montserrat } from "@/app/assets";
import { Story } from "@/app/sections/stories";
import classNames from "classnames";
import Image from "next/image";

export default function StoryListItem({ image, name, story }: Story) {
  return (
    <div className="relative">
      <Image
        src={image}
        alt={`${name} image`}
        className="xs:size-full h-96 object-top xs:object-center object-cover"
        width={500}
        height={500}
      />
      <div className="absolute inset-0 bg-black/40 bottom-0 flex flex-col gap-5 justify-end">
        <h3
          className={classNames(
            montserrat.className,
            "font-medium text-xl px-5",
          )}
        >
          {name}
        </h3>
        <p className="bg-black px-2 xs:px-5 xs:py-5 text-sm xs:text-base h-1/4 md:h-auto lg:h-1/3 2xl:h-1/5">
          &quot;{story}&quot;
        </p>
      </div>
    </div>
  );
}
