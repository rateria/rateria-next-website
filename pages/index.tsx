import Layout from '../components/Layout';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { FaArrowRight } from 'react-icons/fa';

export default function About() {
	return (
		<>
			<Head>
				<title>Rateria Poli-USP</title>
				<meta name="description" content="Site da Rateria!" />
				<link rel="icon" href="/logo-fundo-azul.svg" />
			</Head>

			<Layout currentPage="About">
				<div className={styles.teste}></div>

				<div className={styles.sectionTitle}>
					<div className={styles.titleLine}></div>
				</div>

				<div className={styles.wrapper}>
					<div className={styles.container}>
						<div className={styles.image1}></div>
						<div className={styles.text1}>
							<h1>Quem somos?</h1>
							<p>
								A Rateria, bateria da Escola Politécnica da USP, desde 1997 se
								destaca no cenário de samba universitário da capital paulista.
								Nosso principal intuito é garantir a diversão e levar alegria a
								quem nos vê e ouve tocar!
							</p>
							<p>
								Além de incentivar os times da faculdade e fazer a diferença nas
								competições esportivas, a Rateria faz apresentações em festas,
								casamentos, eventos beneficentes e muito mais! Se você se
								interessa em ter a Rateria em um de seus eventos, basta
								conversar conosco!
							</p>
							<p>
								Atualmente contamos com mais de 80 integrantes dos mais variados
								cursos e tocamos ritmos que vão do samba ao rock, do funk ao
								sertanejo! Sempre renovamos nosso repertório, adaptando
								praticamente qualquer ritmo à nossa bateria.
							</p>
						</div>
						<div className={styles.image2}></div>
						<div className={styles.text2}>
							{/* <div className={styles.line}></div> */}
							<h2>
								<FaArrowRight size={32} />
								&ensp;Nossa História
							</h2>
							<p>
								Em 1997, alguns amigos que estudavam na Poli se reuniram com a
								ideia de formar uma bateria semelhante às das escolas de samba,
								a princípio, para animar a torcida durante os jogos
								universitários. Eram apenas três instrumentos: uma ripa, um
								surdinho e uma caixa. O máximo que conseguia fazer era barulho.{' '}
							</p>

							<p>
								Nesse ano, o Grêmio começou a querer montar uma bateria e
								comprou três surdos, três ripas e quatro caixas. Foi organizada
								uma cervejada para arrecadar dinheiro para peles reservas onde a
								Bateria da Poli se apresentou com apenas seis componentes, e
								então foi feita uma votação para decidir o nome.
							</p>
							<p>
								A partir daí a bateria só cresceu. A presença da Rateria foi se
								tornando tradição em eventos como o InterUSP, o Engenharíadas,
								InterFono, BichUSP, FFA e a Semana de Recepção de Bixos. Também
								tocamos na recepção de intercambistas, eventos esportivos,
								sociais, bloquinhos e festas de Carnaval, além de outros
								momentos memoráveis, como o Rateria Tour de France (2004), em
								que vinte ritmistas foram para a França divulgar o projeto da
								Poli de formação com Duplo-Diploma.
							</p>
						</div>
					</div>
				</div>
			</Layout>
		</>
	);
}
