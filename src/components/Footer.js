import '../styles/Footer.css'
import logo from '../assets/drapeau2.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";



function Footer() {

	return (
		<footer className='footer'>
			<div className='Rights'>
				<img className='footer-logo' src={logo} alt={'Logo Swagg Republic'}></img>
				<p>© 2022, Swag Republic Benin.</p>
			</div>
			<div className='reseaux'>
			<a href='https://www.instagram.com/swag.republic/'>	<FontAwesomeIcon icon={ faInstagram } fontSize={40} color={'white'} id='Instagram'/> </a>
				<a href='https://wa.me/22990194008'><FontAwesomeIcon icon={ faWhatsapp } fontSize={40} color={'white'} id='Whatsapp'/> </a>
			</div>
			
		</footer>
	)
}

export default Footer