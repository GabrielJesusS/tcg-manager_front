import { TPolymorphicRef } from "./TPolymorphicRef";

type PropsOf<
  C extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>
> = JSX.LibraryManagedAttributes<C, React.ComponentPropsWithoutRef<C>>;

interface AsProp<C extends React.ElementType> {
  as?: C;
}

type ExtendableProps<
  ExtendedProps = Record<string, unknown>,
  OverrideProps = Record<string, unknown>
> = OverrideProps & Omit<ExtendedProps, keyof OverrideProps>;

type InheritableElementProps<
  C extends React.ElementType,
  Props = Record<string, unknown>
> = ExtendableProps<PropsOf<C>, Props>;

export type PolymorphicComponentProps<
  C extends React.ElementType,
  Props = Record<string, unknown>
> = InheritableElementProps<C, Props & AsProp<C>>;

export type PolymorphicComponentPropsWithRef<
  C extends React.ElementType,
  Props = Record<string, unknown>
> = PolymorphicComponentProps<C, Props> & { ref?: TPolymorphicRef<C> };
