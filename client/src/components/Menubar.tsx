import { useDispatch, useSelector } from "react-redux";
import {
  Menu,
  SearchIcon,
  LoginIcon,
  LogoutIcon,
  LightModeIcon,
  DarkModeIcon,
} from "../assets/icons";
import YoutubeIcon from "../assets/images/youtube.png";
import { InitialState } from "../../types";
import {

  handleMenubar,
  handleSearchBar,
} from "../redux/slices/componentsSlice";
import Sidebar from "./Sidebar";
import { Link, useLocation } from "react-router-dom";
import Search from "./Search";
import { login, logout } from "../redux/apiCalls/auth";
import { changeTheme } from "../redux/slices/themeSlice";

const Menubar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: InitialState) => state.auth.user);
  const components = useSelector((state: InitialState) => state.components);
  const location = useLocation();
  let extracted = location.pathname.split("/")[1];
let theme = useSelector((s:InitialState) => s.theme)

  function handleTheme() {
    dispatch(changeTheme())
  }

  return (
    <>
      <div
        className={`top-0 sm:px-10 p-4  fixed dark:bg-stone-950 bg-white flex items-center text-stone-900 justify-between  max-w-[1500px]   h-[8vh] xs:h-[10vh] mx-auto  w-full     dark:text-white z-30 
`}
      >
        {/* left */}
        <div
          className={` z-10  text-xl  flex items-center gap-4  

          `}
        >
          <span
            onClick={() => dispatch(handleMenubar())}
            className="cursor-pointer grid "
          >
            <Menu />
          </span>
          <Link to="/" className="flex text-sm xs:text-lg items-center gap-1  ">
            <img src={YoutubeIcon} alt="" className="w-5 xs:w-7" />
            BTube
          </Link>
        </div>

        {/* mid */}
        <Search />

        {/* right  */}
        <div
          className={` flex  justify-end gap-4 sm:gap-10  items-center 
           `}
        >
          <span
            className=" cursor-pointer sm:hidden"
            onClick={() => dispatch(handleSearchBar())}
          >
            <SearchIcon />
          </span>
          {user ? (
            <span onClick={() => logout(dispatch)} className="cursor-pointer">
              <LogoutIcon /> Sign out
            </span>
          ) : (
            <span onClick={() => login(dispatch)} className="cursor-pointer">
              <LoginIcon /> Sign in
            </span>
          )}

          {theme.darkTheme ? (
            <span
              onClick={() => dispatch(changeTheme())}
              className="cursor-pointer"
            >
              <LightModeIcon /> 
            </span>
          ) : (
            <span
            onClick={() => dispatch(changeTheme())}
              className="cursor-pointer"
            >
              <DarkModeIcon /> 
            </span>
          )}

        
        </div>
      </div>

      {/* hidden sidebar  */}
      <div
        className={`${
          components.isMenubarOpen
            ? "fixed  mt-0 w-full top-0  left-0 xl:left-auto max-w-[230px] lg:max-w-[300px] "
            : "fixed left-[-100%]  top-0 w-0   overflow-hidden "
        } ${
          extracted !== "watch" && "lg:hidden"
        }   dark:bg-stone-900  text-stone-900  bg-white dark:text-white     transition-all duration-200   w-full max-w-[230px]   z-40  overflow-y-scroll 
        `}
      >
        <Sidebar />
      </div>
    </>
  );
};

export default Menubar;
