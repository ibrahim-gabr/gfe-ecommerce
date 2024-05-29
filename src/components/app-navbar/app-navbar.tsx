import {RiMenuLine, RiShoppingBag4Line, RiShoppingBagLine, RiShoppingBasketLine} from "@remixicon/react";
import { NavBrand } from "../nav-brand/nav-brand";
import "./app-navbar.css";

export const AppNavbar = ({
  children,

  brandText,
  handleMenuOpen,
  logoImage,
  icon = <RiMenuLine size={20} />,
}: {
  children?: React.ReactNode;

  brandText?: string;
  icon?: React.ReactNode;
  logoImage?: string;
  handleMenuOpen: (isOpen: boolean) => void;
}) => {
  return (
    <div className="app-navbar">
      <nav className="nav-wrapper">
        <NavBrand brandText={brandText} brandLogo={logoImage} />
        <div className="nav-links">{children}</div>

        <div className="flex gap-x-4 items-baseline justify-center">
          <button id="nav-cart">
            <RiShoppingBag4Line size={24} />
          </button>
          <button id="mobile-menu-button" className={"lg:hidden"} onClick={() => handleMenuOpen(true)}>
            {icon}
          </button>
        </div>

      </nav>
    </div>
  );
};
