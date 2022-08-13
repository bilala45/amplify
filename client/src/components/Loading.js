import { CgSpinner } from "react-icons/cg";

const Loading = () => (
  <>
    <CgSpinner className="animate-spin text-3xl sm:text-4xl mr-3" />
    <div className="text-sm sm:text-xl font-semibold">
      Generating your results...
    </div>
  </>
);

export default Loading;
