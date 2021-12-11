import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  @media screen and (min-width: 920px) {
    margin-top: 5rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
