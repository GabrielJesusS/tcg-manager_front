import { PageRoutesEnum } from "@/presentation/enums/PagesEnum";
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

export const Breadcrumb = (): JSX.Element => {
  const { asPath, pathname } = useRouter();

  const paths: IPathItems[] = useMemo(() => {
    const pathNames = asPath.split("/").filter((item) => item && item);
    const parsedPaths = pathNames.reduce<string[]>(
      (acc, item) => [...acc, "/" + item],
      []
    );

    return pathNames.reduce(
      (acc, item, index) => [...acc, { path: parsedPaths[index], name: item }],
      []
    );
  }, [asPath]);

  return (
    <div className="absolute z-10 left-6 top-20 hidden md:block">
      <ol className="font-bold text-system-200 flex items-end">
        <li>
          <Link
            href={PageRoutesEnum.HOME}
            className="flex w-fit items-end space-x-1 hover:text-secondary hover:fill-secondary transition-all duration-150 ease-in-out"
          >
            <HomeIcon className="h-6 w-6 fill-current" />
            <span className="block leading-none">home</span>
          </Link>
        </li>
        {paths.map((path) => (
          <li key={path.name}>
            <Link
              href={path.path}
              className="flex items-end hover:text-secondary"
            >
              <ArrowIcon className="h-4 w-4 fill-current" />
              <span
                className={classNames("block leading-none border-b-2 border-spacing-2 border-secondary", {
                  "text-system hover:text-secondary":
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
