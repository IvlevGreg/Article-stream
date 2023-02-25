import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import cls from './Sidebar.module.scss';

type SidebarProps = {
  className?: string;
};

export function Sidebar(props: SidebarProps) {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);
  function onToggle() {
    setCollapsed((prev) => !prev);
  }

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <Button data-testid="sidebar-toggle" theme={ThemeButton.CLEAR} onClick={() => onToggle()}>
        {'>'}
      </Button>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
}
