import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: rgb(176, 180, 245);
  border: 0.0625rem solid rgb(68, 65, 65);
  padding: 1.25rem;
  border-radius: 1.25rem;
  height: 60vh;
  width: 50vw;

  @media (max-width: 84.625rem) {
    flex-direction: column;
    width: 80vw;
    padding: 1rem;
    height: auto;
  }
`;

export const TopIcon = styled.div`
  max-height: 100%;
  max-width: 50rem;
  padding: 1.25rem;
  

  img {
    max-width: 100%;
    max-height: 100%;
    transition: 0.7s ease-in-out;

    &:hover {
      cursor: pointer;
      filter: drop-shadow(0 0 12px #b0b4f5);
    }
  }

  @media (max-width: 84.625rem) {
    padding: 1rem;
    max-width: 30%;
  }
`;

export const VerUsers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1354px) {
    width: 0vw;
  }

  .verUsers {
    width: 60%;

    @media (max-width: 84.625rem) {
      display: none;
    }
  }

  &:hover {
    opacity: 0.9;

    &:active {
      opacity: 0.7;
      transition: 0.8s ease-in-out;
    }
  }

  @media (max-width: 84.625rem) {
    width: 100%;
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;

  @media (max-width: 84.625rem) {
    width: 90%;
    margin: 0 auto;
  }

  input {
    padding: 0.625rem;
    margin: 0.3125rem 0;
    border: 0.125rem solid rgb(221, 223, 249);
    border-radius: 0.25rem;

    @media (max-width: 84.625rem) {
      padding: 0.5rem;
    }
  }

  label {
    margin-bottom: 0.3125rem;
    font-weight: bold;
  }
`;

export const Input = styled.input`
  background: transparent;
  border-radius: 0.625rem;
  border: 0.125rem solid rgb(221, 223, 249);
  padding: 12px 16px;
  padding-left: 20px;
  outline: none;
  font-weight: 600;
  color: rgb(71, 72, 93);
  margin-bottom: 0.25rem;
  width: 20vw;
  position: relative;
  z-index: 1;

  &:-webkit-autofill {
    box-shadow: 0 0 0rem 62.5rem transparent inset !important;
    -webkit-text-fill-color: rgb(71, 72, 93) !important;
    transition: background-color 5000s ease-in-out 0s;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 0.125rem;
    width: 0%;
    transition: width 0.3s ease;
  }

  &:focus::after {
    width: 100%;
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    top: -6.4px;
    left: 8px;
    font-size: 12px;
    font-weight: 700;
    color: rgb(112, 114, 152);
    background: rgb(176, 180, 245);
  }

  @media (max-width: 84.625rem) {
    width: 35vw;
    padding: 0.5rem;
  }
`;

export const InputLabel = styled.label`
  position: absolute;
  left: 8px;
  top: 1rem;
  font-size: 0.875rem;
  padding: 0 4px;
  pointer-events: none;
  font-weight: 400;
  color: rgb(112, 114, 152);
  z-index: 2;
  background: transparent;

  transition: all 0.2s ease-out;

  @media (max-width: 84.625rem) {
    font-size: 0.75rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 400px;

  @media (max-width: 84.625rem) {
    width: 100%;
    padding: 1rem;
  }
`;

export const Title = styled.h2`
  color: #2c2c2c;
  text-align: center;
  font-size: 2.375rem;
  font-weight: 600;

  @media (max-width: 84.625rem) {
    font-size: 1.5rem;
  }
`;

export const Paragraph = styled.p`
  color: #2c2c2c;
  font-size: 1rem;
  line-height: 1.5;
  margin: 0;
  text-align: center;

  @media (max-width: 84.625rem) {
    font-size: 0.9rem;
    padding: 0 1rem;
  }
`;
