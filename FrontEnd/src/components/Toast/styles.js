import styled, { keyframes } from 'styled-components';

// Animação de entrada
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1 ;
    transform: translateX(0);
  }
`;

// Animação de saída
const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(20px);
  }
`;

export const Toast = styled.div`
  background-color: rgb(28, 28, 28);
  color: #B0B4F5;
  text-align: center;
  max-width: 260px;
  border-radius: 20px;
  padding: 20px;
  position: fixed;
  bottom: 4%;
  right: 20px;
  z-index: 1;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  
  &.show {
    animation: ${fadeIn} 0.3s ease forwards;
  }
  
  &.hide {
    animation: ${fadeOut} 0.3s ease forwards;
    pointer-events: none; // Evita cliques durante a animação de saída
  
  }
`;