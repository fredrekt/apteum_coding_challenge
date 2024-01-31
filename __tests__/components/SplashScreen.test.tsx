import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import SplashScreen from '../../src/components/SplashScreen/SplashScreen';

describe('SplashScreen', () => {
	it('renders the component', () => {
		const { getByTestId } = render(<SplashScreen />);
		const splashScreenElement = getByTestId('splash-screen');
		expect(splashScreenElement).toBeInTheDocument();
	});

	it('renders a Spin component', () => {
		const { getByTestId } = render(<SplashScreen />);
		const spinElement = getByTestId('spin-element');
		expect(spinElement).toBeInTheDocument();
	});

	it('renders Spin component with large size', () => {
		const { getByTestId } = render(<SplashScreen />);
		const spinElement = getByTestId('spin-element');
		expect(spinElement).toHaveAttribute('size', 'large');
	});
});
