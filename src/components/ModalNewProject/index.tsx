import * as React from 'react';
import { ModalPortal } from '../Modal/index';

interface props { 
  children?: unknown
  isOpen?: boolean
  onClose?:()=>void
}
export const ModalNewProject = (props: props) => {

  return (
    <ModalPortal {...props}>
      <p>Se supone que aqui va lo de nuevo </p>
    </ModalPortal>
  );
};
