import { Spin } from 'antd';
import React from 'react';

const SplashScreen: React.FC = () => {
	return (
		<div className="splashScreen absolute-centered">
			<Spin size={'large'} />
		</div>
	);
};

export default SplashScreen;
