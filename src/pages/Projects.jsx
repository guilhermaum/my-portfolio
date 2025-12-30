import Card from "../components/Card";
import RevealOnScroll from "../components/RevealOnScroll";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen w-full mx-auto px-0 bg-bluecelest flex items-center justify-center"
    >
      <div className="min-h-screen flex items-center justify-center p-6">
        <RevealOnScroll>
          <div className="w-full max-w-full">
            <h1 className="text-white font-bold text-5xl sm:text-5xl text-center">
              Projects
            </h1>
            <div className="mt-20 grid grid-cols-1 xl:grid-cols-2 gap-8 justify-items-center">
              <Card
                image="src/assets/ibie-logo.png"
                title="Projeto Ibiê"
                description="Aplicativo que mapeia atividades recreativas da serra da Ibiapaba, produzido na disciplina de Engenharia de Software"
                buttonText="Repositório"
                onClick={() => alert("ok")}
              />
              <Card
                image="src/assets/ibie-logo.png"
                title="Projeto Ibiê"
                description="Aplicativo que mapeia atividades recreativas da serra da Ibiapaba, produzido na disciplina de Engenharia de Software"
                buttonText="Repositório"
                onClick={() => alert("ok")}
              />
              <Card
                image="src/assets/ibie-logo.png"
                title="Projeto Ibiê"
                description="Aplicativo que mapeia atividades recreativas da serra da Ibiapaba, produzido na disciplina de Engenharia de Software"
                buttonText="Repositório"
                onClick={() => alert("ok")}
              />
              <Card
                image="src/assets/ibie-logo.png"
                title="Projeto Ibiê"
                description="Aplicativo que mapeia atividades recreativas da serra da Ibiapaba, produzido na disciplina de Engenharia de Software"
                buttonText="Repositório"
                onClick={() => alert("ok")}
              />
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
