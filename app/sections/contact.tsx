import classNames from "classnames";
import { montserrat } from "../assets";
import Link from "next/link";
import { BiAt, BiPhone } from "react-icons/bi";

export default function Contact() {
  return (
    <section className="py-5 md:py-16" id="contact">
      <div className="text-xl space-y-5">
        <h1
          className={classNames(
            montserrat.className,
            "text-xl sm:text-2xl md:text-3xl py-5 bg-black text-center",
          )}
        >
          You are welcome <span className="text-custom-orange">to join us</span>
        </h1>
        <div className="rounded-xl text-sm xs:text-base gap-5 p-5 sm:p-10 bg-black-lighter flex flex-col items-start">
          <h3>Contact</h3>
          <hr className="border-2 w-full" />
          <Link
            href=""
            className="flex items-center gap-2 hover:text-custom-orange transition"
          >
            <span>
              <BiAt className="size-5 xs:size-7" />
            </span>
            <p>lpgfitness@info.com</p>
          </Link>
          <Link
            href=""
            className="flex items-center gap-2 hover:text-custom-orange transition"
          >
            <span>
              <BiPhone className="size-5 xs:size-7" />
            </span>
            <p>+6289988772233</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
