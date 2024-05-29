import "./nav-brand.css";

export const NavBrand = ({
  children,
  brandText,
  brandLogo,
}: {
  children?: React.ReactNode;
  brandText?: string;
  brandLogo?: string;
}) => {
  return (
    <div className="navbar-brand">
      {brandLogo && <img className={"w-8 h-8"} src={brandLogo} alt="brand logo" />}
      {brandText && <h1>{brandText}</h1>}
      {children}
    </div>
  );
};
