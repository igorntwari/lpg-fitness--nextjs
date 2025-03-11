import Image from "next/image";

import {
  buildMuscle,
  montserrat,
  privateTraining,
  weightLift,
} from "../assets";
import { InfoShape } from "../assets";
import classNames from "classnames";

export default function Info() {
  return (
    <section className="grid items-center md:grid-cols-3 gap-5 box-border text-sm xs:text-base">
      <InfoShape />
      <div className="[filter:url('#info')]">
        <div className="clip-path-center-info lg:clip-path-left-info py-5 lg:py-0 lg:pt-14 lg:pb-10 bg-black-lighter px-5 lg:px-10 text-center items-center md:-rotate-3">
          <div className="flex flex-col items-center  md:rotate-3 gap-2">
            <Image
              src={weightLift}
              className="size-14 sm:size-16"
              alt="Weight lift image"
            />
            <h3
              className={classNames(
                montserrat.className,
                "font-bold text-base xs:text-xl",
              )}
            >
              Weight Lifting
            </h3>
            <hr className="w-full border-2" />
            <p className="text-center">
              Boost strength and endurance with diverse weight exercises.
            </p>
          </div>
        </div>
      </div>

      <div className="[filter:url('#info')] h-full">
        <div className="clip-path-middle-info-sm md:clip-path-center-info bg-black-lighter py-5 px-10 md:px-5 lg:px-5 flex flex-col items-center justify-center gap-2 h-full">
          <Image
            src={privateTraining}
            className="size-14 sm:size-16"
            alt="Weight lift image"
          />
          <h3
            className={classNames(
              montserrat.className,
              "font-bold text-base xs:text-xl",
            )}
          >
            Private Training
          </h3>
          <hr className="w-full border-2" />
          <p className="text-center">
            Personalized sessions tailored to your unique fitness goals.
          </p>
        </div>
      </div>

      <div className="[filter:url('#info')]">
        <div className="bg-black-lighter clip-path-bottom-info-sm md:clip-path-center-info lg:clip-path-right-info md:rotate-3 grid items-center px-10 sm:px-16 md:px-5 lg:px-10">
          <div className="flex flex-col items-center py-5 lg:py-0 lg:pt-14 lg:pb-10 md:-rotate-3 gap-2">
            <Image
              src={buildMuscle}
              className="size-14 sm:size-16"
              alt="Weight lift image"
            />
            <h3
              className={classNames(
                montserrat.className,
                "font-bold text-base xs:text-xl",
              )}
            >
              Build Muscle
            </h3>
            <hr className="w-full border-2" />
            <p className="text-center">
              Specialized regimen for sculpting physique and gaining muscle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
