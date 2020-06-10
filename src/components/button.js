import { Link } from "gatsby"
import styled from "styled-components"

export const Button = styled(Link)`
  background: var(--primary);
  color: #fff;
  font-weight: 700;
  line-height: 1rem;
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

export default Button
