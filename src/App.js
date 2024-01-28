import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/HomePage/Home';
import Blog from './components/Pages/BlogPage/Blog';
import Resume from './components/Pages/ResumePage/Resume'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes App>
        <Route path={process.env.PUBLIC_URL + "/"} element={<Home />} />
        <Route path={process.env.PUBLIC_URL + "/blog"} element={<Blog />} />
        <Route path={process.env.PUBLIC_URL + "/resume"} element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
