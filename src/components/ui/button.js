export const CustomButton = ({ children, className, onClick, ...props }) => {
  return (
    <>
      <button
        className={` ${className}`}
        onClick={onClick ? onClick : undefined}
        {...props}
      >
        {children}
      </button>
    </>
  );
};
