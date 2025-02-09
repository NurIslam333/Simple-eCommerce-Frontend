import { H6 } from "./tags";

export const CustomHeader = ({ title1, title2, className = "text-left" }) => {
  return (
    <div className={`mb-6 ${className}`}>
      <H6 className="text-3xl text-black">
        <span className="text-cyan-color">{title1}</span> {title2}
      </H6>
    </div>
  );
};
