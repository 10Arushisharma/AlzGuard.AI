import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
// import HomePage from './pages/HomePage';
import Header from './pages/Header.js';
import WhatToDoPage from './pages/WhatToDoPage';
import PredictionPage from './pages/PredictionPage';
import QuizPage from './pages/QuizPage'
import AboutPage from './pages/AboutPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './components/HomePage.jsx';
import DetectionPage from './components/DetectionPage.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <Header/>
      <AnimatePresence mode="wait">
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/WhatToDo" element={<WhatToDoPage />} />
          <Route path="/predict" element={<PredictionPage />} />
          <Route path="/quiz" element={<QuizPage />} />
           <Route path="/about" element={<AboutPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/" element={<HomePage />} />
        <Route path="/detection" element={<DetectionPage />} />

        <Route path="*" element={<h1>404: Page Not Found</h1>} /> 
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
