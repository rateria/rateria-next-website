import styles from './Header.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface HeaderProps {
	currentPage: string;
}

function Header({ currentPage }: HeaderProps) {
	const [isShrunk, setShrunk] = useState(false);

	useEffect(() => {
		const handler = () => {
			setShrunk((isShrunk) => {
				if (
					!isShrunk &&
					(document.body.scrollTop > 20 ||
						document.documentElement.scrollTop > 20)
				) {
					return true;
				}

				if (
					isShrunk &&
					document.body.scrollTop < 4 &&
					document.documentElement.scrollTop < 4
				) {
					return false;
				}

				return isShrunk;
			});
			console.log(isShrunk);
		};

		window.addEventListener('scroll', handler);
		return () => window.removeEventListener('scroll', handler);
	}, []);

	return (
		<>
			<div className={styles.wrapper} style={{ height: isShrunk ? 80 : 120 }}>
				<div className={styles.content}>
					<div className={styles.logoAndText}>
						<div className={isShrunk ? styles.logoCollapsed : styles.logo}>
							<Link href="/">
								<a>
									<Image
										src="/logo-fundo-azul.svg"
										alt="Rateria"
										width={160}
										height={160}
										className={isShrunk ? styles.collapsed : styles.image}
									/>
								</a>
							</Link>
						</div>
						<h3 className={isShrunk ? styles.rateriaCollapsed : styles.rateria}>
							RATERIA
						</h3>
					</div>
					<nav style={{ height: isShrunk ? 80 : 120 }}>
						<Link href="/">
							<a className={currentPage === 'About' ? styles.foco : ''}>
								Sobre
							</a>
						</Link>
						<Link href="/contacts">
							<a className={currentPage === 'Contacts' ? styles.foco : ''}>
								Contatos
							</a>
						</Link>
					</nav>
				</div>
			</div>
			<div className={styles.placeholder} />
		</>
	);
}

export default Header;
