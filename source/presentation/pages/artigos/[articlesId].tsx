import { DefaultLayout } from "@/presentation/components/layouts/DefaultLayout";

import Link from "next/link";

const ArticleViewer = (): JSX.Element => {
  return (
    <DefaultLayout>
      <div className=" bg-slate-400 ">
        <main className="p-safe mx-auto max-w-7xl space-y-4">
          <section className="bg-system rounded-lg p-3 text-xs sm:text-base">
            <article className="space-y-4">
              <header>
                <h1 className="text-2xl lg:text-3.5xl font-bold">
                  Titulo do artigo - Apenas um artigo
                </h1>
                <p>
                  Descrição do artigo resumida para explicar de forma simples
                </p>
                <footer>
                  <p>
                    Por{" "}
                    <Link className="dft-link" href={""}>
                      Usuáriox
                    </Link>
                  </p>
                  <small className="text-system-400">
                    Há <time>20</time> horas - 90k visualizações - 20
                    comentários
                  </small>
                </footer>
              </header>
              <hr className="h-1 bg-system-200 border-none " />
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo consequat. Duis autem vel eum iriure
                  dolor in hendrerit in vulputate velit esse molestie consequat,
                  vel illum dolore eu feugiat nulla facilisis at vero eros et
                  accumsan et iusto odio dignissim qui blandit praesent luptatum
                  zzril delenit augue duis dolore te feugait nulla facilisi.
                </p>

                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo consequat. Duis autem vel eum iriure
                  dolor in hendrerit in vulputate velit esse molestie consequat,
                  vel illum dolore eu feugiat nulla facilisis at vero eros et
                  accumsan et iusto odio dignissim qui blandit praesent luptatum
                  zzril delenit augue duis dolore te feugait nulla facilisi.
                </p>

                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo consequat. Duis autem vel eum iriure
                  dolor in hendrerit in vulputate velit esse molestie consequat,
                  vel illum dolore eu feugiat nulla facilisis at vero eros et
                  accumsan et iusto odio dignissim qui blandit praesent luptatum
                  zzril delenit augue duis dolore te feugait nulla facilisi.
                </p>

                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo consequat. Duis autem vel eum iriure
                  dolor in hendrerit in vulputate velit esse molestie consequat,
                  vel illum dolore eu feugiat nulla facilisis at vero eros et
                  accumsan et iusto odio dignissim qui blandit praesent luptatum
                  zzril delenit augue duis dolore te feugait nulla facilisi.
                </p>

                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo consequat. Duis autem vel eum iriure
                  dolor in hendrerit in vulputate velit esse molestie consequat,
                  vel illum dolore eu feugiat nulla facilisis at vero eros et
                  accumsan et iusto odio dignissim qui blandit praesent luptatum
                  zzril delenit augue duis dolore te feugait nulla facilisi.
                </p>
              </div>
              <hr className="h-1 bg-system-200 border-none " />
              <footer>
                <p>Fontes</p>
                <ul>
                  <li>link doido</li>
                </ul>
              </footer>
            </article>
          </section>
        </main>
      </div>
    </DefaultLayout>
  );
};

export default ArticleViewer;
