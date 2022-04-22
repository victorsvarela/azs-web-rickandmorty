import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import EpisodeCard from "../../Components/EpisodeCard";
import UniqueEpisodeInfo from "../../Components/UniqueEpisodeInfo";

import { Episodes } from "../../querys";
import { BoxCards, Content, Wrapper } from "./style";

const HomePage = () => {
  const { loading, error, data } = useQuery(Episodes);

  const [seasonControl, setSeasonControl] = useState([]);

  data?.episodes?.results.map((episode) => {
    !seasonControl.includes(episode.episode.slice(1, 3)) &&
      setSeasonControl([...seasonControl, episode.episode.slice(1, 3)]);
  });

  useEffect(() => {
    console.log(seasonControl);
  }, [seasonControl]);

  return (
    <Wrapper>
      <h1>Rick and Morty Episodes</h1>
      {seasonControl.sort().map((season, index) => (
        <Content>
          <p>Temporada: {season}</p>
          <BoxCards>
            {data?.episodes?.results.map((episode, index) => (
              <>
                {console.log("q", episode)}
                {episode.episode.slice(1, 3) === season && (
                  <EpisodeCard key={index} episode={episode} />
                )}
              </>
            ))}
          </BoxCards>
        </Content>
      ))}
    </Wrapper>
  );
};

export default HomePage;

// se
