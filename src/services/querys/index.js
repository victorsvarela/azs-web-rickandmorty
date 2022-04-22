import { gql } from "@apollo/client";

export const Episodes = gql`
  query {
    episodes {
      results {
        id
        episode
        name
        air_date
        characters {
          name
        }
      }
    }
  }
`;

export const EpisodeInfo = (id) => gql`
  query {
    episodesByIds(ids: [${id}]) {
      episode
      name
      air_date
      characters {
        image
        name
        species
        status
      }
    }
  }
`;
