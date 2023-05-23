import Button from "./Button";

function Hero() {
  return (
    <main className="hero-section">
      <div className="hero-container">
        <h1 className="main-title">Say hello to ReactJS</h1>
        <div className="main-subtitle">
          <p className="main-subtitle-text">
            You will learn how to use the most popular frontend library, and
            become a super Ninja developer.
          </p>
        </div>
        <Button />
      </div>
    </main>
  );
}

export default Hero;
