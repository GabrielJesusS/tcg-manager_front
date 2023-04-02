import { createGetCardListUsecase } from "@/factories/createGetCardListUsecase";
import {
  actualCardOnComposeAtom,
  deckComposeAtom,
  deckComposeIdsAtom,
} from "@/presentation/store/genericAtoms";
import { deckCardInsertAtom, deckFilterAtom } from "@/presentation/store/modal";
import { useEffect, useState } from "react";
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

interface ICardListParams {
  id: string;
  name: string;
  subtypes: string[];
  supertype: string;
  images: {
    small: string;
    large: string;
  };
}

interface ICardParams {
  pokemonCards: {
    cardId: string;
    name: string;
    image: string;
    subtypes: string[];
    supertype: string;
  }[];
}

const getCardList = createGetCardListUsecase();

export const DeckCardInsertModal = ({}: DeckCardInsertModalProps) => {
  const [isOpen, setOpen] = useRecoilState(deckCardInsertAtom);
  const [composeIds, insertOnCompose] = useRecoilState(deckComposeIdsAtom);
  const setActualCards = useSetRecoilState(actualCardOnComposeAtom);
  const [pokemonCardList, setPokemonCardList] = useState<ICardListParams[]>([]);

  function toggleOpen() {
    setOpen(!isOpen);
  }

  async function searchCard(name?: string) {
    const response = await getCardList.execute();

    if (response.isLeft()) {
      console.log(response.value);
      return;
    }

    if (response.isRight()) {
      setPokemonCardList(response.value);
    }
  }

  useEffect(() => {
    searchCard();
  }, []);

  const { control, register, handleSubmit } = useForm<ICardParams>();

  const { fields, append } = useFieldArray<ICardParams>({
    control,
    name: "pokemonCards",
  });

  useEffect(() => {
    pokemonCardList.forEach((e) => {
      append({
        cardId: e.id,
        name: e.name,
        image: e.images.small,
        subtypes: e.subtypes,
        supertype: e.supertype,
      });
    });
  }, [pokemonCardList]);

  const insertCard: SubmitHandler<ICardParams> = async (data) => {
    const newCard = await JSON.parse(data.pokemonCards.toString());
    insertOnCompose([...composeIds, newCard.cardId]);
    setActualCards({ ...newCard, quantity: 1 });

    toggleOpen();
  };

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
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 grid-flow-row">
                {fields.map((field, index) => {
                  return (
                    <div key={field.id} className="relative">
                      <input
                        {...register(`pokemonCards`)}
                        type="radio"
                        value={JSON.stringify(field)}
                        className={"absolute w-full h-full opacity-0 peer"}
                      />
                      <img
                        alt=""
                        width={160}
                        height={222}
                        src={field.image}
                        className="w-full peer-checked:border-4 peer-checked:opacity-75 peer-checked:border-secondary peer-checked:rounded-lg"
                      ></img>
                    </div>
                  );
                })}
              </div>
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
