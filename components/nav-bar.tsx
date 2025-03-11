"use client";

import { montserrat } from "@/app/assets";
import classNames from "classnames";
import Link from "next/link";
import { HamburgerCollapse } from "react-animated-burgers";
import { useEffect, useState } from "react";
import Button from "./button";
import { StyleSheetManager } from "styled-components";
import isValidProp from "@emotion/is-prop-valid";

export default function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMount, setIsMount] = useState(false);
  const [isNavFixed, setIsNavFixed] = useState(false);
  useEffect(() => {
    setIsMount(true);

    const handleScroll = () => {
      if (window.scrollY > 35) {
        setIsNavFixed(true);
      } else {
        setIsNavFixed(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("load", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("load", handleScroll);
    };
  }, []);

  const handleNavOpenChange = () => {
    if (isNavOpen) {
      setIsMenuOpen(false);
      setTimeout(() => setIsNavOpen(false), 500);
    } else {
      setIsNavOpen(true);
      setIsMenuOpen(true);
    }
  };

  return (
    <>
      <nav
        className={classNames("hidden lg:flex items-center justify-between", {
          "fixed top-0 py-2 inset-x-0 z-50 width-responsive bg-black":
            isNavFixed,
          relative: !isNavFixed,
        })}
      >
        <Link
          href="/#hero"
          className={classNames(montserrat.className, "font-bold text-xl")}
        >
          <span className="text-custom-orange">LPG</span>
          <span>Fitness</span>
        </Link>

        <div className="flex gap-10 *:px-5 *:rounded-full *:py-1 *:transition">
          <Link href="/#about" className="hover:bg-custom-orange">
            About
          </Link>
          <Link href="/#trainers" className="hover:bg-custom-orange">
            Trainers
          </Link>
          <Link href="/#pricing" className="hover:bg-custom-orange">
            Pricing
          </Link>
          <Link href="/#stories" className="hover:bg-custom-orange">
            Sucess Story
          </Link>
        </div>

        <Button link="/#contact" dark text="Join Us Now" />
      </nav>
      <div
        className={classNames("grid lg:hidden justify-end", {
          "fixed w-full inset-x-0 z-50 width-responsive": isNavFixed,
          relative: !isNavFixed,
        })}
      >
        {isMount && (
          <StyleSheetManager shouldForwardProp={isValidProp}>
            <HamburgerCollapse
              toggleButton={handleNavOpenChange}
              isActive={isMenuOpen}
              buttonStyle={{
                padding: 0,
                zIndex: 11,
                position: "relative",
                top: 0,
                transitionDuration: "100ms",
                transitionDelay: "2s",
                marginTop: "4px",
              }}
              buttonWidth={30}
              barColor={
                isNavOpen || isNavFixed ? "rgb(255 255 255)" : "rgb(30 30 30)"
              }
            />
          </StyleSheetManager>
        )}

        <nav
          className={classNames(
            "text-white fixed inset-0 z-10 px-5 bg-black/90 flex flex-col items-center pt-10 gap-7 overflow-scroll xs:gap-10",
            {
              ["block"]: isNavOpen,
              ["hidden"]: !isNavOpen,
            },
          )}
        >
          <Link
            onClick={handleNavOpenChange}
            href="/#hero"
            className={classNames(montserrat.className, "font-bold text-xl")}
          >
            <span className="text-custom-orange">LPG</span>
            <span>Fitness</span>
          </Link>
          <div
            className={
              "grid *:text-center w-full *:py-1 sm:*:py-2 *:rounded-full sm:w-1/2 gap-3 md:gap-5"
            }
          >
            <Link
              onClick={handleNavOpenChange}
              href="/#about"
              className="hover:bg-custom-orange"
            >
              About
            </Link>
            <Link
              onClick={handleNavOpenChange}
              href="/#trainers"
              className="hover:bg-custom-orange"
            >
              Trainers
            </Link>
            <Link
              onClick={handleNavOpenChange}
              href="/#pricing"
              className="hover:bg-custom-orange"
            >
              Pricing
            </Link>
            <Link
              onClick={handleNavOpenChange}
              href="/#stories"
              className="hover:bg-custom-orange"
            >
              Sucess Story
            </Link>
            <Link
              onClick={handleNavOpenChange}
              href="/#contact"
              className="hover:bg-custom-orange"
            >
              Contact us
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
