import { Link } from 'react-router-dom';
import './App.css';
import img from'./img/img.jfif'
import {FaGithub, FaLinkedinIn, FaRegEnvelope, FaWhatsapp, FaDownload } from  'react-icons/fa'
import content from "./Content";

function Profile() {
  return (
    <>
    <div className="all-container">
      {/* start --- top div - download resume block */}
      <div className="resume-download">
        <div className="download-info">
          <FaDownload className="download-icon" />
            <div>
              <h3>Download my resume</h3>
              <p>Senior Security Engineer · PDF format</p>
            </div>
        </div>
        <Link to="/download" className="download-button">
          Download PDF
        </Link>
      </div>
      {/* end --- top div - download resume block */}
      <div className="main-container">
        <div className="left-container">
          <div className="profile">
            <img
              className="profile-image"
              src={img}
              alt="Profile"
            /> 
            <div className="profile-name">
              {content.name}
            </div>

             <div className="profile-title">
              {content.title}
            </div>
          </div>
          <div className="left-header">
   <h3>Contacts</h3>
</div>
<div className="contacts-section">
  <div className="contact-container">
    <FaWhatsapp className="icon" color="#25D366" />
    <div className="contact-info">
      <a href={`tel:${content.contact.phone}`}>
        {content.contact.phone}
      </a>
    </div>
  </div>

  <div className="contact-container">
    <FaRegEnvelope className="icon" color="#333333" />
    <div className="contact-info">
      <a href={`mailto:${content.contact.email}`}>
        {content.contact.email}
      </a>
    </div>
  </div>

  <div className="contact-container">
    <FaLinkedinIn className="icon" color="#FFFFFF" />
    <div className="contact-info">
      <a
        href={`https://www.${content.contact.linkedin}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content.contact.linkedin}
      </a>
    </div>
  </div>

  <div className="contact-container">
    <FaGithub className="icon" color="#2b3137" />
    <div className="contact-info">
      <a
        href={`https://${content.contact.github}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content.contact.github}
      </a>
    </div>
  </div>
</div>

          <div className="left-header">
            <h3>Education</h3>
          </div>
            <div className="left-desc education-section">
              <div className="education-category">
                <p className="education-heading">{content.education.degree}</p>
                <p className="education-heading"><strong>{content.education.course}</strong></p>
                <p className="education-school">{content.education.school}</p>
                <p className="education-date">{content.education.date}</p>
              </div>
            </div>
          
<div className="left-header">
  <h3>Certificates</h3>
</div>

<div className="left-desc certificates-section">
  {content.certificates.map((cert, index) => (
    <div className="certificate-category" key={index}>
      <p className="certificate-name">
        {cert.link ? (
          <a href={cert.link} target="_blank" rel="noopener noreferrer">
            <strong>{cert.name}</strong>
          </a>
        ) : (
          cert.name
        )}
      </p>

      <p className="certificate-date">{cert.date}</p>
    </div>
  ))}
</div>

<div className="left-header">
  <h3>Technical Skills</h3>
</div>

<div className="left-desc skills-section">
  {content.skills.map((skill, index) => (
    <div className="skill-category" key={index}>
      <p className="skill-heading">
        <strong>{skill.category}</strong>
      </p>

      {skill.items.map((item, i) => (
        <p className="skill-item" key={i}>
          {item}
        </p>
      ))}
    </div>
  ))}
</div>
    </div>
        <div className="right-container">    
          <div className="right-header">
            <p> Career Profile </p>
          </div>
          <div className="right-desc"
              dangerouslySetInnerHTML={{ __html: content.summary }}>
          </div>
          <div className="right-header">
            <p> Experience </p>
          </div>
          {content.experiences.map((experience, index) => (
            <div key={index}>
              <div className="right-title">
                <p>{experience.position}</p>
                <p>{experience.company}</p>
                <p>{experience.address}</p>
                <p>{experience.period}</p>
              </div>

              <div
                className="right-desc"
                dangerouslySetInnerHTML={{
                  __html: experience.responsibilities,
                }}
              />
            </div>
          ))}
          {/* End */}
          </div>
        </div>
      </div>
    
    </>
  );
}

export default Profile;
