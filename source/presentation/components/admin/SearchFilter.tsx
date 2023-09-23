import { AdminListFilter } from "./AdminListFilter";

export const SearchFilter = (): JSX.Element => {
  return (
    <div className="space-y-4 sticky -top-safe bg-red-500 z-20">
      <h1 className="text-4xl font-bold">Listagem de decks</h1>
      <AdminListFilter />
    </div>
  );
};
