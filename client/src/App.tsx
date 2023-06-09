import { Route, Routes, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { InitialState } from "../types";
import { Menubar, Sidebar, SubSidebar } from "./components";
import {
  Homepage,
  ErrorPage,
  SearchResults,
  Channel,
  Subscriptions,
  Watch,
} from "./pages";

const App = () => {
  const location = useLocation();
  let extracted = location.pathname.split("/")[1];
  const components = useSelector((s: InitialState) => s.components);
let theme = useSelector((s:InitialState) => s.theme)
  
  useEffect(() => {
    if( theme.darkTheme === false ){
      document.body.classList.add('light')
      document.body.classList.remove('dark')
    }else{
      document.body.classList.remove('light')
      document.body.classList.add('dark')
    }
  }, [theme.darkTheme]);

  return (
    <>
      <div className="relative w-full max-w-[1500px] dark:bg-stone-950 flex items-start ">
        <Menubar  />

        <div
          className={`${
            extracted === "watch" && "hidden"
          }  text-stone-900 overflow-y-scroll   dark:text-white flex  `}
        >
          <div
            className={`${!components.isMenubarOpen && " lg:block"} hidden `}
          >
            {" "}
            <Sidebar />
          </div>
          <div
            className={`${
              components.isMenubarOpen ? "lg:block" : "lg:hidden"
            } pt-[10vh] md:block hidden `}
          >
            {" "}
            <SubSidebar />
          </div>
        </div>

        <div className="grid flex-1 overflow-y-scroll mt-[6vh]  xs:mt-[8vh] h-[92vh] px-1 sm:px-10  bg-white  dark:bg-stone-950">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/subscriptions" element={<Subscriptions />} />
            <Route path="/watch/:videoId" element={<Watch />} />
            <Route path="/results/:query" element={<SearchResults />} />
            <Route path="/:id" element={<Channel />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
