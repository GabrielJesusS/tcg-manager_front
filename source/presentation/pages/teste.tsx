import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { Comment } from "../components/common/Comment";
import { Dropdown } from "../components/common/Dropdown";
import { PaginationBlock } from "../components/common/Pagination";
import { Radioinput } from "../components/common/Radioinput";
import { CardSkeleton } from "../components/common/skeletons/CardSkeleton";
import { CommentItems } from "../data/mocks/commentMock";
import { cardPaginationAtom } from "../store/paginations";

export default function x() {


  const {query} = useRouter();
 
  console.log(query.q)

  return (
    <>
      <Dropdown
        label="dwda"
        selectPlaceholder="Selecione 1"
        options={[{ text: "opt1", value: "222" }]}
      ></Dropdown>
      <Radioinput radioName="Nota do deck" optionsQtd={5}></Radioinput>
     
     

      <div className="flex p-safe space-x-6">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </>
  );
}
