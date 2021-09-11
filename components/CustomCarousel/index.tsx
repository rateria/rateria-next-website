import React, { CSSProperties } from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from './CustomCarousel.module.css';
import { FaAngleLeft, FaAngleRight, FaArrowLeft } from 'react-icons/fa';

export default function CustomCarousel(props: any) {
	const customRenderItem = (item: any, props: any) => (
		<item.type {...item.props} {...props} />
	);

	const handleSlideChange = (index: number) => {
		props.curSlideChange(index);
		props.setFirstAccess(false);
	};

	return (
		<Carousel
			onChange={handleSlideChange}
			showThumbs={false}
			selectedItem={props.currentSlide}
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
		>
			{props.children}
		</Carousel>
	);
}
