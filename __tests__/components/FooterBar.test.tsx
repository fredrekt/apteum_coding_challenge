import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footerbar from '../../src/components/Footerbar/Footerbar';

describe('Footerbar', () => {
	it('renders the component', () => {
		render(<Footerbar />);
		const footerbarElement = screen.getByTestId('footerbar');
		expect(footerbarElement).toBeInTheDocument();
	});

	it('renders the footer text with a link', () => {
		render(<Footerbar />);
		const linkElement = screen.getByRole('link', { name: /Fred Garingo/i });
		expect(linkElement).toBeInTheDocument();
		expect(linkElement).toHaveAttribute('href', 'https://fredgaringo-main.netlify.app/');
		expect(linkElement).toHaveAttribute('target', '_blank');
		expect(linkElement).toHaveAttribute('rel', 'noreferrer');
	});
});
