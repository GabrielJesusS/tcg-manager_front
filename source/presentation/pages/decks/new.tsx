import { DeckCardList } from "@/presentation/components/common/DeckCardList";
import { Dropdown } from "@/presentation/components/common/Dropdown";
import { DeckCardInsertModal } from "@/presentation/components/common/modals/DeckCardInsertModal";
import { DeckCardRemoveModal } from "@/presentation/components/common/modals/DeckCardRemoveModal";
import { Textinput } from "@/presentation/components/common/Textinput";
import { DefaultLayout } from "@/presentation/components/layouts/DefaultLayout";
import { deckComposeSchema } from "@/presentation/schemas/deckComposeSchema";
import {
  deckComposeArrayAtom,
  deckComposeAtom,
  totalDeckCardsAtom,
} from "@/presentation/store/genericAtoms";
import { deckCardInsertAtom } from "@/presentation/store/modal";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { useRecoilValue } from "recoil";

interface INewDeckParams {
  deckName: string;
  deckDescription: string;
  deckCover: string;
  deckDiff: number;
  deckCardQuantity: number;
  deckCards: {
    cardId: string;
    name: string;
    quantity: number;
    subtypes: string[];
    supertype: string;
  }[];
}

const NewDeck = ({}) => {
  const isOpen = useRecoilValue(deckCardInsertAtom);
  const totalCards = useRecoilValue(totalDeckCardsAtom);
  const deck = useRecoilValue(deckComposeArrayAtom);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<INewDeckParams>({
    resolver: yupResolver(deckComposeSchema),
  });

  const { fields, append } = useFieldArray({
    control,
    name: "deckCards",
  });

  const submitData: SubmitHandler<INewDeckParams> = (data) => {
    console.log(data);
  };

  const checkData = async () => {
    await setValue("deckCards", [...deck]);
    await setValue("deckCardQuantity", totalCards);
  };

  useEffect(() => {
    checkData();
  }, [deck]);

  return (
    <>
      <DefaultLayout>
        <main className="flex flex-col grow justify-center items-center bg-red-400 h-full">
          <div className="w-full p-safe">
            <h1 className="text-2xl font-bold text-center">Novo deck</h1>
            <section className="bg-system w-full p-3 rounded-lg ">
              <form action="" className="space-y-3">
                <div className="space-y-3 md:space-y-0  md:grid md:grid-cols-2 md:gap-safe">
                  <Textinput
                    placeholder="Titulo..."
                    label="Titulo do deck:"
                    type="text"
                    inputProps={{ ...register("deckName") }}
                  />
                  <Textinput
                    placeholder="Descrição..."
                    label="Descrição do deck:"
                    type="text"
                    inputProps={{ ...register("deckDescription") }}
                  />
                  <Dropdown
                    label="Carta cover"
                    selectPlaceholder="Selecione uma carta de capa"
                    options={[{ text: "op1", value: "op1" }]}
                    inputProps={{ ...register("deckCover") }}
                  />
                  <Dropdown
                    label="Dificuldade"
                    selectPlaceholder="Você considera este deck..."
                    options={[{ text: "op1", value: 1 }]}
                    inputProps={{ ...register("deckDiff") }}
                  />
                </div>
                <div>
                  <div className="font-semibold text-lg flex justify-between">
                    <p>Cartas:</p> <span>{totalCards}</span>
                  </div>
                  <DeckCardList register={register} appendFunction={append} />
                </div>
                <button
                  type="button"
                  onClick={handleSubmit(submitData)}
                  className="btn btn-primary w-full"
                >
                  Publicar
                </button>
                <p>{errors.deckCardQuantity?.message}</p>
                <p>{errors.deckCards?.message}</p>
              </form>
            </section>
          </div>
        </main>
        <DeckCardRemoveModal />
        <DeckCardInsertModal />
      </DefaultLayout>
    </>
  );
};

export default NewDeck;
