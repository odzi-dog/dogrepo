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

// Exportng TilesList const
export const TilesList: Record<string, ILandingTile> = {
	leggydog: {
		// <- { key }
		icon: 'image:./tiles/leggydog_icon.jpg;extra: center / cover',
		background: 'image:./tiles/leggydog_background.png;extra: center / cover',
		badges: [
			// Text property
			// i18n: tiles.{ key }.badge.{ text }
			{
				text: 'telegram'
			},
			{
				textColor: '#fff',
				backgroundColor: '#ef4444',
				text: 'adult'
			}
		],
		buttons: [
			// Text property
			// i18n: tiles.{ key }.button.{ text }
			{
				type: 'FullButton',
				text: 'openChat',
				href: 'https://t.me/leggydog_bot'
			}
			// {
			//   type: 'GhostButton',
			//   text: 'support'
			// }
		]
	}
};
