import { Deckitem } from "./Deckitem";
import { useGetDecks } from "@/presentation/hooks/useGetDecks";
import { OrderByEnum } from "@/presentation/enums/OrderByEnum";
import { useEffect } from "react";
import { useNotify } from "@/presentation/hooks/useNotify";
import { StatusEnum } from "@/presentation/enums/NotifyTypeEnum";
import { filterParamsAtom } from "@/presentation/store/filters/cardFiltersAtom";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { Swiper, SwiperSlide } from "swiper/react";

export const DeckCollection = (): JSX.Element => {
  const filters = useRecoilValue(filterParamsAtom("deckList"));
  const { data, error } = useGetDecks(filters, OrderByEnum.NAME);
  const resetFilter = useResetRecoilState(filterParamsAtom("deckList"));
  const { notify } = useNotify();

  useEffect(() => {
    if (error) {
      notify("Um erro ocorreu, por favor tente novamente!", StatusEnum.ERROR);
    }
  }, [error]);

  useEffect(() => {
    resetFilter();
  }, []);

  return (
    <div className="w-full">
      <Swiper slidesPerView={4} spaceBetween={24}>
        {data?.map((decks) =>
          decks.data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="w-[240px]">
                <Deckitem
                  deckDifficulty={item.difficulty}
                  deckAuthor={{
                    authorId: item.user.id,
                    authorName: item.user.user_name,
                  }}
                  deckDescription={item.description}
                  deckTitle={item.name}
                  deckId={item.id}
                  deckRate={item.difficulty}
                />
              </div>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </div>
  );
};
