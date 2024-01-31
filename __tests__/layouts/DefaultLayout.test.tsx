import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import DefaultLayout from '../../src/layouts/default/DefaultLayout';

jest.mock('antd/es/layout/layout', () => ({
	Layout: jest.fn(({ children }: { children: React.ReactNode }) => <div data-testid="mock-layout">{children}</div>),
	Content: jest.fn(({ children }: { children: React.ReactNode }) => <div data-testid="mock-content">{children}</div>),
	Footer: jest.fn(({ children }: { children: React.ReactNode }) => <div data-testid="mock-footer">{children}</div>),
	Header: jest.fn(({ children }: { children: React.ReactNode }) => <div data-testid="mock-header">{children}</div>)
}));

jest.mock('../../src/assets/images/logo.png', () => import('../../__mocks__/imageMock.js'));

describe('DefaultLayout', () => {
	test('renders the layout with Navbar and Footerbar', () => {
		render(
			<BrowserRouter>
				<DefaultLayout>
					<div data-testid="content">Content goes here</div>
				</DefaultLayout>
			</BrowserRouter>
		);

		const contentElement = screen.getByTestId('content');
		expect(contentElement).toBeInTheDocument();

		const navbarElement = screen.getByTestId('navbar');
		expect(navbarElement).toBeInTheDocument();

		const footerbarElement = screen.getByTestId('footerbar');
		expect(footerbarElement).toBeInTheDocument();
	});
});
