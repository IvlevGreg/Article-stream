import {
  type ButtonHTMLAttributes,
  type FunctionComponent, memo,
  type PropsWithChildren,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',

  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

type ButtonProps = {
  className?: string;
  theme?: ThemeButton;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FunctionComponent<ButtonProps> = memo((
  props: PropsWithChildren<ButtonProps>,
) => {
  const {
    className,
    children,
    theme,
    square,
    size = ButtonSize.M,
    disabled,
    ...otherProps
  } = props;

  const mods = [cls[theme], cls[size]];

  const modsOptional: Record<string, boolean> = {
    [cls.square]: square,
    [cls.disabled]: disabled,
  };

  return (
    <button
      {...otherProps}
      type="button"
      className={classNames(cls.Button, modsOptional, [...mods, className])}
    >
      {children}
    </button>
  );
});
