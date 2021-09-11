import Layout from '../components/Layout';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import Link from 'next/link';

import image1 from './../public/images/carouselImg1.jpg';
import image2 from './../public/images/carouselImg2.jpg';
import image3 from './../public/images/carouselImg3.jpg';
import image4 from './../public/images/carouselImg4.png';

export default function Home(this: any) {
	return (
		<>
			<Head>
				<title>Rateria Poli-USP</title>
				<meta name="description" content="A bateria da Escola Politécnica" />
				<link rel="icon" href="/images/logo-fundo-azul.svg" />
			</Head>

			<Layout currentPage="Home">
				<div className={styles.carouselWrapper}>
					<Carousel
						emulateTouch
						infiniteLoop
						interval={10000}
						autoPlay
						renderArrowPrev={(onClickHandler, hasPrev, label) =>
							hasPrev && (
								<button
									type="button"
									onClick={onClickHandler}
									title={label}
									className={styles.leftArrow}
								>
									<FaAngleLeft size={40} />
								</button>
							)
						}
						renderArrowNext={(onClickHandler, hasNext, label) =>
							hasNext && (
								<button
									type="button"
									onClick={onClickHandler}
									title={label}
									className={styles.rightArrow}
								>
									<FaAngleRight size={40} />
								</button>
							)
						}
						showThumbs={false}
					>
						<div className={styles.carouselItem}>
							{/* <div className={styles.image1}></div> */}
							<img
								alt="Foto da comemoração pós-apresentação do Interbatuc 2019"
								className={styles.carouselImage}
								src={image1}
							/>
							<div className={styles.legendCarousel}>
								<h1>Quem somos?</h1>
								<p>
									A Rateria é a bateria da Escola Politécnica da Universidade de
									São Paulo! Nosso principal intuito é garantir a diversão tanto
									de quem toca quanto de quem nos ouve. Conheça um pouco mais
									sobre a nossa história!
								</p>
								<Link href="/sobre">
									<a className={styles.legendButton}>Saiba Mais!</a>
								</Link>
							</div>
						</div>
						<div className={styles.carouselItem}>
							{/* <Image
								alt="oioioi"
								src={image2}
								layout="fill"
								objectFit="cover"
								quality={100}
								priority={true}
							/> */}
							<img
								alt="Timão mestrando bateria no Bixopp 2019"
								className={styles.carouselImage}
								src={image2}
							/>

							<div className={styles.legendCarousel}>
								<h1>Onde Tocamos?</h1>
								<p>
									Já participamos dos mais diversos eventos e competições,
									conheça e veja um pouco das nossas apresentações!
								</p>
								<Link href="/apresentacoes">
									<a className={styles.legendButton}>Saiba Mais!</a>
								</Link>
							</div>
						</div>
						<div className={styles.carouselItem}>
							{/* <Image
								alt="oioioi"
								src={image3}
								layout="fill"
								objectFit="cover"
								quality={100}
								priority={true}
							/> */}
							<img
								alt="Palco da Rateria no Bixopp 2019"
								className={styles.carouselImage}
								src={image3}
							/>

							<div className={styles.legendCarousel}>
								<h1>O que tocamos?</h1>
								<p>
									Já tocamos diversos estilos ao longo dos anos de história, do
									samba ao rock, do funk ao sertanejo! Confira o nosso
									repertório atual!
								</p>
								<Link href="/repertorio">
									<a className={styles.legendButton}>Saiba Mais!</a>
								</Link>
							</div>
						</div>
						<div className={styles.carouselItem}>
							<img
								alt="Foto da Rateria no palco do Interbatuc 2019"
								className={styles.carouselImage}
								src={image4}
							/>

							{/* <Image

								alt="oioioi"
								src={image4}
								layout="fill"
								objectFit="cover"
								quality={100}
								priority={true}
							/> */}
							<div className={styles.legendCarousel}>
								<h1>Fale conosco!</h1>
								<p>
									Se interessou e quer nos conhecer melhor ou contar com a nossa
									presença em algum dos seus eventos? Converse conosco!
								</p>
								<Link href="/contatos">
									<a className={styles.legendButton}>Fale conosco!</a>
								</Link>
							</div>
						</div>
					</Carousel>
				</div>
			</Layout>
		</>
	);
}
