import InfiniteMarquee from './InfiniteMarquee';
import './App.css';

function App() {
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
		<div className='App'>
			<InfiniteMarquee
				className='im-1'
				dataType='image'
				dataArray={imgs}
				speed={200000}
				direction='left'
			/>
			<br />
			<br />
			<InfiniteMarquee
				className='im-2'
				dataType='text'
				dataArray={text}
				speed={200000}
				direction='left'
			/>
		</div>
	);
}

export default App;
