import { DefaultLayout } from "@/presentation/components/layouts/DefaultLayout";
import { PageRoutesEnum } from "@/presentation/enums/PagesEnum";
import { useGetArticle } from "@/presentation/hooks/useGetArticle";
import { checkArticleExists } from "@/presentation/middlewares/checkArticleExists";
import Link from "next/link";
import { useRouter } from "next/router";

const ArticleViewer = (): JSX.Element => {
  const { query } = useRouter();

  const { data } = useGetArticle(query.articlesId as string);
  
  return (
    <DefaultLayout>
      {data ? (
        <div className=" bg-bg-pattern grow">
          <main className="p-safe mx-auto max-w-7xl space-y-4">
            <section className="bg-system shadow-2xl rounded-lg p-3 text-xs sm:text-base">
              <article className="space-y-4">
                <header>
                  <h1 className="text-2xl lg:text-3.5xl font-bold">
                    {data.title}
                  </h1>
                  <p >
                    {data.description}
                  </p>
                  <footer>
                    <p>
                      Por{" "}
                      <Link className="dft-link" href={`${PageRoutesEnum.USERS}${data.user.id}`}>
                        {data.user.name}
                      </Link>
                    </p>
                   {/*  <small className="text-system-400">
                      Há <time>20</time> horas - 90k visualizações - 20
                      comentários
                    </small> */}
                  </footer>
                </header>
                <hr className="h-1 bg-system-200 border-none " />
              <div dangerouslySetInnerHTML={{__html: data.content}}> 
                
              </div>
               {/*  <hr className="h-1 bg-system-200 border-none " />
                <footer>
                  <p>Fontes</p>
                  <ul>
                    <li>link doido</li>
                  </ul>
                </footer> */}
              </article>
            </section>
          </main>
        </div>
      ) : null}
    </DefaultLayout>
  );
};

export default checkArticleExists(ArticleViewer);
