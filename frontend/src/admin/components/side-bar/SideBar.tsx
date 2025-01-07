"use client";

import { Sidebar } from "flowbite-react";
import { MdDashboard } from "react-icons/md";
import { IoAddCircle } from "react-icons/io5";
import { PiFoldersFill } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks/redux-hooks";

export function SideBar() {
  const { sideBarCollapse } = useAppSelector((state) => state.dashboard);
  const { pathname } = useLocation();

  //activate active path
  const isActivePath = (route: string) => {
    return pathname === route;
  };
  return (
    <aside
      className={` ${
        sideBarCollapse ? "w-[4.6vw]" : "w-[17.7vw] bg-red-800"
      } bg-white transition-all shadow-xl `}
    >
      <Sidebar
        collapsed={sideBarCollapse}
        collapseBehavior="collapse"
        translate="yes"
        className="  h-screen bg-white fixed"
        aria-label="Sidebar with multi-level dropdown"
      >
        <Sidebar.Items translate="yes" className=" pt-10">
          {/* <Sidebar.Logo href="/dashboard" img={logo} className="w-32" /> */}
          <Sidebar.ItemGroup>
            {!sideBarCollapse && (
              <small className="text-[10px] font-base text-[#aaa]">MAIN</small>
            )}
            <Link to={"#"}>
              <Sidebar.Item
                active={isActivePath("/dashboard")}
                href={"#"}
                icon={MdDashboard}
              >
                Dashboard
              </Sidebar.Item>
            </Link>

            {/* main properties */}
            <Sidebar.ItemGroup>
              {!sideBarCollapse && (
                <h4 className="text-[10px] font-base text-[#aaa] ">
                  MANAGE PROPERTIES
                </h4>
              )}
              <Link to={"add-product"}>
                <Sidebar.Item
                  active={isActivePath("/dashboard/add-product")}
                  icon={IoAddCircle}
                >
                  New Product
                </Sidebar.Item>
              </Link>
              <Link to={"all-products"}>
                <Sidebar.Item
                  active={isActivePath("/dashboard/all-products")}
                  icon={PiFoldersFill}
                >
                  All Products
                </Sidebar.Item>
              </Link>
              <Link to={"add-milk"}>
                <Sidebar.Item
                  active={isActivePath("/dashboard/add-milk")}
                  icon={IoAddCircle}
                >
                  New Milk Record
                </Sidebar.Item>
              </Link>
            </Sidebar.ItemGroup>

            {/* inquiries */}
            {/* <Sidebar.ItemGroup>
              {!sideBarCollapse && (
                <h4 className="text-[10px] font-base text-[#aaa] uppercase ">
                  Inquiries
                </h4>
              )}
              <Link to={"#"}>
                <Sidebar.Item icon={IoIosChatbubbles}>
                  Lets Manage Inquiry
                </Sidebar.Item>
              </Link>

              <Link to={"#"}>
                <Sidebar.Item icon={IoMdChatbubbles}>
                  Property Inquiry
                </Sidebar.Item>
              </Link>
            </Sidebar.ItemGroup> */}
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </aside>
  );
}
