import Image2 from "../images/icon2.png";

function Card2() {
  return (
    <div className="card">
      <img src={Image2} alt="icon" className="card-img" />
      <div className="card-body">
        <h2 className="card-title">Components</h2>
        <p className="card-text">
          Build encapsulated components that manage their state.
        </p>
      </div>
    </div>
  );
}

export default Card2;
