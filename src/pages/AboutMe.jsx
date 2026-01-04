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
          <div className="text-base sm:text-lg lg:text-2xl mt-10 sm:mt-14 lg:mt-10 text-center px-2 sm:px-0">
            I am a Brazilian undergraduate student pursuing a Bachelor's degree
            in Computer Science at IFCE. I have skills in full-stack development
            in general and experience with work related to digital
            communication. Although I do not yet have experience in real-world
            projects, I enjoy using languages such as Python, JavaScript, Java,
            and Dart in my applications, as well as tools like React, Tailwind,
            and Flutter.
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
