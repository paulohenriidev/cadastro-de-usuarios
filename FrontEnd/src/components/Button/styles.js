import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 3.75rem;
  border-radius: 1.375rem;
  border: ${({ theme }) => (theme === 'primary' ? 'none' : '.0625rem solid rgb(121, 125, 196)')};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.2;
  background-color: ${({ theme }) => (theme === 'primary' ? 'rgb(121, 125, 196)' : 'rgb(156, 160, 228)')};
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.4s ease-in-out, opacity 0.4s ease-in-out;

  &:hover {
    opacity: 0.8;

    &:active {
      opacity: 0.5;
      transition: opacity 0.1s ease-in-out;
    }
  }

  /* Estilos responsivos */
  @media (max-width: 768px) {
    padding: 0.5rem 2rem; /* Reduz o padding em telas menores */
    font-size: 14px; /* Reduz o tamanho da fonte em telas menores */
  }

  /* Acessibilidade */
  &:focus {
    outline: 2px solid rgb(121, 125, 196); /* Adiciona um contorno para indicar foco */
    outline-offset: 2px; /* Espaço entre o contorno e o botão */
  }
`;