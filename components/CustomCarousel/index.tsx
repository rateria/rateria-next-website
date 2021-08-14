import React, { CSSProperties } from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from './CustomCarousel.module.css';
import { FaAngleLeft, FaAngleRight, FaArrowLeft } from 'react-icons/fa';

export default function CustomCarousel(props: any) {
	const indicatorStyles: CSSProperties = {
		background: '#fff',
		width: 8,
		height: 8,
		display: 'inline-block',
		margin: '0 8px',
	};

	const customRenderItem = (item: any, props: any) => (
		<item.type {...item.props} {...props} />
	);

	return (
		<Carousel
			renderItem={customRenderItem}
			statusFormatter={(current, total) => ``}
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
			renderIndicator={(onClickHandler, isSelected, index, label) => {
				if (isSelected) {
					return (
						<li
							style={{ ...indicatorStyles, background: '#000' }}
							aria-label={`Selected: ${label} ${index + 1}`}
							title={`Selected: ${label} ${index + 1}`}
						/>
					);
				}
				return (
					<li
						style={indicatorStyles}
						onClick={onClickHandler}
						onKeyDown={onClickHandler}
						value={index}
						key={index}
						role="button"
						tabIndex={0}
						title={`${label} ${index + 1}`}
						aria-label={`${label} ${index + 1}`}
					/>
				);
			}}
		>
			{props.children}
		</Carousel>
	);
}
