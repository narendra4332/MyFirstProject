import React, { useState } from "react";
import "./About.css";

import c1 from "./Images/cert1.jpg";
import c2 from "./Images/cert2.jpg";
import c3 from "./Images/cert3.jpg";

import OEMPartners from "../../Components/OEMPartners";
const aboutImages = import.meta.glob("./Images/*.{png,jpg,jpeg}", {
  eager: true,
});
const aboutImageList = Object.values(aboutImages).map((m) => m.default);

export default function About() {
  const [selectedImage, setSelectedImage] = useState(null);

  const extraCompanies = [
    { title: "SUSCOM GROUP", color: "btn-danger", link: "" },
    { title: "SUSCOM ELECTROMECHNICAL", color: "btn-primary", link: "" },
    { title: "SUSCOM AGRO FOODS", color: "btn-success", link: "#" },
    { title: "SUSCOM INFORMATION TECHNOLOGY", color: "btn-info", link: "#" },
    { title: "SUSCOM INFRA", color: "btn-warning", link: "#" },
    { title: "SUSCOM ACADEMY", color: "btn-secondary", link: "#" },
    { title: "SUSMECH ENTERPRISES", color: "btn-dark", link: "#" },
    { title: "SIDESH INFO-TECH SYSTEM", color: "btn-light border", link: "#" },
    { title: "SUSCOM FOUNDATION", color: "btn-outline-primary", link: "#" },
  ];

  return (
    <>
      <div
        className="about-container container py-5"
        style={{ marginTop: "60px" }}
      >
        {/* SUSCOM GROUP Section */}
        <div className="section-container mb-4 rounded-3 shadow-lg bg-light text-dark text-center">
          <h2 className="fw-bold my-Color1">
            <i className="bi bi-gear-fill me-2"></i> SUSCOM ENERGY SOLUTIONS
          </h2>
          <p className="text-muted">
            SUSCOM ENERGY SOLUTIONS is top leading manufacturer, distributor and
            importers for all type of connectors , cable assemblies in India and
            data-signal converters and many more. It’s known for reliable source
            of industrial automation, power electronics solutions, Data
            solutions, cable assembly i.e., power cable, encoder cable,
            Interface cable, CNC cables and tailor made solutions related to
            connectivity with best price assurance and fastest delivery across
            the world.
          </p>
        </div>

        {/* ALL COMPANIES */}
        <div className="p-4 mb-4 rounded-3 shadow-lg bg-white">
          <div className="d-flex flex-wrap justify-content-center gap-3">
            {extraCompanies.map((item, index) => (
              <button
                key={index}
                className={`btn fw-bold px-4 py-2 shadow-sm ${item.color}`}
                onClick={() => window.open(item.link, "_blank")}
              >
                {item.title}
                <i className="bi bi-box-arrow-up-right ms-2"></i>
              </button>
            ))}
          </div>
        </div>
        {/* Certificates Section */}
        <div className="certificates-section text-center p-4 mt-5 rounded-3 shadow-lg bg-white">
          <h2 className="fw-bold text-dark p-4">
            <i className="bi bi-award-fill"></i> OUR CERTIFICATES
          </h2>

          <div className="certificates-container d-flex justify-content-center gap-4 flex-wrap">
            {[c1, c2, c3].map((image, index) => (
              <div
                className="certificate-item p-1 bg-dark rounded-3 shadow-sm"
                key={index}
                onClick={() => setSelectedImage(image)}
                style={{ width: "200px", cursor: "pointer" }}
              >
                <img
                  src={image}
                  alt={`Certificate ${index + 1}`}
                  className="img-fluid rounded"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Full Image Modal */}
        {selectedImage && (
          <div
            className="image-modal d-flex align-items-center justify-content-center mt-5"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt="Full Size"
              className="modal-image rounded-3 shadow-lg"
            />
          </div>
        )}
      </div>
      <OEMPartners
        images={aboutImageList}
        title="OUR OEM PARTNERS"
        speed={10}
      />
    </>
  );
}
