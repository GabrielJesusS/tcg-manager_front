import { useCallback } from "react";
import { Small } from "../../components/richText/elements/text/Small";
import { Paragraph } from "../../components/richText/elements/text/Paragraph";
import { HeadingOne } from "../../components/richText/elements/text/HeadingOne";
import { HeadingTwo } from "../../components/richText/elements/text/HeadingTwo";
import { SubHeading } from "../../components/richText/elements/text/SubHeading";
import { ElementTypesEnum } from "../../enums/ElementTypes";
import { LinkText } from "../../components/richText/elements/text/LinkText";
import { Quote } from "@/presentation/components/richText/elements/text/Quote";
import { ImageElm } from "@/presentation/components/richText/elements/void/Image";
import { NumberedList } from "@/presentation/components/richText/elements/text/NumberedList";
import { ListItem } from "@/presentation/components/richText/elements/text/ListItem";
import { List } from "@/presentation/components/richText/elements/text/List";

export const useRenderElement = () => {
  const renderElement = useCallback((props) => {
    switch (props.element.type) {
      case ElementTypesEnum.SMALL:
        return <Small {...props} />;

      case ElementTypesEnum.HEADING_ONE:
        return <HeadingOne {...props} />;

      case ElementTypesEnum.HEADING_TWO:
        return <HeadingTwo {...props} />;

      case ElementTypesEnum.SUBHEADING:
        return <SubHeading {...props} />;

      case ElementTypesEnum.LINK:
        return <LinkText {...props} />;

      case ElementTypesEnum.QUOTES:
        return <Quote {...props} />;

      case ElementTypesEnum.LIST:
        return <List {...props} />;

      case ElementTypesEnum.LIST_ITEM:
        return <ListItem {...props} />;

      case ElementTypesEnum.NUMBERED_LIST:
        return <NumberedList {...props} />;

      case ElementTypesEnum.IMAGE:
        return <ImageElm {...props} />;

      default:
        return <Paragraph {...props} />;
    }
  }, []);

  return { renderElement };
};
