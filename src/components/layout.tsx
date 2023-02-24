import { ReactNode, useEffect } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

type LayoutProps = {
  children?: ReactNode;
};

function Layout({ children }: LayoutProps) {
  const hideToggle = () => {
    document.querySelector<HTMLElement>("#navbarNav")?.classList.remove("show");
    console.log("Navbar classList Remove.");
  };
  return (
    <>
      <Navbar />
      <main onClick={hideToggle}>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
