import { Link } from "react-router";

// Menuen i toppen, som ligger ovenpå spil-billederne
export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Logoet fører tilbage til forsiden */}
      <Link to="/">
        <img className="navbar-logo" src="/assets/svg/joystick_logo.svg" alt="SQL Games Hub" />
      </Link>

      <div className="navbar-links">
        <Link to="/leaderboard" className="navbar-link">
          <img src="/assets/svg/trophy_retro.svg" alt="" />
          <span>Leaderboard</span>
        </Link>

        <Link to="/profile" className="navbar-link">
          <img src="/assets/svg/user_retro.svg" alt="" />
          <span>Profile</span>
        </Link>
      </div>
    </nav>
  );
}
