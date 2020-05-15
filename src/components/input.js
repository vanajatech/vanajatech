import styled from "styled-components"

export const Input = styled.input`
  border: var(--input-bw) solid #000;
  border-radius: calc(var(--input-px) / 2 + var(--input-py));
  padding: calc(var(--input-py) - 1px) calc(var(--input-px) - 1px);

  font-weight: 500;
  font-size: 1rem;
  line-height: var(--input-lh);
  letter-spacing: 0.02em;
  color: var(--gray-500);
`
