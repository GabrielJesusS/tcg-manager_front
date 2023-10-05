import { Controller, UseFormReturn } from "react-hook-form";
import { ImageUploader } from "../ImageUploader";
import { StatusTag } from "../StatusTag";
import { TextInput } from "../Textinput";
import imagePreview from "@/presentation/public/images/rsc/imagePreview.png";
import { IArticleSchema } from "@/presentation/schemas/articleSchema";

import {
  articleContentAtom,
  articleStatusAtom,
  articleTitleAtom,
  imageListSelector,
} from "@/presentation/store/editor";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isBaseDataImage } from "@/presentation/utils/isBaseDataImage";
import { StatusEnum } from "@/presentation/enums/NotifyTypeEnum";
import { userDataAtom } from "@/presentation/store/genericAtoms";
import { serialize } from "@/presentation/utils/editor/serializeArticle";
import { Descendant } from "slate";
import { createCreateArticleUseCase } from "@/factories/createCreateArticleUseCase";

interface IArticleEditFormProps {
  form: UseFormReturn<IArticleSchema>;
}

const createArticleUseCase = createCreateArticleUseCase();

export const ArticleEditForm = ({
  form,
}: IArticleEditFormProps): JSX.Element => {
  const articleContent = useRecoilValue(articleContentAtom);
  const articleImageList = useRecoilValue(imageListSelector);
  const articleStatus = useRecoilValue(articleStatusAtom);
  const userData = useRecoilValue(userDataAtom);
  const { register, control, setValue, handleSubmit } = form;
  const setTitle = useSetRecoilState(articleTitleAtom);

  function handleImageUpload(e: File[] | FileList): void {
    const image = e[0];

    const reader = new FileReader();
    const [mime] = image.type.split("/");

    if (mime === "image") {
      reader.addEventListener("load", () => {
        const url = reader.result;
        setValue("imageUrl", url as string);
      });

      reader.readAsDataURL(image);
    }

    console.log(image);
  }

  function handleSendArticle(content: Descendant[]): string {
    return content.flatMap(serialize).reduce((acc, item) => acc + item, "");
  }

  async function handleArticleMetadataSubmit(
    data: IArticleSchema
  ): Promise<void> {
    const serializedArticle = handleSendArticle(articleContent);

    if (!userData) return;

    const response = await createArticleUseCase.execute({
      title: data.title,
      description: data.description,
      content: serializedArticle,
      user: userData,
      uploadImages: articleImageList.map((e) => ({
        originalName: e.name,
        string64: e.src,
        identifier: e.key,
      })),
    });

    console.log(response);
  }

  return (
    <div className="p-safe md:p-0">
      <form
        onSubmit={handleSubmit(handleArticleMetadataSubmit)}
        className="flex flex-col space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-4 w-full justify-between my-4"
      >
        <div className="space-y-4 flex flex-col">
          <Controller
            control={control}
            name="title"
            defaultValue=""
            render={({ field }) => (
              <TextInput
                type="text"
                label="Título do artigo"
                placeholder="Meu artigo..."
                {...field}
                onChange={(e) => {
                  setTitle(e.target.value);
                  field.onChange(e);
                }}
              />
            )}
          />
          <TextInput
            type="text"
            label="Descrição do artigo"
            placeholder="Este artigo fala..."
            {...register("description")}
          />
          <div className="flex-1">
            {/*  <label>
              <span>Tags</span>
              <AutoCompleteBox placeholder="Tags do artigo" options={[]} />
            </label>
            <div className="mt-2 h-28 overflow-y-auto bg-system shadow-md border border-solid  p-4 rounded-lg ">
              <ol className=" h-full flex flex-wrap -ml-2 -mt-2">
                {Array.from({ length: 50 }).map((e, i) => (
                  <li className="ml-2 mt-2" key={"w" + i.toString()}>
                    <Tag text="rere" onClose={console.log} />
                  </li>
                ))}
              </ol>
            </div> */}
          </div>
          <div className="md:flex items-center space-x-4 hidden">
            <p>Status:</p>
            <StatusTag
              description={articleStatus.statusDescription}
              message={articleStatus.statusMessage}
              status={articleStatus.status}
            />
          </div>
        </div>
        <div className="space-y-4 md:border-l md:pl-4 border-system-400">
          <Controller
            control={control}
            name="imageUrl"
            defaultValue=""
            render={({ field }) => (
              <TextInput
                type="text"
                label="Passe uma URL"
                placeholder="URL da imagem"
                {...field}
                onChange={(e) => {
                  if (isBaseDataImage(e.target.value)) {
                    field.onChange("");
                    return;
                  }
                  field.onChange(e.target.value);
                }}
                value={isBaseDataImage(field.value) ? "" : field.value}
              />
            )}
          />
          <ImageUploader
            onChange={handleImageUpload}
            label="Subir uma imagem"
          />
          <p>Preview capa do artigo</p>
          <Controller
            control={control}
            name="imageUrl"
            render={({ field: { value } }) => (
              <div className="bg-system-200 grow relative w-full">
                {isBaseDataImage(value) ? (
                  <StatusTag
                    description="bla bla bla bla bla bla"
                    message="Atenção"
                    status={StatusEnum.WARNING}
                    badge
                  />
                ) : null}
                <img
                  src={value || imagePreview.src}
                  className="aspect-video object-contain w-full h-full shrink-0"
                  loading="lazy"
                />
              </div>
            )}
          />
          <div className="flex md:hidden items-center space-x-4">
            <p>Status:</p>
            <StatusTag
              description={articleStatus.statusDescription}
              message={articleStatus.statusMessage}
              status={articleStatus.status}
            />
          </div>
          <button className="btn btn-primary h-fit mx-auto">
            Publicar novo artigo
          </button>
        </div>
      </form>
    </div>
  );
};
