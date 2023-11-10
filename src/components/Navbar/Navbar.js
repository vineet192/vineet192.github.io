import './Navbar.css';
import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <nav>
      <div className='nav-row'>
        <NavLink to="/"><img src='android-chrome-512x512.png' width={45} height={45} /></NavLink>
        <div>
          <NavLink to="/blog">Blog</NavLink>
          <a href="resume.pdf">Resume</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
