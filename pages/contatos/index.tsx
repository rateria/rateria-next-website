import Layout from '../../components/Layout';
import Head from 'next/head';
import styles from './Contacts.module.css';
import { SocialIcon } from 'react-social-icons';

import image from '../../public/images/interbatuc1.png';

export default function Contacts() {
	return (
		<>
			<Head>
				<title>Rateria Poli-USP</title>
				<meta name="description" content="A bateria da Escola Politécnica" />
				<link rel="icon" href="/images/logo-fundo-azul.svg" />
			</Head>

			<Layout currentPage="Contacts">
				<div className={styles.contentWrapper}>
					<div className={styles.sectionTitle}>
						<div className={styles.titleLine}></div>
					</div>

					<div className={styles.wrapper}>
						<h1 className={styles.title}>Contatos</h1>
						<div className={styles.container}>
							<div className={styles.info}>
								<div className={styles.contact}>
									<div className={styles.infoText}>
										<p className={styles.name}>Matheus Rosa Claro</p>
										<p className={styles.occupation}>Presidente</p>
									</div>
									<div>
										<SocialIcon
											url="https://api.whatsapp.com/send?phone=553598679613&text=Olá!%20Vim%20pelo%20site!"
											label="WhatsApp"
											className={styles.socialIcon}
											fgColor="#FFF5DA"
											target="_blank"
											style={{ height: 40, width: 40, marginRight: 10 }}
										/>
										<SocialIcon
											url="mailto:matheusrclaro@usp.br"
											label="Email"
											className={styles.socialIcon}
											fgColor="#FFF5DA"
											target="_blank"
											style={{ height: 40, width: 40, marginRight: 10 }}
										/>
									</div>
								</div>
								<div className={styles.contact}>
									<div className={styles.infoText}>
										<p className={styles.name}>Dani Cardoso</p>
										<p className={styles.occupation}>Mestre</p>
									</div>
									<div>
										<SocialIcon
											url="https://api.whatsapp.com/send?phone=5511977854978&text=Olá!%20Vim%20pelo%20site!"
											label="WhatsApp"
											className={styles.socialIcon}
											fgColor="#FFF5DA"
											target="_blank"
											style={{ height: 40, width: 40, marginRight: 10 }}
										/>
										<SocialIcon
											url="mailto:danicardoso255@usp.br"
											label="Email"
											className={styles.socialIcon}
											fgColor="#FFF5DA"
											target="_blank"
											style={{ height: 40, width: 40, marginRight: 10 }}
										/>
									</div>
								</div>
								<div className={styles.contact}>
									<div className={styles.infoText}>
										<p className={styles.name}>André Christóforo</p>
										<p className={styles.occupation}>Mestre</p>
									</div>
									<div>
										<SocialIcon
											url="https://api.whatsapp.com/send?phone=5511972402040&text=Ol%C3%A1!%20Vim%20pelo%20site!"
											label="WhatsApp"
											className={styles.socialIcon}
											fgColor="#FFF5DA"
											target="_blank"
											style={{ height: 40, width: 40, marginRight: 10 }}
										/>
										<SocialIcon
											url="mailto:andrechristoforo@hotmail.com"
											label="Email"
											className={styles.socialIcon}
											fgColor="#FFF5DA"
											target="_blank"
											style={{ height: 40, width: 40, marginRight: 10 }}
										/>
									</div>
								</div>
							</div>
							<img
								alt="Foto da Imbonha no Interbatuc 2019"
								src={image}
								className={styles.image}
							/>{' '}
						</div>
					</div>
				</div>
			</Layout>
		</>
	);
}
