interface ArticleParams {
    articleId: string;
  articleTitle: string;
  articleAuthor: string;
  articleViews: number;
  articleLink: string;
  articleImage: string;
  articleDescription: string;
}

export const Articles:Array<ArticleParams> = [
    {   
        articleId: "1",
        articleTitle: "6 Baralhos Pioneer e suas Novidades para ficar de olho no Pro Tour",
        articleAuthor: "Michael Chan",
        articleViews: 1000,
        articleLink: "/articles/x",
        articleImage: "https://source.unsplash.com/random/?pokemon-tcg,pokemon,pokemon-cards",
        articleDescription: "React for Designers is a web application that allows users to create, edit, and share their work."
    },
    {
        articleId: "2",
        articleTitle: "Os novos cards",
        articleAuthor: "Michael Chan",
        articleViews: 1000,
        articleLink: "/articles/x",
        articleImage: "https://source.unsplash.com/random/?pokemon-tcg,pokemon,pokemon-cards",
        articleDescription: "React for Designers is a web application that allows users to create, edit, and share their work."
    }


]