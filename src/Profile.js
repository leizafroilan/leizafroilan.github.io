import { Link } from 'react-router-dom';
import './App.css';
import img from'./img/img.jfif'
import {FaGithub, FaLinkedinIn, FaRegEnvelope, FaWhatsapp, FaDownload } from  'react-icons/fa'


function Profile() {
  return (
    <>
    <div className="all-container">
      <div className="resume-download">
        <h3>Download Resume</h3>
        <Link to="/download">
          <FaDownload className="download-icon" />
        </Link>
      </div>
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
            <FaWhatsapp className="icon" color="25D366"/> 
            <div className="contact-info">
              <a href="tel:+6596653764">+65 96653764</a>
            </div>
          </div>
          <div className="contact-container">
            <FaRegEnvelope className="icon" color="#333333" /> 
            <div className="contact-info">
              <a href="mailto:leizafroilan@gmail.com">leizafroilan@gmail.com</a>
            </div>
          </div>
          <div className="contact-container">
            <FaLinkedinIn className="icon" color="#FFFFFF" /> 
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
            <p>Jun 2020 - Jun 2022</p><br/>
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
            <p>
              <strong>Cloud Security:</strong><br/>
              AWS WAF<br/>
              <strong>Container Security:</strong><br/>
              Aqua Security<br/>
              Docker<br/>
              <strong>IaC:</strong><br/>
              Terraform<br/>
              Gitlab CI/CD<br/>
              <strong>Network Automation:</strong><br/>
              Python<br/>
              FastAPI<br/>
              REST APIs<br/>
              <strong>Network Security:</strong><br/>
              FortiGate<br/>
              Check Point<br/>
              Cisco ASA<br/>
              <strong>Routing & Switching:</strong><br/>
              Cisco Routers<br/>
              Cisco Switches<br/>
              <strong>Database Monitoring:</strong><br/>
              Imperva DAM<br/>
              Imperva DSF<br/>
              <strong>Endpoint Security:</strong><br/>
              Trend Micro<br/>
              Palo Alto Traps/XDR<br/>
              <strong>Network Monitoring:</strong><br/>
              SolarWinds NPM/NCM<br/>
              NetBrain<br/>
              Wireshark<br/>
              <strong>File Security:</strong><br/>
              OPSWAT MetaDefender Core<br/>
              Rufus API<br/>
              <strong>Application Development:</strong><br/>
              ReactJS<br/>
              Python<br/>
              SQL/MSSQL<br/>
            </p>
          </div>

        </div>
        <div className="right-container">
          
          <div className="right-header">
            <p> Career Profile </p>
          </div>
            <div className="right-desc">
              <p>
                Network Automation, Cloud Security & Security Engineer with over 15 years of experience in network engineering, security operations and infrastructure automation across enterprise environments, data centers, remote offices, and cloud platforms. Experienced in designing, implementing, and maintaining secure, resilient network and security infrastructures while driving operational efficiency and continuous improvement.
                <br/><br/>
                Specialized in network automation and custom tool development using Python, FastAPI, REST APIs, and MSSQL to streamline network operations, enhance monitoring, and automate large-scale firewall deployments. Strong expertise in network security technologies, including Cisco, FortiGate, and Check Point, alongside AWS cloud security, Terraform Infrastructure as Code (IaC), Docker, and Aqua Security container protection. Experienced in integrating automated vulnerability scanning and security enforcement into GitLab and GitHub CI/CD pipelines, strengthening security throughout the software deployment lifecycle. Proven capabilities in technical project leadership, security automation, incident management, troubleshooting, and cross-functional collaboration.
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
              
              <strong>Project Leadership & Team Coordination:</strong> Led team members in executing technical projects and initiatives, coordinating tasks, tracking progress, and aligning deliverables with project objectives and timelines. Collaborated with cross-functional teams and stakeholders to resolve technical challenges, streamline implementation processes, and ensure successful project delivery.
              <br/><br/>

              <strong>Container Security & DevSecOps Automation:</strong> Led the development and optimization of automated container security processes using Aqua Security, streamlining vulnerability assessment and enforcement across container deployment workflows.
              <br/><br/>

              <strong>CI/CD Pipeline Security Integration:</strong> Implemented mandatory Aqua Security image scanning and security validation within GitLab CI/CD deployment pipelines, strengthening security controls and preventing vulnerable container images from progressing through deployment workflows.
              <br/><br/>

              <strong>Security Reporting & Data Automation:</strong> Developed automation workflows for security report generation and data extraction, reducing manual effort, improving reporting consistency, and streamlining security data analysis.
              <br/><br/>

              <strong>Security Vulnerability Management:</strong> Proactively identified, assessed, and mitigated security threats and vulnerabilities through timely patching, software upgrades, and weekly security content updates across managed security devices. Performed regular device backups and collaborated with SIEM teams and third-party vendors to investigate security incidents and remediate vulnerabilities.
              <br/><br/>

              <strong>Cloud Migration & Security Infrastructure Projects:</strong> Contributed to technical initiatives involving application migration to cloud environments, firewall upgrades and migrations, security infrastructure changes, and business-as-usual (BAU) operations.
              <br/><br/>

              <strong>Infrastructure as Code (IaC):</strong> Leveraged Terraform to automate, standardize, and manage cloud security infrastructure deployments, improving configuration consistency and operational efficiency.
              <br/><br/>

              <strong>AWS Cloud Security Services:</strong> Managed AWS-native security services, including Web Application Firewall (WAF), Secrets Manager, and Key Management Service (KMS), using Terraform for automated provisioning and configuration management.
              <br/><br/>

              <strong>Container Security Platform Management:</strong> Deployed and managed Aqua Security solutions to protect containerized environments, incorporating infrastructure automation and standardized security configurations into operational workflows.
              <br/><br/>

              <strong>File Security & Malware Scanning:</strong> Managed file scanning operations using OPSWAT MetaDefender Core to support malware detection, file security validation, and threat prevention.
              <br/><br/>

              <strong>Database Security & Monitoring:</strong> Administered and maintained Imperva Database Activity Monitoring (DAM) and Data Security Fabric (DSF) environments, performing continuous monitoring, health checks, troubleshooting, and platform upgrades. Investigated and resolved database connectivity, monitoring, and system-related issues to maintain service availability and ensure reliable database activity monitoring. Supported platform maintenance, operational optimization, and incident resolution to strengthen database security monitoring and operational stability.
              <br/><br/>

              <strong>Firewall Administration & Security Management:</strong> Administered and managed FortiGate firewalls, including configuration management, security policy administration, monitoring, troubleshooting, and firmware upgrades. Supported firewall rule reviews, connectivity issue resolution, and security policy optimization to maintain network protection, service availability, and operational stability.
              <br/><br/>
              
              <strong>Security Documentation & Operational Excellence:</strong> Prepared monthly security reports and maintained technical documentation, operational runbooks, and upgrade procedures to support consistent service delivery, troubleshooting, and knowledge transfer.
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
              <strong>Network Monitoring & Automation Enhancements:</strong> Enhanced client network management tools to improve network visibility, fault detection, and automated recovery capabilities. Identified monitoring coverage gaps and functional limitations, collaborating with team leads, architects, and engineers to deliver more granular, real-time network monitoring and improve operational efficiency.
              <br/><br/>

              <strong>Network Operations Tool Development:</strong> Contributed to the design and development of automated network operations tools using Python, FastAPI, MSSQL, and ReactJS, expanding network management capabilities and streamlining operational workflows.
              <br/><br/>

              <strong>Network Management Platform Administration & API Integration:</strong> Supported the administration and configuration of QIP, SolarWinds, and NetBrain platforms, including foundational management of SolarWinds Network Performance Monitor (NPM) and Network Configuration Manager (NCM). Developed custom automation and integration solutions using the SolarWinds SWIS API, MSSQL, and NetBrain REST APIs to extend platform functionality and streamline network management tasks.
              <br/><br/>

              <strong>Automated Network Inventory Reconciliation:</strong> Designed, documented, and implemented a standardized device inventory reconciliation process, supported by custom automation code, to synchronize network device inventories across management platforms. Improved consistency between legacy and new infrastructure, minimized manual reconciliation errors, and reduced monitoring blind spots and potential security gaps caused by inventory discrepancies.
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
              <strong>Security Operations & Vulnerability Management:</strong> Proactively identified, prevented, and mitigated security threats and vulnerabilities across managed security devices through timely patching, system upgrades, weekly security content updates, and regular device backups. Collaborated with SIEM teams and third-party vendors to investigate security incidents, analyze attack vectors, and coordinate remediation activities to strengthen the security posture of managed environments.
              <br/><br/>

              <strong>Cloud Migration & Technical Project Support:</strong> Contributed to technical projects involving application migration to cloud environments, infrastructure changes, and security enhancements. Supported incident management, troubleshooting, and day-to-day business-as-usual (BAU) operations to maintain service availability and operational stability.
              <br/><br/>

              <strong>Endpoint Security & Threat Detection:</strong> Administered and managed Palo Alto Traps and Extended Detection and Response (XDR) security solutions to strengthen endpoint protection, improve threat detection capabilities, and support the identification and mitigation of security threats.
              <br/><br/>

              <strong>Firewall Administration & Security Management:</strong> Administered and managed multiple firewall platforms, including FortiGate, Check Point, and Cisco ASA. Performed firewall configuration, security policy administration, rule reviews, monitoring, troubleshooting, and firmware upgrades. Investigated and resolved network connectivity issues, optimized firewall rules, and maintained security policies to strengthen network protection, ensure service availability, and support operational stability.
              <br/><br/>

              <strong>Security Reporting & Documentation:</strong> Led the preparation of monthly security reports and maintained comprehensive technical documentation, operational runbooks, and upgrade procedures. Standardized operational processes to improve consistency, support compliance requirements, and facilitate troubleshooting and knowledge transfer.
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
                <strong>Network Security Operations & Infrastructure Management:</strong> Collaborated with network security teams to maintain, secure, and enhance enterprise network infrastructure in a high-availability banking environment. Administered and supported FortiGate and Check Point firewalls, implementing secure network configurations and security controls in accordance with internal policies, regulatory requirements, and industry best practices.
                <br/><br/>

                <strong>Network Security Configuration & Change Management:</strong> Executed technical changes to strengthen network resilience, performance, and security posture, including firewall rule modifications, security policy implementation, and network configuration updates across FortiGate and Check Point platforms. Supported change validation and troubleshooting to minimize operational risks and service disruptions while aligning security controls with evolving business requirements and emerging threats.
                <br/><br/>

                <strong>Security Monitoring & Incident Response:</strong> Performed routine network infrastructure and firewall monitoring, supported security incident investigation and response, and contributed to vulnerability remediation and performance optimization. Investigated network connectivity and security policy issues to maintain service availability, operational stability, and effective security controls.
                <br/><br/>

                <strong>Business-as-Usual (BAU) Operations & Compliance:</strong> Supported day-to-day network security operations, firewall maintenance, security policy reviews, and operational troubleshooting within a compliance-driven banking environment. Helped maintain reliable network services while ensuring adherence to established operational procedures, security standards, and regulatory requirements.
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
                <strong>Network Security Automation & Large-Scale Deployment:</strong> Led the automated deployment of Cisco ASA Access Control Lists (ACLs) across more than 1,500 remote sites using network automation tools, streamlining rollout processes, reducing manual configuration effort, and improving deployment consistency. Contributed to infrastructure modernization projects, including router and switch refresh initiatives and large-scale firewall migrations to enhance network performance, resilience, and security.
                <br/><br/>

                <strong>Advanced Troubleshooting & Critical Incident Management:</strong> Implemented complex network and security changes and managed critical incidents through advanced troubleshooting, deep packet analysis, and forensic investigation of network traffic and security devices. Served as an escalation point for the Network Operations team, driving timely incident resolution, minimizing service disruption, and restoring operational stability.
                <br/><br/>

                <strong>Network & Security Infrastructure Management:</strong> Administered and maintained Cisco routers, switches, and network security appliances, ensuring software versions and security patches remained aligned with organizational policies and security requirements. Integrated network infrastructure with monitoring platforms, network taps, and logging systems to enhance network visibility, enable real-time packet capture, and support incident investigation, advanced troubleshooting, and root cause analysis.
                <br/><br/>

                <strong>Technical Leadership & Knowledge Transfer:</strong> Conducted internal technical training and led structured knowledge transfer sessions for new hires, sharing operational expertise, troubleshooting methodologies, and network security best practices to strengthen team capabilities and support consistent service delivery.
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
                <strong>Network & Security Device Administration:</strong> Administered and maintained network and security devices, including Check Point and Cisco ASA firewalls, ensuring software versions and security patches remained up to date and aligned with organizational security policies. Implemented technical changes and performed day-to-day operational and Business-as-Usual (BAU) activities to maintain network reliability, security compliance, and service availability.
                <br/><br/>

                <strong>Change & Problem Management:</strong> Participated in Change Advisory Board (CAB) meetings to review, present, and assess proposed network changes. Undertook Change Coordinator and Implementer responsibilities, ensuring changes were properly documented, risk-assessed, reviewed, approved, and executed in accordance with established change management procedures. Participated in Problem Management meetings as required to support root cause analysis and long-term issue resolution.
                <br/><br/>

                <strong>Network Documentation & Operational Handover:</strong> Maintained and updated network documentation, including network topology diagrams, configuration records, and standard operating procedures (SOPs). Coordinated the handover of newly deployed or upgraded network devices to Operations, ensuring documentation completeness, operational readiness, and continuity of support.
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
              <strong>Network Troubleshooting & Fault Resolution:</strong> Performed fault analysis, diagnosis, and resolution across LAN, WAN, wireless, and firewall infrastructure within Cisco-based network environments. Troubleshot and maintained Cisco routers, switches, wireless controllers, and ASA firewalls to ensure reliable connectivity, optimal network performance, and secure operations.
              <br/><br/>

              <strong>Incident Management & Root Cause Analysis:</strong> Responded to and resolved network incidents within established operational timelines, applying advanced troubleshooting methodologies and Cisco diagnostic tools to identify root causes and implement effective corrective and permanent fixes. Addressed complex connectivity, performance, and security issues to minimize service disruption and maintain network availability.
              <br/><br/>

              <strong>Cross-Functional Collaboration & Escalation:</strong> Collaborated with regional managers and cross-functional IT teams to coordinate incident escalation, troubleshoot complex network issues, and expedite service restoration. Ensured effective communication and coordination throughout the incident resolution process.
              <br/><br/>

              <strong>Problem Management & Proactive Monitoring:</strong> Actively contributed to the Problem Management Team by analyzing recurring network faults, leveraging monitoring systems to identify anomalies, and supporting preventive measures to reduce repeat incidents and minimize potential outages across Cisco-based infrastructure.
            </p>
            <br/>
          </div>
            <br/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
