"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";

export function NavbarHeader() {
  const { pathname } = useLocation();
  return (
<div className="h-16">
  <Navbar fluid rounded className="shadow fixed w-full z-50 top-0 bg-white">
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
          <span className="block truncate text-sm font-medium">
            viki@gmail.com
          </span>
        </Dropdown.Header>
        <Dropdown.Item>
  <Link to="/dashboard">Dashboard</Link>
</Dropdown.Item>
        <Dropdown.Divider />
      </Dropdown>
      <Navbar.Toggle />
    </div>
    <Navbar.Collapse>
      <Link to="/" className="px-4 py-2">
        Home
      </Link>
      <Link to="/market" className="px-4 py-2">
        Store
      </Link>
      <Link to="/cart" className="px-4 py-2">
        Cart
      </Link>
      <Link to="/about" className="px-4 py-2">
        About Us
      </Link>
      <Link to="/contact" className="px-4 py-2">
        Contact Us
      </Link>
    </Navbar.Collapse>
  </Navbar>
</div>

  );
}
