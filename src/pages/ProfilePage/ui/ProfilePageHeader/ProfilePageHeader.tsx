import { Button, Text, ThemeButton } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { FC, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks';
import cls from './ProfilePageHeader.module.scss';

export interface ProfilePageHeaderProps {
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = () => {
  const { t } = useTranslation('main');
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  const readonly = useSelector(getProfileReadonly);
  return (
    <div className={cls.ProfilePageHeader}>
      <Text title={t('Профиль')} />
      {readonly ? (
        <Button
          className={cls.editBtn}
          theme={ThemeButton.OUTLINE}
          onClick={onEdit}
        >
          {t('Редактировать')}
        </Button>
      ) : (
        <div>
          <Button
            className={cls.editBtn}
            theme={ThemeButton.OUTLINE_RED}
            onClick={onCancelEdit}
          >
            {t('Отменить')}
          </Button>
          <Button
            className={cls.saveBtn}
            theme={ThemeButton.OUTLINE}
            onClick={onSave}
          >
            {t('Сохранить')}
          </Button>
        </div>
      )}
    </div>
  );
};
