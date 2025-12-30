import Orb from "../components/Orb";
import RevealOnScroll from "../components/RevealOnScroll";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full mx-auto px-0 bg-bluecelest flex items-center justify-center"
    >
      <div className="absolute inset-0 flex items-center justify-center">
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
        <div className="relative z-10 text-white font-bold text-5xl w-121.25 text-center">
          About me
          <div className="text-2xl mt-19.5 text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
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
