import BackgroundShapes from "@/components/background-shapes";
import Button from "@/components/button";
import NavBar from "@/components/nav-bar";

export default function Hero() {
  return (
    <section className="min-h-dvh py-10 width-responsive pt-10 flex flex-col gap-5">
      <BackgroundShapes displayImage />
      <NavBar />
      <div className="relative flex-1 md:w-2/3 lg:w-1/2 flex flex-col justify-center gap-5">
        <h1 className="text-3xl md:text-5xl lg:text-7xl sm:text-balance text-pretty font-bold">
          Build Your <span className="text-yellow-400">Body Shapes</span> With{" "}
          <span className="text-yellow-400">Fitness</span>
        </h1>
        <p className="text-sm sm:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
          quae ipsum. Praesentium, possimus ut, dolor enim nam beatae laudantium
          nostrum totam doloribus quasi eligendi accusantium minus consequuntur
          consequatur error autem!
        </p>
        <Button link="/" text="Get started" className="self-start" />
      </div>
    </section>
  );
}