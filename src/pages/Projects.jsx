import Card from "../components/Card";
import RevealOnScroll from "../components/RevealOnScroll";
import ibie from "../assets/ibie-logo.png"
import flutterfly from "../assets/flutter-fly-logo.jpeg"
import agrosense from "../assets/agrosense-logo.png"
import design from "../assets/icon-design.png"

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen scroll-mt-28 sm:scroll-mt-35 w-full mx-auto px-4 sm:px-8 bg-bluecelest"
    >
        <RevealOnScroll>
          <div className="w-full max-w-6xl mx-auto">
            <h1 className="text-white font-bold text-3xl sm:text-4xl lg:text-5xl text-center">
              Projects
            </h1>
            <div className="mt-20 grid grid-cols-1 xl:grid-cols-2 gap-8 justify-items-center">
              <Card
                image={ibie}
                title="Ibiê"
                description="Application that maps recreational activities in the Serra da Ibiapaba, developed as part of the Software Engineering course."
                buttonText="Repository"
                technologies={["Flutter", "Dart"]}
                onClick={() => window.open("https://github.com/adr0ude/Ibie", "_blank")}
              />
              <Card
                image={flutterfly}
                title="FlutterFly"
                description="Quiz developed and presented alongside the delivery of an introductory Flutter mini-course. I worked as both the instructor and the developer."
                buttonText="Repository"
                technologies={["Flutter", "Dart"]}
                onClick={() => window.open("https://github.com/lemaria0/FlutterFly", "_blank")}
              />
              <Card
                image={agrosense}
                title="Agrosense"
                description="Backend application that sends simulated agricultural data to a user-facing system, developed in the Distributed Systems course."
                buttonText="Repository"
                technologies={["Python", "Java", "EMQX Cloud Service"]}
                onClick={() => window.open("https://github.com/guilhermaum/projeto-mqtt/tree/main", "_blank")}
              />
              <Card
                image={design}
                title="Design & Communication"
                description="Projects related to the creation of images and videos that promote a specific work, in which I am involved as an actor or editor."
                buttonText="View Projects"
                technologies={["Capcut", "Canva"]}
                onClick={() => window.open("https://www.behance.net/lusguilher", "_blank")}
              />
            </div>
          </div>
        </RevealOnScroll>
    </section>
  );
}
