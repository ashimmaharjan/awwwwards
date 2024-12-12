import { FaArrowRight } from "react-icons/fa";

const ComingSoonButton = () => {
  return (
    <button className="flex justify-center items-center border-2 px-3 py-1.5 gap-2 mt-auto w-[170px] rounded-3xl text-gray-400 uppercase font-general border-gray-400t text-sm">
      <FaArrowRight />
      Coming Soon
    </button>
  );
};

export default ComingSoonButton;
