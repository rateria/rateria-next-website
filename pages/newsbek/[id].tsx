import { google } from 'googleapis';
import Head from 'next/head';
import styles from '../styles/Posts.module.css';
import Layout from '../../components/Layout';

export async function getServerSideProps({ query }: any) {
	const { id } = query;
	console.log(id);

	const auth = await google.auth.getClient({
		scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
	});

	const sheets = google.sheets({ version: 'v4', auth });

	const range = `Sheet1!A${parseInt(id) + 1}:C${parseInt(id) + 1}`;

	const response = await sheets.spreadsheets.values.get({
		spreadsheetId: process.env.SHEET_ID,
		range,
	});

	// @ts-ignore
	const [title, content] = response.data.values[0];

	console.log('title: ' + title);
	console.log('content: ' + content);

	return {
		props: {
			title,
			content,
		},
	};
}

export default function Post({ title, content }: any) {
	return (
		<>
			<Head>
				<title>Rateria Poli-USP</title>
				<meta name="description" content="A bateria da Escola Politécnica" />
				<link rel="icon" href="/images/logo-fundo-azul.svg" />
			</Head>
			<Layout currentPage={'About'}>
				<article>
					<h1>{title}</h1>
					<div dangerouslySetInnerHTML={{ __html: content }}></div>
				</article>
			</Layout>
		</>
	);
}
