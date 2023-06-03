import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { Category, InitialState } from "../../types";
import handleCategorySlider from "../utils/handleCategorySlider";
import { useCategories } from "../hooks/useCategories";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCategoryId } from "../redux/slices/videosSlice";
import { useVideos } from "../hooks/useVideos";

const CategoriesBar = () => {
  const { scrollBar, handleLeft, handleRight, scrollRef } =
    handleCategorySlider();
  const array = new Array(15).fill(0);
  const { categories } = useCategories();
  const category = useSelector((s:InitialState) => s.videos.selectedCategory)
const dispatch = useDispatch()



  return (
   <>
   {categories && categories.length > 0 ?  <div
      className={`relative w-full z-20 transition-all duration-200 overflow-hidden  flex items-center my-[2vh]    `}
    >
      {scrollBar.scrollLeft > 0 && (
        <span
          className="absolute left-0 dark:text-white  cursor-pointer text-stone-900"
          onClick={handleLeft}
        >
          {<NavigateBeforeIcon fontSize="medium" />}
        </span>
      )}
      <div
        ref={scrollRef}
        className="w-[80%] sm:w-[90%]   category overflow-x-auto   mx-auto"
      >
        <div className="flex cursor-default  gap-5  ">
   
            <>
              {category === "" ? (
                <span
                  key="all"
                  className="min-w-fit h-fit cursor-pointer dark:bg-white dark:text-black bg-stone-900 text-white px-2 rounded-md"
                >
                  All
                </span>
              ) : (
                <span
                  key="alll"
                  onClick={() => dispatch(setSelectedCategoryId(''))}
                  className="min-w-fit  h-fit cursor-pointer text-stone-900 dark:bg-stone-900 bg-zinc-200 dark:text-white px-2  rounded-md"
                >
                  All
                </span>
              )}
              {categories !== undefined && categories.length !== 0 &&
                categories.map((c: Category) => {
                  if (c.id === category) {
                    return (
                      <span
                        key={c.etag}
                        onClick={() => dispatch(setSelectedCategoryId(c.id))}
                        className="min-w-fit h-fit  cursor-pointer dark:bg-white dark:text-black bg-stone-900 text-white px-2 rounded-md"
                      >
                        {c.snippet.title}
                      </span>
                    );
                  } else {
                    return (
                      <span
                        key={c.id}
                        onClick={() => dispatch(setSelectedCategoryId(c.id))}
                        className="min-w-fit h-fit cursor-pointer text-stone-900 dark:bg-stone-900 bg-zinc-200 dark:text-white px-2 rounded-md"
                      >
                        {c.snippet.title}
                      </span>
                    );
                  }
                })}
            </>
      
         
        </div>
      </div>
      {scrollBar.scrollable > 1 && (
        <span
          className="absolute  dark:text-white z-40 text-stone-900 right-0 cursor-pointer"
          onClick={handleRight}
        >
          {<NavigateNextIcon />}
        </span>
      )}
    </div> :<div 
       className="w-[90%]  flex gap-4 mt-3 category overflow-x-auto    mx-auto"
    >
   { array.map((a, i: any) => {
    return (
      <span
        key={i * 2}
        className="cat_loading  relative h-[4vh] text-stone-900 dark:bg-shadow-dark  min-w-[70px]  bg-stone-300 dark:text-white px-2 rounded-md"
      ></span>
    );
  })} 
    </div>}
   </>
  );
};

export default CategoriesBar;

