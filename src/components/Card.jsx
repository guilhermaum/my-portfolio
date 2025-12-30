export default function Card({
  image,
  title,
  description,
  buttonText,
  onClick,
}) {
  return (
    <div className="flex flex-col lg:flex-row text-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-xl">
      
      <div className="w-full lg:w-1/3">
        <img
          src={image}
          alt={title}
          className="w-full lg:h-full max-h-55 object-cover"
        />
      </div>

      <div className="w-full lg:w-2/3 px-4 py-4 flex flex-col">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-left">
          {title}
        </h2>

        <p className="text-left text-zinc-300 text-sm grow">
          {description}
        </p>

        <button
          onClick={onClick}
          className="mt-4 self-start px-5 py-2 bg-cyan-500 hover:bg-cyan-700 hover:cursor-pointer rounded-lg transition-colors text-sm font-medium"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
