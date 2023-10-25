import { Loading } from "@/presentation/components/common/Loading";
import { PageRoutesEnum } from "@/presentation/enums/PagesEnum";
import { useGetRandomCard } from "@/presentation/hooks/useGetRandomCard";
import { useRouter } from "next/router";

export default function RandomCard(): JSX.Element {
  const { data, error, isLoading } = useGetRandomCard();
  const { replace } = useRouter();

  if (!isLoading && !error && data) {
    void replace(`${PageRoutesEnum.CARDS}${data.id}`);
  }

  if (error) {
    void replace(PageRoutesEnum.CARDS);
  }

  return <Loading />;
}
