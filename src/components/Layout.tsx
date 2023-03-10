import React from "react";
import NavBar from "@/includes/NavBar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <div>
        <NavBar />
        {children}
      </div>
    </>
  );
};

export default Layout;
