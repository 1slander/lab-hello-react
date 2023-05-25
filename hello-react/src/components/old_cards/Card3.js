import Image3 from "../images/icon3.png";

function Card3() {
  return (
    <div className="card">
      <img src={Image3} alt="icon" className="card-img" />
      <div className="card-body">
        <h2 className="card-title">Single-Way</h2>
        <p className="card-text">
          A set of immutable values are passed to the component's.
        </p>
      </div>
    </div>
  );
}

export default Card3;
