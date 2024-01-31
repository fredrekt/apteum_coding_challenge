import properties from '../../src/data/properties.json';

describe('Properties JSON', () => {
	test('Each property should have required fields', () => {
		properties.forEach((property: any) => {
			expect(property).toHaveProperty('property_id');
			expect(property).toHaveProperty('council');
			expect(property).toHaveProperty('full_address');
			expect(property).toHaveProperty('latitude');
			expect(property).toHaveProperty('longitude');
			expect(property).toHaveProperty('postcode');
		});
	});

	test('Latitude and Longitude should be within valid ranges', () => {
		properties.forEach((property: any) => {
			expect(property.latitude).toBeGreaterThanOrEqual(-90);
			expect(property.latitude).toBeLessThanOrEqual(90);
			expect(property.longitude).toBeGreaterThanOrEqual(-180);
			expect(property.longitude).toBeLessThanOrEqual(180);
		});
	});
});
