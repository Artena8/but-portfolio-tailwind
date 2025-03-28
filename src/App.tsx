import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main, MentionsLegales } from './pages';
import { useEffect } from 'react';

function App() {
  return (
    <Router basename="/but-portfolio-tailwind/">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
      </Routes>
    </Router>
  );
}

export default App;
