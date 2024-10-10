import { useEffect } from 'react';
import InfiniteMarqueeLib from 'vanilla-infinite-marquee';

function InfiniteMarquee({ dataType, dataArray, speed, direction, className }) {
	useEffect(() => {
		const marquee = new InfiniteMarqueeLib({
			element: `.${className}`,
			speed: speed,
			direction: direction,
			smoothEdges: true,
			duplicateCount: 2,
			pauseOnHover: true,
			mobileSettings: {
				direction: direction,
				speed: speed,
			},
		});

		return () => {
			marquee.destroy(); // Clean up the marquee instance on unmount
		};
	}, [speed, direction]);

	return (
		<div className={className}>
			{dataType === 'image'
				? dataArray.map((imgSrc, index) => (
						<img
							key={index}
							src={imgSrc}
							alt={`Image ${index + 1}`}
							style={{ margin: '0 25px' }}
						/>
				  ))
				: dataArray.map((text, index) => (
						<div key={index} style={{ margin: '0 25px' }}>
							{text}
						</div>
				  ))}
		</div>
	);
}

export default InfiniteMarquee;
