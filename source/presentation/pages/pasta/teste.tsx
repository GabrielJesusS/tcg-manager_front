import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { Comment } from "../../components/common/Comment";
import { Dropdown } from "../../components/common/Dropdown";
import { PaginationBlock } from "../../components/common/Pagination";
import { Radioinput } from "../../components/common/Radioinput";
import { CardSkeleton } from "../../components/common/skeletons/CardSkeleton";
import { CommentItems } from "../../data/mocks/commentMock";
import { cardPaginationAtom } from "../../store/paginations";
import { Breadcrumb } from "../../components/common/Breadcrumb";
import { useState } from "react";

export default function x() {
  const [data, setData] = useState("")

  const {query} = useRouter();
 
  console.log(data)
  

  return (
    <>
      <Dropdown
        label="Itens"
        setter={setData}
        selectedOption={data}
        placeholder="Selecione um deck"
        options={[{ id: 1,text: "opt1", value: "222" }]}
      ></Dropdown>
      <Radioinput radioName="Nota do deck" optionsQtd={5}></Radioinput>
     
     <Breadcrumb></Breadcrumb>

      <div className="flex p-safe space-x-6">
        <button className="btn btn-primary" type="button">ola sou um botão</button>
      </div>
    </>
  );
}
