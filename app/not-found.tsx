"use client";

import classNames from "classnames";
import { useRouter } from "next/navigation";
import { montserrat } from "./assets";

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="h-screen bg-gradient-to-r from-black-light to-50% from-50% to-custom-orange">
      <section className="width-responsive h-full grid place-content-center gap-5">
        <p
          className={classNames(
            montserrat.className,
            "font-bold bg-gradient-to-r to-black-light to-50% pl-1 from-50% from-custom-orange text-transparent bg-clip-text text-2xl xs:text-3xl",
          )}
        >
          Page not found
        </p>
        <button
          className="rounded-full bg-black-light py-1 hover:bg-custom-orange transition"
          onClick={() => router.back()}
        >
          Go Back
        </button>
      </section>
    </main>
  );
}
