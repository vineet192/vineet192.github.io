import './Navbar.css';
import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <a href="resume.pdf">Resume</a>
    </nav>
  );
}

export default Navbar;
