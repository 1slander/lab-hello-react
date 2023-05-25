// import Card1 from "./Card1";
// import Card2 from "./Card2";
// import Card3 from "./Card3";
// import Card4 from "./Card4";

import Image1 from "../images/icon1.png";
import Image2 from "../images/icon2.png";
import Image3 from "../images/icon3.png";
import Image4 from "../images/icon4.png";

import Card from "./Card";

function SectionCard() {
  const cards = [
    {
      id: 1,
      img: Image1,
      title: "Declarative",
      text: "React makes it painless to create interactive UIs.",
    },
    {
      id: 2,
      img: Image2,
      title: "Components",
      text: "Build encapsulated components that manage their state.",
    },
    {
      id: 3,
      img: Image3,
      title: "Single-Way",
      text: "A set of immutable values are passed to the component's.",
    },
    {
      id: 4,
      img: Image4,
      title: "JSX",
      text: "Statically-typed designed to run on modern browsers.",
    },
  ];

  return (
    <section className="info">
      <div className="card-wrapper">
        {cards.map((card) => {
          return (
            <Card
              img={card.img}
              title={card.title}
              text={card.text}
              key={card.id}
            />
          );
        })}
        {/* <Card img={cards[0].img} title={cards[0].title} text={cards[0].text} />
        <Card img={cards[1].img} title={cards[1].title} text={cards[1].text} />
        <Card img={cards[2].img} title={cards[2].title} text={cards[2].text} />
        <Card img={cards[3].img} title={cards[3].title} text={cards[3].text} /> */}
      </div>
    </section>
  );
}

export default SectionCard;
