import { useTranslation } from 'react-i18next';
import { FC, memo } from 'react';

import cls from './ArticlesPage.module.scss';

export interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage: FC<ArticlesPageProps> = ({ className }) => {
  const { t } = useTranslation('article');
  return (
    <div>Articles Page</div>
  );
};
export default memo(ArticlesPage);
