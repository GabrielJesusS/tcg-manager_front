import { DeckList } from "@/presentation/components/common/DeckList";
import { SearchLayout } from "@/presentation/components/layouts/SearchLayout";

const Decks = (): JSX.Element => {
  return (
    <SearchLayout tilte="Decks" filters={<></>} filterName="deckList">
      <DeckList />
    </SearchLayout>
  );
};

export default Decks;
