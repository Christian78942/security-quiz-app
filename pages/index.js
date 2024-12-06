import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [greeting, setGreeting] = useState(""); // Dynamic greeting
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [randomTip, setRandomTip] = useState("");

  const tips = [
    "Remember to study the CIA Triad: Confidentiality, Integrity, Availability!",
    "Use mnemonics to remember acronyms like AAA: Authentication, Authorization, Accounting.",
    "Practice makes perfect! Revisit questions and flashcards often.",
    "Focus on securing wireless networks with protocols like WPA3.",
    "Understand common attacks like DDoS and how to mitigate them.",
  ];

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // Loading screen
    setRandomTip(tips[Math.floor(Math.random() * tips.length)]);

    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good Morning!");
    else if (hour < 18) setGreeting("Good Afternoon!");
    else setGreeting("Good Evening!");
  }, []);

  const handleFeedbackSubmit = () => {
    if (feedback.trim()) {
      const feedbackList = JSON.parse(localStorage.getItem("feedback")) || [];
      feedbackList.push({ feedback, date: new Date().toLocaleString() });
      localStorage.setItem("feedback", JSON.stringify(feedbackList));

      setFeedback("");
      setShowFeedbackModal(false);
      alert("Thank you for your feedback!");
    } else {
      alert("Please enter your feedback before submitting.");
    }
  };

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "20%" }}>
        <div style={{ fontSize: "1.5em", marginBottom: "20px" }}>
          Loading CyberClimb...
        </div>
        <div
          style={{
            width: "50px",
            height: "50px",
            margin: "0 auto",
            border: "5px solid lightblue",
            borderTop: "5px solid blue",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
          }}
        ></div>
        <p style={{ marginTop: "20px", fontStyle: "italic" }}>{randomTip}</p>
        <style jsx>{`
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="container">
      <Head>
        <title>CyberClimb Security+ Study Hub</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="hero">
          <h1>{greeting} Welcome to CyberClimb!</h1>
          <p>
            Your interactive companion to mastering the Security+ Certification.
          </p>
        </div>

        <section className="intro">
          <h2>Welcome to CyberClimb!</h2>
          <p>
            CyberClimb is your personalized study platform for mastering the
            CompTIA Security+ certification. We believe that learning should be
            fun, engaging, and rewarding! Here's how:
          </p>
        </section>

        <div className="features-grid">
          <div className="feature-card">
            <h3>📖 Flashcard Acronyms</h3>
            <p>
              Interactive flashcards for key Security+ concepts. Master acronyms
              and track your streaks!
            </p>
          </div>
          <div className="feature-card">
            <h3>⏱️ Timed Practice Questions</h3>
            <p>
              Timed multiple-choice questions to test your knowledge and sharpen
              your skills under pressure.
            </p>
          </div>
          <div className="feature-card">
            <h3>📝 Final Practice Exam</h3>
            <p>
              Simulate the real Security+ exam to evaluate your readiness with
              detailed results and feedback.
            </p>
          </div>
          <div className="feature-card">
            <h3>📊 Progress Dashboard</h3>
            <p>
              Track your progress, view streaks, and showcase badges earned as
              you improve.
            </p>
          </div>
        </div>

        <div className="nav-buttons">
          <Link href="/flashcards">
            <button className="nav-btn">📖 Flashcard Acronyms</button>
          </Link>
          <Link href="/timed-practice-questions">
            <button className="nav-btn">⏱️ Timed Practice Questions</button>
          </Link>
          <Link href="/practice-exam">
            <button className="nav-btn">📝 Final Practice Exam</button>
          </Link>
          <Link href="/dashboard">
            <button className="nav-btn">📊 Progress Dashboard</button>
          </Link>
        </div>

        <div className="feedback-banner">
          <h3>Have feedback for us?</h3>
          <p>We'd love to hear how we can make CyberClimb better for you!</p>
          <button
            className="nav-btn"
            onClick={() => setShowFeedbackModal(true)}
          >
            Submit Feedback
          </button>
        </div>
      </main>

      {showFeedbackModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Submit Your Feedback</h3>
            <textarea
              placeholder="Enter your feedback here..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              rows="5"
              style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            />
            <button
              className="nav-btn"
              onClick={handleFeedbackSubmit}
              style={{ marginRight: "10px" }}
            >
              Submit
            </button>
            <button
              className="nav-btn"
              style={{ backgroundColor: "gray" }}
              onClick={() => setShowFeedbackModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <Footer />

      <style jsx>{`
        .hero {
          background: linear-gradient(135deg, #4facfe, #00f2fe);
          color: white;
          text-align: center;
          padding: 50px 20px;
          border-radius: 10px;
          margin-bottom: 30px;
        }

        .hero h1 {
          font-size: 2.5em;
        }

        .hero p {
          font-size: 1.2em;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin: 40px 0;
        }

        .feature-card {
          background-color: #f8f9fa;
          border: 1px solid #ddd;
          border-radius: 10px;
          padding: 20px;
          text-align: center;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
        }

        .feature-card h3 {
          margin-bottom: 10px;
          font-size: 1.2em;
          color: #007bff;
        }

        .nav-buttons {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-top: 20px;
        }

        .nav-btn {
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 8px;
          padding: 15px 20px;
          font-size: 1em;
          font-weight: bold;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .nav-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .feedback-banner {
          background-color: #007bff;
          color: white;
          text-align: center;
          padding: 30px;
          margin-top: 40px;
          border-radius: 10px;
        }

        .feedback-banner h3 {
          margin-bottom: 10px;
          font-size: 1.5em;
        }

        .feedback-banner p {
          font-size: 1.2em;
          margin-bottom: 20px;
        }
      `}</style>
    </div>
  );
}
