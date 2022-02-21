import { useEffect } from 'react';
import Card from './card';
import './main.less';

const Index = () => {
	useEffect(() => {}, []);
	return (
		<div className='Index'>
			<Card title='Terms' link='./terms.html' />
			<Card title='Privacy' link='./privacy.html' />
		</div>
	);
};
export default Index;
