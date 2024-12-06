import { useState } from "react";
import Link from "next/link";

export default function Flashcards() {
  // Acronym data
  const acronyms = [
    { acronym: "AAA", meaning: "Authentication Authorization Accounting" },
    { acronym: "ACL", meaning: "Access Control List" },
    { acronym: "AES", meaning: "Advanced Encryption Standard" },
    { acronym: "CIA", meaning: "Confidentiality Integrity Availability" },
    { acronym: "IDS", meaning: "Intrusion Detection System" },
    { acronym: "IPS", meaning: "Intrusion Prevention System" },
    { acronym: "PKI", meaning: "Public Key Infrastructure" },
    { acronym: "VPN", meaning: "Virtual Private Network" },
    { acronym: "DoS", meaning: "Denial of Service" },
    { acronym: "DDoS", meaning: "Distributed Denial of Service" },
    { acronym: "IAM", meaning: "Identity and Access Management" },
    { acronym: "HIDS", meaning: "Host-based Intrusion Detection System" },
    { acronym: "MAC", meaning: "Mandatory Access Control" },
    { acronym: "NAC", meaning: "Network Access Control" },
    { acronym: "TLS", meaning: "Transport Layer Security" },
    { acronym: "SSL", meaning: "Secure Sockets Layer" },
    { acronym: "WPA", meaning: "Wi-Fi Protected Access" },
    {
      acronym: "RADIUS",
      meaning: "Remote Authentication Dial-In User Service",
    },
    { acronym: "SIEM", meaning: "Security Information and Event Management" },
    { acronym: "MDM", meaning: "Mobile Device Management" },
    { acronym: "DHCP", meaning: "Dynamic Host Configuration Protocol" },
    { acronym: "IPSec", meaning: "Internet Protocol Security" },
    { acronym: "SAML", meaning: "Security Assertion Markup Language" },
    { acronym: "SSH", meaning: "Secure Shell" },
  ];

  // State management
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [streak, setStreak] = useState(0);
  const [badges, setBadges] = useState([]);
  const [randomMode, setRandomMode] = useState(false);

  // Normalize input to remove spaces and lowercase for comparison
  const normalize = (str) => str.replace(/[\s,]+/g, "").toLowerCase();

  const getRandomIndex = () => Math.floor(Math.random() * acronyms.length);

  const toggleRandomMode = () => {
    setRandomMode(!randomMode);
    if (!randomMode) {
      setCurrentIndex(getRandomIndex());
    }
  };

  const currentAcronym = acronyms[currentIndex];

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = () => {
    if (normalize(userInput) === normalize(currentAcronym.meaning)) {
      setFeedback("correct");
      setStreak(streak + 1);
      setShowAnswer(false);
      updateBadges(streak + 1);
    } else {
      setFeedback("incorrect");
      setStreak(0);
    }
  };

  const handleNext = () => {
    if (feedback === "correct") {
      if (randomMode) {
        setCurrentIndex(getRandomIndex());
      } else {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % acronyms.length);
      }
    }
    setUserInput("");
    setFeedback(null);
    setShowAnswer(false);
  };

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  const updateBadges = (streak) => {
    const newBadges = [...badges];
    if (streak === 5 && !badges.includes("Bronze Streak")) {
      newBadges.push("Bronze Streak");
    } else if (streak === 10 && !badges.includes("Silver Streak")) {
      newBadges.push("Silver Streak");
    } else if (streak === 20 && !badges.includes("Gold Streak")) {
      newBadges.push("Gold Streak");
    }
    setBadges(newBadges);
  };

  return (
    <div className="container">
      <h1>Flashcard Acronyms</h1>
      <p>Test your knowledge of important Security+ acronyms!</p>

      <button
        onClick={toggleRandomMode}
        className={`random-mode-btn ${randomMode ? "active" : ""}`}
      >
        {randomMode ? "Disable Random Mode" : "Enable Random Mode"}
      </button>

      <div className="streak">
        <p>🔥 Current Streak: {streak}</p>
      </div>

      {badges.length > 0 && (
        <div className="badges">
          <p>Achievements Unlocked:</p>
          {badges.map((badge, index) => (
            <span key={index} className="badge">
              🏆 {badge}
            </span>
          ))}
        </div>
      )}

      <div className="acronym-section">
        <h2>{currentAcronym.acronym}</h2>
        <p>Type in the full meaning of the acronym:</p>
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Your answer"
          className="input"
        />
        <button onClick={handleSubmit} className="btn">
          Submit
        </button>
      </div>

      <button onClick={handleShowAnswer} className="btn show-answer-btn">
        Show Answer
      </button>

      {showAnswer && (
        <div className="answer">
          <p>
            <strong>Answer:</strong> {currentAcronym.meaning}
          </p>
        </div>
      )}

      {feedback && (
        <div className={`feedback ${feedback}`}>
          <p>
            {feedback === "correct"
              ? "Correct! Well done."
              : "Incorrect. Try again?"}
          </p>
          <button onClick={handleNext} className="btn">
            {feedback === "correct" ? "Next Acronym" : "Retry"}
          </button>
        </div>
      )}

      <Link href="/">
        <button className="btn back-to-home">Back to Home</button>
      </Link>

      <style jsx>{`
        .container {
          text-align: center;
          padding: 20px;
          font-family: Arial, sans-serif;
        }

        h1 {
          font-size: 2em;
          color: #333;
        }

        .random-mode-btn {
          background-color: gray;
          color: white;
          padding: 10px 20px;
          border-radius: 5px;
          border: none;
          cursor: pointer;
          margin: 10px;
        }

        .random-mode-btn.active {
          background-color: green;
        }

        .input {
          padding: 10px;
          width: 300px;
          margin-bottom: 10px;
          border: 1px solid #ddd;
          border-radius: 5px;
        }

        .btn {
          padding: 10px 20px;
          margin: 10px;
          border: none;
          background-color: #007bff;
          color: white;
          border-radius: 5px;
          cursor: pointer;
        }

        .btn.show-answer-btn {
          background-color: orange;
        }

        .btn:hover {
          background-color: #0056b3;
        }

        .badges {
          margin-top: 20px;
        }

        .badge {
          margin-right: 10px;
          color: gold;
          font-size: 1.2em;
        }

        .answer {
          margin-top: 10px;
          font-size: 1.2em;
          color: #333;
        }

        .feedback.correct {
          color: green;
        }

        .feedback.incorrect {
          color: red;
        }
      `}</style>
    </div>
  );
}
