export interface DrawerProps {
	opened: boolean;
	onCancel: () => void;
	onForceCb?: () => void;
}
