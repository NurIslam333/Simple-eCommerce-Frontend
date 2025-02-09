// H1
export const H1 = ({ children, className }) => {
  return (
    <>
      <h1 className={`text-3xl laptop:text-5xl font-bold ${className}`}>
        {children}
      </h1>
    </>
  );
};

// H2
export const H2 = ({ children, className }) => {
  return (
    <>
      <h2 className={`text-2xl tab:text-3xl font-bold ${className}`}>
        {children}
      </h2>
    </>
  );
};

// H3
export const H3 = ({ children, className }) => {
  return (
    <>
      <h3 className={`text-lg tab:text-xl font-bold ${className}`}>
        {children}
      </h3>
    </>
  );
};

// H4
export const H4 = ({ children, className }) => {
  return (
    <>
      <h4 className={`font-semibold ${className}`}>{children}</h4>
    </>
  );
};

// H5
export const H5 = ({ children, className }) => {
  return (
    <>
      <h5 className={`font-medium ${className}`}>{children}</h5>
    </>
  );
};

// H6
export const H6 = ({ children, className }) => {
  return (
    <>
      <h6 className={`font-medium ${className}`}>{children}</h6>
    </>
  );
};

// P
export const P = ({ children, className = "text-body-text" }) => {
  return (
    <>
      <p className={`text-sm tab:text-base font-normal  ${className}`}>
        {children}
      </p>
    </>
  );
};
