import * as React from 'react';
import { ModalPortal } from '../Modal/index';

interface props {
  children?: unknown;
  isOpen?: boolean;
  onClose: () => void;
}
export const ModalEdit = (props:props) => { 

  return (
    <ModalPortal {...props}>
      <h2>HOLA</h2>
    </ModalPortal>
  );
};