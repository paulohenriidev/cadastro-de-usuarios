import styled from "styled-components";

export const UsersContainer = styled.div`
  background-color: rgb(176, 180, 245);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  min-height: 80vh;
  min-width: 60vw;
  padding: 1.25rem;
  border-radius: 20px;

  @media (max-width: 84.625rem) {
    min-width: 90vw;
    padding: 1rem;
  }
`;

export const ContainerUsers = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 40px;

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 84.625rem) {
    gap: 1rem;
    margin-bottom: 20px;
  }
`;

export const IconUsers = styled.div`
  img {
    min-height: 60%;
    min-width: 60%;

    @media (max-width: 84.625rem) {
      min-height: 40%;
      min-width: 40%;
    }
  }
`;

export const Title = styled.h2`
  color: rgb(255, 255, 255);
  text-align: center;
  font-size: 38px;
  font-weight: 600;
  margin-bottom: 20px;

  @media (max-width: 84.625rem) {
    font-size: 28px;
  }
`  

export const CardUsers = styled.div`
  background-color: #9699dc;
  padding: 20px;
  border-radius: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  gap: 20px;

  h4 {
    text-transform: capitalize;
  }

  p,
  h4 {
    color: #fff;
    font-size: 16px;
    margin-bottom: 0.25rem;
  }

  @media (max-width: 84.625rem) {
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }
`;

export const TrashIcon = styled.img`
  max-height: 4vh;
  cursor: pointer;
  padding-left: 1.875rem;
  transition: 0.5s ease-in-out;

  @media (max-width: 84.625rem) {
    padding-left: 0;
    max-height: 3vh;
  }

  &:hover {
    opacity: 0.5;
  }
`;

export const Avatar = styled.img`
  height: 5rem;

  @media (max-width: 84.625rem) {
    height: 4rem;
  }
`;
