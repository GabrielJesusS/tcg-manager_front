import { useRecoilValue } from "recoil";
import { Dropdown } from "../Dropdown";
import { TextInput } from "../Textinput";
import {
  deckComposeArrayAtom,
  userDataAtom,
} from "@/presentation/store/genericAtoms";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../Button";
import { createCreateDeckUseCase } from "@/factories/createCreateDeckUseCase";
import { useGetProfile } from "@/presentation/hooks/useGetProfile";

const Data = [
  {
    id: 1,
    text: "Muito fácil",
    value: 1,
  },
  {
    id: 2,
    text: "Fácil",
    value: 2,
  },
  {
    id: 3,
    text: "Médio",
    value: 3,
  },
  {
    id: 4,
    text: "Difícil",
    value: 4,
  },
  {
    id: 5,
    text: "Muito difícil",
    value: 5,
  },
];

const createDeckUseCase = createCreateDeckUseCase();

export const DeckBuilderMeta = (): JSX.Element => {
  const { register, handleSubmit, control } = useForm();
  const { data: user } = useGetProfile();

  const cards = useRecoilValue(deckComposeArrayAtom);

  async function submitHandler(data): Promise<void> {
    const parsedCards = cards
      .map((e) =>
        Array.from({ length: e.quantity }).fill({ card_id: e.cardId })
      )
      .flat() as Array<{ card_id: string }>;

    const response = await createDeckUseCase.execute({
      cards: parsedCards,
      user: { id: user?.id },
      ...data,
    });

    if (response.isLeft()) {
      console.log("error");
      return;
    }

    console.log(data, parsedCards);
  }

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="bg-system shadow-md rounded-2xl py-5 px-6 space-y-4"
    >
      <h2 className="font-bold text-2xl text-center sm:whitespace-nowrap">
        Informações do deck
      </h2>
      <TextInput
        placeholder="Nome do deck..."
        type="text"
        label="Nome do deck"
        {...register("name")}
      />
      <TextInput
        placeholder="Descrição do deck..."
        type="text"
        label="Descrição do deck"
        {...register("description")}
      />
      <Controller
        name="difficulty"
        control={control}
        defaultValue={""}
        render={({ field: { onChange, value } }) => (
          <Dropdown
            placeholder="Este deck é..."
            options={Data}
            selectedOption={value}
            setter={onChange}
            label="Dificuldade do deck"
          />
        )}
      />

      <Button full>Publicar novo deck</Button>
    </form>
  );
};
