import Link from 'next/link';
import React from 'react';
import { elastic as Menu } from 'react-burger-menu';
import styles from './Sidebar.module.css';
import { FaBook, FaPhoneAlt } from 'react-icons/fa';

function Sidebar(props: any) {
	return (
		<Menu {...props} right>
			<Link href="/">
				<a className="menu-item">
					<FaBook size={28} />
					&ensp;Sobre
				</a>
			</Link>
			<br />
			<Link href="/contacts">
				<a className="menu-item">
					<FaPhoneAlt size={28} />
					&ensp;Contatos
				</a>
			</Link>
		</Menu>
	);
}

export default Sidebar;
