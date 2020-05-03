import * as React from 'react';
import { ModalPortal } from '../Modal/index';


interface props {
  children?: unknown;
  isOpen?: boolean;
  onClose: () => void;
}

export const ModalDelete = (props:props) => { 
  console.log(props);
  
  return (
    <ModalPortal {...props}>
      Borremos esta chimbada 
    </ModalPortal>
  );
};