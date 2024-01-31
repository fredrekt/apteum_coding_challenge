import { message } from 'antd';
import { getPropertiesData } from '../../src/api/api';
import properties from '../../src/data/properties.json';

// mock antd message
jest.mock('antd', () => ({
	message: {
		error: jest.fn()
	}
}));

describe('getPropertiesData', () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	it('should return dummy data on successful request', async () => {
		const result = await getPropertiesData();
		expect(result).toEqual(properties);
		expect(message.error).not.toHaveBeenCalled();
	});
});
