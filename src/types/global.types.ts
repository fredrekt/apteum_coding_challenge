export interface DrawerProps {
	opened: boolean;
	onCancel: () => void;
	onForceCb?: () => void;
}

export interface MapBoxViewport {
	width: string;
	height: string;
	zoom: number;
	latitude: number;
	longitude: number;
}
