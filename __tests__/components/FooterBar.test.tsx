import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footerbar from '../../src/components/Footerbar/Footerbar';

jest.mock('antd');

describe('Footerbar', () => {
	test('renders the component', () => {
		render(<Footerbar />);
		const footerbarElement = screen.getByTestId('footerbar');
		expect(footerbarElement).toBeTruthy();
	});
});
