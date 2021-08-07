import styles from './AltFooter.module.css';
import { SocialIcon } from 'react-social-icons';

function NewFooter() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.socialIcons}>
				<SocialIcon
					url="https://api.whatsapp.com/send?phone=5511940046444&text=eai%20cuz%C3%A3o"
					label="WhatsApp"
					className={styles.socialIcon}
					target="_blank"
				/>
				<SocialIcon
					url="mailto:rateria@gmail.com?cc=murillo.teixeira@usp.br"
					label="Email"
					bgColor="#e0d35e"
					className={styles.socialIcon}
					target="_blank"
				/>
				<SocialIcon
					url="https://www.facebook.com/rateria"
					label="Facebook"
					fgColor="#FFF5DA"
					className={styles.socialIcon}
					target="_blank"
				/>
				<SocialIcon
					url="https://www.instagram.com/rateriapoliusp"
					label="Instagram"
					className={styles.socialIcon}
					target="_blank"
				/>
				<SocialIcon
					url="https://linktr.ee/rateria"
					label="Outros links importantes!"
					bgColor="#FFF5DA"
					className={styles.socialIcon}
					target="_blank"
				/>
			</div>
			<div className={styles.credits}>
				<p>Página feita com 💛 por amigos ratinhos.</p>
			</div>
		</div>
	);
}

export default NewFooter;
