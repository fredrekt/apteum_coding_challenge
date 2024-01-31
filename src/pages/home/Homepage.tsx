import React from 'react';
import './Homepage.scss';
import { Typography } from 'antd';
import DefaultLayout from '../../layouts/default/DefaultLayout';

const Homepage: React.FC = () => {
	return (
		<DefaultLayout>
			<Typography.Title>Homepage</Typography.Title>
		</DefaultLayout>
	);
};

export default Homepage;
