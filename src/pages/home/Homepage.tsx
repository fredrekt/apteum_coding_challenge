import React, { useEffect, useState } from 'react';
import './Homepage.scss';
import DefaultLayout from '../../layouts/default/DefaultLayout';
import DetailsDrawer from '../../drawers/DetailsDrawer/DetailsDrawer';
import { Property } from '../../types/property.types';
import { getPropertiesData } from '../../api/api';
import SplashScreen from '../../components/SplashScreen/SplashScreen';
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactMapGl, { Marker } from 'react-map-gl';
import { Col, Input, Row, Typography } from 'antd';

const Homepage: React.FC = () => {
	const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
	const [openDrawer, setOpenDrawer] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(true);
	const [listOfProperties, setListOfProperties] = useState<Property[]>([]);
	const [viewPort] = useState({
		width: `100vw`,
		height: `100vh`,
		zoom: 4,
		latitude: -25.2888,
		longitude: 133.7751
	});
	const [searchValue, setSearchValue] = useState<string>('');

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

	const renderFilters = () => {
		if (!Array.isArray(listOfProperties) || !listOfProperties.length) return;
		return (
			<Row className="filtersContainer">
				<Col span={24}>
					<div className="searchFilterContainer">
						<Typography.Paragraph className="filterLabel">Filters</Typography.Paragraph>
						<Input
							className="searchFilterInput"
							placeholder="Search by address, council, postal code, council property number"
							value={searchValue}
							onChange={(e: any) => setSearchValue(e.target.value)}
						/>
					</div>
				</Col>
			</Row>
		);
	};

	const searchFilter = (property: Property, searchValue: string): boolean => {
		if (searchValue && property) {
			const lowerCaseSearchValue = searchValue.toLowerCase();

			const addressMatches =
				property.full_address && property.full_address.toLowerCase().includes(lowerCaseSearchValue);
			const councilMatches = property.council && property.council.toLowerCase().includes(lowerCaseSearchValue);
			const postalCodeMatches =
				property.postcode && property.postcode.toLowerCase().includes(lowerCaseSearchValue);
			const councilPropertyNumberMatches =
				property.council_property_number &&
				property.council_property_number.toLowerCase().includes(lowerCaseSearchValue);

			return (councilMatches || addressMatches || postalCodeMatches || councilPropertyNumberMatches) as boolean;
		}

		return true;
	};

	const renderMarkers = () => {
		if (!Array.isArray(listOfProperties) || !listOfProperties.length) return;
		let listOfMarkers = listOfProperties;

		// filter functions
		if (searchValue) {
			listOfMarkers = listOfMarkers.filter((data) => searchFilter(data, searchValue));
		}

		return (
			<>
				{listOfMarkers.map((property) => (
					<Marker
						key={property.property_id}
						onClick={() => onChangeProperty(property)}
						latitude={property.latitude}
						longitude={property.longitude}
					/>
				))}
			</>
		);
	};

	return (
		<DefaultLayout className="homePage">
			{loading ? (
				<SplashScreen />
			) : (
				<>
					{renderFilters()}
					{Array.isArray(listOfProperties) && listOfProperties.length > 0 && (
						<div style={{ width: '100%', height: '100%', zIndex: 999 }}>
							<ReactMapGl
								mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
								mapStyle={'mapbox://styles/mapbox/streets-v9'}
								initialViewState={{ ...viewPort }}
							>
								{renderMarkers()}
							</ReactMapGl>
						</div>
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
