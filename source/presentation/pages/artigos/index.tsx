import { ArticlesList } from "@/presentation/components/common/ArticlesList";
import { SearchLayout } from "@/presentation/components/layouts/SearchLayout";

const Cards = (): JSX.Element => {
  return (
    <SearchLayout tilte={"Artigos"} filterName="articleList" filters={<></>}>
      <ArticlesList />
    </SearchLayout>
  );
};

export default Cards;
