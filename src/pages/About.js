import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-img"></div>
      <div className="about-body">
        <h2 className="about-body__heading">
          Don’t squeeze in a sedan when you could relax in a van.
        </h2>
        <div className="about-body__desc">
          <p>
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch.
            <p>(Hitch costs extra 😉)</p>
          </p>
          <br />
          <p>
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
        </div>
        <div className="about-body__cta">
          <p>Your destination is waiting.</p>
          <p>Your van is ready.</p>
          <Link className="about-body__btn">Explore our vans</Link>
        </div>
      </div>
    </div>
  );
}
