import './About.css';
import Navigation from '../../components/Navigation/Navigation';

const About = () => {
  return (
    <div className="about">
      <Navigation></Navigation>
      <main className="about__main">
        <h1>О магазине</h1>
        <h3>
          Этот магазин был придуман в Тайланде и теперь страдает из-за
          формулировок домашних заданий
        </h3>
      </main>
    </div>
  );
};

export default About;
