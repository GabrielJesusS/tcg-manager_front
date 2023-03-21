interface ICardAbilities{
    type: string;
    name: string;
    text: string;
}


export const CardAbilities = ({type, name, text}:ICardAbilities) => {
  return (
    <>
      <p className="text-base sm:text-lg font-semibold">
        <span>{type}: </span>
        <span>{name}</span>
      </p>
      <p>{text}</p>
    </>
  );
};
