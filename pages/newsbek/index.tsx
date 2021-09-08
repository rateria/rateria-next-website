import { google } from 'googleapis';
import Head from 'next/head';
import styles from './Post.module.css';
import HeaderNewsbek from '../../components/HeaderNewsbek';
import Link from 'next/link';

// export async function getServerSideProps({ query }: any) {
// 	const { id } = query;
// 	console.log(id);

// 	const auth = await google.auth.getClient({
// 		scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
// 	});

// 	const sheets = google.sheets({ version: 'v4', auth });

// 	const range = `NewsBek!A${parseInt(id) + 1}:C${parseInt(id) + 1}`;

// 	const response = await sheets.spreadsheets.values.get({
// 		spreadsheetId: process.env.SHEET_ID,
// 		range,
// 	});

// 	// @ts-ignore
// 	const [title, content, date] = response.data.values[0];

// 	console.log('title: ' + title);
// 	console.log('content: ' + content);
// 	console.log('date: ' + date);

// 	return {
// 		props: {
// 			title,
// 			content,
// 			date,
// 		},
// 	};
// }

export default function Newsbek() {
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
					<div className={styles.card}>
						<Link href="/newsbek/1">
							<a>A Teia</a>
						</Link>
						<h3>01/05/2021</h3>
					</div>

					<div className={styles.card}>
						<Link href="/newsbek/2">
							<a>Relatos Interbatuc 19</a>
						</Link>
						<h3>01/05/2021</h3>
					</div>
				</article>
			</main>
		</>
	);
}
