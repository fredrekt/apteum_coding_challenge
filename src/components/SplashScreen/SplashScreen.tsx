import { Spin } from 'antd';
import React from 'react';

const SplashScreen: React.FC = () => {
	return (
		<div className="splashScreen absolute-centered" data-testid="splash-screen">
			<Spin size={'large'} data-testid="spin-element" />
		</div>
	);
};

export default SplashScreen;
