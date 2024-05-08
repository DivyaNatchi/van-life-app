import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      <h2 className="home-container__heading">
        You got the travel plans, we got the travel vans.
      </h2>
      <p className="home-container__desc">
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </p>
      <Link className="home-container__btn">Find your van</Link>
    </div>
  );
}
