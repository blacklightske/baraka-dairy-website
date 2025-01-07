import React from "react";
import SideView from "../components/SideView";
import { NavbarHeader } from "../components/Navbar";
import { FooterCBottom } from "../components/Footer";

interface DefaultLayoutPropTypes {
  children: React.ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutPropTypes) => {
  return (
    <>
      <NavbarHeader />

      <div className="w-screen md:grid grid-cols-10 bg-gray-100 ">
        <div className="hidden md:block">
          <SideView />
        </div>
        <div className="col-span-8 min-h-[100vh]">{children}</div>

        <div className="hidden md:block">
          <SideView />
        </div>
      </div>
      <FooterCBottom />
    </>
  );
};

export default DefaultLayout;
