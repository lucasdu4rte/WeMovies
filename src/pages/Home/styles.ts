import styled from "styled-components";

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 24px;
  column-gap: 16px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`
