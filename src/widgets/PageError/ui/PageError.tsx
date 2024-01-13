import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export function PageError(props: PageErrorProps) {
  const { className } = props;
  const { t } = useTranslation();

  function reloadPage() {
    window.location.reload();
  }

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p>{t('Произошла непредвиденная ошибка')}</p>
      <Button
        theme={ThemeButton.CLEAR}
        onClick={() => reloadPage()}
      >
        {t('Обновить страницу')}
      </Button>
    </div>

  );
}
