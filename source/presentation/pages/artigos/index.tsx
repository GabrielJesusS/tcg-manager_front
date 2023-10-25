import { ArticlesList } from "@/presentation/components/common/ArticlesList";
import { SearchLayout } from "@/presentation/components/layouts/SearchLayout";

const Cards = (): JSX.Element => {
  return (
    <SearchLayout tilte={"Artigos"} filters={<></>}>
      <ArticlesList />
    </SearchLayout>
  );
};

export default Cards;
