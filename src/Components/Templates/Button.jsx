import { IoArrowRedoCircleOutline } from "react-icons/io5";

export default function Button({ title, url }) {
  return (
    <div className="flex items-center justify-center w-[70%]">
      <a href={url}>
        <button className="bg-[#9F00FF] text-white px-4 py-2 mt-4 hover:text-[#0A0A0A]
        hover:bg-[#00F0FF] rounded-lg transition duration-300 ease-in-out shadow-lg
        shadow-[#9F00FF] hover:shadow-[#00F0FF]">
          {title}
          <IoArrowRedoCircleOutline className="inline-block ml-2" />
        </button>
      </a>
    </div>
  );
}
