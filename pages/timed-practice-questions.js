import { useState, useEffect } from "react";
import Link from "next/link";

export default function BasicQuestions() {

  const questions = [
    {
      question: "What does CIA stand for in cybersecurity?",
      options: [
        "Confidentiality, Integrity, Availability",
        "Control, Integrity, Authentication",
        "Confidentiality, Integrity, Accessibility",
        "Confidentiality, Information, Availability",
      ],
      answer: "Confidentiality, Integrity, Availability",
    },
    {
      question:
        "Which of the following is used for secure communication over the internet?",
      options: ["HTTP", "FTP", "SMTP", "TLS"],
      answer: "TLS",
    },
    {
      question: "What is the purpose of an Intrusion Detection System (IDS)?",
      options: [
        "Prevent data loss",
        "Detect unauthorized access",
        "Encrypt data",
        "Manage user identities",
      ],
      answer: "Detect unauthorized access",
    },
    {
      question: "Which of these is a type of Denial of Service (DoS) attack?",
      options: ["Man-in-the-middle", "Phishing", "DDoS", "SQL Injection"],
      answer: "DDoS",
    },
    {
      question: "What does VPN stand for?",
      options: [
        "Virtual Protected Network",
        "Very Private Network",
        "Virtual Private Network",
        "Verified Public Network",
      ],
      answer: "Virtual Private Network",
    },
    {
      question: "What is the primary purpose of multifactor authentication?",
      options: [
        "Increase convenience",
        "Enhance security by combining factors",
        "Speed up the login process",
        "Enable passwordless login",
      ],
      answer: "Enhance security by combining factors",
    },
    {
      question: "Which layer of the OSI model is responsible for encryption?",
      options: ["Application", "Transport", "Session", "Presentation"],
      answer: "Presentation",
    },
    {
      question:
        "What type of malware is designed to replicate itself and spread to other devices?",
      options: ["Ransomware", "Spyware", "Worm", "Rootkit"],
      answer: "Worm",
    },
    {
      question: "Which protocol is used to encrypt web traffic?",
      options: ["HTTP", "HTTPS", "FTP", "SMTP"],
      answer: "HTTPS",
    },
    {
      question: "What does RBAC stand for?",
      options: [
        "Role-Based Access Control",
        "Resource-Based Access Control",
        "Role-Balanced Accountability Control",
        "Risk-Based Access Control",
      ],
      answer: "Role-Based Access Control",
    },
    {
      question: "Which of the following is a physical security control?",
      options: [
        "Firewall",
        "Biometric scanner",
        "Antivirus software",
        "Encryption",
      ],
      answer: "Biometric scanner",
    },
    {
      question: "Which of these is an example of social engineering?",
      options: [
        "Man-in-the-middle attack",
        "Phishing email",
        "Ransomware infection",
        "SQL Injection",
      ],
      answer: "Phishing email",
    },
    {
      question: "What is the primary purpose of a honeypot?",
      options: [
        "To prevent attacks",
        "To monitor and analyze attacker behavior",
        "To increase server performance",
        "To encrypt sensitive data",
      ],
      answer: "To monitor and analyze attacker behavior",
    },
    {
      question: "Which of these is a hashing algorithm?",
      options: ["AES", "RSA", "SHA-256", "HTTPS"],
      answer: "SHA-256",
    },
    {
      question: "What does DNS stand for?",
      options: [
        "Domain Name System",
        "Dynamic Network Security",
        "Data Network System",
        "Domain Name Security",
      ],
      answer: "Domain Name System",
    },
    {
      question: "What is the primary purpose of a SIEM solution?",
      options: [
        "To scan for vulnerabilities",
        "To analyze and correlate security events",
        "To encrypt sensitive data",
        "To manage user permissions",
      ],
      answer: "To analyze and correlate security events",
    },
    {
      question:
        "Which of these attacks involves sending too many requests to a server?",
      options: ["Phishing", "DoS", "Man-in-the-middle", "Trojan"],
      answer: "DoS",
    },
    {
      question: "What does BYOD stand for?",
      options: [
        "Bring Your Own Data",
        "Bring Your Own Device",
        "Build Your Own Device",
        "Build Your Own Data",
      ],
      answer: "Bring Your Own Device",
    },
    {
      question: "What does SAML stand for?",
      options: [
        "Security Assertion Markup Language",
        "Secure Application Management Language",
        "Service Account Management Level",
        "Simple Assertion Markup Language",
      ],
      answer: "Security Assertion Markup Language",
    },
    {
      question: "Which of these is used to detect vulnerabilities?",
      options: ["Firewall", "Antivirus", "Penetration testing", "IDS"],
      answer: "Penetration testing",
    },
    {
      question: "Which of the following is an asymmetric encryption algorithm?",
      options: ["AES", "RSA", "SHA-256", "3DES"],
      answer: "RSA",
    },
    {
      question: "What is the goal of data loss prevention (DLP) tools?",
      options: [
        "Encrypt data during transmission",
        "Prevent unauthorized access to devices",
        "Prevent sensitive data from leaving the organization",
        "Detect malware in files",
      ],
      answer: "Prevent sensitive data from leaving the organization",
    },
    {
      question:
        "Which term refers to a backup that is stored at a remote location?",
      options: [
        "Full backup",
        "Incremental backup",
        "Offsite backup",
        "Snapshot",
      ],
      answer: "Offsite backup",
    },
    {
      question: "What does the principle of least privilege aim to achieve?",
      options: [
        "Provide maximum access for administrators",
        "Reduce unnecessary permissions",
        "Restrict all access by default",
        "Increase convenience for users",
      ],
      answer: "Reduce unnecessary permissions",
    },
    {
      question: "What is the purpose of a VPN?",
      options: [
        "Enhance internet speed",
        "Encrypt network traffic",
        "Scan for malware",
        "Prevent phishing attacks",
      ],
      answer: "Encrypt network traffic",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [attemptedOptions, setAttemptedOptions] = useState([]);
  const [streak, setStreak] = useState(0); // Streak counter
  const [badges, setBadges] = useState([]); // Badge tracker
  const [timeLeft, setTimeLeft] = useState(15); // Timer for each question

  const currentQuestion = questions[currentIndex];

  // Timer logic
  useEffect(() => {
    if (timeLeft > 0 && feedback === null) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setFeedback("timeout");
      setStreak(0); // Reset streak on timeout
    }
  }, [timeLeft, feedback]);

  // Handle option selection
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  // Handle answer submission
  const handleSubmit = () => {
    if (selectedOption === currentQuestion.answer) {
      setFeedback("correct");
      setStreak(streak + 1); // Increment streak
      setAttemptedOptions([]); // Clear attempted options
      updateBadges(streak + 1); // Award badges
    } else {
      setFeedback("incorrect");
      setAttemptedOptions([...attemptedOptions, selectedOption]); // Track attempted options
      if (
        attemptedOptions.length === currentQuestion.options.length - 2 &&
        selectedOption !== currentQuestion.answer
      ) {
        setFeedback("exhausted");
      }
      setStreak(0); // Reset streak on incorrect answer
    }
  };

  // Handle next question or retry
  const handleNext = () => {
    if (feedback === "correct" || feedback === "timeout") {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % questions.length); // Move to next question
    }
    setSelectedOption(""); // Reset selected option
    setFeedback(null); // Reset feedback
    setAttemptedOptions([]); // Clear attempted options
    setTimeLeft(15); // Reset timer
  };

  // Update badges based on streak milestones
  const updateBadges = (currentStreak) => {
    const newBadges = [...badges];
    if (currentStreak === 5 && !badges.includes("Bronze Streak")) {
      newBadges.push("Bronze Streak");
    } else if (currentStreak === 10 && !badges.includes("Silver Streak")) {
      newBadges.push("Silver Streak");
    } else if (currentStreak === 20 && !badges.includes("Gold Streak")) {
      newBadges.push("Gold Streak");
    }
    setBadges(newBadges);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Practice Questions Under Pressure</h1>
      <p>Test your foundational knowledge of Security+ concepts!</p>

      {/* Progress Bar */}
      <div
        style={{
          margin: "20px auto",
          width: "80%",
          backgroundColor: "#eee",
          height: "20px",
        }}
      >
        <div
          style={{
            width: `${((currentIndex + 1) / questions.length) * 100}%`,
            backgroundColor: "green",
            height: "100%",
          }}
        ></div>
      </div>

      {/* Timer */}
      <div
        style={{
          fontSize: "1.2em",
          marginBottom: "20px",
          color: timeLeft <= 5 ? "red" : "black",
        }}
      >
        Time Left: {timeLeft}s
      </div>

      {/* Streak and Badges */}
      <div style={{ marginBottom: "10px" }}>
        <p style={{ fontSize: "1.2em", color: "blue" }}>Streak: {streak} 🔥</p>
        {badges.length > 0 && (
          <p style={{ color: "green" }}>
            Badges: {badges.map((badge, index) => `🏆 ${badge} `)}
          </p>
        )}
      </div>

      {/* Display the current question */}
      <div>
        <h2>{currentQuestion.question}</h2>

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
          disabled={!selectedOption || feedback !== null}
        >
          Submit
        </button>
      </div>

      {/* Feedback */}
      {feedback && (
        <div style={{ marginTop: "20px" }}>
          {feedback === "correct" ? (
            <p style={{ color: "green" }}>Correct! Well done.</p>
          ) : feedback === "timeout" ? (
            <p style={{ color: "red" }}>
              Time's up! The correct answer was: {currentQuestion.answer}
            </p>
          ) : feedback === "exhausted" ? (
            <p style={{ color: "red" }}>
              You've exhausted all other options. The correct answer is:{" "}
              {currentQuestion.answer}
            </p>
          ) : (
            <p style={{ color: "red" }}>Incorrect. Try again!</p>
          )}
          <button onClick={handleNext} style={{ padding: "10px 20px" }}>
            {feedback === "correct" || feedback === "timeout"
              ? "Next Question"
              : "Retry"}
          </button>
        </div>
      )}

      {/* Back to Home */}
      <Link href="/">
        <button style={{ marginTop: "30px", padding: "10px 20px" }}>
          Back to Home
        </button>
      </Link>
    </div>
  );
}
