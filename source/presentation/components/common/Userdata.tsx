import { PageRoutesEnum } from "@/presentation/enums/PagesEnum";
import classNames from "classnames";
import Link from "next/link";
import { HTMLAttributes } from "react";
import UserProfileIcon from "@/presentation/public/images/icons/profile.svg";

interface UserdataProps extends HTMLAttributes<HTMLAnchorElement> {
  userId: string;
  username: string;
  userLevel: number;
  userPicture?: string;
}

export const Userdata = ({
  userId,
  username,
  userPicture,
  className,
}: UserdataProps): JSX.Element => {
  return (
    <Link
      href={`${PageRoutesEnum.USERS}${userId}`}
      className={classNames(
        "flex shrink-0 items-center space-x-1 w-fit",
        className
      )}
    >
      <div className="rounded-full overflow-hidden w-10 h-10">
        {userPicture ? (
          <picture>
            <img
              height={40}
              width={40}
              className="h-10 w-10"
              src={userPicture}
              alt={"Foto de perfil do usuário " + username}
            />
          </picture>
        ) : (
          <span className="bg-system-200 block text-system-400">
            <UserProfileIcon className="h-10 w-10" />
          </span>
        )}
      </div>
      <p className="leading-none text-system-800 block text-lg font-medium ">
        {username}
      </p>
    </Link>
  );
};
