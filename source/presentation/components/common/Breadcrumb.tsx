import { PAGE_ROUTES } from "@/presentation/enums/PagesEnum";
import Link from "next/link";
import { useRouter } from "next/router";
import HomeIcon from "@/presentation/public/images/icons/home.svg";
import ArrowIcon from "@/presentation/public/images/icons/chevron.svg";
import { useMemo } from "react";
import classNames from "classnames";

interface IPathItems {
  path: string;
  name: string;
}

export const Breadcrumb = () => {
  const { asPath, pathname } = useRouter();

  const paths: IPathItems[] = useMemo(() => {
    const pathNames = asPath.split("/").filter((item) => item && item);
    const parsedPaths = pathNames.reduce(
      (acc, item) => [...acc, acc + "/" + item],
      []
    );
    return pathNames.reduce(
      (acc, item, index) => [...acc, { path: parsedPaths[index], name: item }],
      []
    );
  }, [asPath]);

  return (
    <div>
      <ol className="fill-system-400 font-bold text-system-400 flex items-end">
        <li>
          <Link
            href={PAGE_ROUTES.HOME}
            className="flex w-fit items-end space-x-1 hover:text-secondary hover:fill-secondary transition-all duration-150 ease-in-out"
          >
            <HomeIcon className="h-6 w-6 fill-inherit" />
            <span className="block leading-none">home</span>
          </Link>
        </li>
        {paths.map((path) => (
          <li key={path.name}>
            <Link
              href={path.path}
              className="flex items-end hover:text-secondary"
            >
              <ArrowIcon className="h-4 w-4 fill-inherit" />
              <span
                className={classNames("block leading-none", {
                  "text-system-800 hover:text-secondary":
                    path.path === pathname,
                })}
              >
                {path.name}
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
};
