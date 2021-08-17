import { useState } from 'react';
import styles from './AudioPlayer.module.css';

interface AudioPlayerProps {
	name: string;
	audioSrc: string;
	imgSrc: string;
}

export default function AudioPlayer({
	name,
	audioSrc,
	imgSrc,
}: AudioPlayerProps) {
	const [playing, setPlaying] = useState(false);

	return (
		<div
			className={styles.audioPlayer}
			style={{ backgroundImage: `url(${imgSrc})` }}
		>
			<h1 className={styles.songName}>{name}</h1>
			<audio src={audioSrc} preload="metadata" loop></audio>
			<div className={styles.audioControls}>
				<div className={styles.volume}>
					<button className={styles.muteButton}></button>
					<input
						className={styles.volumeSlider}
						type="range"
						max="100"
						value="100"
					/>
				</div>
				<button className={styles.playIcon}></button>
				<div className={styles.progression}>
					<span className={styles.currentTime}>0:00</span>
					<input
						className={styles.seekSlider}
						type="range"
						max="100"
						value="0"
					/>
					<span className={styles.duration}>0:00</span>
				</div>
			</div>
		</div>
	);
}
