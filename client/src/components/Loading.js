import { CgSpinner } from "react-icons/cg";

const Loading = () => (
  <div className="rounded-md text-center w-58 sm:w-fit mx-auto flex px-1 sm:pl-3 sm:pr-5 pt-16 sm:pt-20 items-center justify-center text-white">
    <CgSpinner className="animate-spin text-3xl sm:text-4xl mr-3" />
    <div className="text-sm sm:text-xl font-semibold">
      Generating your results...
    </div>
  </div>
);

export default Loading;
