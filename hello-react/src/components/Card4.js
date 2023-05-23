import Image4 from "../images/icon4.png";

function Card4() {
  return (
    <div className="card">
      <img src={Image4} alt="icon" className="card-img" />
      <div className="card-body">
        <h2 className="card-title">JSX</h2>
        <p className="card-text">
          Statically-typed designed to run on modern browsers.
        </p>
      </div>
    </div>
  );
}

export default Card4;
