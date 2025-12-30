import RevealOnScroll from "../components/RevealOnScroll";

export default function Contact() {
  function SendMessage() {}

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full mx-auto flex flex-col items-center justify-center bg-bluecelest"
    >
      <RevealOnScroll>
        <h1 className="text-white font-bold text-5xl">Contact</h1>
        <div className="border-white/50 rounded-2xl border p-8 mt-20">
          <form class="w-2xl mx-auto">
            <label
              for="name"
              class="block mb-2.5 font-medium text-white text-2xl"
            >
              Name
            </label>
            <textarea
              id="message"
              rows="1"
              class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full p-3.5 shadow-xs placeholder:text-body outline-0"
              placeholder="Write your name here..."
            ></textarea>
            <label
              for="message"
              class="block mb-2.5 font-medium text-white text-2xl mt-6"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="8"
              class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full p-3.5 shadow-xs placeholder:text-body outline-0"
              placeholder="Write your message here..."
            ></textarea>
            <button class="relative mt-6 inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-heading rounded-base group bg-linear-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 hover:cursor-pointer">
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
