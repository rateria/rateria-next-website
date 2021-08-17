import styles from './AudioPlayer.module.css';

interface AudioPlayerProps {
	name: string;
}

export default function AudioPlayer({ name }: AudioPlayerProps) {
	return (
		<div className={styles.audioPlayer}>
			<h1 className={styles.songName}>{name}</h1>
			<audio preload="metadata" loop></audio>
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
