import { PuffLoader } from "react-spinners";

export const LoadingPage = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-7">
        <PuffLoader color="#fcbc4f" size={30} margin={0} />
      </div>
    </>
  );
};
