import { AdminPagesEnum } from "@/presentation/enums/AdminPagesEnum";
import Logo from "@/presentation/public/images/logo/logo.svg";
import LogoutIcon from "@/presentation/public/images/icons/logout.svg";
import Link from "next/link";

const ADMIN_ROUTES = [
  {
    label: "Lista de decks",
    route: AdminPagesEnum.HOME,
  },
  {
    label: "Lista de artigos",
    route: AdminPagesEnum.ARTICLES,
  },
  {
    label: "Lista de usuários",
    route: AdminPagesEnum.USERS,
  },
];

export const AdminSideBar = (): JSX.Element => {
  return (
    <div className="max-w-xs w-full p-safe grow bg-primary h-screen flex flex-col text-system">
      <Logo className="w-52 mx-auto mb-12" />
        
      <nav className="grow">
        <ul className="space-y-4">
          {ADMIN_ROUTES.map((e) => (
            <li key={e.route}>
              <Link className="font-bold text-2xl" href={`/${e.route}`}>{e.label} </Link>
            </li>
          ))}
        </ul>
      </nav>

      <button className="w-full flex items-center justify-between font-semibold text-2xl hover:bg-primary-dark p-2 rounded-sm">
        Sair <LogoutIcon />
      </button>
    </div>
  );
};
