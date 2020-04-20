import * as React from 'react';
import * as ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root'); 
export class Modal extends React.Component { 

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      modalRoot
    );
  }

}