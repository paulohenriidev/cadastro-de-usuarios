import styled from "styled-components";

export const Background = styled.div`
  background-color: #2c2c2c; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh; 
  padding: 20px; 
  
  /* Estilos responsivos */
  @media (max-width: 84.625rem) {
    height: 100%;
    padding: 15px; 
  }

  @media (max-width: 480px) {
    padding: 10px;
    height: 100%;
  }
`;