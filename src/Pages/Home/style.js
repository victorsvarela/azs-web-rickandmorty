import styled from "styled-components";

export const Wrapper = styled.section`
  margin-top: 30px;

  > h1 {
    margin-bottom: 50px;
  }

  @media (min-width: 426px) {
    margin-top: 50px;
    margin-left: 20px;
  }

  @media (min-width: 769px) {
  }
`;

export const Content = styled.div`
  margin-bottom: 20px;

  @media (min-width: 426px) {
    margin-bottom: 40px;
  }

  @media (min-width: 769px) {
    margin-bottom: 70px;
  }
`;

export const BoxCards = styled.div`
  display: flex;
  overflow-y: scroll;
`;
