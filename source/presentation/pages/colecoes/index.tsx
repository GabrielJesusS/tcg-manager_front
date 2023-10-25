import { SetList } from "@/presentation/components/common/SetlList";
import { SearchLayout } from "@/presentation/components/layouts/SearchLayout";

const Sets = (): JSX.Element => {
  return (
    <SearchLayout disableFilters tilte="Coleções" filters={<></>} filterName="setList">
      <SetList />
    </SearchLayout>
  );
};

export default Sets;
