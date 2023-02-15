import Link from "next/link";

interface INavitem {
  id: number;
  subitem: ILinks[]
}

interface ILinks {
    name: string;
    url: string;
  }

export const Navitem = ({ id, subitem}: INavitem) => {
  return (
    <ul>
      {subitem.map((item) => (
        <li key={id + item.name}>
          <Link href={item.url}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
};
