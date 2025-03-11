import BackgroundShapes from "@/components/background-shapes";
import Button from "@/components/button";
import NavBar from "@/components/nav-bar";

export default function Hero() {
  return (
    <section className="min-h-dvh flex flex-col gap-5" id="hero">
      <BackgroundShapes displayImage />
      <NavBar />
      <div className="relative flex-1 md:w-2/3 lg:w-1/2 flex flex-col justify-center gap-5">
        <h1 className="text-3xl md:text-5xl lg:text-7xl sm:text-balance text-pretty font-bold">
          Build Your <span className="text-yellow-400">Body Shapes</span> With{" "}
          <span className="text-yellow-400">Fitness</span>
        </h1>
        <p className="text-sm sm:text-base">
          Welcome to LPG Fitness! Your journey to health and fitness starts
          here. With our modern facilities and expert trainers, we cater to all
          fitness levels. Join us and start your transformation today!
        </p>
        <Button link="/#contact" text="Get started" className="self-start" />
      </div>
    </section>
  );
}
