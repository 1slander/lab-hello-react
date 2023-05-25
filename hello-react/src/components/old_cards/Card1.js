import Image1 from "../images/icon1.png";

function Card1() {
  return (
    <div className="card">
      <img src={Image1} alt="icon" className="card-img" />
      <div className="card-body">
        <h2 className="card-title">Declarative</h2>
        <p className="card-text">
          React makes it painless to create interactive UIs.
        </p>
      </div>
    </div>
  );
}

export default Card1;
