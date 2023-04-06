import ChevronIcon from "@/presentation/public/images/icons/chevron.svg";
import { cardPaginationAtom } from "@/presentation/store/paginations";
import classNames from "classnames";
import { useEffect, useMemo, useState } from "react";
import { useRecoilState } from "recoil";

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
  const [page, setPage] = useRecoilState(cardPaginationAtom);

  const pages = useMemo(()=>{
    
  },[page])

  function ranges(init, end){
    
  }


  return (
    <div className="h-fit flex">
      <button onClick={()=> backPage()} className="pg-block-dft pg-block-navigate pg-block-back">
        <ChevronIcon className="pg-arrow-icon rotate-180" />
      </button>


        <button className={classNames("pg-block-dft pg-num-navigate")}>
          <span className="block">...</span>
        </button>
   
      <button onClick={()=> nextPage()} className="pg-block-dft pg-block-navigate pg-block-next">
        <ChevronIcon className="pg-arrow-icon" />
      </button>
    </div>
  );
};
