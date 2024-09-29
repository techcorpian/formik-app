import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import BooksPage from './pages/BooksPage';
import AuthorsPage from './pages/AuthorsPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <div className='h-screen'>
      <Navbar />
      <Routes>
        <Route path="/" element={<BooksPage />} />
        <Route path="/authors" element={<AuthorsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
