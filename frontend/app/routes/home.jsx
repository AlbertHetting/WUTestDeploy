import Navbar from "../components/Navbar.jsx";
import GamePanel from "../components/GamePanel.jsx";

// De tre spil på forsiden
// Vi bruger ridder-billedet til alle tre, indtil de andre billeder er klar
const games = [
  { title: "SQL Knight", image: "/assets/png/knightSQL1200x1600.png", to: "/knight" },
  { title: "Bar Queries", image: "/assets/png/knightSQL1200x1600.png", to: "/bar" },
  { title: "Capy Trivia", image: "/assets/png/knightSQL1200x1600.png", to: "/trivia" },
];

export default function Home() {
  return (
    <div className="home">
      <Navbar />

      {/* Panelerne står ved siden af hinanden. Mellemrummet mellem dem giver de sorte streger */}
      <div className="game-row">
        {games.map((game) => (
          <GamePanel key={game.to} {...game} />
        ))}
      </div>
    </div>
  );
}
