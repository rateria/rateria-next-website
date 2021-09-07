/* eslint-disable @next/next/no-img-element */
import styles from './Header.module.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Sidebar from '../Sidebar';

interface HeaderProps {
	currentPage: string;
}

function Header({ currentPage }: HeaderProps) {
	const [isShrunk, setShrunk] = useState(false);

	const showSettings = (event: any) => {
		event.preventDefault();
	};

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
		};

		window.addEventListener('scroll', handler);
		return () => window.removeEventListener('scroll', handler);
	}, []);

	return (
		<>
			<div
				id="wrapper"
				className={styles.wrapper}
				style={{ height: isShrunk ? 80 : 120 }}
			>
				<div className={styles.content}>
					<Link href="/">
						<a>
							<div className={styles.logoAndText}>
								<div className={isShrunk ? styles.logoCollapsed : styles.logo}>
									{/* <Image
										src="/logo-fundo-azul.svg"
										alt="Rateria"
										width={160}
										height={160}
										className={isShrunk ? styles.collapsed : styles.image}
										layout="fixed"
									/> */}
									<img
										src="/images/logo-fundo-azul.svg"
										alt="Rateria"
										className={isShrunk ? styles.collapsed : styles.image}
									/>
								</div>
								<h3
									className={
										isShrunk ? styles.rateriaCollapsed : styles.rateria
									}
								>
									RATERIA
								</h3>
							</div>
						</a>
					</Link>
					<nav style={{ height: isShrunk ? 80 : 120 }}>
						<Link href="/">
							<a className={currentPage === 'Home' ? styles.foco : ''}>
								Início
							</a>
						</Link>
						<Link href="/sobre">
							<a className={currentPage === 'About' ? styles.foco : ''}>
								Sobre
							</a>
						</Link>

						<Link href="/apresentacoes">
							<a
								className={currentPage === 'Apresentations' ? styles.foco : ''}
							>
								Apresentações
							</a>
						</Link>
						<Link href="/repertorio">
							<a className={currentPage === 'Repertory' ? styles.foco : ''}>
								Repertório
							</a>
						</Link>
						<Link href="/contatos">
							<a className={currentPage === 'Contacts' ? styles.foco : ''}>
								Contatos
							</a>
						</Link>
					</nav>
				</div>

				<div className={styles.mobileContent}>
					<div className={styles.mobileLogoAndText}>
						{/* <Image
							src="/logo-fundo-azul.svg"
							alt="Rateria"
							width={60}
							height={60}
							layout="fixed"
						/> */}
						<img
							src="/images/logo-fundo-azul.svg"
							alt="Rateria"
							style={{ width: 60, height: 60 }}
						/>
						<h3 className={styles.rateriaMobile}>RATERIA</h3>
					</div>
					<div id="App">
						<Sidebar pageWrapId={'page-wrap'} outerContainerId={'App'} />
					</div>
					<div id="page-wrap"></div>
				</div>
			</div>
			<div className={styles.placeholder} />
		</>
	);
}

export default Header;
