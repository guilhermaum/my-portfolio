import TiltedCard from "../components/TiltedCard";
import Particles from "../components/Particles";

export default function Home() {
  return (
    <section
      id="home"
      className="
        relative min-h-screen w-full mx-auto
        px-4 sm:px-8
        py-16 sm:py-24
        bg-bluecelest
        flex items-center justify-center
      "
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

      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center lg:items-start justify-center gap-0 sm:gap-12">
        <div className="max-w-xl flex flex-col text-center lg:text-left order-1 lg:order-0 gap-6">
          <h1 className="text-4xl sm:text-5xl lg:text-[64px] text-white font-bold leading-tight">
            Hi, welcome to <br />
            my portfolio! <br />
            I'm <span className="text-yellow-500">Luís Guilherme</span>
          </h1>

          <div className="hidden lg:flex gap-8">
            <SocialIcons />
          </div>
        </div>

        <div className="flex flex-col items-center order-2 lg:order-0">
          <div className="scale-75 sm:scale-90 lg:scale-100 transition-transform">
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

          <div className="flex lg:hidden mt-0 sm:mt-6 gap-6">
            <SocialIcons />
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialIcons() {
  return (
    <>
      <a
        href="https://github.com/guilhermaum"
        target="_blank"
        className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-full"
      >
        <img src="src/assets/github-logo.png" alt="GitHub" />
      </a>

      <a
        href="https://www.linkedin.com/in/lu%C3%ADs-guilherme-ferreira-da-costa-45654827b/"
        target="_blank"
        className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-full"
      >
        <img src="src/assets/linkedin-logo.png" alt="Linkedin" />
      </a>

      <a
        href="https://www.instagram.com/guilhermaum_sz/"
        target="_blank"
        className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-full"
      >
        <img src="src/assets/instagram-logo.png" alt="Instagram" />
      </a>
    </>
  );
}
