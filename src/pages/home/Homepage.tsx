import React, { useEffect, useState } from 'react';
import './Homepage.scss';
import DefaultLayout from '../../layouts/default/DefaultLayout';
import DetailsDrawer from '../../drawers/DetailsDrawer/DetailsDrawer';
import { Property } from '../../types/property.types';
import { getPropertiesData } from '../../api/api';
import SplashScreen from '../../components/SplashScreen/SplashScreen';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = ReactMapboxGl({
	accessToken: process.env.REACT_APP_MAPBOX_TOKEN || '',
	logoPosition: 'bottom-right'
});

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
						<>
							<Map
								// eslint-disable-next-line
								style="mapbox://styles/mapbox/streets-v9"
								containerStyle={{
									height: '100%',
									width: '100%'
								}}
							>
								{listOfProperties.map((property) => (
									<Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
										<Feature
											key={property.property_id}
											onClick={() => onChangeProperty(property)}
											coordinates={[51.53540275850126, -0.222909444136841]}
										/>
									</Layer>
								))}
							</Map>
						</>
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
