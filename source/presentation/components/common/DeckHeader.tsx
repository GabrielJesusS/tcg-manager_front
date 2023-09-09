interface IDeckHeaderProps {
  children?: React.ReactNode;
  thumbnail?: string;
  title: string;
}

export const DeckHeader = ({
  children,
  title,
  thumbnail,
}: IDeckHeaderProps): JSX.Element => {
  return (
    <div className="relative h-fit">
      {children}
      <div className="absolute bg-system-800 h-full w-full left-0 top-0 ">
        <img
          className="object-cover w-full h-full mix-blend-overlay"
          src={thumbnail}
          height={700}
          width={1200}
          alt="pokemon forest background"
        />
      </div>
      <h1 className="relative mx-auto font-bold text-center py-4 uppercase text-system text-3.5xl line-clamp-1 leading-normal lg:py-16">
        {title}
      </h1>
    </div>
  );
};
