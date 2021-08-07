import styles from './Footer.module.css';

import {
	FaFacebook,
	FaWhatsapp,
	FaInstagram,
	FaMapMarker,
} from 'react-icons/fa';
import { IconContext } from 'react-icons';

function Footer() {
	return (
		<div className={styles.wrapper}>
			{/* classe global!! */}
			<IconContext.Provider value={{ className: 'footerSocialIcons' }}>
				<div className={styles.line} />
				<div className={styles.content}>
					<div className={styles.column}>
						<p className={styles.columnTitle}>Contatos</p>
						<a
							href="https://facebook.com/rateria"
							target="_blank"
							rel="noopener noreferrer"
						>
							<div>
								<FaFacebook size={20} />
							</div>
							<p>Facebook</p>
						</a>
						<a
							href="https://facebook.com/rateria"
							target="_blank"
							rel="noopener noreferrer"
						>
							<div>
								<FaWhatsapp size={20} />
							</div>
							<p>WhatsApp</p>
						</a>
						<a
							href="https://facebook.com/rateria"
							target="_blank"
							rel="noopener noreferrer"
						>
							<div>
								<FaInstagram size={20} />
							</div>
							<p>Instagram</p>
						</a>
					</div>
					<div className={styles.column}>
						<p className={styles.columnTitle}>Endereço</p>
						<a
							href="https://www.google.com.br/maps/place/Av.+Prof.+Almeida+Prado,+128+-+Butant%C3%A3,+S%C3%A3o+Paulo+-+SP,+05508-070/@-23.5562257,-46.7352853,17z/data=!3m1!4b1!4m5!3m4!1s0x94ce56172c6d03ef:0x7cfa18247a9fe497!8m2!3d-23.5562257!4d-46.7330966"
							target="_blank"
							rel="noopener noreferrer"
						>
							<div>
								<FaMapMarker size={20} />
							</div>
							Av. Prof. Almeida Prado, 128 - Butantã, São Paulo - SP, 05508-070
						</a>
					</div>
					<div className={styles.column}>
						<p className={styles.columnTitle}>Ensaios</p>
						<p className={styles.convite}>
							Ensaiamos às terças e quintas na praça do relógio! <br />
							<br /> Quer nos conhecer? Fale conosco!!
						</p>
					</div>
				</div>
			</IconContext.Provider>
		</div>
	);
}

export default Footer;
