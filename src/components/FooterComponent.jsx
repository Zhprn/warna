import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'; // Add react-icons library if not already installed
import '../styles/main.css';
import logo from "../assets/image/logo.png"

const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={logo} alt="Logo" className="footer-logo" />
        <h1 className="footer-heading">Selamat bergabung dalam kisah Warna Solutions, dimana warna bukan hanya pigmen, melainkan medium bagi cerita dan pengalaman yang abadi</h1>
        <div className="footer-icons">
          <FaInstagram className="footer-icon" />
          <FaTiktok className="footer-icon" />
          <FaFacebook className="footer-icon" />
        </div>
        <p className="footer-copyright">© 2024 Warna Solustions | Powered by PT Metro Indonesian Software</p>
      </div>
    </footer>
  )
}

export default FooterComponent
