import ChevronIcon from "@/presentation/public/images/icons/chevron.svg";
import classNames from "classnames";
import { useEffect, useState } from "react";

interface PaginationBlockProps {
  backPage: Function;
  nextPage: Function;
  actualPage?: number;
  maxPages?: number;
}

export const PaginationBlock = ({
  actualPage,
  maxPages,
  backPage,
  nextPage
}: PaginationBlockProps) => {
/*   const [pages, setPages] = useState<number[]>([]);

  function isFirstPage() {
    return actualPage === 1;
  }

  function isLastPage() {
    return actualPage === maxPages;
  }

  useEffect(() => {

    if(!isFirstPage() && !isLastPage()) {
        setPages([actualPage-1, actualPage, actualPage+1])
    }

    if (isFirstPage()) {
      if (actualPage + 1 === maxPages) {
        setPages([actualPage-1, actualPage, maxPages]);
      }else{
        setPages([actualPage, actualPage+1, actualPage+2])
      }
    }

   

    if(isLastPage()){
        
    }
  }, []);
 */
  return (
    <div className="h-fit flex">
      <button onClick={()=> backPage()} className="pg-block-dft pg-block-navigate pg-block-back">
        <ChevronIcon className="pg-arrow-icon rotate-180" />
      </button>
      {/* {pages.map((item) => (
        <button className={classNames("pg-block-dft pg-num-navigate")}>
          <span className="block">{item}</span>
        </button>
      ))} */}
      <button onClick={()=> nextPage()} className="pg-block-dft pg-block-navigate pg-block-next">
        <ChevronIcon className="pg-arrow-icon" />
      </button>
    </div>
  );
};
