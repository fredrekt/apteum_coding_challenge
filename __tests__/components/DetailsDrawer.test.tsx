import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DetailsDrawer from '../../src/drawers/DetailsDrawer/DetailsDrawer';

describe('DetailsDrawer Component', () => {
	it('renders without crashing', () => {
		const selectedData = {
			property_id: 1525674,
			council: 'CARDINIA',
			council_property_number: '2188100300',
			full_address: '8 CLOVERLEIGH AVENUE EMERALD 3782',
			latitude: -37.9373447811622,
			lga_code: 311,
			longitude: 145.449895817713,
			postcode: '3782'
		};
		const { container } = render(<DetailsDrawer opened={true} onCancel={() => {}} selectedData={selectedData} />);
		expect(container).toBeInTheDocument();
	});

	it('displays property details correctly', () => {
		const selectedData = {
			property_id: 1525674,
			council: 'CARDINIA',
			council_property_number: '2188100300',
			full_address: '8 CLOVERLEIGH AVENUE EMERALD 3782',
			latitude: -37.9373447811622,
			lga_code: 311,
			longitude: 145.449895817713,
			postcode: '3782'
		};
		const { getByText } = render(<DetailsDrawer opened={true} onCancel={() => {}} selectedData={selectedData} />);

		// Example: Assert that the property address is rendered
		const addressElement = getByText(selectedData.full_address);
		expect(addressElement).toBeInTheDocument();
	});

	it('fires save to favorites callback on button click', () => {
		const selectedData = {
			property_id: 1525674,
			council: 'CARDINIA',
			council_property_number: '2188100300',
			full_address: '8 CLOVERLEIGH AVENUE EMERALD 3782',
			latitude: -37.9373447811622,
			lga_code: 311,
			longitude: 145.449895817713,
			postcode: '3782'
		};
		const onCancelMock = jest.fn();

		const { getByText } = render(
			<DetailsDrawer opened={true} onCancel={onCancelMock} selectedData={selectedData} />
		);

		// Click the "Save to Favorites" button
		fireEvent.click(getByText('Save to Favorites'));

		// Assert that the callback function is called
		expect(onCancelMock).toHaveBeenCalled();
	});
});
