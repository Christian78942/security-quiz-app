import { useState, useEffect } from "react";
import Link from "next/link";

export default function PracticeExam() {
  const questions = [
    {
      question:
        "A security administrator has performed an audit of the organization’s production web servers, and the results have identified default configurations, web services running from a privileged account, and inconsistencies with SSL certificates. Which of the following would be the BEST way to resolve these issues?",
      options: [
        "Server hardening",
        "Multi-factor authentication",
        "Enable HTTPS",
        "Run operating system updates",
      ],
      answer: "Server hardening",
    },
    {
      question:
        "A shipping company stores information in small regional warehouses around the country. The company maintains an IPS at each warehouse to watch for suspicious traffic patterns. Which of the following would BEST describe the security control used at the warehouse?",
      options: ["Deterrent", "Compensating", "Directive", "Detective"],
      answer: "Detective",
    },
    {
      question:
        "The Vice President of Sales has asked the IT team to create daily backups of the sales data. The Vice President is an example of a:",
      options: [
        "Data owner",
        "Data controller",
        "Data steward",
        "Data processor",
      ],
      answer: "Data owner",
    },
    {
      question:
        "A security engineer is preparing to conduct a penetration test of a third-party website. Part of the preparation involves reading through social media posts for information about this site. Which of the following describes this practice?",
      options: [
        "Partially known environment",
        "OSINT",
        "Exfiltration",
        "Active reconnaissance",
      ],
      answer: "OSINT",
    },
    {
      question:
        "A company would like to orchestrate the response when a virus is detected on company devices. Which of the following would be the BEST way to implement this function?",
      options: [
        "Active reconnaissance",
        "Log aggregation",
        "Vulnerability scan",
        "Escalation scripting",
      ],
      answer: "Escalation scripting",
    },
    {
      question:
        "A user in the accounting department has received a text message from the CEO. The message requests payment by cryptocurrency for a recently purchased tablet. Which of the following would BEST describe this attack?",
      options: [
        "Brand impersonation",
        "Watering hole attack",
        "Smishing",
        "Typosquatting",
      ],
      answer: "Smishing",
    },
    {
      question:
        "A company has been informed of a hypervisor vulnerability that could allow users on one virtual machine to access resources on another virtual machine. Which of the following would BEST describe this vulnerability?",
      options: ["Containerization", "Jailbreaking", "SDN", "Escape"],
      answer: "Escape",
    },
    {
      question:
        "While working from home, users are attending a project meeting over a web conference. When typing in the meeting link, the browser is unexpectedly directed to a different website than the web conference. Users in the office do not have any issues accessing the conference site. Which of the following would be the MOST likely reason for this issue?",
      options: [
        "Buffer overflow",
        "Wireless disassociation",
        "Amplified DDoS",
        "DNS poisoning",
      ],
      answer: "DNS poisoning",
    },
    {
      question:
        "A company is launching a new internal application that will not start until a username and password is entered and a smart card is plugged into the computer. Which of the following BEST describes this process?",
      options: ["Federation", "Accounting", "Authentication", "Authorization"],
      answer: "Authentication",
    },
    {
      question:
        "An online retailer is planning a penetration test as part of their PCI DSS validation. A third-party organization will be performing the test, and the online retailer has provided the Internet-facing IP addresses for their public web servers. No other details were provided. What penetration testing methodology is the online retailer using?",
      options: [
        "Known environment",
        "Passive reconnaissance",
        "Partially known environment",
        "Benchmarks",
      ],
      answer: "Partially known environment",
    },

    {
      question: "What is the primary purpose of a firewall?",
      options: [
        "Encrypting data at rest",
        "Preventing unauthorized access",
        "Managing user accounts",
        "Detecting malware",
      ],
      answer: "Preventing unauthorized access",
    },
    {
      question: "Which of the following is an example of social engineering?",
      options: [
        "Phishing email",
        "SQL injection",
        "Man-in-the-middle attack",
        "Buffer overflow",
      ],
      answer: "Phishing email",
    },
    {
      question: "What does PKI stand for?",
      options: [
        "Private Key Infrastructure",
        "Public Key Infrastructure",
        "Protected Key Identity",
        "Personal Key Identity",
      ],
      answer: "Public Key Infrastructure",
    },
    {
      question: "Which protocol uses port 22 by default?",
      options: ["HTTP", "FTP", "SSH", "DNS"],
      answer: "SSH",
    },
    {
      question: "What is the primary purpose of an SSL certificate?",
      options: [
        "Ensuring data integrity",
        "Securing communication channels",
        "Detecting unauthorized access",
        "Encrypting local files",
      ],
      answer: "Securing communication channels",
    },
    {
      question: "Which type of malware is designed to spread automatically?",
      options: ["Ransomware", "Trojan", "Spyware", "Worm"],
      answer: "Worm",
    },
    {
      question:
        "What is a major benefit of implementing two-factor authentication?",
      options: [
        "Faster authentication process",
        "Enhanced security",
        "Reduced system downtime",
        "Increased user convenience",
      ],
      answer: "Enhanced security",
    },
    {
      question: "Which hashing algorithm is considered the most secure?",
      options: ["MD5", "SHA-1", "SHA-256", "DES"],
      answer: "SHA-256",
    },
    {
      question: "What is the purpose of a honeypot?",
      options: [
        "To capture and analyze attacker activity",
        "To encrypt sensitive data",
        "To prevent unauthorized access",
        "To secure wireless networks",
      ],
      answer: "To capture and analyze attacker activity",
    },
    {
      question:
        "Which of the following is NOT an example of a symmetric encryption algorithm?",
      options: ["AES", "DES", "RSA", "Blowfish"],
      answer: "RSA",
    },
    {
      question: "What does the principle of least privilege entail?",
      options: [
        "Giving users full administrative access",
        "Allowing access only to what is required for their role",
        "Enabling remote access for all employees",
        "Providing temporary access to external users",
      ],
      answer: "Allowing access only to what is required for their role",
    },
    {
      question: "Which tool is commonly used for packet sniffing?",
      options: ["Wireshark", "Burp Suite", "Nmap", "Metasploit"],
      answer: "Wireshark",
    },
    {
      question: "What does the acronym IDS stand for?",
      options: [
        "Intrusion Detection System",
        "Information Distribution System",
        "Internet Defense Strategy",
        "Internal Data Storage",
      ],
      answer: "Intrusion Detection System",
    },
    {
      question:
        "Which of the following is an example of multi-factor authentication?",
      options: [
        "Password and PIN",
        "Password and fingerprint",
        "Password and username",
        "Password and security question",
      ],
      answer: "Password and fingerprint",
    },
    {
      question: "What is the primary function of a VPN?",
      options: [
        "Encrypting web pages",
        "Providing secure remote access",
        "Blocking malicious websites",
        "Detecting unauthorized access",
      ],
      answer: "Providing secure remote access",
    },
    {
      question:
        "Which type of attack exploits vulnerabilities in web applications?",
      options: [
        "Phishing",
        "SQL Injection",
        "Denial of Service",
        "Man-in-the-middle",
      ],
      answer: "SQL Injection",
    },
    {
      question: "What does WPA3 improve upon compared to WPA2?",
      options: [
        "User authentication",
        "Wireless range",
        "Device compatibility",
        "Network bandwidth",
      ],
      answer: "User authentication",
    },
    {
      question: "Which device is used to segment network traffic?",
      options: ["Firewall", "Router", "Switch", "IDS"],
      answer: "Switch",
    },
    {
      question: "What is the purpose of a DMZ in networking?",
      options: [
        "To isolate internal networks from external threats",
        "To provide Wi-Fi access to guests",
        "To monitor network performance",
        "To encrypt sensitive files",
      ],
      answer: "To isolate internal networks from external threats",
    },
    {
      question: "Which protocol is commonly used for email encryption?",
      options: ["SSL/TLS", "HTTPS", "FTP", "IPSec"],
      answer: "SSL/TLS",
    },
    {
      question: "What is the purpose of an access control list (ACL)?",
      options: [
        "To log all user activity",
        "To restrict access to resources",
        "To manage user accounts",
        "To monitor network traffic",
      ],
      answer: "To restrict access to resources",
    },
    {
      question: "Which of the following is an asymmetric encryption algorithm?",
      options: ["AES", "RSA", "Blowfish", "DES"],
      answer: "RSA",
    },
    {
      question: "What is an example of a physical security control?",
      options: ["Firewall", "Biometric scanner", "Antivirus software", "IDS"],
      answer: "Biometric scanner",
    },
    {
      question: "What is the primary purpose of the OSI model?",
      options: [
        "To secure communication",
        "To define network protocols",
        "To standardize communication",
        "To encrypt data",
      ],
      answer: "To standardize communication",
    },
    {
      question:
        "Which of the following attacks involves tricking users into revealing sensitive information?",
      options: ["Phishing", "Smishing", "Spear Phishing", "All of the above"],
      answer: "All of the above",
    },
    {
      question: "What does the acronym DLP stand for?",
      options: [
        "Data Loss Prevention",
        "Digital Logic Processor",
        "Device Level Protocol",
        "Data Link Protection",
      ],
      answer: "Data Loss Prevention",
    },
    {
      question: "Which of the following is an example of a preventive control?",
      options: ["Firewall", "Audit logs", "Security cameras", "IDS"],
      answer: "Firewall",
    },
    {
      question: "What is the purpose of a hot site?",
      options: [
        "To analyze cyber attacks",
        "To provide real-time data backups",
        "To quickly recover business operations",
        "To monitor network performance",
      ],
      answer: "To quickly recover business operations",
    },
    {
      question: "Which protocol is used for secure file transfers?",
      options: ["FTP", "HTTP", "SFTP", "Telnet"],
      answer: "SFTP",
    },
    {
      question: "What does the acronym SIEM stand for?",
      options: [
        "Security Incident and Event Management",
        "Secure Internet Encryption Mechanism",
        "System Information and Event Manager",
        "Security Information Encryption Model",
      ],
      answer: "Security Incident and Event Management",
    },
    {
      question: "What is the primary goal of risk assessment?",
      options: [
        "To identify vulnerabilities",
        "To monitor network traffic",
        "To improve encryption algorithms",
        "To authenticate users",
      ],
      answer: "To identify vulnerabilities",
    },
    {
      question: "Which of the following uses port 443 by default?",
      options: ["HTTP", "HTTPS", "FTP", "SMTP"],
      answer: "HTTPS",
    },
    {
      question: "Which attack exploits an unpatched software vulnerability?",
      options: ["Zero-day", "Man-in-the-middle", "Brute force", "Phishing"],
      answer: "Zero-day",
    },
    {
      question: "What is the primary purpose of a security baseline?",
      options: [
        "To encrypt data",
        "To establish a minimum security standard",
        "To detect vulnerabilities",
        "To isolate network segments",
      ],
      answer: "To establish a minimum security standard",
    },
    {
      question:
        "Which security principle ensures that sensitive data is only accessible to authorized users?",
      options: [
        "Integrity",
        "Availability",
        "Confidentiality",
        "Authentication",
      ],
      answer: "Confidentiality",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(2700);
  const [isExamOver, setIsExamOver] = useState(false);

  const currentQuestion = questions[currentIndex];

  useEffect(() => {
    if (timeLeft > 0 && !isExamOver) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setIsExamOver(true);
    }
  }, [timeLeft, isExamOver]);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    if (selectedOption === currentQuestion.answer) {
      setScore(score + 1);
    }
    setSelectedOption("");
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsExamOver(true);
    }
  };

  const handleViewResults = () => {
    const previousScores = JSON.parse(localStorage.getItem("examScores")) || [];
    const newScore = {
      score: score,
      total: questions.length,
      date: new Date().toLocaleString(),
    };
    localStorage.setItem(
      "examScores",
      JSON.stringify([...previousScores, newScore])
    );
    alert(`Your final score is: ${score} out of ${questions.length}`);
  };

  const handleEndExam = () => {
    setIsExamOver(true);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Practice Exam</h1>
      <p>Test your knowledge under timed conditions!</p>

      {/* Timer Display */}
      <div
        style={{
          fontSize: "1.5em",
          marginBottom: "20px",
          color: timeLeft <= 60 ? "red" : "black",
        }}
      >
        Time Left: {formatTime(timeLeft)}
      </div>

      {/* Questions Remaining */}
      <div style={{ marginBottom: "20px", fontSize: "1.2em", color: "blue" }}>
        Questions Remaining: {questions.length - currentIndex}
      </div>

      {/* Display current question if exam is not over */}
      {!isExamOver && (
        <div>
          <h2>{currentQuestion.question}</h2>

          {/* Display multiple-choice options */}
          <div style={{ marginBottom: "15px" }}>
            {currentQuestion.options.map((option, index) => (
              <label key={index} style={{ display: "block", margin: "10px 0" }}>
                <input
                  type="radio"
                  name="option"
                  value={option}
                  checked={selectedOption === option}
                  onChange={() => handleOptionChange(option)}
                  style={{ marginRight: "10px" }}
                />
                {option}
              </label>
            ))}
          </div>

          <button
            onClick={handleSubmit}
            style={{ marginLeft: "10px", padding: "10px 20px" }}
            disabled={!selectedOption} // Disable button until an option is selected
          >
            Submit
          </button>

          <button
            onClick={handleEndExam}
            style={{
              marginLeft: "10px",
              padding: "10px 20px",
              backgroundColor: "red",
              color: "white",
            }}
          >
            End Exam
          </button>
        </div>
      )}

      {/* Show "View Results" button when exam is over */}
      {isExamOver && (
        <div style={{ marginTop: "20px" }}>
          <p>The exam is over! Click below to view your results.</p>
          <button onClick={handleViewResults} style={{ padding: "10px 20px" }}>
            View Results
          </button>
        </div>
      )}

      {/* Back to Home button */}
      <Link href="/">
        <button style={{ marginTop: "30px", padding: "10px 20px" }}>
          Back to Home
        </button>
      </Link>
    </div>
  );
}
