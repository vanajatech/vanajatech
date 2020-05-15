import styled from "styled-components"

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  background: #ffffff;
  box-shadow: 10px 12px 25px rgba(0, 0, 0, 0.05);
  border-radius: 2rem;
  text-align: ${props => props.align};
`

export const CardHeader = styled.h2`
  font-size: 1.5rem;
  margin-top: 0;
  margin-bottom: 1rem;

  line-height: 29px;
  letter-spacing: 0.02em;
`
