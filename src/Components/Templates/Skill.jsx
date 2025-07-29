
export default function Skill({ data }) {
  return (
    <div className="text-[#1e293b] flex justify-center items-center flex-wrap">
        {data.map((item, index) => (
          <div
            key={index}
            className="h-[20vmax] w-[18vmax] bg-[#cbd5e1] p-4 flex flex-col gap-2 mr-6 rounded"
          >
            <div
              className="w-10 h-10 bg-[#FF2DAA] text-white text-3xl flex items-center justify-center
          rounded-full"
            >
              {item.icon}
            </div>
            <div className="text-xl font-semibold">{item.title}</div>
            <p className="text-xs text-[#64748b]">{item.para}</p>
          </div>
        ))}
    </div>
  );
}
