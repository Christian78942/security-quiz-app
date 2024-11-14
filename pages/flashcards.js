// flashcards.js

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
    { acronym: "FDE", meaning: "Full Disk Encryption" },
    { acronym: "IDS", meaning: "Intrusion Detection System" },
    { acronym: "TLS", meaning: "Transport Layer Security" },
    { acronym: "MITM", meaning: "Man In The Middle" },
    { acronym: "RAID", meaning: "Redundant Array of Independent Disks" },
    { acronym: "DLP", meaning: "Data Loss Prevention" },
    { acronym: "DMZ", meaning: "Demilitarized Zone" },
    { acronym: "HTTPS", meaning: "Hypertext Transfer Protocol Secure" },
    { acronym: "OTP", meaning: "One-Time Password" },
    { acronym: "SOC", meaning: "Security Operations Center" },
    { acronym: "MTTR", meaning: "Mean Time to Recover" },
    { acronym: "MTBF", meaning: "Mean Time Between Failures" },
    { acronym: "RBAC", meaning: "Role-Based Access Control" },
    { acronym: "BYOD", meaning: "Bring Your Own Device" },
    { acronym: "DAC", meaning: "Discretionary Access Control" },
    { acronym: "SLA", meaning: "Service Level Agreement" },
    { acronym: "BIA", meaning: "Business Impact Analysis" },
    { acronym: "APT", meaning: "Advanced Persistent Threat" },
    { acronym: "CBC", meaning: "Cipher Block Chaining" },
    { acronym: "AV", meaning: "Antivirus" },
  ];

  // State management
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [feedback, setFeedback] = useState(null); // Track feedback (correct/incorrect)
  const [showAnswer, setShowAnswer] = useState(false); // Track answer visibility

  // Current acronym data
  const currentAcronym = acronyms[currentIndex];

  // Handle user input
  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  // Normalize input by removing spaces and commas, and making lowercase
  const normalize = (str) => str.replace(/[\s,]+/g, "").toLowerCase();

  // Handle answer submission
  const handleSubmit = () => {
    if (normalize(userInput) === normalize(currentAcronym.meaning)) {
      setFeedback("correct");
      setShowAnswer(false); // Hide answer if correct
    } else {
      setFeedback("incorrect");
    }
  };

  // Move to the next acronym or retry
  const handleNext = () => {
    if (feedback === "correct") {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % acronyms.length);
    }
    setUserInput("");
    setFeedback(null);
    setShowAnswer(false); // Reset answer visibility
  };

  // Show answer handler
  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Flashcard Acronyms</h1>
      <p>Test your knowledge of important Security+ acronyms!</p>

      {/* Display the current acronym */}
      <div>
        <h2>{currentAcronym.acronym}</h2>
        <p>Type in the full meaning of the acronym:</p>

        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Your answer"
          style={{ padding: "10px", width: "300px", marginBottom: "10px" }}
        />

        <button
          onClick={handleSubmit}
          style={{ marginLeft: "10px", padding: "10px 20px" }}
        >
          Submit
        </button>

        {/* Reminder and Show Answer button */}
        <div style={{ marginTop: "10px" }}>
          <p style={{ fontSize: "0.9em", color: "#888" }}>
            Only click "Show Answer" if you've attempted it on your own!
          </p>
          <button
            onClick={handleShowAnswer}
            style={{
              marginLeft: "10px",
              padding: "10px 20px",
              backgroundColor: "#FFA500",
              color: "white",
            }}
          >
            Show Answer
          </button>
        </div>

        {/* Display answer if user clicks Show Answer */}
        {showAnswer && (
          <div style={{ marginTop: "10px", color: "#555" }}>
            <p>
              <strong>Answer:</strong> {currentAcronym.meaning}
            </p>
          </div>
        )}
      </div>

      {/* Feedback display */}
      {feedback && (
        <div style={{ marginTop: "20px" }}>
          {feedback === "correct" ? (
            <p style={{ color: "green" }}>Correct! Well done.</p>
          ) : (
            <p style={{ color: "red" }}>Incorrect. Try again?</p>
          )}
          <button onClick={handleNext} style={{ padding: "10px 20px" }}>
            {feedback === "correct" ? "Next Acronym" : "Retry"}
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
