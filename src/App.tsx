import { Routes, Route } from 'react-router-dom';
import { Main, MentionsLegales, ProjectDetails } from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/mentions-legales" element={<MentionsLegales />} />
      <Route path="/project/:name" element={<ProjectDetails />} />
    </Routes>
  );
}

export default App;
