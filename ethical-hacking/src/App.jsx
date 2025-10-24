import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Learn from './components/Learn';
import Quiz from './components/Quiz';
import Demo from './components/Demo';
import Checklist from './components/Checklist';
import Survey from './components/Survey';

function App() {
  const [activeLesson, setActiveLesson] = useState(null);

  return (
    <Router>
      <div className="app-root">
        <header className="app-header">
          <div className="logo-container">
            <img src="HackAware.png" alt="HackAware" className="app-logo" />
          </div>
          <nav className="nav-links">
            <NavLink to="/" end>Learn</NavLink>
            <NavLink to="/quiz">Quiz</NavLink>
            <NavLink to="/demo">Demo</NavLink>
            <NavLink to="/checklist">Checklist</NavLink>
            <NavLink to="/progress">Progress</NavLink>
          </nav>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Learn activeLesson={activeLesson} setActiveLesson={setActiveLesson} />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/checklist" element={<Checklist />} />
            <Route path="/progress" element={<Survey />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
