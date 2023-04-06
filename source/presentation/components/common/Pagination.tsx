import ChevronIcon from "@/presentation/public/images/icons/chevron.svg";
import {
  cardListOffsetAtom,
  cardPaginationAtom,
} from "@/presentation/store/paginations";
import classNames from "classnames";
import { useEffect, useMemo, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

interface PaginationBlockProps {}

const maxItems = 5;
const maxLeftItems = (maxItems - 1) / 2;

export const PaginationBlock = ({}: PaginationBlockProps) => {
  const page = useRecoilValue(cardPaginationAtom);
  const [offset, setOffset] = useRecoilState(cardListOffsetAtom);
  const [internalOffset, setInternalOffset] = useState<number>(0);

  const current = Math.round(
    internalOffset ? internalOffset / page.pageSize + 1 : 1
  );
  const pages = Math.ceil(page.totalCount / page.pageSize);
  const firstPage = Math.max(current - maxLeftItems, 1);

  const changePage = (pageNumber: number) => {
    setInternalOffset((pageNumber - 1) * page.pageSize);
  };

  useEffect(() => {
    setOffset(current);
  }, [internalOffset]);

  console.log();

  return (
    <div className="h-fit w-fit flex">
      <button
        onClick={() => changePage(current - 1)}
        className="pg-block-dft pg-block-navigate pg-block-back"
        disabled={current === 1}
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
                    onClick={() => changePage(pageNum)}
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
        onClick={() => changePage(current + 1)}
        className="pg-block-dft pg-block-navigate pg-block-next"
        disabled={current === pages}
      >
        <ChevronIcon className="pg-arrow-icon" />
      </button>
    </div>
  );
};
