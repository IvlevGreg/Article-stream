import { type FC, type PropsWithChildren } from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}
type AppLinkProps = {
  className?: string;
  theme?: AppLinkTheme;
} & LinkProps;

export const AppLink: FC<AppLinkProps> = (
  props: PropsWithChildren<AppLinkProps>,
) => {
  const {
    to,
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;

  return (
    <Link
      {...otherProps}
      to={to}
      className={classNames(cls.AppLink, {}, [className, cls[theme]])}
    >
      {children}
      {' '}
    </Link>
  );
};
