import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import portfolio from "../assets/data/portfolios";
import PortfolioContainer from "../components/PortfolioContainer";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <main className="presentation">
        <sector className="presentation__portfolio">
          <h1 className="presentation__content__title">My Portfolio</h1>
          {portfolio.map((portfolio) => (
            <PortfolioContainer key={portfolio.id} portfolio={portfolio} />
          ))}
        </sector>
      </main>

      <Footer />
    </>
  );
}
