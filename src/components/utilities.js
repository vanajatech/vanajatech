import styled from "styled-components"

export const BoldLink = styled.a`
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1;
  text-align: center;
  color: var(--primary);
`

export const UnderlinedLink = styled.a`
  &::after {
    box-shadow: 1px 1px 2px rgba(180, 10, 10, 0.24);
    content: "";
    display: block;
    height: 3px;
    background: var(--primary);
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 60px;
    margin-left: -8px;
  }

  &:hover::after {
    width: 120px;
  }
`
