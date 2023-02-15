import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/Applink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

type NavbarProps = {
  className?: string;
};

export function Navbar({ className }: NavbarProps) {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.Navbar)}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/">
          {t('Главная')}
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
          {t(' О сайте')}
        </AppLink>
      </div>
    </div>
  );
}
