import { HTMLAttributes } from "react";

interface CommentProps extends HTMLAttributes<HTMLElement> {
  userName: string;
  releaseDate: string;
  profilePicture: string;
  comment: string;
}

export const Comment = ({
  userName,
  releaseDate,
  profilePicture,
  comment,
}: CommentProps) => {
  return (
    <article className="bg-red-500 p-2 rounded-lg flex space-x-8 items-center">
      <div className="rounded-full overflow-clip h-fit w-fit grow shrink-0">
        <picture>
          <img
            src={profilePicture}
            alt={`${userName} profile picture`}
            width={70}
            height={70}
          />
        </picture>
      </div>
      <div>
        <header>
          <h1 className="inline w-fit font-bold">{userName}</h1> -{" "}
          <time className="inline">{releaseDate}</time>
        </header>
        <p>{comment}</p>
      </div>
    </article>
  );
};
