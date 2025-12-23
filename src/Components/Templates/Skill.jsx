export default function Skill({ data }) {
  return (
    <div className="flex flex-wrap justify-center items-stretch gap-6 text-[#1e293b]">
      {data.map((item) => (
        <div
          key={item.title}
          className="
            w-[260px] min-h-[280px]
            bg-[#cbd5e1]
            p-5
            flex flex-col gap-3
            rounded-lg
            shadow-md
            hover:scale-105
            transition-transform duration-300
          "
        >
          <div
            className="
              w-10 h-10
              bg-[#FF2DAA]
              text-white text-2xl
              flex items-center justify-center
              rounded-full
            "
          >
            {item.icon}
          </div>

          <h3 className="text-lg font-semibold">
            {item.title}
          </h3>

          <p className="text-sm text-[#64748b] leading-relaxed line-clamp-4">
            {item.para}
          </p>
        </div>
      ))}
    </div>
  );
}
