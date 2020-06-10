import styled from "styled-components"

export const Input = styled.input`
  border: 1px solid var(--gray-500);
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1;
  letter-spacing: 0.02em;
  color: var(--gray-500);
  transition: all 0.2s ease-in-out;

  &:focus,
  &:active {
    outline: none;
    box-shadow: 2px 2px 5px rgba(10, 10, 10, 0.24);
  }
`

export const FormButton = styled.button`
  background: var(--primary);
  color: #fff;
  font-weight: 700;
  line-height: 1;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  box-shadow: 2px 2px 5px rgba(180, 10, 10, 0.24);
  transition: all 0.2s ease-in-out;

  &:hover,
  &:focus {
    background: #ff1414;
  }

  &:active {
    background: #e10000;
  }
`
