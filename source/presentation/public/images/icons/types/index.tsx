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

type pokemonIcon = Function;

interface PokemonTypeIconsX {
  [key: string]: React.FC<React.SVGProps<SVGSVGElement | HTMLImageElement>>;
}

const pokemonTypeIcons: PokemonTypeIconsX = {
  Colorless: () => <Colorless />,
  Darkness: () => <Darkness />,
  Dragon: () => <Dragon />,
  Fairy: () => <Fairy />,
  Fighting: () => <Fighting />,
  Fire: () => <Fire />,
  Grass: () => <Grass />,
  Lightning: () => <Lightning />,
  Metal: () => <Metal />,
  Psychic: () => <Psychic />,
  Water: () => <Water />,
};

interface x {
  name: string;
  props?: HTMLAttributes<HTMLOrSVGElement>
}

export const IconComponent = ({ name, props}: x): JSX.Element => {

  let Icon = pokemonTypeIcons[name]

  return  <Icon {...props} />
};
