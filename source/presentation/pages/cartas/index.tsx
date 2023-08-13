import { PokemonCardList } from "@/presentation/components/common/CardViewer/PokemonCardList";
import { CardFilter } from "@/presentation/components/common/Filters/CardFilter";
import { SearchLayout } from "@/presentation/components/layouts/SearchLayout";

const Cards = (): JSX.Element => {
  return (
    <SearchLayout tilte="Cartas" filters={<CardFilter />}>
      <PokemonCardList />
    </SearchLayout>
  );
};

export default Cards;
