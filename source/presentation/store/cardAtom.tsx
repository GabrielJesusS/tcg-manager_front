import { atom } from "recoil";
import { IPokemonCard } from "../@types/IPokemonCard";

export const pokemonCardIdAtom = atom<string| null>({
    key: "PokemonCardIdAtom",
    default: null
})