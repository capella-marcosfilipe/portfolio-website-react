import pfp from "../assets/images/pfp.jpg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="presentation">
        <img
          className="presentation__pfp"
          src={pfp}
          alt="Marcos Capella's profile picture"
        />
        <sector className="presentation__content">
          <h1 className="presentation__content__title">About me</h1>
          <p className="presentation__content__description">
            I am an undergrad student in{" "}
            <strong className="presentation__content__description__strong">
              Internet Systems at the Catholic University of Pernambuco
            </strong>{" "}
            part of the{" "}
            <strong className="presentation__content__description__strong">
              Software Residency program at Porto Digital
            </strong>{" "}
            in Recife, Brazil.{" "}
          </p>
          <p className="presentation__content__description">
            I&#39;m originally a Law School graduate and returning to college
            for a degree in Internet Systems as part of my career transition has
            been an amazing experience. For sure it was the boldest of my career
            decisions. I&#39;ve had the privilege to collaborate with
            exceptional individuals and immerse myself in the enriching
            environment that my city offers.
          </p>
          <p className="presentation__content__description">
            I spent my childhood in between Rio and Recife, two amazing cities,
            but surely, being it my birthplace,{" "}
            <strong className="presentation__content__description__strong">
              Recife is part of my techie DNA
            </strong>
            . It is the tech capital of Brazil having the biggest population of
            IT undergrad students in the country and also home to Porto Digital,
            the biggest Brazilian urban tech park.
          </p>
        </sector>
      </main>
      <Footer />
    </>
  );
}
