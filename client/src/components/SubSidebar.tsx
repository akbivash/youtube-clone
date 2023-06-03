import {
  Home,
  AllInclusive,
  LibraryAdd,
  Subscriptions,
} from "@mui/icons-material";
import { Link } from "react-router-dom";


const SubSidebar = () => {
  
  return (
    <div
      className=' xs:grid sm:gap-10  flex justify-between  p-4 sm:px-10    py-4 text-xs'
    >
      <Link to="/" className="grid  place-items-center xs:place-items-start">
        <Home /> Home
      </Link>
      <Link to="/" className="grid  place-items-center xs:place-items-start">
        <AllInclusive /> Shorts
      </Link>
      <Link to="/" className="grid place-items-center xs:place-items-start">
        <Subscriptions /> Subscriptions
      </Link>
      <Link to="/" className="grid  place-items-center xs:place-items-start">
        <LibraryAdd /> Library
      </Link>
    </div>
  );
};

export default SubSidebar;
