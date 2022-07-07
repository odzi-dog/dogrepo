// Importing modules
import type { EButtonType } from '$lib/components/Buttons';

// Badge interface
interface ITileBadge {
	backgroundColor?: string;
	textColor?: string;
	text: string;
}

// Button interface
interface ITileButton {
	type: EButtonType;
	text: string;
	href?: string;
}

// Tile interface
export interface ILandingTile {
	// Technical

	// Information
	icon?: string;
	background: string;

	badges?: Array<ITileBadge>;
	buttons?: Array<ITileButton>;
}