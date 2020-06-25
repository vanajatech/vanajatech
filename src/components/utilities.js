import styled from "styled-components"

export const BoldLink = styled.a`
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1;
  text-align: center;
  color: var(--primary);
  word-wrap: break-word;
`

export const BigLink = styled.a`
  display: block;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.5;
  letter-spacing: 0.03em;
  transition: all 0.3s ease 0s, left 0.3s ease 0s;

  &:hover {
    color: var(--primary);
  }
`

export const Separator = styled.span`
  &::before {
    content: "•";
    color: var(--primary);
    font: 600 1.25rem var(--font-mono);
    margin: 0 0.5rem;
  }
`
