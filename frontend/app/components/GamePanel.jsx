import { Link } from "react-router";

// Et spil-panel man kan klikke på. Det bliver bredere og viser titlen, når man holder musen over
export default function GamePanel({ title, image, to }) {
  return (
    <Link to={to} className="game-panel">
      <img src={image} alt="" />

      {/* Titel og "Play game". Skjult indtil man holder musen over */}
      <div className="game-panel-info">
        <h2>{title}</h2>
        <span>Play game</span>
      </div>
    </Link>
  );
}
