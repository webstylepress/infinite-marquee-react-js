import { useEffect } from 'react';
import InfiniteMarquee from 'vanilla-infinite-marquee';

import './App.css';

function App() {
	useEffect(() => {
		const marquee = new InfiniteMarquee({
			element: '.marquee-container',
			speed: 200000,
			smoothEdges: true,
			direction: 'left',
			duplicateCount: 2,
			pauseOnHover: true,
			mobileSettings: {
				direction: 'left',
				speed: 200000,
			},
		});

		return () => {
			marquee.destroy(); // Clean up the marquee instance on unmount
		};
	}, []);

	const imgs = [
		'/1.svg',
		'/2.svg',
		'/3.svg',
		'/4.svg',
		'/5.svg',
		'/6.svg',
		'/7.svg',
		'/8.svg',
		'/9.svg',
	];

	const text = [
		'Lorem ipsum dolor',
		'1234567890',
		'Hellow world',
		'This is react js tutorial',
		'infinite continuous scroll',
	];

	return (
		<>
			<div className='marquee-container'>
				{imgs.map((imgSrc, index) => (
					<img
						key={index}
						src={imgSrc}
						alt={`Image ${index + 1}`}
						style={{ margin: '0 25px' }}
					/>
				))}
			</div>
			<br />
			<br />
			<div className='marquee-container'>
				{text.map((text, index) => (
					<div key={index} style={{ margin: '0 25px' }}>
						{text}
					</div>
				))}
			</div>
		</>
	);
}

export default App;
