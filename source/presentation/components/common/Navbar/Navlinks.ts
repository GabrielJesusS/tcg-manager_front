interface INavlinks {
  id: number;
  title: string;
  links: ILinks[];
}

interface ILinks {
  name: string;
  url: string;
  isPrivate: boolean;
}

export const NavLinks: INavlinks[] = [
  {
    id: 1,
    title: "Decks",
    links: [
      {
        name: "Listagem",
        url: "/decks",
        isPrivate: false
      },
      {
        name: "Criar novo deck",
        url: "/decks/new",
        isPrivate: true
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
        isPrivate: false
      },
      {
        name: "Publicar novo artigo",
        url: "/articles/new",
        isPrivate: true
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
        isPrivate: false
      },
      {
        name: "Carta surpresa",
        url: "/cards/1",
        isPrivate: false
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
        isPrivate: false
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
        isPrivate: false
      },
    ],
  },
  
];
