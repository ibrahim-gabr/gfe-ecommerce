import React, { useState } from "react";
import { AppNavbar } from "./components/app-navbar/app-navbar";
import { AppNavbarMobile } from "./components/app-navbar/app-navbar-mobile";
import logo from "./logo.png";
import { Link } from "react-router-dom";

const LINKS = [
  {
    title: "Show All",
    href: "#",
  },
  {
    title: "Latest Arrivals",
    href: "#",
  },
];

const components = {
  AppNavbar,
  AppNavbarMobile,
};

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const Component = isOpen
    ? components["AppNavbarMobile"]
    : components["AppNavbar"];

  return (
    <>
      <Component
        sideMenuPortalTarget="side-menu"
        logoImage={logo}
        handleMenuOpen={setIsOpen}
        brandText="StyleNest"
      >
        {navLinks()}
      </Component>

      <main></main>
    </>
  );
}

export default App;

const navLinks = () => {
  return (
    <>
      {LINKS.map((link) => (
        <Link
          className={"text-secondary text-base font-semibold"}
          key={link.title}
          to={link.href}
        >
          {link.title}
        </Link>
      ))}
    </>
  );
};
