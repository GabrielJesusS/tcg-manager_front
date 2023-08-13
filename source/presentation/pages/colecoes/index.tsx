import { SetList } from "@/presentation/components/common/SetlList";
import { SearchLayout } from "@/presentation/components/layouts/SearchLayout";

const Sets = (): JSX.Element => {
  return (
    <SearchLayout tilte="Coleções" filters={<></>}>
      <SetList />
    </SearchLayout>
  );
};

export default Sets;
