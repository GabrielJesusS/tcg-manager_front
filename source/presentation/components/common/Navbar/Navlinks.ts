import {PageRoutesEnum} from "@/presentation/enums/PagesEnum"

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
        url: PageRoutesEnum.DECKS,
        isPrivate: false
      },
      {
        name: "Criar novo deck",
        url: PageRoutesEnum.NEW_DECK,
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
        url: PageRoutesEnum.ARTICLES,
        isPrivate: false
      },
      {
        name: "Publicar novo artigo",
        url: PageRoutesEnum.NEW_ARTICLE,
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
        url: PageRoutesEnum.CARDS,
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
        url: PageRoutesEnum.SETS,
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
        url: PageRoutesEnum.USERS,
        isPrivate: false
      },
    ],
  },
  
];
