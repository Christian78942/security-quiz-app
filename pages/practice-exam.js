import { useState, useEffect } from "react";
import Link from "next/link";

export default function PracticeExam() {
  // Questions for the practice exam
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
  ];

  // State management
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(600); // Set timer to 600 seconds (10 minutes)
  const [isExamOver, setIsExamOver] = useState(false);

  // Current question data
  const currentQuestion = questions[currentIndex];

  // Timer logic
  useEffect(() => {
    if (timeLeft > 0 && !isExamOver) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setIsExamOver(true); // End exam when timer reaches zero
    }
  }, [timeLeft, isExamOver]);

  // Handle option selection
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  // Handle answer submission
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

  // Display results
  const handleViewResults = () => {
    alert(`Your final score is: ${score} out of ${questions.length}`);
  };

  // Format time display as mm:ss
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
