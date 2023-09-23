import { PokemonCardList } from "@/presentation/components/common/CardViewer/PokemonCardList";
import { CardFilter } from "@/presentation/components/common/Filters/CardFilter";
import { SearchLayout } from "@/presentation/components/layouts/SearchLayout";
import { useGetSet } from "@/presentation/hooks/useGetSet";
import { useRouter } from "next/router";
import { useMemo } from "react";

const Cards = (): JSX.Element => {
  const { query } = useRouter();

  const { data, error } = useGetSet(query.set ? (query.set as string) : null);

  const listTitle = useMemo(() => {
    if (query.set && data && !error) {
      return <img src={data.images.logo} className="mx-auto h-16 " alt={data.name} />;
    }

    return "Cartas";
  }, [data, query]);

  return (
    <SearchLayout tilte={listTitle} filters={<CardFilter />}>
      <PokemonCardList />
    </SearchLayout>
  );
};

export default Cards;
