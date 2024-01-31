import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import SplashScreen from '../../src/components/SplashScreen/SplashScreen';

describe('SplashScreen', () => {
	test('renders the component', () => {
		const { getByTestId } = render(<SplashScreen />);
		const splashScreenElement = getByTestId('splash-screen');
		expect(splashScreenElement).toBeTruthy();
	});
});
