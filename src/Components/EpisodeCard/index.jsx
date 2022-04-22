import { Link, useHistory } from "react-router-dom";
import { Card, Span, TextP } from "./style";

const EpisodeCard = ({ episode }) => {
  console.log("kkk", episode);

  return (
    <Link to={`/episode/${episode.id}`}>
      <Card>
        <div>
          <Span>Episódio:</Span>
          <TextP>{episode.episode}</TextP>
        </div>
        <div>
          <Span>Nome:</Span>
          <TextP>{episode.name}</TextP>
        </div>
        <div>
          <Span>Lançamento</Span>
          <TextP>{episode.air_date}</TextP>
        </div>
        <TextP>Personangens: {episode.characters.length}</TextP>
      </Card>
    </Link>
  );
};

export default EpisodeCard;
