import { AppLink, AppLinkTheme } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { SidebarItemType } from '../../model/items';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
  collapsed: boolean;
  item: SidebarItemType;
  className?: string;
  authOnly?:boolean;
}

export const SidebarItem = ({ className, collapsed, item }: SidebarItemProps) => {
  const { t } = useTranslation();
  const isAuth = useSelector(getUserAuthData);

  const {
    Icon, path, text, authOnly,
  } = item;

  if (authOnly && !isAuth) {
    return null;
  }

  return (

    <AppLink
      theme={AppLinkTheme.SECONDARY}
      to={path}
      className={classNames(cls.item, { [cls.collapsed]: collapsed }, [className])}
    >
      <Icon className={cls.icon} />
      <span className={cls.link}>
        {t(text)}
      </span>
    </AppLink>

  );
};
