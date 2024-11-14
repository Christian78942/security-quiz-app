// index.js

import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>CyberClimb Security+ Study Hub</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="CyberClimb Security+ Study Hub" />

        {/* Introduction Section */}
        <section className="intro">
          <h2>Welcome to CyberClimb!</h2>
          <p>
            CyberClimb is your personalized study platform for mastering the
            CompTIA Security+ certification. Our tools are designed to build
            your confidence and boost your knowledge, guiding you from basic
            concepts to full exam preparation. Explore the following sections to
            tailor your study experience:
          </p>
          <ul>
            <li>
              <strong>Flashcard Acronyms:</strong> Familiarize yourself with key
              Security+ acronyms using interactive flashcards. This section will
              help you remember important terminology for the exam.
            </li>
            <li>
              <strong>Basic Questions:</strong> Start with fundamental questions
              to strengthen your foundation. This section serves as a warm-up,
              preparing you for the more challenging final practice exam.
            </li>
            <li>
              <strong>Final Practice Exam:</strong> Test your knowledge in a
              simulated, timed environment. This full-length practice exam
              mirrors the real Security+ exam, allowing you to gauge your
              readiness under exam-like conditions.
            </li>
          </ul>
          <p>Choose a section below to begin your journey to success!</p>
        </section>

        {/* Navigation Buttons */}
        <div className="nav-buttons">
          <Link href="/flashcards">
            <button>Flashcard Acronyms</button>
          </Link>
          <Link href="/basic-questions">
            <button>Basic Questions</button>
          </Link>
          <Link href="/practice-exam">
            <button>Final Practice Exam</button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
