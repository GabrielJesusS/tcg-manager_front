interface INavlinks {
  id: number;
  title: string;
  links: ILinks[];
}

interface ILinks {
  name: string;
  url: string;
}

export const NavLinks: INavlinks[] = [
  {
    id: 1,
    title: "Decks",
    links: [
      {
        name: "Listagem",
        url: "/decks",
      },
      {
        name: "Criar novo deck",
        url: "/decks/new",
      },
    ],
  },
  {
    id: 2,
    title: "Artigos",
    links: [
      {
        name: "Listagem",
        url: "/articles",
      },
      {
        name: "Publicar novo artigo",
        url: "/articles/new",
      },
    ],
  },
  {
    id: 3,
    title: "Cards",
    links: [
      {
        name: "Listagem",
        url: "/cards/",
      },
      {
        name: "Carta surpresa",
        url: "/cards/1"
      }
    ],
  },
  {
    id: 4,
    title: "Coleções",
    links: [
      {
        name: "Listagem",
        url: "/sets",
      },
    ],
  },
  {
    id: 5,
    title: "Usuários",
    links: [
      {
        name: "Listagem",
        url: "/user",
      },
    ],
  },
  
];
