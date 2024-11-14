import { useState } from "react";
import Link from "next/link";

export default function BasicQuestions() {
  // Sample question data
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
  ];

  // State management
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [feedback, setFeedback] = useState(null); // Track feedback (correct/incorrect)

  // Current question data
  const currentQuestion = questions[currentIndex];

  // Handle option selection
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  // Handle answer submission
  const handleSubmit = () => {
    if (selectedOption === currentQuestion.answer) {
      setFeedback("correct");
    } else {
      setFeedback("incorrect");
    }
  };

  // Move to the next question or retry
  const handleNext = () => {
    if (feedback === "correct") {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % questions.length);
    }
    setSelectedOption("");
    setFeedback(null);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Basic Questions</h1>
      <p>Test your foundational knowledge of Security+ concepts!</p>

      {/* Display the current question */}
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
      </div>

      {/* Feedback display */}
      {feedback && (
        <div style={{ marginTop: "20px" }}>
          {feedback === "correct" ? (
            <p style={{ color: "green" }}>Correct! Well done.</p>
          ) : (
            <p style={{ color: "red" }}>
              Incorrect. The correct answer was: {currentQuestion.answer}
            </p>
          )}
          <button onClick={handleNext} style={{ padding: "10px 20px" }}>
            {feedback === "correct" ? "Next Question" : "Retry"}
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
