import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { Comment } from "../../components/common/Comment";
import { Dropdown } from "../../components/common/Dropdown";
import { PaginationBlock } from "../../components/common/Pagination";
import { Radioinput } from "../../components/common/Radioinput";
import { CardSkeleton } from "../../components/common/skeletons/CardSkeleton";
import { CommentItems } from "../../data/mocks/commentMock";
import { Breadcrumb } from "../../components/common/Breadcrumb";
import { useState } from "react";
import { useWindowSize } from "@/presentation/hooks/useWindowSize";
import { useGetMobile } from "@/presentation/hooks/useGetMobile";
import { SetSkeleton } from "@/presentation/components/common/skeletons/SetSkeleton";

export default function x(): JSX.Element {
  const [data, setData] = useState("");

  const { query } = useRouter();

  const windowSize = useWindowSize();
  const isMobile = useGetMobile();

  return (
    <>
      <Dropdown
        label="Itens"
        setter={setData}
        selectedOption={data}
        placeholder="Selecione um deck"
        options={[{ id: 1, text: "opt1", value: "222" }]}
      ></Dropdown>
      <Radioinput radioName="Nota do deck" optionsQtd={5}></Radioinput>

      <Breadcrumb></Breadcrumb>

      <div className="grid-cols-4 w-full grid gap-6">
        <SetSkeleton></SetSkeleton>
        <SetSkeleton></SetSkeleton>
        <SetSkeleton></SetSkeleton>
        <SetSkeleton></SetSkeleton>
      </div>
      <div className="flex p-safe space-x-6">
        <button className="btn btn-primary" type="button">
          ola sou um botão
        </button>
      </div>
    </>
  );
}
