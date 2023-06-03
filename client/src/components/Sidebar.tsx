import { Menu } from "@mui/icons-material";
import YoutubeIcon from "../assets/images/youtube.png";

import { links } from "../assets/data";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar, handleMenubar } from "../redux/slices/componentsSlice";
import { useDebounce } from "../utils/debounce";

type Link = {
  title:string,
  link:string,
  icon:string
}

const Sidebar = () => {
  const components = useSelector((s: any) => s.components);
  const dispatch = useDispatch();
  const debounce = useDebounce(handleResize, 500);
const location = useLocation()

  useEffect(() => {
    window.addEventListener("resize", debounce);
    return () => window.removeEventListener("resize", debounce);
  }, [components.isMenubarOpen]);

  function handleResize() {
   if (window.innerWidth > 1280) {
    dispatch(closeSidebar());
  }
  if(window.innerWidth < 1280 && components.isMenubarOpen){
    dispatch(closeSidebar())
  }
  }
  return (
   <>
    <div className={` grid  overflow-y-scroll p-4 sm:px-10    `}>
    <div className={`flex items-center gap-4  `}>
        <Menu
          onClick={() => dispatch(handleMenubar())}
          className="cursor-pointer"
        />
        <span className="flex items-center gap-1 text-xl ">
          <img src={YoutubeIcon} alt="" className="w-7" />
          BTube
        </span>
      </div>

      {/* bottom */}
      <div className={`h-[90vh] overflow-y-scroll sidebar  relative  flex flex-col gap-10 py-4 z-10`}>
        <div className="grid gap-4">
          {links.map((link: any) =>
            link.mainLinks.map((l: Link) => {
              return (
                <Link to={l.link} onClick={() => dispatch(closeSidebar())} key={l.title} className="flex gap-6 text-dark ">
                  {<l.icon />} {l.title}
                </Link>
              );
            })
          )}
        </div>
        <div className="grid gap-4">
          {links.map((link: any) =>
            link.subLinks.map((l: any) => {
              return (
                <Link to="/" onClick={() => dispatch(closeSidebar())} key={l.title} className="flex gap-6 cursor-default">
                  {<l.icon />} {l.title}
                </Link>
              );
            })
          )}
        </div>
        <div className="grid gap-4">
          <h2 className="font-semibold text-xl ">Subscriptions</h2>
          {links.map((link: any) =>
            link.subscriptions.map((l: any) => {
              return (
                <Link to="/" onClick={() => dispatch(closeSidebar())} key={l.title} className="flex gap-6  cursor-default">
                  {<l.icon />} {l.title}
                </Link>
              );
            })
          )}
        </div>
      </div>
    </div>
  </>
  );
};

export default Sidebar;
