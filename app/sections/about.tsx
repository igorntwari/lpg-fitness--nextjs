"use client";

import Button from "@/components/button";
import classNames from "classnames";
import { montserrat } from "../assets";

export default function About() {
  return (
    <section className="py-5 md:py-20" id="about">
      <div className="rounded-3xl p-5 sm:p-10 bg-about-image bg-blend-multiply bg-cover bg-center space-y-10">
        <h1
          className={classNames(
            montserrat.className,
            "text-3xl lg:text-5xl font-bold",
          )}
        >
          About us
        </h1>
        <div className="lg:w-1/2 grid gap-5 sm:gap-10">
          <p>
            At LPG Fitness, we believe in the power of fitness to transform
            lives. Our mission is to provide effective, accessible, and diverse
            fitness programs to help individuals achieve their personal health
            goals. With our expert trainers and state-of-the-art facilities,
            we&apos;re committed to creating a supportive and motivating
            environment for all fitness levels. Join us and experience the LPG
            Fitness difference!
          </p>
          <Button
            text="Get started"
            link="/#contact"
            className="justify-self-start"
          />
        </div>
      </div>
    </section>
  );
}
