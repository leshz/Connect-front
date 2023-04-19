import React from 'react';
import ReactDOM from 'react-dom';
import { TiDeleteOutline } from 'react-icons/ti';
import { Modal, ModalContent, Close } from './style';

const modalRoot = document.getElementById('modal-root') as HTMLElement;
interface props {
  children?: unknown;
  isOpen?: boolean;
  onClose?: () => void;
}
const ModalComponent = ({ isOpen = false, children, onClose }: props) => {
  if (!isOpen) return <Modal />;
  return (
    <Modal className="active">
      <ModalContent>
        <Close onClick={onClose}>
          <TiDeleteOutline size={20} />
        </Close>
        {children}
      </ModalContent>
    </Modal>
  );
};

export const ModalPortal = (props: props) => {
  return ReactDOM.createPortal(<ModalComponent {...props} />, modalRoot);
};
