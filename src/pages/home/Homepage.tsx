import React, { useEffect, useState } from 'react';
import './Homepage.scss';
import DefaultLayout from '../../layouts/default/DefaultLayout';
import DetailsDrawer from '../../drawers/DetailsDrawer/DetailsDrawer';
import { Property } from '../../types/property.types';
import { getPropertiesData } from '../../api/api';
import SplashScreen from '../../components/SplashScreen/SplashScreen';

const Homepage: React.FC = () => {
	const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
	const [openDrawer, setOpenDrawer] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(true);
	const [listOfProperties, setListOfProperties] = useState<Property[]>([]);

	const fetchData = async () => {
		try {
			const data = await getPropertiesData();
			setListOfProperties(data);
		} catch (error) {
			console.error('Error fetching data:', error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const onChangeProperty = (property: Property) => {
		if (!property) return;
		setSelectedProperty(property);
		setOpenDrawer(true);
	};

	return (
		<DefaultLayout>
			{loading ? (
				<SplashScreen />
			) : (
				<>
					{Array.isArray(listOfProperties) && listOfProperties.length > 0 && (
						<ul>
							{listOfProperties.map((property) => (
								<li onClick={() => onChangeProperty(property)} key={property.property_id}>
									{property.full_address}
								</li>
							))}
						</ul>
					)}
					{selectedProperty && (
						<DetailsDrawer
							key={selectedProperty.property_id}
							opened={openDrawer}
							onCancel={() => setOpenDrawer(!openDrawer)}
							selectedData={selectedProperty}
						/>
					)}
				</>
			)}
		</DefaultLayout>
	);
};

export default Homepage;
