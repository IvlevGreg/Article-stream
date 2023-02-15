import { useTranslation } from 'react-i18next';
import i18n from 'shared/config/i18n/i18n';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui';
import cls from './LangSwitcher.module.scss';

type LangSwitcherProps = {
  className?: string;
};

export function LangSwitcher(props: LangSwitcherProps) {
  const { className } = props;

  const { t } = useTranslation();

  function toggleLanguage() {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  }

  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={() => toggleLanguage()}
      className={classNames(cls.LangSwitcher, {}, [className])}
    >
      {t('язык')}
    </Button>
  );
}
