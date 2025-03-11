"use client";

import classNames from "classnames";
import { montserrat } from "../assets";
import { trainer3, trainer4, trainer5, trainer6, trainer7 } from "../assets";
import { StaticImageData } from "next/image";
import TrainerListItem from "@/components/trainer-list-item";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cube";
import BackgroundShapes from "@/components/background-shapes";

export interface Trainer {
  id: number;
  name: string;
  image: StaticImageData;
}

const TrainersArray: Trainer[] = [
  { id: 0, name: "Sophia Wilson", image: trainer3 },
  { id: 1, name: "James Smith", image: trainer4 },
  { id: 2, name: "Robert Johnson", image: trainer5 },
  { id: 3, name: "Michael Williams", image: trainer6 },
  { id: 4, name: "Emma Brown", image: trainer7 },
];

const displayTrainersSlides = TrainersArray.map((trainer) => (
  <SwiperSlide key={trainer.id}>
    <TrainerListItem {...trainer} />
  </SwiperSlide>
));

export default function Trainers() {
  return (
    <section className="md:py-20" id="trainers">
      <div className="relative">
        <BackgroundShapes flipShapes />
        <div className="grid md:grid-cols-2 gap-10 relative items-stretch p-5">
          <div className="flex flex-col justify-center gap-5 items-start">
            <h1
              className={classNames(montserrat.className, "font-bold text-xl")}
            >
              Our Trainers
            </h1>
            <p>
              Our diverse team of fitness professionals are dedicated to helping
              you reach your health goals. Experience the personalized approach
              of LPG Fitness with our expert trainers
            </p>
          </div>
          <div className="flex flex-col overflow-hidden">
            <Swiper
              modules={[EffectCube]}
              loop
              effect="cube"
              className="mx-auto w-full h-60 lg:w-1/2"
              grabCursor
            >
              {displayTrainersSlides}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
