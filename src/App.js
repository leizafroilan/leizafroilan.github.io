import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa';
import './App.scss';
import resume  from '../src/files/Froilan_Leiza_Network_CV.pdf';

function App() {
  return (
      <>
        <div className="container">
          <div className="title-text">
            <ul>
              <li style={{color: '#6D67E4'}}>FROILAN LEIZA</li>
              <li style={{color: '#FD8A8A'}}>Network</li>
              <li style={{color: '#439A97'}}>Security</li>
              <li style={{color: '#F49D1A'}}>NetDevOps</li>
              <li style={{color: '#6D67E4'}}>FROILAN LEIZA</li>
            </ul>
          </div>

          <div className="social-icons">

            <a href='https://www.facebook.com/ur7rjrb9ddd' target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>

            <a href='https://twitter.com/froilan_leiza' target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>

            <a href='https://github.com/leizafroilan' target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>

            <a href='https://www.linkedin.com/in/froilan-leiza-83a91743' target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
        </div>

        <div className="resume-btn">
            <p>Download my resume here</p>
            <a href={resume} download>
            <button>
              <FaDownload />
            </button>
            </a>
        </div>
      </div>
    </>
  )
}

export default App;
