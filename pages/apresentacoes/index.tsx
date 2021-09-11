import Layout from '../../components/Layout';
import Head from 'next/head';
import styles from './Apresentations.module.css';
import { SocialIcon } from 'react-social-icons';
import Iframe from 'react-iframe';

import CustomCarousel from '../../components/CustomCarousel';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ReactPlayer from 'react-player';
import { useState } from 'react';

import image from '../../public/images/interbatuc2.png';

const YoutubeSlide = ({
	url,
	isSelected,
	firstAccess,
}: {
	url: string;
	isSelected?: boolean;
	firstAccess?: boolean;
}) => (
	<div className={styles.videoContainer}>
		<ReactPlayer
			width="100%"
			url={url}
			height="100%"
			playing={isSelected && !firstAccess}
			controls={true}
			style={{ position: 'absolute' }}
		/>
	</div>
);

export default function Apresentations(this: any) {
	const [currentSlide, setCurrentSlide] = useState(3);
	const [firstAccess, setFirstAccess] = useState(true);

	const updateCurrentSlide = (index: number) => {
		if (currentSlide !== index) {
			setCurrentSlide(index);
			setFirstAccess(false);
		}
	};

	return (
		<>
			<Head>
				<title>Rateria Poli-USP</title>
				<meta name="description" content="A bateria da Escola Politécnica" />
				<link rel="icon" href="/images/logo-fundo-azul.svg" />
			</Head>

			<Layout currentPage="Apresentations">
				<div className={styles.contentWrapper}>
					<div className={styles.sectionTitle}>
						<div className={styles.titleLine}></div>
					</div>

					<div className={styles.wrapper}>
						<div className={styles.container}>
							<img
								alt="Foto da Imbonha no Interbatuc 2019"
								src={image}
								className={styles.image}
							/>
							<div className={styles.text}>
								<h1 className={styles.title}>Apresentações</h1>
								<p>
									&emsp;O momento de apresentação é o que dá sentido a grande
									parte do esforço e trabalho de uma bateria: ele justifica as
									horas de ensaio e consolida os momentos de reflexão e
									criatividade. Particularmente, a Rateria tem muito orgulho da
									gande diversidade de apresentações de que já participou! Elas
									vão desde competições e eventos universitários até ações
									beneficentes, casamentos e comemorações corporativas. Siga
									pelas opções abaixo para descobrir um pouco do que nós já
									fizemos.
									<br />
								</p>

								<div className={styles.buttonsArea}>
									<a href="#carousel">
										<button style={{}} onClick={() => setCurrentSlide(0)}>
											Inters
										</button>
									</a>
									<a href="#carousel">
										<button style={{}} onClick={() => setCurrentSlide(1)}>
											Eventos Beneficentes
										</button>
									</a>
									<a href="#carousel">
										<button style={{}} onClick={() => setCurrentSlide(2)}>
											Casamentos
										</button>
									</a>
									<a href="#carousel">
										<button style={{}} onClick={() => setCurrentSlide(3)}>
											Competições
										</button>
									</a>
									<a href="#carousel">
										<button style={{}} onClick={() => setCurrentSlide(4)}>
											Festas de Empresa
										</button>
									</a>
									<a href="#carousel">
										<button style={{}} onClick={() => setCurrentSlide(5)}>
											Festas de Escola
										</button>
									</a>

									<div className={styles.line}></div>
									<a href="#carousel">
										<button style={{}} onClick={() => setCurrentSlide(6)}>
											Outros
										</button>
									</a>

									<div className={styles.line}></div>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.inviteToWatch}>
						<p>&emsp;Conheça nosso samba:</p>
						<SocialIcon
							url="https://www.youtube.com/user/Rateria"
							label="Youtube"
							fgColor="#FFF5DA"
							className={styles.socialIcon}
							target="_blank"
							style={{
								height: 36,
								width: 36,
								marginLeft: '1rem',
							}}
						/>
					</div>
					<div id="carousel"></div>
					<section>
						<div className={styles.videoWrapper}>
							<CustomCarousel
								curSlide={currentSlide}
								curSlideChange={setCurrentSlide}
								currentSlide={currentSlide}
								setFirstAccess={setFirstAccess}
							>
								<YoutubeSlide
									key="youtube-1"
									url="https://www.youtube.com/embed/NhRIi-TPam4"
								/>
								<YoutubeSlide
									key="youtube-2"
									url="https://www.youtube.com/embed/W8BXGm-CRWY"
								/>
								<YoutubeSlide
									key="youtube-3"
									url="https://www.youtube.com/embed/oiQFY5GRuwM"
								/>
								<YoutubeSlide
									key="youtube-4"
									url="https://www.youtube.com/embed/uYrDt1wSG2w"
								/>
								<YoutubeSlide
									key="youtube-5"
									url="https://www.youtube.com/embed/Yyux9GxV6HA"
								/>
								<YoutubeSlide
									key="youtube-6"
									url="https://www.youtube.com/embed/wAP_qso5VnI"
								/>
								<YoutubeSlide
									key="youtube-7"
									url="https://www.youtube.com/embed/48X4SH88ang"
								/>
							</CustomCarousel>
						</div>
						<Carousel
							swipeable={false}
							showThumbs={false}
							showArrows={false}
							className={styles.videoDescription}
							selectedItem={currentSlide}
						>
							<p>
								Sem negar suas raízes, a Rateria é presença garantida em eventos
								esportivos universitários. Assim como em nossa primeira
								apresentação, seguimos infiltrados em meio a torcida da Escola
								Politécnica da USP passando energia para os times, zunindo no
								ouvido dos adversários e celebrando cada vitória! A Rateria já
								esteve presente em eventos como o Enganharíadas e o InterFono e
								participa tradicionalmente da famosa InterUSP.
							</p>
							<p>
								Além de suas conhecidas apresentações em competições, festas e
								carnavais, a Rateria também está presente em eventos e ações
								sociais, apresentações e workshops para ONGs e escolas. Muitas
								dessas ações são realizadas em parceria com a Poli Social (grupo
								de extensão social da Poli), ou, ainda, a convite de
								organizações de fora da universidade com as quais temos
								parceria.
							</p>
							<p>
								Já pensou em ter uma bateria de samba animando a festa do seu
								casamento?! Sim? Por que não?? Atualmente, a Rateria já tem
								longo histórico em apresentações profissionais em festas de
								casamento. Tocamos desde o tradicional samba até músicas de
								estilos variados, selecionadas e adaptadas para estes momentos
								especiais. Aproveite e veja na seção de repertório um pouco do
								nosso cardápio de músicas para apresentações com palco.
							</p>
							<p>
								Em seus mais de 20 anos de trajetória, a Rateria se fez muito
								conhecida em diversas competições de Baterias Universitárias.
								Participamos da fundação, em 2009, de um dos principais torneios
								do Brasil: o Balatucada, do qual participamos desde então, na
								divisão Principal. Em 2015, ingressamos também no Interbatuc,
								torneio organizado pela Liga Nacional de Baterias Universitárias
								que reúne grupos de diferentes instituições do estado de São
								Paulo e do Brasil.
							</p>
							<p>
								A Rateria também se apresenta em eventos particulares e
								corporativos. Nos enche de alegria poder levar um pouco de
								cultura e música brasileiras para as mais diversas ocasiões! Das
								muitas apresentações memoráveis para as quais fomos chamados,
								podemos destacar nossa participação na inauguração do Terminal 3
								do aeroporto de Guarulhos, quando coube a nós a criação de um
								arranjo musical e gravação de um jingle. Também tocamos em uma
								festa no Clube Sírio de São Paulo, em 2016, em comemoração ao
								feriado indiano Diwali. Na ocasião, criamos arranjos de bateria
								para acompanhar músicas do ritmo típico chamado Bhangra. Se
								interessou? Confira um pouco do nosso trabalho na seção
								Repertório.
							</p>
							<p>
								Também tocamos em comemorações promovidas por escolas e
								instituições de ensino. Além de festas juninas em escolas e
								workshop com alunos de educação infantil, a Rateria se apresenta
								tradicionalmente em festas de formatura e nas comemorações dos
								aprovados nos vestibulares.
							</p>
							<p>
								Onde mais podemos tocar? Somos um grupo que tem paixão pelo som
								que faz! Nossa bateria ganha mais sentido quanto maior é a
								diversidade de lugares, momentos e situações que em que surgem
								oportunidades de novas apresentações. Afinal, o que nos dá
								alegria, é a batucada da Rateria!
							</p>
						</Carousel>
					</section>
				</div>
			</Layout>
		</>
	);
}
