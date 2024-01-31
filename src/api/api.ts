import { message } from 'antd';
import { Property } from '../types/property.types';
const dummyData: Property[] = require('../data/properties.json');

/**
 * Get Property data (dummy)
 * This is a mock request gets a list of properties
 **/
export const getPropertiesData = async (): Promise<Property[]> => {
	try {
		return dummyData;
	} catch (error) {
		message.error(`Something went wrong in getting property data.`);
		throw error;
	}
};
