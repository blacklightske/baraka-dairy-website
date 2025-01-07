"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";

export function NavbarHeader() {
  const { pathname } = useLocation();
  return (
    <div className="h-14">
      <Navbar fluid rounded className="shadow fixed w-full z-50">
        <Navbar.Brand href="/">
          <span className="self-center whitespace-nowrap text-green-400 text-xl font-semibold dark:text-white uppercase">
            Baraka Dairy
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              {/* <span className="block text-sm">Victor Makori</span>
              <span className="block truncate text-sm font-medium">
                viki@gmail.com
              </span> */}
            </Dropdown.Header>
            <Dropdown.Item href="/dashboard/all-products">
              Dashboard
            </Dropdown.Item>
            {/* <Dropdown.Item>Profile</Dropdown.Item> */}
            <Dropdown.Divider />
            {/* <Dropdown.Item>Sign out</Dropdown.Item> */}
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Link to={"/"}>
            <Navbar.Link active={pathname === "/"}>Home</Navbar.Link>
          </Link>
          <Link to={"/market"}>
            <Navbar.Link active={pathname === "/market"}>Store</Navbar.Link>
          </Link>

          <Link to={"/cart"}>
            <Navbar.Link active={pathname === "/cart"}>Cart</Navbar.Link>
          </Link>

          {/* <Link to={"/orders"}>
            <Navbar.Link active={pathname === "/orders"}>Orders</Navbar.Link>
          </Link> */}

          <Link to={"/about"}>
            <Navbar.Link active={pathname === "/about"}>About us</Navbar.Link>
          </Link>

          <Link to={"/contact"}>
            <Navbar.Link active={pathname === "/contact"}>
              Contact Us
            </Navbar.Link>
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
