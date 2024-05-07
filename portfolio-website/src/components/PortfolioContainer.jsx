/* eslint-disable react/prop-types */
import github from "../assets/images/socialmedia-icons/github.png";

export default function PortfolioContainer({ portfolio }) {
  return (
    <sector className="presentation__portfolio__project">
      <h2 className="presentation__portfolio__project__title">
        {portfolio.title}
      </h2>
      <div className="presentation__portfolio__project__description">
        <p className="presentation__portfolio__project__description__text">
          {portfolio.description}
        </p>
        <div className="presentation__portfolio__project__stackicons">
          {portfolio.stack.map((stack) => (
            <img
              key={stack}
              className="presentation__portfolio__project__stackicons__icon"
              src={stack.image}
              alt={stack.alt}
            />
          ))}
        </div>
      </div>
      <a className="presentation__portfolio__link" href={portfolio.link}>
        <img
          className="presentation__links__link__icon"
          src={github}
          alt="GitHub logo"
        />
        Check it on GitHub
      </a>
    </sector>
  );
}
