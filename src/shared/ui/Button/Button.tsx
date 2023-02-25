import {
  type ButtonHTMLAttributes,
  type FunctionComponent,
  type PropsWithChildren,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline'
}
type ButtonProps = {
  className?: string;
  theme: ThemeButton;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FunctionComponent<ButtonProps> = (
  props: PropsWithChildren<ButtonProps>,
) => {
  const {
    className, children, theme, ...otherProps
  } = props;

  return (
    <button
      {...otherProps}
      type="button"
      className={classNames(cls.Button, {}, [cls[theme], className])}
    >
      {children}
    </button>
  );
};
