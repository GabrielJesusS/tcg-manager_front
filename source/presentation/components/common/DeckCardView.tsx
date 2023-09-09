import { PageRoutesEnum } from "@/presentation/enums/PagesEnum";
import Link from "next/link";
import { useState } from "react";
import { usePopper } from "react-popper";

interface IDeckCardView {
  quantity: number;
  name: string;
  image: string;
  id: string;
}

export const DeckCardView = ({
  quantity,
  id,
  name,
  image,
}: IDeckCardView): JSX.Element => {
  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(
    null
  );
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "auto",
  });

  return (
    <div
      ref={setReferenceElement}
      className=" group relative hover:bg-secondary/5"
    >
      <span className="space-x-4">
        <span className="font-bold">{quantity}x</span>
        <Link className="dft-link" href={`${PageRoutesEnum.CARDS}${id}`}>
          {name}
        </Link>
      </span>
      <div
        style={styles.popper}
        {...attributes.popper}
        ref={setPopperElement}
        className=" hidden md:opacity-0 md:block w-52 z-20 md:group-hover:opacity-100 transition-all duration-150 md:absolute top-0 bottom-0 m-auto right-0 md:group-hover:-translate-y-40"
      >
        <img className="mx-auto" src={image} alt="" />
      </div>
      <div className="md:hidden">
        <img className="mx-auto" src={image} alt="" />
      </div>
    </div>
  );
};
