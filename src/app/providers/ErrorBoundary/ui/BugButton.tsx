import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui';

interface BugButtonProps {
  className?: string;
}

// Компонент для тестирования ошибок ErrorBoundary

export function BugButton(props: BugButtonProps) {
  const { className } = props;
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  function toggleError() {
    setError(!error);
  }

  function throwError() {
    throw new Error(
      'test error from bug button component (Компонент для тестирования ошибок ErrorBoundary)',
    );
  }

  useEffect(() => {
    if (error) throwError();
  }, [error]);

  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={() => toggleError()}
      className={className}
    >
      {t('Бросить ошибку')}
    </Button>
  );
}
