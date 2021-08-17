import { MutableRefObject, useRef, useState } from 'react';
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

	const playButton = useRef() as MutableRefObject<HTMLDivElement>;

	const playPauseAudio = () => {
		if (playButton !== null) {
			playing ? playButton.current.pause() : playButton.current.play();
			setPlaying(!playing);
		}
	};

	return (
		<div
			className={`${styles.audioPlayer} ${playing ? styles.playing : ''}`}
			style={{ backgroundImage: `url(${imgSrc})` }}
		>
			<h1 className={styles.songName}>{name}</h1>
			<audio ref={playButton} src={audioSrc} preload="metadata" loop></audio>
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
				<button className={styles.playIcon} onClick={playPauseAudio}></button>
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
