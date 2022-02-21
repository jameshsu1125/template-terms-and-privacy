import { useEffect } from 'react';
import './main.less';

const Card = ({ title, link }) => {
	useEffect(() => {}, []);
	return (
		<div className='Card'>
			<div className='title'>{title}</div>
			<button
				onClick={() => {
					window.open(link);
				}}
				type='button'
			>
				view
			</button>
		</div>
	);
};

Card.defaultProps = {
	title: '',
	link: '',
};
export default Card;
