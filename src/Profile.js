
import './App.css';
import img from'./img/img.jfif'
import {FaGithub, FaLinkedinIn, FaPhone, FaRegEnvelope} from  'react-icons/fa'


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
        <div className="contact-container">
          <FaPhone className="icon" color="#25D366" /> 
          <div className="contact-info">
            <a href="tel:+6596653764">+65 96653764</a>
          </div>
        </div>
        <div className="contact-container">
          <FaRegEnvelope className="icon" /> 
          <div className="contact-info">
            <a href="mailto:leizafroilan@gmail.com">leizafroilan@gmail.com</a>
          </div>
        </div>
        <div className="contact-container">
          <FaLinkedinIn className="icon" color="#0a66c2" /> 
          <div className="contact-info">
            <a href="https://www.linkedin.com/in/frolei" target="_blank" rel="noopener noreferrer">linkedin.com/in/frolei</a>
          </div>
        </div>
        <div className="contact-container">
          <FaGithub className="icon" color="#2b3137"/> 
          <div className="contact-info">
            <a href="https://github.com/leizafroilan" target="_blank" rel="noopener noreferrer">github.com/leizafroilan</a></div>
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
        <div className="left-desc cert-info">
          <p>
          <a href="https://cp.certmetrics.com/amazon/en/public/verify/credential/164bdc50af1f444aa6f9cf491d40c453" target="_blank" rel="noopener noreferrer"
          >AWS Solutions Architect<br/> (Associate)</a>
          </p>
          <p>Aug 2025 - Aug 2028</p><br/>
        </div>
        <div className="left-desc cert-info">
          <p>
           <a href="https://cp.certmetrics.com/cisco/en/public/verify/credential/TXTQLDTFJP1E1XK0" target="_blank" rel="noopener noreferrer"
          >CCNP Enterprise </a>
          </p>
          <p>Jun 2011 - Jul 2023</p><br/>
        </div>
        <div className="left-desc cert-info">
          <p>
             <a href="https://www.credly.com/badges/cfffe41f-7216-4325-ba26-2f4b2cd576ea/public_url" target="_blank" rel="noopener noreferrer"
          >PCNSE</a>
          </p>
          <p>Jun 2020 - Jul 2022</p><br/>
        </div>
        <div className="left-desc">
          <p>CCSE</p>
          <p>May 2016 - May 2018</p><br/>
        </div>
         <div className="left-desc cert-info">
          <p>
           <a href="https://learn.microsoft.com/en-us/users/froilanleiza-7296/credentials/50b7c6eb6cd09593" target="_blank" rel="noopener noreferrer"
          >MS Azure Fundamentals</a>
          </p>
          <p>Apr 2021 - Present</p><br/>
        </div>
        <div className="left-header">
          <h3>Skills</h3>
        </div>
        <div className="left-desc">
          <p></p>
          <p>
          Routing/Switching <br/>
          Network Security <br/>
          Endpoint Security <br/> 
          Python <br/>
          ReactJS/Javascript <br/>
          Packet Analysis <br/>
          Network Development <br/>
          Network Monitoring <br/>
          Containers/Dockers <br/>
          Container Security <br/>
          AWS Native Services <br/>
          IaC/Terraform <br/>
          SQL <br/>
          </p>

        </div>
      </div>
      <div className="right-container">
        
        <div className="right-header">
          <p> Career Profile </p>
        </div>
        <div className="right-desc">
         <p> Seasoned Senior Network Engineer with over 15 years of proven expertise in designing, implementing, and maintaining resilient network and security infrastructures across diverse environments—including data centers, remote offices, and cloud platforms. Skilled in delivering scalable and secure solutions that align with business objectives and drive operational excellence. <br/><br/> 
         Previous experience as a Network Engineer specializing in Tools and Applications (NetDevOps), focusing on network automation, monitoring, and custom tools development to optimize network performance and streamline operational workflows. 
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
         <p> Proactively responsible for identifying, preventing, and mitigating security threats and vulnerabilities through timely implementation of patches, upgrades, and weekly content updates on managed security devices. Conducted regular device backups and coordinated closely with SIEM platforms and third-party vendors to assess attacks and address vulnerabilities. <br/><br/> 
         Contributed to multiple projects involving technical changes, including migration of existing applications to the cloud, firewall upgrades and migrations, and other business-as-usual (BAU) operational tasks. <br/><br/>
         Leveraged Infrastructure as Code (IaC) principles using Terraform to automate and standardize the deployment and management of cloud security infrastructure. <br/><br/> 
         Hands-on management of AWS native security services, including Web Application Firewall (WAF), Secrets Manager, and Key Management Service (KMS), with automated provisioning and configuration through Terraform. <br/><br/> 
         Oversaw container security by deploying and managing Aqua Security solutions, integrating them into automated workflows using Terraform for consistent, scalable protection of containerized environments. <br/><br/> 
         Managed file scanning operations utilizing OPSWAT MetaDefender Core to maintain high levels of threat detection and prevention. <br/><br/> 
         Prepared detailed monthly security reports, maintained comprehensive documentation for processes, and developed runbooks and upgrade procedures to support operational excellence and knowledge continuity. 
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
          <p> Implemented enhancements to the client’s network management tools with a focus on expanding capabilities for network monitoring, fault detection, and automated recovery. Strengthened existing toolsets by identifying coverage and capability gaps, and collaborated with team leads, architects, and engineers to deliver more granular, real-time network visibility. Contributed to a coding and automation initiative that developed network operations tools using Python with FastAPI, MSSQL, and ReactJS. <br/><br/> 
          Supported administrative functions across QIP, SolarWinds, and NetBrain environments, including basic management of NPM and NCM modules. Leveraged advanced scripting and integration skills to build custom solutions using the SolarWinds SWIS API, MSSQL, and NetBrain RESTful API. <br/><br/> 
          Developed and documented a robust process, along with supporting code, to reconcile device inventories across platforms—ensuring alignment between legacy and new infrastructure and reducing monitoring and security gaps typically introduced through human error. 
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
          <p> Proactively prevented and mitigated security threats and vulnerabilities by implementing patches, performing system upgrades on managed security devices, applying weekly content updates, and conducting regular device backups. Coordinated with SIEM teams and third-party vendors to assess security incidents, analyze attack vectors, and remediate vulnerabilities effectively. <br/><br/> 
          Implemented technical changes and contributed to multiple projects, including the migration of existing applications to the cloud. Provided ongoing support for incident management and handled various operational business-as-usual (BAU) tasks. <br/><br/> 
          Managed and administered cloud security solutions, including Palo Alto Traps XDR, to strengthen endpoint protection and threat detection capabilities. <br/><br/> 
          Led the creation of monthly security reports and maintained detailed documentation for operational processes, runbooks, and upgrade procedures to support consistency and compliance. 
          </p>
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
         <p> Worked collaboratively within a team specializing in network security, applying in-depth technical knowledge to maintain and enhance the organization’s network infrastructure. Engaged in the design and implementation of secure configurations, ensuring compliance with internal policies and industry standards across various environments. <br/><br/> 
         Played a key role in executing technical changes aimed at improving network resilience, performance, and security posture. These included configuration updates, firewall rule changes, and the deployment of new security policies aligned with evolving business and threat requirements. <br/><br/> 
         Supported a range of business-as-usual (BAU) operational tasks, such as system monitoring, incident response, vulnerability management, and performance tuning. Actively contributed to maintaining secure, stable, and efficient network operations in a high-availability, compliance-driven banking environment. 
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
          <p> Led the deployment of Cisco ASA ACLs across more than 1,500 remote sites using network automation tools, significantly streamlining rollout and reducing manual effort. Participated in multiple infrastructure projects, including router and switch refresh initiatives, as well as large-scale firewall migrations to enhance network performance and security. <br/><br/> 
          Implemented complex technical changes and managed critical incidents through advanced troubleshooting techniques, including deep packet analysis and forensic investigation on network and security devices. Served as an escalation point for the Network Operations team, ensuring timely and accurate resolution of high-impact issues. <br/><br/> 
          Oversaw the administration of network and security appliances to maintain up-to-date software versions and applied security patches in accordance with policy. Ensured comprehensive monitoring and visibility by integrating systems with monitoring platforms, network taps, and logging facilities for real-time packet capture. <br/><br/>  
          Additionally, conducted internal technical training for the team and led structured knowledge transfer sessions for new hires. 
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
       <p> Handled the administration of network and security devices, ensuring all systems were kept up to date with the latest software versions and security patches. Carried out technical changes and supported day-to-day operational and BAU (Business As Usual) tasks to maintain network reliability and security compliance. <br/><br/> 
       Participated in Change Advisory Board (CAB) meetings to review and present proposed network changes. Took on key roles such as Change Coordinator and Implementer, ensuring all planned changes were properly documented, reviewed, and executed. Also attended Problem Management meetings when required to support root cause analysis and long-term issue resolution. <br/><br/> 
       Maintained and regularly updated network documentation, including topology diagrams and standard operating procedures. Ensured smooth handover of newly deployed or updated network devices to Operations, supporting continuity and operational readiness. 
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
         <p> Performed fault analysis and resolution across LAN, WAN, wireless, and firewall infrastructure, primarily using Cisco technologies. Troubleshot and resolved issues across a range of Cisco devices, including routers, switches, wireless controllers, and ASA firewalls, ensuring stable and secure network performance. <br/><br/> 
         Delivered effective and timely responses to reported network incidents, with a strong focus on accurate root cause diagnosis and permanent fixes. Utilized advanced troubleshooting techniques and Cisco tools to resolve complex faults affecting connectivity, performance, and security. <br/><br/> 
         Collaborated with regional managers and cross-functional IT teams to ensure proper escalation and swift resolution of incidents. Actively contributed to the Problem Management Team, using monitoring systems to proactively detect and address network anomalies, helping to prevent outages and reduce recurring issues in Cisco-based infrastructure. </p>
          <br/>
        </div>
      </div>
    </div>
    </>
  );
}

export default Profile;
