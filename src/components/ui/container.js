export const CustomContainer = ({ children }) => {
  return (
    <>
      <div className="w-[90%] desktop:w-[1400px] m-auto">
        {children}
      </div>
    </>
  );
};
