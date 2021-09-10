import { google } from 'googleapis';
import Head from 'next/head';
import styles from './Post.module.css';
import HeaderNewsbek from '../../components/HeaderNewsbek';
import Link from 'next/link';

export async function getServerSideProps() {
	const auth = await google.auth.getClient({
		scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
	});

	const sheets = google.sheets({ version: 'v4', auth });

	const range = `NewsBek`;

	const response = await sheets.spreadsheets.values.get({
		spreadsheetId: process.env.SHEET_ID,
		range,
	});

	// // @ts-ignore
	const rows = response.data.values;
	rows?.shift();
	// console.log('title: ' + title);
	// console.log('content: ' + content);
	// console.log('date: ' + date);

	return {
		props: {
			rows,
		},
	};
}

export default function Newsbek({ rows }: any) {
	return (
		<>
			<Head>
				<title>Rateria Poli-USP</title>
				<meta name="description" content="A bateria da Escola Politécnica" />
				<link rel="icon" href="/images/logo-fundo-azul.svg" />
			</Head>
			<style jsx global>{`
				body {
					background: var(--color-white);
				}
				::-webkit-scrollbar-track {
					background: #ffffff;
					border: 0px none #ffffff;
					border-radius: 0px;
				}
				::-webkit-scrollbar-track:hover {
					background: #ffffff;
				}
				::-webkit-scrollbar-track:active {
					background: #ffffff;
				}
			`}</style>
			<HeaderNewsbek date={'1 de abril de 2021'}></HeaderNewsbek>
			<main className={styles.mainContent}>
				<article>
					{rows.map((row: any) => {
						const adress = '/newsbek/' + (rows.indexOf(row) + 1);
						return (
							<div className={styles.card}>
								<Link href={adress}>
									<a>{row[0]}</a>
								</Link>
								<h3>{row[2]}</h3>
							</div>
						);
					})}
				</article>
			</main>
		</>
	);
}
