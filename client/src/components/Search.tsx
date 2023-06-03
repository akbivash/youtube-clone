import { ArrowBackOutlined, KeyboardVoice } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useDebouncedSearch } from "../utils/debounce";
import { useDispatch, useSelector } from "react-redux";
import {
  closeSearchBar,
  handleSearchBar,
} from "../redux/slices/componentsSlice";
import { Link } from "react-router-dom";
import { InitialState, SearchSuggestion } from "../../types";
import CloseIcon from "@mui/icons-material/Close";
import { searchSuggestions } from "../redux/apiCalls/search";

const SearchResults = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestionBox, setShowSuggestionBox] = useState(false);
  const components = useSelector((state: InitialState) => state.components);
  const dispatch = useDispatch();
  const suggestions = useSelector(
    (s: InitialState) => s.videos.searchSuggestions
  );
  const debouncedSearch = useDebouncedSearch(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearch !== undefined && debouncedSearch !== "") {
      setShowSuggestionBox(true);
      searchSuggestions(dispatch, debouncedSearch);
    }
  }, [debouncedSearch]);

  const handleSearch = (s: SearchSuggestion) => {
    setShowSuggestionBox(prev => !prev)
    dispatch(closeSearchBar());
  };

  return (
    <div
      className={`${
        components.isSearchBarOpen
          ? "flex left-0 z-50 fixed  sm:relative  w-full flex-1 "
          : "hidden  sm:grid  gap-4 flex-1"
      } sm:relative grid py-2 px-4 sm:px-10 dark:bg-stone-950 bg-white  mx-auto`}
    >
      <div className=" flex gap-1  w-full justify-center items-center  ">
        {components.isSearchBarOpen && (
          <span
            className="sm:hidden cursor-pointer "
            onClick={() => dispatch(handleSearchBar())}
          >
            {" "}
            <ArrowBackOutlined />
          </span>
        )}
        <span className="flex flex-1 border-gray-300 dark:border-stone-500 items-center border-[1.4px] px-4  rounded-2xl">
          <input
            type="text"
            className=" w-full outline-none bg-transparent px-4 text-xl py-1 "
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <span
            onClick={() => setSearchTerm("")}
            className="cursor-pointer  z-20"
          >
            {debouncedSearch !== "" && <CloseIcon />}
          </span>
        </span>
        <span className="">
          <KeyboardVoice />
        </span>
      </div>

      {showSuggestionBox && debouncedSearch !== "" && (
        <div className="font-bold absolute left-0  dark:bg-stone-900 p-2 sm:p-4 h-fit  grid gap-4 top-12 bg-white rounded-md w-full  ">
          {suggestions !== undefined && suggestions.length !== 0 &&
            suggestions.map((s: SearchSuggestion) => {
              return (
                <Link
                  to={`/results/${s.snippet.title}`}
                  key={s.etag}
                  onClick={() => handleSearch(s)}
                >
                  {s.snippet.title}
                </Link>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
