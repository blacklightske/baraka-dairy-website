import { Outlet } from "react-router-dom";
import { useAppSelector } from "../../app/hooks/redux-hooks";
import { SideBar } from "../components/side-bar/SideBar";
import { AdminHeader } from "../components/header/AdminHeader";

const DefaultDashboardLayout = () => {
  const { sideBarCollapse } = useAppSelector((state) => state.dashboard);
  return (
    <div className="flex flex-row">
      <SideBar />
      <div>
        <AdminHeader />
        <div
          className={`${
            sideBarCollapse ? "w-[95.6vw]" : "w-[82vw]"
          } transition-all md:px-10 px-2 py-8 bg-gray-100`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DefaultDashboardLayout;
