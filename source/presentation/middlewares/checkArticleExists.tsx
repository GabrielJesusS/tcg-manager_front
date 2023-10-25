import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { Loading } from "../components/common/Loading";
import { useGetArticle } from "../hooks/useGetArticle";

export function checkArticleExists(Component: FC): FC {
  const comp: FC = (): JSX.Element => {
    const {
      query: { articlesId },
      isReady,
      replace,
    } = useRouter();

    const [articleId, setArticleId] = useState<string | null>(null);

    const { data, error, isLoading } = useGetArticle(articleId);

    useEffect(() => {
      if (isReady && articlesId) {
        const article = articlesId;
        setArticleId(article as string);
      }
    }, [isReady]);

    if (!isLoading) {
      if (data) {
        return <Component />;
      }

      if (error) {
        void replace("/404");
      }
    }

    return (
      <>
        <Loading />
      </>
    );
  };

  return comp;
}
