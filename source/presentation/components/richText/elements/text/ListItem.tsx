import { RenderElementProps } from "slate-react";

export const ListItem = (props: RenderElementProps): JSX.Element => {
  return <li {...props.attributes}>{props.children}</li>;
};
