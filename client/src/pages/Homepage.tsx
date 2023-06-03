import CategoriesBar from "../components/CategoriesBar";
import Videos from "../components/Videos";
import { useLocation } from "react-router-dom";

const Homepage = () => {
  const location = useLocation();
  return (
    <>
        <div className=" w-full h-full grid z-20  gap-2  relative dark:bg-stone-950 dark:text-white bg-white  overflow-y-scroll  ">
          {location.pathname === "/" && <CategoriesBar />}
         <div className="w-full   overflow-y-scroll ">
         {location.pathname === "/" && <Videos />}
         </div>
        </div>
    </>
  );
};

export default Homepage;
