import { useCallback } from "react";
import { Small } from "../components/richText/elements/text/Small";
import { Paragraph } from "../components/richText/elements/text/Paragraph";
import { HeadingOne } from "../components/richText/elements/text/HeadingOne";
import { HeadingTwo } from "../components/richText/elements/text/HeadingTwo";
import { SubHeading } from "../components/richText/elements/text/SubHeading";
import { ELEMENT_TYPES_ENUM } from "../enums/ElementTypes";
import { LinkText } from "../components/richText/elements/text/LinkText";


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
      
      default:
        return <Paragraph {...props} />;
    }
  }, []);

  return { renderElement };
};
