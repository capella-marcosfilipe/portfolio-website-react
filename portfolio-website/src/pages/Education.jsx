import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import onboard from "../assets/images/schools/onboard.png";
import unicap from "../assets/images/schools/unicap.jpg";

export default function Education() {
  return (
    <>
      <Navbar />
      <main className="showcase">
        <sector className="showcase__school">
          <img className="showcase__school__photo" src={onboard} />
          <p className="showcase__school__title">
            Catholic University of Pernambuco (UNICAP) - UNICAP Icam-TECH School
          </p>
          <p className="showcase__school__subtitle">
            2024-2026 - Technologist in Internet Systems (Software Residency in
            Porto Digital)
          </p>
        </sector>
        <sector className="showcase__school">
          <img className="showcase__school__photo" src={unicap} />
          <p className="showcase__school__title">
            Catholic University of Pernambuco (UNICAP) - School of Legal
            Sciences{" "}
          </p>
          <p className="showcase__school__subtitle">
            2013-2017 - Bachelor of Law
          </p>
        </sector>
      </main>
      <Footer />
    </>
  );
}
