import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    visibility: visible;
    display: block;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    visibility: hidden;
    display:none;
  }
`;

const modalIn = keyframes`
  0% {
    transform: translateY(150px);
    opacity: 0.1;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
    visibility: visible;
  }
`;

export const Modal = styled.div`
  top: 0;
  left: 0;
  right:0;
  bottom:0;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.35);
  width: 100%;
  height: 100vh;
  z-index: 100;
  animation: ${fadeOut} 1s forwards;
  &.active {
    animation: ${fadeIn} 1s forwards;
  }
`;

export const ModalContent = styled.div`
  position: fixed;
  width: 100%;
  height: auto;
  max-width: 450px;
  color: var(--black);
  background:#FFF;
  border-radius: 5px;
  left: 0;
  right: 0;
  top: 0;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.37);
  transform: translateY(150px);
  line-height: normal;
`;

export const Close = styled.div`
  position: absolute;
  right: 5px;
  top: 5px;
  cursor: pointer;
`;
