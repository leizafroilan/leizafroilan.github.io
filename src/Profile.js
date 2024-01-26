
import './App.css';
import img from'./img/img.jfif'
import {FiGithub, FiLinkedin, FiPhone, FiMail} from  'react-icons/fi'

function Profile() {
  return (
    <>
    
    <div className="main-container">

      <div className="left-container">
        <div className="profile">
          <img
            className="profile-image"
            src={img}
            alt="Profile"
          /> 
          <div className="profile-name">
            Froilan Leiza
          </div>
        </div>
        <div className="contact-info">
          <br/>
          <p><FiPhone className="icon" /><a href="tel:+6596653764">+65 96653764</a> </p>    
          <p><FiMail className="icon" /> <a href="mailto:leizafroilan@gmail.com">leizafroilan@gmail.com</a></p>  
          <p><FiLinkedin className="icon" /> <a href="https://www.linkedin.com/in/frolei/" target="_blank" rel="noopener noreferrer">linkedin.com/in/frolei</a></p>
          <p><FiGithub className="icon" /> <a href="https://github.com/leizafroilan" target="_blank" rel="noopener noreferrer">github.com/leizafroilan</a></p>
        </div>
        <div className="left-header">
          <h3>Education</h3>
        </div>
        <div className="left-desc">
          <p>BS in Computer Engineering</p>
          <p>University of Baguio</p>
          <p>June 1999 - October 2004</p>
        </div>
        <div className="left-header">
          <h3>Certificates</h3>
        </div>
        <div className="left-desc">
          <p>CCNP Enterprise</p>
          <p>ID CSCO11755013</p>
          <p>June 2011 - July 2023</p>
        </div>
        <div className="left-desc">
          <p>PCNSE</p>
          <p>ID PAN00194154</p>
          <p>June 2020 - July 2022</p>
        </div>
        <div className="left-desc">
          <p>CCSE</p>
          <p>ID CP0000078086</p>
          <p>May 2016 - May 2018</p>
        </div>
        <div className="left-header">
          <h3>Skills</h3>
        </div>
        <div className="left-desc">
          <p></p>
          <p>
          Routing/Switching <br/>
          Network Security <br/>
          Endpoint security <br/> 
          Python <br/>
          React JS <br/>
          Packet Analysis <br/>
          Network Development <br/>
          Network Monitoring <br/>
          Containers/Dockers <br/>
          Ansible <br/>
          SQL <br/>
          </p>

        </div>
      </div>
      <div className="right-container">
        
        <div className="right-header">
          <p> Career Profile </p>
        </div>
        <div className="right-desc">
          <p>
          Experienced Senior Network Engineer with over 12 years of expertise in designing, implementing, and maintaining robust 
          network and security systems across diverse environments, including data centers, remote offices, and cloud infrastructure. 
          <br/><br/>Prior experience includes a role as a Network Engineer for Tools and Applications (NetDevOps), emphasizing network 
          automation, monitoring, and tools development to enhance operational efficiency and performance
          </p>
        </div>
        <div className="right-header">
          <p> Experience </p>
        </div>
        <div className="right-title">
          <p>Senior Security Engineer</p>
          <p>NCS Pte. Ltd.</p>
          <p>5 Ang Mo Kio Street 62, Singapore 569141</p>
          <p>May 2023 - Present</p>
        </div>
        <div className="right-desc">
          <p>
          Responsible for proactively preventing and mitigating security threats and vulnerabilities by implementing patches and
          upgrades on managed security devices, weekly content updates, device backups and proactively coordinated with SIEMs 
          and third-party vendors to assess attacks and patch vulnerabilities<br/><br/>
          Implement technical changes and was involved on several projects' solutions and migration of existing applications to cloud,
          managed incidents and other operational BAU tasks<br/><br/>
          Create monthly reports and document several processes, runbooks and upgrade procedures<br/><br/>
          Responsible in firewall upgrades and replacements<br/>
          </p>
          <br/>
        </div>
        <div className="right-title">
          <p>Network Tools and Applications Engineer</p>
          <p>NTT Data Services Singapore Pte. Ltd.</p>
          <p>Aperia Tower 1 Singapore, 339509</p>
          <p>June 2021 - May 2023</p>
        </div>
        <div className="right-desc">
          <p>
          Implemented improvements to client’s network management tools, with specific focus on broadening and deepening the capabilities 
          for network monitoring, fault detection, and recovery<br/><br/>
          Enhanced client’ s existing toolsets, identified gaps in coverage and capability, and worked with team leads, architects and 
          engineers in developing solutions to create more specific, granular, and real-time network visibility<br/><br/>
          Contributed on coding and automation project that develops Network Operations Tools using Python, MSSQL, and React/JS<br/><br/>
          Part of a group that does administrative work in Solarwinds and Netbrain which involves NPM, NCM basic administration and
          utilizes advance support such as developing codes around Solarwinds SWIS API, MSSQL, and Netbrain Restful API.<br/><br/>
          Developed and documented a process and code for reconciling existing and new devices to ensure that device inventories are in-sync 
          across all platforms and to prevent monitoring and security gaps caused mainly by human error.<br/>
          </p>
          <br/>
        </div>
        <div className="right-title">
          <p>IT Security Senior Consultant</p>
          <p>NCS Pte. Ltd. / Singtel Cybersecurity Pte. Ltd.</p>
          <p>5 Ang Mo Kio Street 62, Singapore 569141</p>
          <p>May 2018 - June 2021</p>
        </div>
        <div className="right-desc">
          <p>
          Responsible for proactively preventing and mitigating security threats and vulnerabilities by implementing patches and
          upgrades on managed security devices, weekly content updates, device backups and proactively coordinated with SIEMs 
          and third-party vendors to assess attacks and patch vulnerabilities<br/><br/>
          Implemented technical changes and was involved on several projects' solutions and migration of existing applications to cloud,
          managed incidents and other operational BAU tasks<br/><br/>
          Led monthly reports creation and documented several processes, runbooks and upgrade procedures<br/>
          </p>
          <br/>
        </div>
        <div className="right-title">
          <p>Senior Security Analyst</p>
          <p>NTT Data Services Singapore Pte. Ltd.</p>
          <p>8 Marina Boulevard, Marina Center, Singapore 018984</p>
          <p>March 2017 - April 2018</p>
        </div>
        <div className="right-desc">
          <p>
          Worked within a team with detailed knowledge on network securities, implemented technical changes and other operational
          <br/>BAU tasks<br/>
          </p>
          <br/>
        </div>
        <div className="right-title">
          <p>Network Security Engineer</p>
          <p>Safeway Philtech Inc.</p>
          <p>Mckinley Taguig City, Philippines</p>
          <p>November 2014 – February 2017</p>
        </div>
        <div className="right-desc">
          <p>
          Led the deployment of Cisco ASA ACLs across 1500+ remote sites via network automation and worked on several projects involving
          router and switch refresh and firewall migrations<br/><br/>
          Implemented technical changes and managed incidents with deep troubleshooting via packet analysis and forensics on network 
          and security devices and handled escalations from Network Operations<br/><br/>
          Administration of network and security devices to ensure their versions and patches are up to date, properly monitored by
          several monitoring systems, taps and other log facilities for packet capture and network visibility<br/><br/>
          Conducted internal technical training to the team and knowledge transfer sessions to new hires<br/>
          </p>
          <br/>
        </div>
        <div className="right-title">
          <p>Network Security Engineer</p>
          <p>Weserv / Fujitsu Philippines</p>
          <p>BGC Taguig, Philippines</p>
          <p>May 2013 – November 2014</p>
        </div>
        <div className="right-desc">
          <p>
          Administration of network and security devices to ensure their versions and patches are up to date, implemented technical
          hanges and other operational and BAU tasks<br/><br/>
          Attended CAB meetings where network changes are up for review and represented network changes as Change Coordinator,
          Implementer and attended Problem Management meetings as required by business<br/><br/>
          Responsible for maintenance and updates of network documentation, diagrams and procedures and ensured proper handover of 
          network devices to Operation<br/>
          </p>
          <br/>
        </div>
        <div className="right-title">
          <p>Network Engineer</p>
          <p>Regus Service Centre</p>
          <p>BGC Taguig, Philippines</p>
          <p>September 2010 – April 2013</p>
        </div>
        <div className="right-desc">
          <p>
          Fault analysis and fix on the LAN, WAN, Wireless and Firewall Infrastructure<br/><br/>
          Effective and professional response and solutions to reported problems, including the proficient diagnosis and repair of
          complex network faults <br/><br/>
          Coordinated with regional managers of different IT groups to ensure proper escalation and incident resolution <br/><br/>
          Part of Problem Management Team which pro-actively monitored network, mitigated and predicted possible network issues 
          identified by several monitoring systems<br/>
          </p>
          <br/>
        </div>
      </div>
    </div>
    </>
  );
}

export default Profile;
