import { useEffect, useState, useRef } from "react";
import GooeyNav from "./Gooeynav";

const items = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About me", href: "#about", id: "about" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isClickNavigating = useRef(false);

  useEffect(() => {
    const onHashChange = () => {
      isClickNavigating.current = true;

      setTimeout(() => {
        isClickNavigating.current = false;
      }, 700);
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickNavigating.current) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = items.findIndex(
              (item) => item.id === entry.target.id
            );
            if (index !== -1) setActiveIndex(index);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div
        className="
          flex items-center gap-24
          px-12 py-2 rounded-3xl text-white text-lg
          bg-[#0f171c]/50 backdrop-blur-sm shadow-md
        "
      >
        <GooeyNav
          items={items}
          initialActiveIndex={activeIndex}
          onChange={setActiveIndex}
          activeIndex={activeIndex}
          particleCount={12}
          particleDistances={[70, 8]}
          particleR={80}
          animationTime={500}
          timeVariance={250}
          colors={[1, 2, 3, 1, 2, 3]}
        />
      </div>
    </nav>
  );
}

{
  /* <ul className=" flex items-center gap-24 px-36 py-4 bg-blue-950/70 blackdrop-blur-md rounded-[14px] text-white text-lg shadow-md">
  <li>
    <a href="#home" className="hover:text-yellow-400 transition">
      Home
    </a>
  </li>
  <li>
    <a href="#about"> About me </a>
  </li>
  <li>
    <a href="#projects"> Projects </a>
  </li>
  <li>
    <a href="#contact"> Contact </a>
  </li>
</ul>; */
}
