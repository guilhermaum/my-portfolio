import RevealOnScroll from "../components/RevealOnScroll";

export default function Contact() {
  function SendMessage() {
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;
    const phone = "5588993409377"

    const text = `Olá! Me chamo ${name}, ${message}`;
    const formatedMessage = encodeURIComponent(text);

    const url = `https://wa.me/${phone}?text=${formatedMessage}`;

    console.log(url);

    window.open(url, "_blank");
  }

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full mx-auto flex flex-col items-center justify-center bg-bluecelest px-4 sm:px-8"
    >
      <RevealOnScroll>
        <h1 className="text-white font-bold text-3xl sm:text-4xl lg:text-5xl text-center">Contact</h1>
        <div className="border-white/50 rounded-2xl border p-4 sm:p-6 lg:p-8 mt-12 sm:mt-16 lg:mt-20">
          <form class="w-full sm:w-xl lg:w-2xl mx-auto">
            <label
              for="name"
              class="block mb-2.5 font-medium text-white text-lg sm:text-xl lg:text-2x max-w-xl"
            >
              Name
            </label>
            <textarea
              id="name"
              rows="1"
              maxLength={100}
              class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full p-3.5 shadow-xs placeholder:text-body outline-0 resize-none"
              placeholder="Write your name here..."
            ></textarea>
            <label
              for="message"
              class="block mb-2.5 font-medium text-white text-lg sm:text-xl lg:text-2xl mt-6"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="8"
              maxLength={650}
              class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full p-3.5 shadow-xs placeholder:text-body outline-0"
              placeholder="Write your message here..."
            ></textarea>
            <button 
            onClick={SendMessage}
            class="relative mt-6 inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-heading rounded-base group bg-linear-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 hover:cursor-pointer">
              <span class=" relative px-4 py-2.5 transition-all ease-in duration-75 bg-bluecelest rounded-base group-hover:bg-transparent group-hover:dark:bg-transparent leading-5">
                Send me a message via WhatsApp
              </span>
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
}

