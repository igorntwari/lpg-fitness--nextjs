import { montserrat } from "@/app/assets";
import { PricingItem } from "@/app/sections/pricing";
import classNames from "classnames";
import { BiCheckCircle } from "react-icons/bi";

let unique = 0;

export default function PricingListItem({
  title,
  description,
  noTrainer,
  trainer,
  withTrainer,
  dark,
}: PricingItem & { withTrainer: boolean }) {
  const displayChecks = (withTrainer ? trainer : noTrainer).checks.map(
    (check) => (
      <div key={++unique} className="flex items-center gap-1">
        <span>
          <BiCheckCircle className="size-5 md:size-6" />
        </span>
        <span className="text-sm xs:text-base">{check}</span>
      </div>
    ),
  );
  return (
    <div
      className={classNames("flex flex-col rounded-xl p-5 gap-5", {
        "bg-black-lighter": !dark,
        "bg-black/50": dark,
      })}
    >
      <h3
        className={classNames(
          montserrat.className,
          "self-center py-2 w-1/2 text-center rounded-full bg-black font-medium",
        )}
      >
        {title}
      </h3>
      <p>{description}</p>
      <h2 className={classNames(montserrat.className, "font-semibold text-xl")}>
        ${withTrainer ? trainer.amount : noTrainer.amount}
      </h2>
      <hr className="border-2" />
      <div className="space-y-2">{displayChecks}</div>
    </div>
  );
}
