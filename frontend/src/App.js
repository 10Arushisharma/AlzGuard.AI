// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { AnimatePresence } from 'framer-motion';
// import HomePage from './pages/HomePage';
// import Header from './pages/Header.js';
// import WhatToDoPage from './pages/WhatToDoPage';
// import PredictionPage from './pages/PredictionPage';
// import MedicationPage from './pages/MedicationPage';
// import RoutinePage from './pages/RoutinePage';
// import RecognitionPage from './pages/RecognitionPage';
// import JournalPage from './pages/JournalPage';
// import QuizPage from './pages/QuizPage'
// import AboutPage from './pages/AboutPage';
// import SignUpPage from './pages/SignUpPage';
// import HomePage from './components/HomePage.jsx';
// import DetectionPage from './components/DetectionPage.jsx';
// import FeaturesPage from "./components/FeaturesPage.jsx";

// import './App.css';

// function App() {
//   return (
//     <Router>
//       <Header/>
//       {/* <AnimatePresence mode="wait"> */}
//         <Routes>
//           {/* <Route path="/" element={<HomePage />} /> */}
//           <Route path="/WhatToDo" element={<WhatToDoPage />} />
//           <Route path="/predict" element={<PredictionPage />} />
//           <Route path="/medication" element={<MedicationPage />} />
//           <Route path="/routine" element={<RoutinePage />} />
//           <Route path="/recognition" element={<RecognitionPage />} />
//           <Route path="/journal" element={<JournalPage />} />
//           <Route path="/features" element={<FeaturesPage />} />
//           <Route path="/quiz" element={<QuizPage />} />
//            <Route path="/about" element={<AboutPage />} />
//           <Route path="/signup" element={<SignUpPage />} />
//           <Route path="/" element={<HomePage />} />
//         <Route path="/detection" element={<DetectionPage />} />

//         <Route path="*" element={<h1>404: Page Not Found</h1>} /> 
//         </Routes>
//       {/* </AnimatePresence> */}
//     </Router>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";

import WhatToDoPage from "./pages/WhatToDoPage";
import PredictionPage from "./pages/PredictionPage";
import MedicationPage from "./pages/MedicationPage";
import RoutinePage from "./pages/RoutinePage";
import RecognitionPage from "./pages/RecognitionPage";
import JournalPage from "./pages/JournalPage";
import QuizPage from "./pages/QuizPage";
import AboutPage from "./pages/AboutPage";
import SignUpPage from "./pages/SignUpPage";

import HomePage from "./components/HomePage";
import DetectionPage from "./components/DetectionPage";
import FeaturesPage from "./components/FeaturePages";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>

        {/* MAIN PAGES */}
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/whatToDo" element={<WhatToDoPage />} />
        <Route path="/predict" element={<PredictionPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/detection" element={<DetectionPage />} />

        {/* FEATURE PAGES */}
        <Route path="/medication" element={<MedicationPage />} />
        <Route path="/routine" element={<RoutinePage />} />
        <Route path="/recognition" element={<RecognitionPage />} />
        <Route path="/journal" element={<JournalPage />} />

        {/* FALLBACK */}
        <Route path="*" element={<h1 style={{ color: "white" }}>404 Page Not Found</h1>} />

      </Routes>
    </Router>
  );
}

export default App;
