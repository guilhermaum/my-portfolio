import TiltedCard from "../components/TiltedCard";
import Particles from "../components/Particles";

export default function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full mx-auto px-0 bg-bluecelest flex items-center justify-center"
    >
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div className="relative z-10 w-full flex items-start justify-center gap-12">
        <div className="max-w-xl flex flex-col h-87.5 justify-between">
          <h1 className="text-[64px] text-white text-left font-bold leading-tight">
            Hi, welcome to <br /> my portfolio! <br /> I'm{" "}
            <span className="text-yellow-500">Luís Guilherme</span>
          </h1>

          <div className="flex mt-auto gap-10">
            <a
              href="https://github.com/guilhermaum"
              target="_blank"
              className="w-12 h-12 flex items-center justify-center rounded-full"
            >
              <img src="src/assets/github-logo.png" alt="GitHub" />
            </a>
            <a
              href="https://www.linkedin.com/in/lu%C3%ADs-guilherme-ferreira-da-costa-45654827b/"
              target="_blank"
              className="w-12 h-12 flex items-center justify-center rounded-full"
            >
              <img src="src/assets/linkedin-logo.png" alt="Linkedin"></img>
            </a>
            <a
              href="https://www.instagram.com/guilhermaum_sz/"
              target="_blank"
              className="w-12 h-12 flex items-center justify-center rounded-full"
            >
              <img src="src/assets/instagram-logo.png" alt="Instagram"></img>
            </a>
          </div>
        </div>
        <TiltedCard
          imageSrc="src/assets/perf.jpeg"
          altText="profile picture"
          captionText="Luís Guilherme"
          containerHeight="350px"
          containerWidth="350px"
          imageHeight="335px"
          imageWidth="350px"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={false}
          displayOverlayContent={true}
        />
      </div>
    </section>
  );
}
