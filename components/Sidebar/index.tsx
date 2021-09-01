import Link from 'next/link';
import React from 'react';
import { elastic as Menu } from 'react-burger-menu';
import styles from './Sidebar.module.css';
import {
	FaBook,
	FaPhoneAlt,
	FaMicrophone,
	FaMusic,
	FaHome,
} from 'react-icons/fa';

function Sidebar(props: any) {
	return (
		<Menu {...props} right>
			<Link href="/">
				<a className="menu-item">
					<FaHome size={28} />
					&ensp;Início
				</a>
			</Link>
			<br />
			<Link href="/sobre">
				<a className="menu-item">
					<FaBook size={28} />
					&ensp;Sobre
				</a>
			</Link>
			<br />
			<Link href="/apresentacoes">
				<a className="menu-item">
					<FaMicrophone size={28} />
					&ensp;Apresentações
				</a>
			</Link>
			<br />
			<Link href="/repertorio">
				<a className="menu-item">
					<FaMusic size={28} />
					&ensp;Repertório
				</a>
			</Link>
			<br />

			<Link href="/contatos">
				<a className="menu-item">
					<FaPhoneAlt size={28} />
					&ensp;Contatos
				</a>
			</Link>
		</Menu>
	);
}

export default Sidebar;
