import Card from "../components/Card";
import RevealOnScroll from "../components/RevealOnScroll";
import ibie from "../assets/ibie-logo.png"

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen scroll-mt-28 sm:scroll-mt-12 w-full mx-auto px-4 sm:px-8 bg-bluecelest"
    >
        <RevealOnScroll>
          <div className="w-full max-w-6xl mx-auto">
            <h1 className="text-white font-bold text-3xl sm:text-4xl lg:text-5xl text-center">
              Projects
            </h1>
            <div className="mt-20 grid grid-cols-1 xl:grid-cols-2 gap-8 justify-items-center">
              <Card
                image={ibie}
                title="Projeto Ibiê"
                description="Aplicativo que mapeia atividades recreativas da serra da Ibiapaba, produzido na disciplina de Engenharia de Software"
                buttonText="Repositório"
                onClick={() => alert("ok")}
              />
              <Card
                image={ibie}
                title="Projeto Ibiê"
                description="Aplicativo que mapeia atividades recreativas da serra da Ibiapaba, produzido na disciplina de Engenharia de Software"
                buttonText="Repositório"
                onClick={() => alert("ok")}
              />
              <Card
                image={ibie}
                title="Projeto Ibiê"
                description="Aplicativo que mapeia atividades recreativas da serra da Ibiapaba, produzido na disciplina de Engenharia de Software"
                buttonText="Repositório"
                onClick={() => alert("ok")}
              />
              <Card
                image={ibie}
                title="Projeto Ibiê"
                description="Aplicativo que mapeia atividades recreativas da serra da Ibiapaba, produzido na disciplina de Engenharia de Software"
                buttonText="Repositório"
                onClick={() => alert("ok")}
              />
            </div>
          </div>
        </RevealOnScroll>
    </section>
  );
}
