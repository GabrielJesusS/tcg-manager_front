import ChevronIcon from "@/presentation/public/images/icons/chevron.svg";
import {
  listOffsetAtom,
  paginationAtom,
} from "@/presentation/store/paginations";
import classNames from "classnames";
import { useEffect, useMemo, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

interface PaginationBlockProps {
  isLoading?: boolean;
}

const maxItems = 5;
const maxLeftItems = (maxItems - 1) / 2;

export const PaginationBlock = ({isLoading}: PaginationBlockProps) => {
  const page = useRecoilValue(paginationAtom);
  const [offset, setOffset] = useRecoilState(listOffsetAtom);
  const [internalOffset, setInternalOffset] = useState<number>(0);

  const current = Math.round(
    internalOffset ? internalOffset / page.pageSize + 1 : 1
  );
  const pages = Math.ceil(page.totalCount / page.pageSize);
  const firstPage = Math.max(current - maxLeftItems, 1);

  const changePage = (pageNumber: number) => {
    window.scrollTo({ top: 0 });
    setInternalOffset((pageNumber - 1) * page.pageSize);
  };

  useEffect(() => {
    setOffset(current);
  }, [internalOffset]);

  useEffect(() => {
    setInternalOffset(0);
  }, [page.totalCount]);

  return (
    <div className="h-fit w-fit flex">
      <button
        type="button"
        onClick={() => changePage(current - 1)}
        className="pg-block-dft pg-block-navigate pg-block-back"
        disabled={current === 1 || isLoading}
      >
        <ChevronIcon className="pg-arrow-icon rotate-180" />
      </button>

      <ul className="h-fit flex">
        {Array.from({ length: Math.min(maxItems, pages) })
          .map((_, index) => index + firstPage)
          .map(
            (pageNum) =>
              pageNum <= pages && (
                <li key={pageNum}>
                  <button
                    type="button"
                    onClick={() => changePage(pageNum)}
                    disabled={isLoading}
                    className={classNames(
                      "pg-block-dft pg-num-navigate",
                      pageNum === current && "pg-num-navigate-active"
                    )}
                  >
                    <span className="block">{pageNum}</span>
                  </button>
                </li>
              )
          )}
      </ul>
      <button
        type="button"
        onClick={() => changePage(current + 1)}
        className="pg-block-dft pg-block-navigate pg-block-next"
        disabled={current === pages || isLoading}
      >
        <ChevronIcon className="pg-arrow-icon" />
      </button>
    </div>
  );
};
