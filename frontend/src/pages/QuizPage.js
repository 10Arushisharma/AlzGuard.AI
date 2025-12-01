// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import Header from './Header';
// import './QuizPage.css';

// const QuizPage = () => {
//   const [answers, setAnswers] = useState({});
//   const [submitted, setSubmitted] = useState(false);

//   const questions = [
//     {
//       id: 1,
//       text: "How often do you forget recent events or conversations?",
//       options: ["Never", "Rarely", "Sometimes", "Often"]
//     },
//     {
//       id: 2,
//       text: "Do you have difficulty finding the right words to express yourself?",
//       options: ["Never", "Rarely", "Sometimes", "Often"]
//     },
//     {
//       id: 3,
//       text: "How often do you misplace things and lose track of where you are?",
//       options: ["Never", "Rarely", "Sometimes", "Often"]
//     },
//     {
//       id: 4,
//       text: "Do you have trouble planning or organizing tasks?",
//       options: ["Never", "Rarely", "Sometimes", "Often"]
//     },
//     {
//       id: 5,
//       text: "How often do you get confused about time or place?",
//       options: ["Never", "Rarely", "Sometimes", "Often"]
//     },
//     {
//       id: 6,
//       text: "Do you have trouble understanding visual images and spatial relationships?",
//       options: ["Never", "Rarely", "Sometimes", "Often"]
//     },
//     {
//       id: 7,
//       text: "How often do you withdraw from work or social activities?",
//       options: ["Never", "Rarely", "Sometimes", "Often"]
//     }
//   ];

//   const handleAnswerChange = (questionId, answer) => {
//     setAnswers(prev => ({ ...prev, [questionId]: answer }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//   };

//   const calculateScore = () => {
//     const scoreValues = { "Never": 0, "Rarely": 1, "Sometimes": 2, "Often": 3 };
//     return Object.values(answers).reduce((sum, answer) => sum + scoreValues[answer], 0);
//   };

//   const getAssessment = (score) => {
//     if (score <= 7) return "Low risk of cognitive impairment";
//     if (score <= 14) return "Moderate risk - consider consulting a specialist";
//     return "High risk - please consult a healthcare professional";
//   };

//   return (
//     <motion.div
//       className="quiz-page"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <Header />

//       <div className="content-container">
//         <motion.div
//           className="quiz-container"
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.3 }}
//         >

//           {submitted ? (
//             <motion.div
//               className="quiz-result"
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//             >
//               <h3>Assessment Result</h3>
//               <p className="result-text">{getAssessment(calculateScore())}</p>
//               <p className="score-text">Your score: {calculateScore()} out of 21</p>
//               <Link to="/">
//                 <button className="back-btn">Back to Home</button>
//               </Link>
//             </motion.div>
//           ) : (
//             <form onSubmit={handleSubmit}>
//               {questions.map((q) => (
//                 <div key={q.id} className="question">
//                   <h3>{q.id}. {q.text}</h3>
//                   <div className="options">
//                     {q.options.map((option, idx) => (
//                       <label key={idx} className="option">
//                         <input
//                           type="radio"
//                           name={`question-${q.id}`}
//                           checked={answers[q.id] === option}
//                           onChange={() => handleAnswerChange(q.id, option)}
//                           required
//                         />
//                         {option}
//                       </label>
//                     ))}
//                   </div>
//                 </div>
//               ))}

//               <motion.button
//                 type="submit"
//                 className="submit-btn"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Submit Quiz
//               </motion.button>
//             </form>
//           )}
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// export default QuizPage;

// src/pages/QuizPage.js
import React, { useState } from "react";
// import { Link } from 'react-router-dom'; // You might not need Link on the QuizPage itself
import Header from "./Header"; // This should be in App.js, not each page

import "../styles/QuizPage.css"; // Import your new CSS file

const QuizPage = () => {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0); // To store the quiz score

  const questions = [
    {
      id: 1,
      text: "How often do you forget recent events or conversations?",
      options: ["Never", "Rarely", "Sometimes", "Often"],
    },
    {
      id: 2,
      text: "Do you have difficulty finding the right words to express yourself?",
      options: ["Never", "Rarely", "Sometimes", "Often"],
    },
    {
      id: 3,
      text: "How often do you misplace things and lose track of where you are?",
      options: ["Never", "Rarely", "Sometimes", "Often"],
    },
    {
      id: 4,
      text: "Do you have trouble planning or organizing tasks?",
      options: ["Never", "Rarely", "Sometimes", "Often"],
    },
    {
      id: 5,
      text: "Do you find it harder to recognize familiar faces or objects?",
      options: ["Never", "Rarely", "Sometimes", "Often"],
    },
    {
      id: 6,
      text: "How often do you repeat questions or stories in a short period?",
      options: ["Never", "Rarely", "Sometimes", "Often"],
    },
    {
      id: 7,
      text: "Have you noticed any changes in your mood or personality recently?",
      options: ["No", "Slightly", "Moderately", "Significantly"],
    },
    {
      id: 8,
      text: "Do you rely on others more often for tasks you used to handle independently?",
      options: ["No", "Rarely", "Sometimes", "Often"],
    },
    {
      id: 9,
      text: "How often do you feel confused about time or place?",
      options: ["Never", "Rarely", "Sometimes", "Often"],
    },
    {
      id: 10,
      text: "Do you struggle with decision-making or exercising poor judgment?",
      options: ["Never", "Rarely", "Sometimes", "Often"],
    },
  ];

  const handleOptionChange = (questionId, option) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: option,
    }));
  };

  const handleSubmit = () => {
    // Basic scoring logic (you might want a more sophisticated system)
    let currentScore = 0;
    questions.forEach((q) => {
      const userAnswer = answers[q.id];
      // Assign points based on the option severity
      if (userAnswer === "Rarely") currentScore += 1;
      if (userAnswer === "Sometimes" || userAnswer === "Slightly")
        currentScore += 2;
      if (userAnswer === "Often" || userAnswer === "Moderately")
        currentScore += 3;
      if (userAnswer === "Significantly") currentScore += 4; // Highest severity
    });
    setScore(currentScore);
    setSubmitted(true);
  };

  // Check if all questions have been answered
  const allQuestionsAnswered = Object.keys(answers).length === questions.length;

  const getResultInterpretation = (finalScore) => {
    if (finalScore >= 25) {
      return "Stage: Moderate Dementia — Your responses suggest significant cognitive challenges that may interfere with daily functioning. We strongly recommend seeking a thorough medical evaluation and sharing clinical reports (such as an MRI scan) for accurate assessment.";
    } else if (finalScore >= 20) {
      return "Stage: Mild Dementia — Your responses indicate noticeable cognitive changes that may be affecting some daily activities. It is advisable to consult a healthcare professional for detailed testing and personalized guidance.";
    } else if (finalScore >= 5) {
      return "Stage: Very Mild Dementia — Your responses reflect minor cognitive changes. While these may not significantly affect daily life, monitoring your cognitive health and maintaining a brain-healthy lifestyle is strongly recommended.";
    } else {
      return "Stage: No Dementia — Your responses suggest generally healthy cognitive functioning. Continue practicing brain-healthy habits such as regular exercise, balanced nutrition, mental stimulation, and social engagement.";
    }
  };

  return (
    <div className="quiz-page-container">
      <h1 className="quiz-title">Alzheimer's Health Assessment</h1>
      <p className="quiz-intro-text">
        This quiz is designed to help you reflect on your cognitive habits and
        identify potential areas of concern. It is for informational purposes
        only and not a substitute for professional medical advice or diagnosis.
      </p>

      <div className="questions-list">
        {questions.map((q) => (
          <div key={q.id} className="question-card">
            <p className="question-text">{q.text}</p>
            <div className="options-group">
              {q.options.map((option) => (
                <label key={option} className="option-label">
                  <input
                    type="radio"
                    name={`question-${q.id}`}
                    value={option}
                    checked={answers[q.id] === option}
                    onChange={() => handleOptionChange(q.id, option)}
                    disabled={submitted} // Disable options after submission
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button
        className="submit-button"
        onClick={handleSubmit}
        disabled={submitted || !allQuestionsAnswered} // Disable if not all answered or already submitted
      >
        {submitted ? "Quiz Submitted!" : "Submit Quiz"}
      </button>

      {submitted && (
        <div className="quiz-results">
          <h2>Your Quiz Results</h2>
          <p>
            Your total score: <strong>{score}</strong> out of{" "}
            {questions.length * 4} (max possible).
          </p>
          <p>{getResultInterpretation(score)}</p>
          <p style={{ fontSize: "0.9em", color: "#888" }}>
            Remember, this is a preliminary assessment. For any health concerns,
            please consult a medical professional.
          </p>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
