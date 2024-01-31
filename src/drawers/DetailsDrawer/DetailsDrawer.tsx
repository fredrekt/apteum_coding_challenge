import React, { useState } from 'react';
import './DetailsDrawer.scss';
import { DrawerProps } from '../../types/global.types';
import { Property } from '../../types/property.types';
import { Button, Collapse, Descriptions, Drawer, Rate, Badge, message, QRCode, Typography } from 'antd';
import type { CollapseProps, DescriptionsProps } from 'antd';

interface DetailsDrawerProps extends DrawerProps {
	selectedData: Property;
}

const dummyText: string =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elit risus, iaculis in arcu a, pharetra porttitor eros. Curabitur lacinia mi tellus, ut bibendum massa finibus nec. Fusce lobortis odio eu nisi commodo, id sodales neque pretium. Pellentesque ullamcorper auctor eros, sed molestie arcu pharetra non.';

const collapseItems: CollapseProps['items'] = [
	{
		key: '1',
		label: 'Distance To',
		children: <p>{dummyText}</p>
	},
	{
		key: '2',
		label: 'Street View',
		className: 'mapView',
		children: (
			<iframe
				title="sample location"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125609.05871986915!2d123.84155495006623!3d10.319214857280429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a999ba46f851e1%3A0x5b057b836416a1a3!2sGoogle%20eBloc%204!5e0!3m2!1sen!2sph!4v1706697795148!5m2!1sen!2sph"
				height="450"
				style={{ border: 0, width: `100%` }}
				allowFullScreen
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
			></iframe>
		)
	},
	{
		key: '3',
		label: 'Council Information',
		children: <p>{dummyText}</p>
	},
	{
		key: '4',
		label: 'School Information',
		children: <p>{dummyText}</p>
	}
];

const DetailsDrawer: React.FC<DetailsDrawerProps> = ({ opened, onCancel, selectedData }) => {
	const [items] = useState<DescriptionsProps['items']>([
		{
			key: '1',
			label: 'Council',
			children: selectedData.council,
			span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 }
		},
		{
			key: '3',
			label: 'Postal Code',
			children: selectedData.postcode,
			span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 }
		},
		{
			key: '2',
			label: 'Council Property #',
			children: selectedData.council_property_number,
			span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 }
		},
		{
			key: '4',
			label: 'Land Size',
			children: '400 sqm',
			span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 }
		},
		{
			key: '5',
			label: 'Planning Zone',
			children: <Badge status="error" text="N/A" />,
			span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 }
		},
		{
			key: '6',
			label: 'Lot/Plan',
			children: 'Allot. 5 Sec. 5',
			span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 }
		},
		{
			key: '7',
			label: 'Last Sold Price',
			children: 'Unavailable',
			span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 }
		},
		{
			key: '10',
			label: 'Latest Planning Permit',
			children: 'N/A',
			span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 }
		},
		{
			key: '11',
			label: 'Cultural Sensitivity',
			children: 'Yes',
			span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 }
		},
		{
			key: '12',
			label: 'Bushfire Prone Area',
			children: 'Yes',
			span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 }
		},
		{
			key: 'save-property',
			label: '',
			children: (
				<Button onClick={() => message.success('Saved to favorites')} className="w-100" type="primary">
					Save to Favorites
				</Button>
			),
			span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 }
		},
		{
			key: 'view-report',
			label: '',
			children: (
				<Button className="w-100" type="primary">
					View Report
				</Button>
			),
			span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 }
		},
		{
			key: 'rating-info',
			label: 'Property Rating',
			children: <Rate disabled allowHalf defaultValue={4.5} />,
			span: 24
		},
		{
			key: 'additional-info',
			label: '',
			children: <Collapse className="w-100" items={collapseItems} />,
			span: 24
		}
	]);

	return (
		<Drawer
			className="detailsDrawer"
			width={514}
			title={selectedData.full_address}
			open={opened}
			onClose={onCancel}
		>
			{items && (
				<Descriptions
					title="Property Details"
					items={items}
					column={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 4 }}
				/>
			)}
			<div className="directionsContainer">
				<Typography.Paragraph className="label-directions">Directions</Typography.Paragraph>
				<QRCode bordered={false} value={'test-value-for-location-on-maps-on-phone'} />
			</div>
		</Drawer>
	);
};

export default DetailsDrawer;
