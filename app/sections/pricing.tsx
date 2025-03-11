"use client";

import PricingListItem from "@/components/pricing-list-item";
import classNames from "classnames";
import { useState } from "react";
import { montserrat } from "../assets";

export interface PricingItem {
  id: number;
  title: string;
  description: string;
  dark?: boolean;
  trainer: {
    amount: number;
    checks: string[];
  };
  noTrainer: {
    amount: number;
    checks: string[];
  };
}

const pricingArray: PricingItem[] = [
  {
    id: 0,
    title: "Day",
    description: `Enjoy a full day of access to our state-of-the-art fitness facilities`,
    trainer: {
      amount: 20,
      checks: [
        "Personalized workout plan for the day",
        "One-on-one coaching sessions",
        "Nutritional guidance",
        "Access to all gym equipment",
      ],
    },
    noTrainer: {
      amount: 15,
      checks: [
        "Full-day access to all gym equipment",
        "Self-guided workout areas",
        "Locker room and shower facilities",
        "Participation in group classes (if available)",
      ],
    },
  },
  {
    id: 1,
    title: "Week",
    description: `Commit to a week of fitness with full access to our facilities and programs`,
    dark: true,
    trainer: {
      amount: 90,
      checks: [
        "A week of personalized training sessions",
        "Nutritional guidance",
        "Progress tracking and adjustments",
        "Access to all gym equipment",
      ],
    },
    noTrainer: {
      amount: 60,
      checks: [
        "A week of full access to our facilities",
        "Self-guided workout areas",
        "Locker room and shower facilities",
      ],
    },
  },
  {
    id: 2,
    title: "Month",
    description: `Embrace a healthier lifestyle with a month-long membership, offering unlimited access to our facilities.`,
    trainer: {
      amount: 200,
      checks: [
        "A month-long fitness program with personalized coaching",
        "Nutritional guidance and meal planning",
        "Regular progress tracking and adjustments",
        "Access to all gym equipment",
      ],
    },
    noTrainer: {
      amount: 150,
      checks: [
        "A month of unlimited access to our facilities",
        "Access to relaxation areas.",
      ],
    },
  },
];

export default function Pricing() {
  const [withTrainer, setWithTrainer] = useState(false);

  const displayPricing = pricingArray.map((pricing) => (
    <PricingListItem key={pricing.id} {...pricing} withTrainer={withTrainer} />
  ));
  return (
    <section className="py-5 md:py-20" id="pricing">
      <div className="flex flex-col md:items-center gap-3">
        <h1
          className={classNames(
            montserrat.className,
            "font-semibold text-xl md:text-2xl",
          )}
        >
          Membership Pricing
        </h1>
        <p>
          Discover affordable fitness with our competitive and flexible pricing
          options.
        </p>
        <div className="bg-slate-200 mt-3 md:mt-7 relative grid grid-cols-2 gap-5 text-custom-orange font-medium text-sm xs:text-base w-full xs:w-auto *:px-2 sm:*:px-4 py-1 *:z-10 *:transition *:text-center cursor-pointer rounded-full">
          <span
            className={classNames(
              "h-full w-1/2 top-0 left-0 rounded-full ease-in-out bg-custom-orange shadow-inner shadow-black transition-all absolute",
              {
                "translate-x-0": !withTrainer,
                "translate-x-full": withTrainer,
              },
            )}
          ></span>
          <p
            onClick={() => setWithTrainer(false)}
            className={classNames({
              "text-white": !withTrainer,
              "text-custom-orange": withTrainer,
            })}
          >
            Without Trainer
          </p>
          <p
            onClick={() => setWithTrainer(true)}
            className={classNames({
              "text-white": withTrainer,
              "text-custom-orange": !withTrainer,
            })}
          >
            With Trainer
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 w-full mt-5">
          {displayPricing}
        </div>
      </div>
    </section>
  );
}
