import {PAGE_ROUTES} from "@/presentation/enums/PagesEnum"

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
        url: PAGE_ROUTES.DECKS,
        isPrivate: false
      },
      {
        name: "Criar novo deck",
        url: PAGE_ROUTES.NEW_DECK,
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
        url: PAGE_ROUTES.ARTICLES,
        isPrivate: false
      },
      {
        name: "Publicar novo artigo",
        url: PAGE_ROUTES.NEW_ARTICLE,
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
        url: PAGE_ROUTES.CARDS,
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
        url: PAGE_ROUTES.SETS,
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
        url: PAGE_ROUTES.USERS,
        isPrivate: false
      },
    ],
  },
  
];
