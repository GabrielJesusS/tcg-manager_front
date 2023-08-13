import { useRecoilState } from "recoil";
import { DefaultQuestionModal } from "./DefaultQuestionModal";
import { articleEditAtom } from "@/presentation/store/modal";
import { useLockBody } from "@/presentation/hooks/useLockBody";
import { ArticleEditForm } from "../Forms/ArticleEditForm";
import { useWindowSize } from "@/presentation/hooks/useWindowSize";
import { useMemo } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  IArticleSchema,
  articleSchema,
} from "@/presentation/schemas/articleSchema";
import { useForm } from "react-hook-form";

export const ArticleEditModal = (): JSX.Element => {
  const [isOpen, setOpen] = useRecoilState(articleEditAtom);
  const [_, unlock] = useLockBody();

  const form = useForm<IArticleSchema>({
    resolver: yupResolver(articleSchema),
  });

  const windowSize = useWindowSize();

  function handleModalOpen(): void {
    unlock();
    setOpen(false);
  }

  const isFullSize = useMemo(
    () => (windowSize.width ? windowSize.width < 767 : false),
    [windowSize]
  );

  return (
    <DefaultQuestionModal
      title="Informações do artigo"
      isOpen={isOpen}
      close={handleModalOpen}
      fullSize={isFullSize}
    >
      <ArticleEditForm form={form} />
    </DefaultQuestionModal>
  );
};
