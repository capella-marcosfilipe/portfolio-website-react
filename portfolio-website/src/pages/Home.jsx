import "../styles/index.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import pfp from "../assets/images/pfp.jpg";
import github from "../assets/images/socialmedia-icons/github.png";
import linkedin from "../assets/images/socialmedia-icons/linkedin.png";
import leetcode from "../assets/images/socialmedia-icons/leetcode.png";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="presentation">
        <img
          className="presentation__pfp"
          src={pfp}
          alt="Marcos Capella's profile picture"
        />
        <section className="presentation__content">
          <h1 className="presentation__content__title">
            Hi, I am Marcos Filipe Capella!
          </h1>
          <p className="presentation__content__description">
            I am a{" "}
            <strong className="presentation__content__description__strong">
              Back-end Web Developer
            </strong>{" "}
            specialized in Node.js and Nest.js working with MySQL and NoSQL. I
            am passionate about programming and I am always looking for new
            challenges and learning new technologies. I follow a T-shaped
            professional approach delving into Product Design and Front-End
            technologies such as React.js.
          </p>
          <p className="presentation__content__description">
            If you&#39;re interested in my work, contact me at any of my links
            below, I&#39;ll surely enjoy talking more about it.
          </p>
          <div className="presentation__links">
            <a
              className="presentation__links__link"
              href="https://github.com/capella-marcosfilipe">
              <img
                className="presentation__links__link__icon"
                src={github}
                alt="GitHub logo"
              />
              GitHub
            </a>
            <a
              className="presentation__links__link"
              href="https://www.linkedin.com/in/capella-marcosfilipe/">
              <img
                className="presentation__links__link__icon"
                src={linkedin}
                alt="LinkedIn logo"
              />
              LinkedIn
            </a>
            <a
              className="presentation__links__link"
              href="https://leetcode.com/capella-marcosfilipe/">
              <img
                className="presentation__links__link__icon"
                src={leetcode}
                alt="LeetCode logo"
              />
              LeetCode
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
