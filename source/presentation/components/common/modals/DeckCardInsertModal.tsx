import { actualCardOnComposeAtom, deckComposeAtom, deckComposeIdsAtom } from "@/presentation/store/genericAtoms";
import { deckCardInsertAtom, deckFilterAtom } from "@/presentation/store/modal";
import {
  useForm,
  FieldArray,
  useFieldArray,
  SubmitHandler,
} from "react-hook-form";
import { useRecoilState, useSetRecoilState } from "recoil";
import { Modal } from "../Modal";
import { Textinput } from "../Textinput";

interface DeckCardInsertModalProps {}

interface ISearchCardParams {
  params: string;
}

interface ICardParams {
  pokemonCards: {
    cardId: string;
    name: string;
    image: string;
  }[];
}

export const DeckCardInsertModal = ({}: DeckCardInsertModalProps) => {
  const [isOpen, setOpen] = useRecoilState(deckCardInsertAtom);
  const [composeIds, insertOnCompose] = useRecoilState(deckComposeIdsAtom);
  const setActualCards = useSetRecoilState(actualCardOnComposeAtom);

  function toggleOpen() {
    setOpen(!isOpen);
  }

  const { control, register, handleSubmit } = useForm<ICardParams>({
    defaultValues: {
      pokemonCards: [
        {
          cardId: "1",
          name: "Venusaur",
          image: "https://images.pokemontcg.io/xy1/1.png",
        },
        {
          cardId: "2",
          name: "Beedrill",
          image: "https://images.pokemontcg.io/xy1/5.png",
        },
        {
          cardId: "3",
          name: "Ledyba",
          image: "https://images.pokemontcg.io/xy1/6.png",
        },
      ],
    },
  });

  const { fields } = useFieldArray<ICardParams>({
    control,
    name: "pokemonCards",
  });

  const insertCard: SubmitHandler<ICardParams> = async (data) => {
    const newCard = await JSON.parse(data.pokemonCards.toString())

  
    console.log(newCard)
    insertOnCompose([...composeIds, newCard.cardId])
    setActualCards({...newCard, quantity: 1})

    
   
    toggleOpen();
  };
  console.log(composeIds)

  return (
    <Modal close={toggleOpen} isOpen={isOpen}>
      <form>
        <div className="space-y-6">
          <Textinput
            label="Busque uma carta"
            type="text"
            placeholder="Chariz...."
          />
          <div>
            {/*  <p className="font-semibold text-lg">Desculpe, não encontrei :(</p> */}
            <fieldset className="overflow-scroll max-h-60">
              <ul className="grid grid-cols-2 gap-4 grid-flow-row">
                {fields.map((field, index) => {
                  return (
                    <li key={field.id}>
                      <label>
                        <input
                          {...register(`pokemonCards`)}
                          type="radio"
                          value={JSON.stringify(field)}
                        />
                        <img
                          alt=""
                          width={160}
                          height={222}
                          src={field.image}
                          className="w-full"
                        ></img>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </fieldset>
          </div>
        </div>
        <button
          onClick={handleSubmit(insertCard)}
          type="button"
          className="btn btn-primary w-full mt-20"
        >
          Adicionar
        </button>
      </form>
    </Modal>
  );
};
