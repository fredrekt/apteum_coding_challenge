import React, { useEffect, useState } from 'react';
import './Homepage.scss';
import { Typography } from 'antd';
import DefaultLayout from '../../layouts/default/DefaultLayout';
import DetailsDrawer from '../../drawers/DetailsDrawer/DetailsDrawer';
import { Property } from '../../types/property.types';

const Homepage: React.FC = () => {
	const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
	const [openDrawer, setOpenDrawer] = useState<boolean>(false);

	useEffect(() => {
		setSelectedProperty({
			property_id: 1525674,
			council: 'CARDINIA',
			council_property_number: '2188100300',
			full_address: '8 CLOVERLEIGH AVENUE EMERALD 3782',
			latitude: -37.9373447811622,
			lga_code: 311,
			longitude: 145.449895817713,
			postcode: '3782'
		});
	}, []);

	return (
		<DefaultLayout>
			<Typography.Title onClick={() => setOpenDrawer(true)}>Homepage</Typography.Title>
			{selectedProperty && (
				<DetailsDrawer
					key={selectedProperty.property_id}
					opened={openDrawer}
					onCancel={() => setOpenDrawer(!openDrawer)}
					selectedData={selectedProperty}
				/>
			)}
		</DefaultLayout>
	);
};

export default Homepage;
