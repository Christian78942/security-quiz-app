import Link from "next/link";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    // Load scores from local storage
    const storedScores = JSON.parse(localStorage.getItem("examScores")) || [];
    setScores(storedScores);
  }, []);

  // Clear all scores
  const clearScores = () => {
    localStorage.removeItem("examScores");
    setScores([]);
  };

  // Calculate summary
  const totalExams = scores.length;
  const highestScore = scores.reduce(
    (max, score) => Math.max(max, score.score),
    0
  );

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Progress Dashboard</h1>
      <p>Track your progress over time!</p>

      {/* Summary Section */}
      {scores.length > 0 && (
        <div style={{ margin: "20px 0", fontSize: "1.2em" }}>
          <p>
            <strong>Total Exams Taken:</strong> {totalExams}
          </p>
          <p>
            <strong>Highest Score:</strong> {highestScore}
          </p>
        </div>
      )}

      {scores.length === 0 ? (
        <p>
          No scores recorded yet. Take a practice exam to see your results here!
        </p>
      ) : (
        <table
          style={{
            margin: "20px auto",
            borderCollapse: "collapse",
            width: "80%",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <thead style={{ backgroundColor: "#f8f9fa" }}>
            <tr>
              <th style={{ border: "1px solid #ddd", padding: "10px" }}>
                Date
              </th>
              <th style={{ border: "1px solid #ddd", padding: "10px" }}>
                Score
              </th>
              <th style={{ border: "1px solid #ddd", padding: "10px" }}>
                Total Questions
              </th>
            </tr>
          </thead>
          <tbody>
            {scores.map((entry, index) => (
              <tr
                key={index}
                style={{
                  backgroundColor: index % 2 === 0 ? "#ffffff" : "#f8f9fa",
                }}
              >
                <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                  {entry.date}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                  {entry.score}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                  {entry.total}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Clear Scores Button */}
      {scores.length > 0 && (
        <button
          onClick={clearScores}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "red",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Clear Dashboard
        </button>
      )}

      {/* Back to Home Button */}
      <Link href="/">
        <button
          style={{
            marginTop: "30px",
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Back to Home
        </button>
      </Link>
    </div>
  );
}
