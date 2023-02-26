import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';

export default function MainPage() {
  const { t } = useTranslation('main');

  return (
    <div>
      {/* <h1 className={classes.h1}>sdsfdsadsdsffs</h1> */}
      <h2 className="subTitle">{t('Главная страница')}</h2>
      <Counter />
    </div>
  );
}
