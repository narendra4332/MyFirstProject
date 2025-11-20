import React from "react";
import "./Contact.css";

export default function Contact() {
  const offices = [
    {
      city: "BHOPAL (M.P.)",
      address:
        "Office: 122-A B Near D-Mart, Sagar High Street, Ayodhya Bypass Road, Bhopal (M.P.)",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.373290630282!2d77.4531201!3d23.2799728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c69eca7076d17%3A0xce1efd475b0e50c!2sSagar%20High%20St%2C%20K-Sector%2C%20Ayodhya%20Nagar%2C%20Bhopal%2C%20Madhya%20Pradesh%20462041!5e0!3m2!1sen!2sin!4v1700000000000",

      team: [
        {
          name: "Mrs. Sushma Bhushan",
          role: "Director - Finance",
          phone: "+919271082118",
        },
        {
          name: "Mrs. Karishma Raikwar",
          role: "Accounts & HR Manager",
          phone: "+919150527552",
        },
      ],
    },
    {
      city: "INDORE (M.P.)",
      address:
        "Regional Office: MSB-II201, Near Chimney, New Siyaganj, Indore (M.P.)",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.70646468409!2d75.857!3d22.719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd3da22bf3b9%3A0x8b7fe6378c2b3e7a!2sNew%20Siyaganj%2C%20Indore!5e0!3m2!1sen!2sin!4v1700000000001",

      team: [
        {
          name: "Mr. Bhartendu Bhushan",
          role: "Director",
          phone: "+918087659549",
        },
        {
          name: "Mr. Kapil Kushwaha",
          role: "CRM Executive",
          phone: "+919340514329",
        },
      ],
    },
    {
      city: "BHOPAL (M.P.)",
      address:
        "Factory: Plot no. 78,79,80 Khasra No. 26, Khejra Bhanpur, Mohali Bhopal (M.P.)",
     map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.000000000!2d77.5000000!3d23.2900000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c687a00000000%3A0x000000000000000!2sKhejra%20Bhanpur%2C%20Bhopal!5e0!3m2!1sen!2sin!4v1700000000002",
      team: [
        {
          name: "Mr. Surendra Patel",
          role: "GM (General Manager)",
          phone: "+919981343632",
        },
      ],
    },
  ];

  return (
    <div className="contact-container">
      {/* Main Contact Card */}
      <div className="contact-card">
        <h2 className="contact-heading">
          <i className="bi bi-telephone-fill me-2"></i> Contact Us
        </h2>
        <p className="contact-subtext">
          Reach out to the right department for quick assistance.
        </p>

        <div className="contact-grid">
          <div className="contact-box">
            <h3>Info</h3>
            <p>
              <i className="bi bi-envelope-fill me-2"></i> info@suscom.in
            </p>
            <p>
              <i className="bi bi-telephone-fill me-2"></i> +91 769 745 1009
            </p>
          </div>

          <div className="contact-box">
            <h3>Dispatch</h3>
            <p>
              <i className="bi bi-envelope-fill me-2"></i> dispatch@suscom.in
            </p>
            <p>
              <i className="bi bi-telephone-fill me-2"></i> +91 882 762 9301
            </p>
          </div>

          <div className="contact-box">
            <h3>Marketing</h3>
            <p>
              <i className="bi bi-envelope-fill me-2"></i> marketing@suscom.in
            </p>
            <p>
              <i className="bi bi-telephone-fill me-2"></i> +91 808 765 9549
            </p>
          </div>

          <div className="contact-box">
            <h3>Landline</h3>
            <p>
              <i className="bi bi-telephone-fill me-2"></i> +91 755 492 5469
            </p>
          </div>
        </div>
      </div>

      {/* OFFICES SECTION */}
      <h2 className="office-title mt-5">Our Offices</h2>
      <p className="office-subtext">India</p>

      {offices.map((office, index) => (
        <div key={index} className="office-wrapper">
          {/* LEFT: MAP */}
          <div className="office-map">
            <iframe
              src={office.map}
              width="100%"
              height="250"
              loading="lazy"
              style={{ border: 0 }}
            ></iframe>
          </div>

          {/* RIGHT: DETAILS */}
          <div className="office-info">
            <h3 className="office-city">{office.city}</h3>
            <p className="office-address">{office.address}</p>

            {office.team.map((member, idx) => (
              <div key={idx} className="office-member">
                <i className="bi bi-person-fill me-2"></i>
                <strong>{member.name}</strong>
                <br />
                {member.role}
                <br />
                📞 {member.phone}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
