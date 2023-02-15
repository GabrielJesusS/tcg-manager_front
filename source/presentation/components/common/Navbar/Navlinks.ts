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
        name: "Construtor",
        url: "/decks/new",
      },
      {
        name: "Novos",
        url: "/decks",
      },
    ],
  },
  {
    id: 2,
    title: "Decks",
    links: [
      {
        name: "Listagem",
        url: "/decks",
      },
      {
        name: "Construtor",
        url: "/decks/new",
      },
      {
        name: "Novos",
        url: "/decks",
      },
    ],
  },
];
