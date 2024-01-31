import React from 'react';
import './DetailsDrawer.scss';
import { DrawerProps } from '../../types/global.types';
import { Property } from '../../types/property.types';
import { Drawer } from 'antd';

interface DetailsDrawerProps extends DrawerProps {
	selectedData: Property;
}

const DetailsDrawer: React.FC<DetailsDrawerProps> = ({ opened, onCancel, selectedData }) => {
	return (
		<Drawer
			className="detailsDrawer"
			width={514}
			title={selectedData.full_address}
			open={opened}
			onClose={onCancel}
		>
			<p>Some contents...</p>
			<p>Some contents...</p>
			<p>Some contents...</p>{' '}
		</Drawer>
	);
};

export default DetailsDrawer;
