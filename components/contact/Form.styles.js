import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: var(--color-text);
`;

export const Input = styled.input`
  color: var(--color-text);
  background-color: var(--background-color);
  font-family: "Poppins", sans-serif;
  min-height: 3rem;
  font-size: 1.5rem;
  border: none;
  border-bottom: 1px solid #616161;
  &:focus {
    border-bottom: 3px solid var(--color-accent);
  }
  outline: none;
  width: 30vw;
  border-radius: 0;
  @media (max-width: 800px) {
    width: 40vw;
  }
  @media (max-width: 500px) {
    font-size: 1.125rem;
  }
`;

export const Textarea = styled.textarea`
  background-color: var(--background-color);
  font-family: "Poppins", sans-serif;
  color: var(--color-text);
  height: 6rem;
  font-size: 1.5rem;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid #616161;
  &:focus {
    border-bottom: 3px solid var(--color-accent);
  }
  outline: none;
  width: 100%;
  @media (max-width: 500px) {
    font-size: 1.125rem;
  }
`;

export const Submit = styled.input`
  -webkit-appearance: none;
  font-size: 1.5rem;
  font-weight: 300;
  padding: 16px 24px;
  border: none;
  background-color: var(--color-accent);
  color: var(--color-text-inverted);
  border-radius: 10px;
  cursor: pointer;
  transition: transform 100ms ease-in-out;
  &:hover {
    transform: scale(1.03);
  }
  @media (max-width: 500px) {
    font-size: 1.25rem;
  }
`;

export const Illustration = styled.img`
  height: auto;
  width: 300px;
  @media (max-width: 800px) {
    display: none;
    visibility: hidden;
  }
`;

export const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: 96px 0 0 0;
  align-items: center;
  justify-items: center;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const GetInTouch = styled.h1`
  font-size: 2.25rem;
  font-weight: 400;
  margin-bottom: 64px;
  @media (max-width: 800px) {
    font-size: 1.5rem;
  }
`;

export const ErrorMessage = styled.h4`
  color: red;
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 1rem;
  @media (max-width: 800px) {
    font-size: 0.75rem;
  }
`;

export const EmailSent = styled.h4`
  margin-top: 30px;
  font-size: 1rem;
  font-weight: 400;
`;

export const Grid = styled.div`
  display: flex;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
