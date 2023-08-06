import { BoldButton } from "./BoldButton";
import { TextLevelSelector } from "./TextLevelSelector";
import { LinkButton } from "./LinkButton";
import { ImageButton } from "./ImageButton";
import { ItalicButton } from "./ItalicButton";
import { UnderlineButton } from "./UnderlineButton";
import { QuoteButton } from "./QuoteButton";
import { ListButton } from "./ListButton";
import { ColorPicker } from "./ColorPicker";
import { AlignmentButton } from "./AlignmentButton";
import { NumberedListButton } from "./NumberedListButton";

export const ToolBar = (): JSX.Element => {
  return (
    <div className="bg-system-100 h-fit py-4 rounded-lg md:py-1 w-full flex flex-col md:flex-row md:space-x-8 px-safe md:space-y-0 space-y-2 pb-4 md:pb-1 md:rounded-full sticky top-32 md:top-16 z-20">
      <TextLevelSelector />
      <div className="md:space-x-2 grid grid-cols-4 sm:grid-cols-6 md:flex gap-4 md:flex-wrap">
        <BoldButton />
        <ItalicButton />
        <UnderlineButton />
        <QuoteButton />
        <LinkButton />
        <NumberedListButton />
        <ListButton />
        <AlignmentButton />
        <ImageButton />
        <ColorPicker />
      </div>
    </div>
  );
};
