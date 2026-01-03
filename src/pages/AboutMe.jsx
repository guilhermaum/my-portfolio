import Orb from "../components/Orb";
import RevealOnScroll from "../components/RevealOnScroll";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full mx-auto px-4 sm:px-8 bg-bluecelest flex items-center justify-center"
    >
      <div className="absolute inset-0 hidden sm:flex lg:flex items-center justify-center">
        <div className="w-[85vmin] h-[85vmin]">
          <Orb
            hoverIntensity={0.5}
            rotateOnHover={true}
            hue={0}
            forceHoverState={false}
          />
        </div>
      </div>
      <RevealOnScroll>
        <div className="relative z-10 text-white font-bold text-3xl sm:text-4xl lg:text-5xl w-full sm:w-121.25 text-center">
          About me
          <div className="text-base sm:text-lg lg:text-2xl mt-10 sm:mt-14 lg:mt-20 text-center px-2 sm:px-0">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
