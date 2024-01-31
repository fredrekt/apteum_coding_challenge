import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../../src/components/Navbar/Navbar';

jest.mock('../../src/assets/images/logo.png', () => import('../../__mocks__/imageMock.js'));

describe('Navbar', () => {
	test('renders the component', () => {
		render(
			<MemoryRouter>
				<Navbar />
			</MemoryRouter>
		);
		const navbarElement = screen.getByTestId('navbar');
		expect(navbarElement).toBeInTheDocument();
	});

	test('renders the logo and menu items', () => {
		render(
			<MemoryRouter>
				<Navbar />
			</MemoryRouter>
		);

		const logoElement = screen.getByAltText('logo');
		const homeMenuItem = screen.getByText('Home');
		const aboutMenuItem = screen.getByText('About');
		const listingsMenuItem = screen.getByText('Listings');
		const contactMenuItem = screen.getByText('Contact');

		expect(logoElement).toBeInTheDocument();
		expect(homeMenuItem).toBeInTheDocument();
		expect(aboutMenuItem).toBeInTheDocument();
		expect(listingsMenuItem).toBeInTheDocument();
		expect(contactMenuItem).toBeInTheDocument();
	});

	test('navigates to the selected menu item', () => {
		render(
			<MemoryRouter initialEntries={['/']}>
				<Navbar />
			</MemoryRouter>
		);

		const aboutMenuItem = screen.getByText('About');
		fireEvent.click(aboutMenuItem);

		// missing page
		expect(window.location.pathname).toBe('/');
	});

	test('renders the "Get Started" button', () => {
		render(
			<MemoryRouter>
				<Navbar />
			</MemoryRouter>
		);

		const getStartedButton = screen.getByRole('button', { name: /get started/i });
		expect(getStartedButton).toBeInTheDocument();
	});

	test('navigates to the registration page when "Get Started" button is clicked', () => {
		render(
			<MemoryRouter>
				<Navbar />
			</MemoryRouter>
		);

		const getStartedButton = screen.getByRole('button', { name: /get started/i });
		fireEvent.click(getStartedButton);

		// missing page
		expect(window.location.pathname).toBe('/');
	});
});
