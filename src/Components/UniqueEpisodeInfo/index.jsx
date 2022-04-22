import { useParams } from "react-router";
import { useQuery } from "@apollo/client";
import { EpisodeInfo } from "../../Routes/querys";
import { useEffect, useState } from "react";

import { Card, CharactersThisEpisode, CardCharacterUnique } from "./style";

const UniqueEpisodeInfo = () => {
  const { id } = useParams();
  const [episode, setEpisode] = useState();
  console.log(episode, id);
  const { loading, error, data } = useQuery(EpisodeInfo(id));

  useEffect(() => {
    setEpisode(data?.episodesByIds?.[0]);
  }, [data]);

  return (
    <Card>
      <p>{episode?.name}</p>
      <p>{episode?.episode}</p>
      <p>{episode?.air_date}</p>
      <CharactersThisEpisode>
        {episode?.characters.map((item, index) => (
          <CardCharacterUnique key={index} status={item.status}>
            <img src={item.image} alt="imagefonfon" />
            <p>{item.name}</p>
            <p>{item.species}</p>
            <p>{item.status}</p>
          </CardCharacterUnique>
        ))}
      </CharactersThisEpisode>
    </Card>
  );
};

export default UniqueEpisodeInfo;
