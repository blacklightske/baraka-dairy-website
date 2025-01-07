"use client";

import {
  HiArrowCircleLeft,
  HiArrowCircleRight,
  HiSearch,
} from "react-icons/hi";
import { Avatar, Dropdown, Navbar, TextInput } from "flowbite-react";
import { IoSettings } from "react-icons/io5";
import { AiOutlineLogout } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../../../app/hooks/redux-hooks";
import { toggleSideBar } from "../../../app/slices/DashboardSlice";

export function AdminHeader() {
  const dispatch = useAppDispatch();
  const { sideBarCollapse } = useAppSelector((state) => state.dashboard);
  return (
    <nav
      className={`${
        sideBarCollapse ? "w-[95.6vw]" : "w-[82vw]"
      } transition-all shadow h-16 `}
    >
      <Navbar
        fluid
        rounded
        className={`${
          sideBarCollapse ? "w-[95.6vw]" : "w-[82vw]"
        } rounded-none fixed transition-all shadow z-10 `}
      >
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
              <span className="block text-sm">Victor Makori</span>
              <span className="block truncate text-sm font-medium">
                viksales@gmail.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item icon={IoSettings}>Settings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item icon={AiOutlineLogout}>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <div className="md:order-1 flex items-center gap-10">
          <div
            className="cursor-pointer"
            onClick={() => dispatch(toggleSideBar())}
          >
            {!sideBarCollapse ? (
              <HiArrowCircleLeft className="text-3xl text-gray-500" />
            ) : (
              <HiArrowCircleRight className="text-3xl text-gray-500" />
            )}
          </div>
          <div className="max-w-md">
            <TextInput
              id="search"
              type="text"
              rightIcon={HiSearch}
              placeholder="Search"
              required
            />
          </div>
        </div>
      </Navbar>
    </nav>
  );
}
