import classNames from "classnames";

interface IAvatarProps {
  size?: "small" | "large";
  className?: string;
  image: string;
}

export const Avatar = ({
  className,
  image,
  size = "large",
}: IAvatarProps): JSX.Element => {
  return (
    <span
      className={classNames(
        " bg-system-200 block border-solid border-8 border-system-800 rounded-full",
        { "w-60 h-60": size === "large", "w-32 h-32": size === "small" },
        className
      )}
    >
      <img
        src={image}
        className="w-full aspect-square object-cover rounded-full"
        alt={"user profile picture"}
      />
    </span>
  );
};
