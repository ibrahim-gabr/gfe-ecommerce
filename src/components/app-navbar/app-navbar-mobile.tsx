import { RiCloseLine } from "@remixicon/react";
import { AppSideMenu } from "../app-side-menu/app-side-menu";
import { NavBrand } from "../nav-brand/nav-brand";
import "./app-navbar.css";

export const AppNavbarMobile = ({
  children,
  sideMenuPortalTarget,
  handleMenuOpen,
  brandText,
  logoImage,
  icon = <RiCloseLine size={20} />,
}: {
  children?: React.ReactNode;
  sideMenuPortalTarget: string;
  brandText?: string;
  logoImage?: string;
  icon?: React.ReactNode;
  handleMenuOpen: (isOpen: boolean) => void;
}) => {
  return (
    <AppSideMenu target={sideMenuPortalTarget}>
      <div className="app-navbar">
        <nav className="nav-wrapper">
          <NavBrand brandText={brandText} brandLogo={logoImage} />
          <button id="mobile-menu-button" onClick={() => handleMenuOpen(false)}>
            {icon}
          </button>
        </nav>
      </div>
      <div className="flex flex-col gap-y-6 mt-20 pl-6">{children}</div>
    </AppSideMenu>
  );
};
