import { Dropdown } from "../Dropdown";
import { TextInput } from "../Textinput";

export const DeckBuilderMeta = (): JSX.Element => {
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

  return (
    <div className="bg-system shadow-md rounded-2xl py-5 px-6 space-y-4">
      <h2 className="font-bold text-2xl text-center sm:whitespace-nowrap">
        Informações do deck
      </h2>
      <TextInput
        placeholder="Nome do deck..."
        type="text"
        label="Nome do deck"
      />
      <TextInput
        placeholder="Descrição do deck..."
        type="text"
        label="Descrição do deck"
      />
      <Dropdown
        placeholder="Este deck é..."
        options={Data}
        selectedOption=""
        setter={() => {}}
        label="Dificuldade do deck"
      />
      <button className="btn btn-primary w-full" type="button">
        Publicar novo deck
      </button>
    </div>
  );
};
