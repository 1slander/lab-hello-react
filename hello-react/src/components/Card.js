function Card({ img, title, text }) {
  // const { img, title, text } = props;

  return (
    <div className="card {key}">
      <img src={img} alt="icon" className="card-img" />
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}

export default Card;
