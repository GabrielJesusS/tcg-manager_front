import { useGetSets } from "@/presentation/hooks/useGetSets";
import { PaginationBlock } from "./Pagination";
import { Setitem } from "./Setitem";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  listOffsetAtom,
  paginationAtom,
} from "@/presentation/store/paginations";
import { useEffect } from "react";
import { generateArray } from "@/presentation/utils/generateArray";
import { SetSkeleton } from "./skeletons/SetSkeleton";
import { cardFilterAtom } from "@/presentation/store/filters/cardFiltersAtom";


const skeletonArray = generateArray(20);

export const SetList = () => {
  const [offsetPage, setOffsetPage] = useRecoilState(listOffsetAtom);
  const filters = useRecoilValue(cardFilterAtom)
  const { data, update, isLoading } = useGetSets(offsetPage, filters);
  const [page, setPage] = useRecoilState(paginationAtom);
  
  useEffect(() => {
    if (data) {
      setPage({ ...data });
    }
  }, [data]);

  useEffect(()=>{
    update();
  }, [offsetPage, filters])

  console.log(data);
  return (
    <div className="flex flex-col items-center space-y-6">
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
        {data &&
          !isLoading &&
          data.data.map((set) => (
            <li key={set.id}>
              <Setitem
                id={set.id}
                title={set.name}
                releaseDate={set.releaseDate}
                legalities={set.legalities}
                icon={set.images.symbol}
                image={set.images.logo}
              />
            </li>
          ))}
          {
            isLoading  &&
              skeletonArray.map((item) => <SetSkeleton key={item} />)
          }
      </ul>
      {data && data.count > 0 && <PaginationBlock />}
      {data && data.count === 0 && (
        <p className="text-center">
          Desculpe, não encontrei nada com este nome =(
        </p>
      )}
    </div>
  );
};
