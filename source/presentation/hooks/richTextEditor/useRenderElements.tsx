import { useCallback } from "react";
import { Small } from "../../components/richText/elements/text/Small";
import { Paragraph } from "../../components/richText/elements/text/Paragraph";
import { HeadingOne } from "../../components/richText/elements/text/HeadingOne";
import { HeadingTwo } from "../../components/richText/elements/text/HeadingTwo";
import { SubHeading } from "../../components/richText/elements/text/SubHeading";
import { ELEMENT_TYPES_ENUM } from "../../enums/ElementTypes";
import { LinkText } from "../../components/richText/elements/text/LinkText";
import { Quote } from "@/presentation/components/richText/elements/text/Quote";
import { ImageElm } from "@/presentation/components/richText/elements/void/Image";


export const useRenderElement = () => {
  const renderElement = useCallback((props) => {
    switch (props.element.type) {
      case ELEMENT_TYPES_ENUM.SMALL:
        return <Small {...props} />;

      case ELEMENT_TYPES_ENUM.HEADING_ONE:
        return <HeadingOne {...props} />;

      case ELEMENT_TYPES_ENUM.HEADING_TWO:
        return <HeadingTwo {...props} />;

      case ELEMENT_TYPES_ENUM.SUBHEADING:
        return <SubHeading {...props} />;
      
      case ELEMENT_TYPES_ENUM.LINK:
        return <LinkText {...props} />;
      
      case ELEMENT_TYPES_ENUM.QUOTES:
        return <Quote {...props}/>
      
      case ELEMENT_TYPES_ENUM.IMAGE:
      return <ImageElm {...props} />

      default:
        return <Paragraph {...props} />;
    }
  }, []);

  return { renderElement };
};
