// @ts-nocheck
// Existe um erro de typescript ao se usar o useRef

import { MutableRefObject, useEffect, useRef, useState } from 'react';
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
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);

	const audio = useRef() as MutableRefObject<HTMLDivElement>;
	const intervalRef = useRef();

	useEffect(() => {}, [currentTime]);

	const calculateTime = (secs) => {
		const minutes = Math.floor(secs / 60);
		const seconds = Math.floor(secs % 60);
		const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
		return `${minutes}:${returnedSeconds}`;
	};

	const playPauseAudio = () => {
		playing ? audio.current.pause() : audio.current.play();
		!playing && startTimer();
		setPlaying(!playing);
	};

	const loadAudioData = () => {
		setDuration(audio.current.duration);
	};

	const startTimer = () => {
		// Clear any timers already running
		clearInterval(intervalRef.current);

		intervalRef.current = setInterval(() => {
			if (audio.current.ended) {
				// Reiniciar? Melhor não ne
			} else {
				setCurrentTime(audio.current.currentTime);
			}
		}, [100]);
	};

	return (
		<div
			className={`${styles.audioPlayer} ${playing ? styles.playing : ''}`}
			style={{ backgroundImage: `url(/images/${imgSrc})` }}
			onMouseOver={loadAudioData}
		>
			<h1 className={styles.songName}>{name}</h1>
			<audio
				ref={audio}
				src={`/audio/${audioSrc}`}
				preload="metadata"
				loop
			></audio>
			<div className={styles.audioControls}>
				{/* <div className={styles.volume}>
					<button className={styles.muteButton}></button>
					<input
						className={styles.volumeSlider}
						type="range"
						max="100"
						value="100"
					/>
				</div> */}
				<button className={styles.playIcon} onClick={playPauseAudio}></button>
				<div className={styles.progression}>
					<span className={styles.currentTime}>
						{calculateTime(currentTime)}
					</span>

					<input
						className={styles.seekSlider}
						type="range"
						max="100"
						value="0"
					/>
					<span className={styles.duration}>{calculateTime(duration)}</span>
				</div>
			</div>
		</div>
	);
}
