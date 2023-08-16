import { HTMLAttributes, ReactSVGElement } from "react";
import Colorless from "./colorless.svg";
import Darkness from "./darkness.svg";
import Dragon from "./dragon.svg";
import Fairy from "./fairy.svg";
import Fighting from "./fighting.svg";
import Fire from "./fire.svg";
import Grass from "./grass.svg";
import Lightning from "./lightning.svg";
import Metal from "./metal.svg";
import Psychic from "./psychic.svg";
import Water from "./water.svg";
import { PokemonTypesEnum } from "@/presentation/enums/PokemonTypesEnum";

export const PokemonTypeIcons: Partial<Record<PokemonTypesEnum, JSX.Element>> =
  {
    [PokemonTypesEnum.DARK]: <Darkness />,
    [PokemonTypesEnum.DRAGON]: <Dragon />,
    [PokemonTypesEnum.LIGHTNING]: <Lightning />,
    [PokemonTypesEnum.FAIRY]: <Fairy />,
    [PokemonTypesEnum.FIGHTER]: <Fighting />,
    [PokemonTypesEnum.FIRE]: <Fire />,
    [PokemonTypesEnum.GRASS]: <Grass />,
    [PokemonTypesEnum.COLORLESS]: <Colorless />,
    [PokemonTypesEnum.PSYCHIC]: <Psychic />,
    [PokemonTypesEnum.METAL]: <Metal />,
    [PokemonTypesEnum.WATER]: <Water />,
  };
