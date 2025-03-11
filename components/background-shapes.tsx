import Image from "next/image";
import { fitness1 } from "@/app/assets";
import classNames from "classnames";

interface BackgroundShapesProperties {
  displayImage?: boolean;
  flipShapes?: boolean;
}

export default function BackgroundShapes({
  displayImage,
  flipShapes,
}: BackgroundShapesProperties) {
  return (
    <div className="absolute bg-custom-orange shadow-inner shadow-black/90 inset-0">
      <div
        className={classNames(
          "w-1/2 relative sm:w-auto bg-black-light h-full",
          {
            "sm:clip-path-bg-shape": !flipShapes,
            "sm:clip-path-bg-shape-fliped left-1/2 sm:left-0": flipShapes,
          },
        )}
      ></div>
      {displayImage && (
        <Image
          src={fitness1}
          alt="Fitness Image"
          className="absolute w-1/2 hidden xs:block h-full object-cover sm:object-contain right-0 bottom-0"
        />
      )}
      <div className="absolute h-full w-full bottom-0 bg-gradient-to-b from-black-light/20 to-black-light"></div>
    </div>
  );
}
