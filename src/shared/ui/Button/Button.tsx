import {
  ButtonHTMLAttributes,
  FC,
  FunctionComponent,
  PropsWithChildren,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme: ThemeButton;
}

export enum ThemeButton {
  CLEAR = 'clear',
}

export const Button: FunctionComponent<ButtonProps> = (
  props: PropsWithChildren<ButtonProps>
) => {
  const { className, children, theme, ...otherProps } = props;

  return (
    <button
      {...otherProps}
      className={classNames(cls.Button, {}, [cls[theme], className])}
    >
      {children}
    </button>
  );
};
