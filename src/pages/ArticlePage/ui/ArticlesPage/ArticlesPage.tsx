import { useTranslation } from 'react-i18next';
import { FC, memo } from 'react';

import cls from './ArticlesPage.module.scss';

export interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage: FC<ArticlesPageProps> = () => {
  const { t } = useTranslation('article');
  return (
    <div className={cls.ArticlesPage}>Articles Page</div>
  );
};
export default memo(ArticlesPage);
