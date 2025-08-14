
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
          <FaLinkedinIn className="icon" color="##FFFFFF" /> 
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
          <p>
            Proactively <strong>identify, prevent, and mitigate</strong> security threats and vulnerabilities through timely implementation of patches, upgrades, and weekly content updates on managed security devices. <strong>Conduct</strong> regular device backups and <strong>coordinate</strong> with SIEM platforms and third-party vendors to assess attacks and address vulnerabilities.
            <br/><br/>
            <strong>Contributed</strong> to multiple projects involving technical changes, including migration of existing applications to the cloud, firewall upgrades and migrations, and other business-as-usual (BAU) operational tasks.
            <br/><br/>
            <strong>Leverage</strong> Infrastructure as Code (IaC) principles using Terraform to automate and standardize the deployment and management of cloud security infrastructure.
            <br/><br/>
            <strong>Manage</strong> AWS native security services, including Web Application Firewall (WAF), Secrets Manager, and Key Management Service (KMS), with automated provisioning and configuration through Terraform.
            <br/><br/>
            <strong>Oversee</strong> container security by deploying and managing Aqua Security solutions, integrating them into automated workflows using Terraform for consistent, scalable protection of containerized environments.
            <br/><br/>
            <strong>Manage</strong> file scanning operations utilizing OPSWAT MetaDefender Core to maintain high levels of threat detection and prevention.
            <br/><br/>
            <strong>Prepare</strong> detailed monthly security reports, <strong>maintain</strong> comprehensive documentation for processes, and <strong>develop</strong> runbooks and upgrade procedures to support operational excellence and knowledge continuity.
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
            <strong>Implemented</strong> enhancements to the client’s network management tools with a focus on expanding capabilities for network monitoring, fault detection, and automated recovery. <strong>Strengthened</strong> existing toolsets by identifying coverage and capability gaps, and <strong>collaborated</strong> with team leads, architects, and engineers to deliver more granular, real-time network visibility. <strong>Contributed</strong> to a coding and automation initiative that <strong>developed</strong> network operations tools using Python with FastAPI, MSSQL, and ReactJS.
            <br/><br/>
            <strong>Supported</strong> administrative functions across QIP, SolarWinds, and NetBrain environments, including basic management of NPM and NCM modules. <strong>Leveraged</strong> advanced scripting and integration skills to build custom solutions using the SolarWinds SWIS API, MSSQL, and NetBrain RESTful API.
            <br/><br/>
            <strong>Developed</strong> and <strong>documented</strong> a robust process, along with supporting code, to reconcile device inventories across platforms—<strong>ensuring</strong> alignment between legacy and new infrastructure and <strong>reducing</strong> monitoring and security gaps typically introduced through human error.
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
           <strong>Proactively prevented</strong> and <strong>mitigated</strong> security threats and vulnerabilities by <strong>implementing</strong> patches, <strong>performing</strong> system upgrades on managed security devices, <strong>applying</strong> weekly content updates, and <strong>conducting</strong> regular device backups. <strong>Coordinated</strong> with SIEM teams and third-party vendors to <strong>assess</strong> security incidents, <strong>analyze</strong> attack vectors, and <strong>remediate</strong> vulnerabilities effectively.
            <br/><br/>
            <strong>Implemented</strong> technical changes and <strong>contributed</strong> to multiple projects, including the migration of existing applications to the cloud. <strong>Provided</strong> ongoing support for incident management and <strong>handled</strong> various operational business-as-usual (BAU) tasks.
            <br/><br/>
            <strong>Managed</strong> and <strong>administered</strong> cloud security solutions, including Palo Alto Traps XDR, to <strong>strengthen</strong> endpoint protection and threat detection capabilities.
            <br/><br/>
            <strong>Led</strong> the creation of monthly security reports and <strong>maintained</strong> detailed documentation for operational processes, runbooks, and upgrade procedures to <strong>support</strong> consistency and compliance.
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
            <strong>Worked</strong> collaboratively within a team specializing in network security, <strong>applying</strong> in-depth technical knowledge to <strong>maintain</strong> and <strong>enhance</strong> the organization’s network infrastructure. <strong>Engaged</strong> in the design and implementation of secure configurations, <strong>ensuring</strong> compliance with internal policies and industry standards across various environments.
            <br/><br/>
            <strong>Played</strong> a key role in <strong>executing</strong> technical changes aimed at <strong>improving</strong> network resilience, performance, and security posture. These included configuration updates, firewall rule changes, and the <strong>deployment</strong> of new security policies aligned with evolving business and threat requirements.
            <br/><br/>
            <strong>Supported</strong> a range of business-as-usual (BAU) operational tasks, such as system monitoring, incident response, vulnerability management, and performance tuning. <strong>Contributed</strong> to <strong>maintaining</strong> secure, stable, and efficient network operations in a high-availability, compliance-driven banking environment.
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
            <strong>Led</strong> the deployment of Cisco ASA ACLs across more than 1,500 remote sites using network automation tools, <strong>significantly streamlining</strong> rollout and <strong>reducing</strong> manual effort. <strong>Participated</strong> in multiple infrastructure projects, including router and switch refresh initiatives, as well as large-scale firewall migrations to <strong>enhance</strong> network performance and security.
            <br/><br/>
            <strong>Implemented</strong> complex technical changes and <strong>managed</strong> critical incidents through advanced troubleshooting techniques, including deep packet analysis and forensic investigation on network and security devices. <strong>Served</strong> as an escalation point for the Network Operations team, <strong>ensuring</strong> timely and accurate resolution of high-impact issues.
            <br/><br/>
            <strong>Oversaw</strong> the administration of network and security appliances to <strong>maintain</strong> up-to-date software versions and <strong>applied</strong> security patches in accordance with policy. <strong>Ensured</strong> comprehensive monitoring and visibility by <strong>integrating</strong> systems with monitoring platforms, network taps, and logging facilities for real-time packet capture.
            <br/><br/>
            Additionally, <strong>conducted</strong> internal technical training for the team and <strong>led</strong> structured knowledge transfer sessions for new hires.
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
            <strong>Handled</strong> the administration of network and security devices, <strong>ensuring</strong> all systems were kept up to date with the latest software versions and security patches. <strong>Carried out</strong> technical changes and <strong>supported</strong> day-to-day operational and BAU (Business As Usual) tasks to <strong>maintain</strong> network reliability and security compliance.
            <br/><br/>
            <strong>Participated</strong> in Change Advisory Board (CAB) meetings to <strong>review</strong> and <strong>present</strong> proposed network changes. <strong>Took</strong> on key roles such as Change Coordinator and Implementer, <strong>ensuring</strong> all planned changes were properly documented, reviewed, and executed. Also <strong>attended</strong> Problem Management meetings when required to <strong>support</strong> root cause analysis and long-term issue resolution.
            <br/><br/>
            <strong>Maintained</strong> and regularly <strong>updated</strong> network documentation, including topology diagrams and standard operating procedures. <strong>Ensured</strong> smooth handover of newly deployed or updated network devices to Operations, <strong>supporting</strong> continuity and operational readiness.
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
            <strong>Performed</strong> fault analysis and resolution across LAN, WAN, wireless, and firewall infrastructure, primarily using Cisco technologies. <strong>Troubleshot</strong> and <strong>resolved</strong> issues across a range of Cisco devices, including routers, switches, wireless controllers, and ASA firewalls, <strong>ensuring</strong> stable and secure network performance.
            <br/><br/>
            <strong>Delivered</strong> effective and timely responses to reported network incidents, with a strong focus on accurate root cause diagnosis and permanent fixes. <strong>Utilized</strong> advanced troubleshooting techniques and Cisco tools to <strong>resolve</strong> complex faults affecting connectivity, performance, and security.
            <br/><br/>
            <strong>Collaborated</strong> with regional managers and cross-functional IT teams to <strong>ensure</strong> proper escalation and swift resolution of incidents. Actively <strong>contributed</strong> to the Problem Management Team, using monitoring systems to proactively <strong>detect</strong> and <strong>address</strong> network anomalies, helping to <strong>prevent</strong> outages and <strong>reduce</strong> recurring issues in Cisco-based infrastructure.
          </p>
          <br/>
        </div>
      </div>
    </div>
    </>
  );
}

export default Profile;
