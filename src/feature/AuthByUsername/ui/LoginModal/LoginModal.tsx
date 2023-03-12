import { classNames } from 'shared/lib/classNames/classNames';
import { Loader, Modal } from 'shared/ui';
import { Suspense } from 'react';
import { LoginFormAsync } from 'feature/AuthByUsername/ui/LoginForm/LoginForm.async';
import cls from './LoginModal.module.scss';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => (

  <Modal
    className={classNames(cls.LoginModal, {}, [className])}
    isOpen={isOpen}
    onClose={onClose}
    lazy
  >
    <Suspense fallback={<Loader />}>
      <LoginFormAsync onSuccess={onClose} />
    </Suspense>

  </Modal>
);
