import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main, MentionsLegales, ProjectDetails } from './pages';

function App() {
  return (
    <Router basename="/but-portfolio-tailwind/">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/project/:name" Component={ProjectDetails} />
      </Routes>
    </Router>
  );
}

export default App;
