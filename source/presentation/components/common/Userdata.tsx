import classNames from "classnames";
import Link from "next/link";
import { HTMLAttributes } from "react";

interface UserdataProps extends HTMLAttributes<HTMLAnchorElement> {
  userId: string;
  username: string;
  userLevel: number;
  userPicture: string;
}

export const Userdata = ({
  userId,
  userLevel,
  username,
  userPicture,
  className,
}: UserdataProps): JSX.Element => {
  return (
    <Link
      href={`users/${userId}`}
      className={classNames(
        "flex shrink-0 items-center space-x-1 w-fit",
        className
      )}
    >
      <div className="rounded-full overflow-hidden w-10 h-10">
        <picture>
          <img
            height={40}
            width={40}
            className="h-10 w-10"
            src={userPicture}
            alt={"Foto de perfil do usuário " + username}
          />
        </picture>
      </div>
      <div className="space-y-1">
        <p className="leading-none text-system-800 block text-lg font-medium ">
          {username}
        </p>
        <small className="leading-none block text-system-400">
          Treinador de nível: {userLevel}
        </small>
      </div>
    </Link>
  );
};
