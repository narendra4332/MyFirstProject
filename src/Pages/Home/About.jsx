import React from "react";
import { FaPhone } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import img1 from "./Images1/S1.png";
import img2 from "./Images1/Cable.gif";
import "./Style/About.css";

function About() {
  const navigate = useNavigate();

  return (
    <div className="container py-5 about-page">
      {/* Heading Section */}
      <div className="text-center mb-5">
        <h1 className="main-heading">
          About <span>SUSCOM GROUP</span>
        </h1>
        <p className="sub-text mx-auto">
          We are pioneers in manufacturing, distributing, and importing
          high-quality connectors, cable assemblies, and data-signal converters.
        </p>
      </div>

      {/* About Row */}
      <div className="row align-items-center g-5">
        <div className="col-md-5 text-center">
          <img src={img1} alt="Industry" className="about-img shadow-lg" />
        </div>
        <div className="col-md-7">
          <h3 className="section-title">Reliable & Advanced Solutions</h3>
          <p className="section-text">
            From industrial automation to advanced connectivity solutions, we
            deliver premium components with global express delivery. Engineered
            with precision and tested for durability, our solutions offer
            consistent performance and long-term reliability—making us a trusted
            partner for industries worldwide.
          </p>
        </div>
      </div>

      {/* Vision Row */}
      <div className="row align-items-center g-5 mt-5 flex-column-reverse flex-md-row">
        <div className="col-md-7">
          <h3 className="section-title">Our Vision</h3>
          <p className="section-text">
            We are a rapidly growing Industry and currently a leading
            manufactures standardized and custom cables and cable systems
            supported by the highest level of industrial engineering competence
            and services. Our product range reflects the cutting edge of high
            technology. We are always alert to market conditions and make
            endeavors to provide latest products technology and services.
          </p>
        </div>
        <div className="col-md-5 text-center">
          <img src={img2} alt="Vision" className="about-img shadow-lg" />
        </div>
      </div>

      {/* Contact Button */}
      <div className="text-center mt-5">
        <button onClick={() => navigate("/Contact")} className="contact-btn">
          Contact Us <FaPhone className="ms-2" />
        </button>
      </div>

      {/* Why Different Section */}
      <div className="why-box text-center mt-5 p-5">
        <h2 className="why-title">Why Are We Different?</h2>
        <p className="why-subtext">
          We ensure the best quality at competitive prices with fast delivery.
        </p>

        <div className="row mt-4 g-4">
          <div className="col-md-4">
            <div className="why-card">
              <h4>
                <i className="bi bi-check-circle-fill me-2"></i> Certified
                Excellence
              </h4>
              <p>ISO 9001-2015 and CE certified quality systems.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="why-card">
              <h4>
                <i className="bi bi-tools me-2"></i> Tailored Solutions
              </h4>
              <p>
                We design solutions fully customized to client requirements.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="why-card">
              <h4>
                <i className="bi bi-headset me-2"></i> Exceptional Support
              </h4>
              <p>Premium support & guaranteed high-quality products.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
