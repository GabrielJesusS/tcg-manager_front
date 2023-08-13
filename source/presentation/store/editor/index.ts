import { ElementTypesEnum } from "@/presentation/enums/ElementTypes";
import { StatusEnum } from "@/presentation/enums/NotifyTypeEnum";
import { isBaseDataImage } from "@/presentation/utils/isBaseDataImage";
import { atom, selector } from "recoil";
import { Descendant, Element } from "slate";

interface IArticleStatusAtom {
  status: StatusEnum;
  statusMessage: string;
  statusDescription: string;
}

interface IImageListSelector {
  name: string;
  src: string;
  key: string;
}

export const articleTitleAtom = atom<string>({
  key: "articleTitleAtom",
  default: "",
});

export const articleContentAtom = atom<Descendant[]>({
  key: "articleContentAtom",
  default: [],
});

export const articleStatusAtom = atom<IArticleStatusAtom>({
  key: "ArticleStatusAtom",
  default: {
    status: StatusEnum.NEW,
    statusDescription: "Este artigo ainda não foi públicado",
    statusMessage: "Novo!",
  },
});

export const imageListSelector = selector<IImageListSelector[]>({
  key: "ImageListSelector",
  get: ({ get }) => {
    const articleContent = get(articleContentAtom);

    return articleContent.reduce<IImageListSelector[]>((acc, item) => {
      if (!Element.isElement(item)) return acc;

      if (item.type !== ElementTypesEnum.IMAGE) return acc;

      if (!isBaseDataImage(item.src)) return acc;

      return [...acc, { name: item.name, src: item.src, key: item.key }];
    }, []);
  },
});
