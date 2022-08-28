import React, { ReactElement } from "react";
import { Navbar } from "components";
const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Navbar />
      <main className="mt-14 px-4 container "> {children}</main>
    </>
  );
};

export default Layout;
