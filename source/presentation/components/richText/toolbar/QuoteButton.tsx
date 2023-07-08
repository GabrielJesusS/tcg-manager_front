import QuoteIcon from "@/presentation/public/images/icons/editor/quote-close.svg";
import { Editor } from "slate";
import { ButtonBase } from "./ButtonBase";

interface IQuoteButton {
  editor: Editor;
}

export const QuoteButton = ({ editor }: IQuoteButton) => {

  return (
    <ButtonBase>
      <QuoteIcon className="h-6" />
    </ButtonBase>
  );
};
