interface ICardFilter {
  name: string
  types: string;
  supertype: string;
  subtypes: string ;
}

export function generateFilterString(filterProps: ICardFilter): string {
  const parsedFilterName: ICardFilter = {
    ...filterProps,
    name: filterProps.name && `*${filterProps.name}*`,
  };

  return Object.entries(parsedFilterName)
    .filter((item) => item[1] !== '')
    .reduce((acc, item) => {
      return (
        acc +
        item
          .flatMap((m) => m)
          .toString()
          .replace(",", ":") +
        " "
      );
    }, "");
}
