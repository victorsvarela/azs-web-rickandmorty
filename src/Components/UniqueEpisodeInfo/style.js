import styled from "styled-components";

export const Card = styled.section`
  /* background-color: ; */
`;

export const CharactersThisEpisode = styled.div`
  display: flex;
  overflow-y: scroll;
`;

export const CardCharacterUnique = styled.div`
  background-color: ${({ status }) =>
    status === "Alive" ? "green" : status === "Dead" ? "red" : "yellow"};

  height: 100%;
  border: 1px solid
    ${({ status }) =>
      status === "Alive" ? "green" : status === "Dead" ? "red" : "yellow"};
  margin: 10px 0 10px 20px;

  > img {
    width: 200px;
  }
  > p {
    margin: 8px 0;
    color: ${({ status }) => (status === "Dead" ? "white" : "black")};
  }
`;
