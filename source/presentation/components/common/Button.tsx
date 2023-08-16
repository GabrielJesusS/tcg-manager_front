import { PolymorphicComponentPropsWithRef } from "@/presentation/@types/TPolymorphicComponentProps";
import { TPolymorphicRef } from "@/presentation/@types/TPolymorphicRef";
import classNames from "classnames";
import { ElementType, forwardRef } from "react";

interface IProps {
  color?: "default" | "error" | "success";
  outline?: boolean;
  full?: boolean;
}

type TButtonProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<C, IProps>;

type TButtonComponent = <B extends React.ElementType = "button">(
  props: TButtonProps<B>
) => React.ReactElement | null;

const BUTTON_BG_COLOR_MAP = {
  error: "bg-error",
  success: "bg-success",
  default: "bg-secondary",
};

const BUTTON_TEXT_COLOR_MAP = {
  error: "text-error",
  success: "text-success",
  default: "text-secondary",
};

export const Button: TButtonComponent = forwardRef(function Btn<
  B extends ElementType = "button"
>(
  {
    as,
    disabled,
    children,
    outline,
    full,
    color = "default",
    className,
    ...props
  }: TButtonProps<B>,
  ref: TPolymorphicRef<B>
): JSX.Element {
  const Component = as ?? "button";

  return (
    <Component
      className={classNames(
        "text-center block transition-all hover:text-system duration-75 ease-in-out border-2 font-medium disabled:bg-system-200 hover:disabled:bg-system-200 disabled:border-system-200 active:bg-system-800 active:border-system-800 px-4 py-1 rounded-lg drop-shadow-md",
        {
          "  border-secondary hover:bg-secondary-light hover:border-secondary-light":
            color === "default",
          " border-error  hover:bg-error": color === "error",
          "  border-success  hover:bg-success ": color === "success",
        },
        outline
          ? ["bg-transparent", BUTTON_TEXT_COLOR_MAP[color]]
          : [BUTTON_BG_COLOR_MAP[color], " text-system"],
        full ? "w-full" : "w-fit",
        className
      )}
      {...props}
      ref={ref}
      disabled={disabled}
    >
      {children}
    </Component>
  );
});
