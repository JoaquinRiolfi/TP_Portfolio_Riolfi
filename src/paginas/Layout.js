import { Outlet, Link } from "react-router-dom";
import '../index.css';

const Layout = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', alignItems: 'center' }}>
      <header style={{ background: '#333', color: 'white', padding: '20px', textAlign: 'center', width: '100%' }}>
        <nav>
          <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'center', margin: '0', padding: '0' }}>
            <li style={{ margin: '0 15px' }}>
              <Link to="/" style={linkStyle}>Destacados</Link>
            </li>
            <li style={{ margin: '0 15px' }}>
              <Link to="/Creations" style={linkStyle}>Mis Creaciones</Link>
            </li>
            <li style={{ margin: '0 15px' }}>
              <Link to="/Info" style={linkStyle}>Mi Info</Link>
            </li>
            <li style={{ margin: '0 15px' }}>
              <Link to="/Favorite" style={linkStyle}>Tus Favoritos</Link>
            </li>
          </ul>
        </nav>
      </header>
      
      <Outlet />
      
      <footer style={{ background: '#333', color: 'white', padding: '20px', textAlign: 'center', width: '100%' }}>
        <nav>
          <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'center', margin: '0', padding: '0' }}>
            <li style={{ margin: '0 15px' }}>
              <Link to="/Contact" style={linkStyle}>Contacto</Link>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

const linkStyle = {
  textDecoration: 'none',
  color: 'white',
  padding: '15px 30px',
  borderRadius: '50px',
  transition: 'background-color 0.3s ease, color 0.3s ease',
  background: 'black',
  border: '2px solid transparent',
  backgroundImage: 'radial-gradient(circle, blue, transparent 70%)',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
  textShadow: '0 0 5px black',
};

export default Layout;
