import { StatusEnum } from "@/presentation/enums/NotifyTypeEnum";
import { StatusTag } from "../common/StatusTag";
import { Button } from "../common/Button";
import TrashCan from "@/presentation/public/images/icons/trash.svg";

export const AdminManagerList = (): JSX.Element => {
  return (
    <div className=" overflow-auto w-full">
      <table className="w-full">
        <thead className="bg-system-100 border-b-2 border-system-400">
          <tr>
            <th className="p-2 w-20 text-sm font-semibold tracking-wide text-left">
              Id
            </th>
            <th className="p-2 text-sm font-semibold tracking-wide text-left">
              Nome
            </th>
            <th className="p-2 w-28 text-sm font-semibold tracking-wide text-left">
              Publicado
            </th>
            <th className="p-2 w-28 text-sm font-semibold tracking-wide text-left">
              Aprovação
            </th>
            <th className="p-2 text-sm font-semibold tracking-wide text-center">
              Visualizar
            </th>
            <th className="p-2 text-sm font-semibold tracking-wide text-center">
              Excluir
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-system-200">
          {Array.from({ length: 20 })
            .map((_, idx) => idx)
            .map((e) => (
              <tr key={e}>
                <td className="p-2 text-sm text-system-800 whitespace-nowrap">
                  1
                </td>
                <td className="p-2 text-sm text-system-800  truncate max-w-[120px]">
                  Gabrield asd as asdd asd s ds asd asd asd{" "}
                </td>
                <td className="p-2 text-sm text-system-800 whitespace-nowrap">
                  32/01/2003
                </td>
                <td className="p-2 text-sm text-system-800 whitespace-nowrap">
                  <StatusTag message="Aprovado" status={StatusEnum.SUCCESS} />
                </td>
                <td className="p-2 text-sm text-system-800 whitespace-nowrap">
                  <Button className="mx-auto">Visualizar</Button>
                </td>
                <td className="p-2 text-sm text-system-800 whitespace-nowrap ">
                  <button className="text-error p-1 rounded-lg w-fit block mx-auto  hover:bg-error hover:text-white">
                    <TrashCan />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
