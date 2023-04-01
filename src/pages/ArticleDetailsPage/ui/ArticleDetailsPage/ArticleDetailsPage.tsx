import { useTranslation } from 'react-i18next';
import { FC } from 'react';

import cls from './ArticleDetailsPage.module.scss';

export interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
  const { t } = useTranslation('article');
  return (
    <div>
      ARTICLE DETAILS
    </div>
  );
};

export default ArticleDetailsPage;
