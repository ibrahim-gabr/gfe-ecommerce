import { useEffect, useRef, useState } from "react";
import "./app-side-menu.css";
import { createPortal } from "react-dom";

export const AppSideMenu = ({
  children,
  target,
}: {
  children: React.ReactNode;
  target: string;
}) => {
  const [elRef, setElRef] = useState<HTMLDivElement | null>(null);
  if (!elRef) {
    const el = document.createElement("div") as HTMLDivElement;
    el.setAttribute("id", "side-menu-overlay");
    setElRef(el);
  }

  useEffect(() => {
    const modalRoot = document.getElementById(target);
    console.log(modalRoot, elRef);
    
    if (modalRoot && elRef) {
      // Add a null check for elRef
      modalRoot.appendChild(elRef);
    }
    return () => {
      if (modalRoot && elRef) {
        modalRoot.removeChild(elRef);
      }
    };
  }, []);
  console.log(elRef);

  if (!elRef) return null;
  return createPortal(<div id="slideout-menu">{children}</div>, elRef);
};
