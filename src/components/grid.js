import styled from "styled-components"

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;

  @media (min-width: 640px) {
    max-width: 640px;
  }
  @media (min-width: 768px) {
    max-width: 768px;
  }
  @media (min-width: 1024px) {
    max-width: 1024px;
  }
  @media (min-width: 1280px) {
    max-width: 1280px;
  }
  @media (min-width: 1440px) {
    max-width: 1440px;
  }
`

export const Row = styled.div`
  display: flex;
  padding: 16px 32px;
`

export const Col = styled.div`
  flex: 1;
  min-width: 0;
  max-width: 100%;
  position: relative;
  width: 100%;
  padding-right: 10px;
  padding-left: 10px;
`
