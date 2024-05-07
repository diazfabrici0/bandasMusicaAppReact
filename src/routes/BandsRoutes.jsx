import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";

export const BandsRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-[100vh]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
