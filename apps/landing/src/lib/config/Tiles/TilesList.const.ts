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
			// {
			// 	text: 'name'
			// },
			{
				text: 'type'
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
		]
	},
	teleooks: {
		// <- { key }
		icon: 'image:https://res.cloudinary.com/lococovu-cdn/image/upload/b_rgb:161616,bo_100px_solid_rgb:161616/v1610810215/logotypes/pawcapsu-white-small.jpg;extra: center / cover',
		background: 'image:./tiles/teleooks_background.png;extra: center / cover',
		badges: [
			// Text property
			// i18n: tiles.{ key }.badge.{ text }
			// {
			// 	text: 'name'
			// },
			{
				text: 'type'
			},
			{
				textColor: '#fff',
				backgroundColor: '#ef4444',
				text: 'wip'
			}
		],
		buttons: [
			{
				type: "FullButton",
				text: "openGithub",
				// href: ""
			}
		]
	},
	bluk: {
		// <- { key }
		icon: 'image:https://res.cloudinary.com/lococovu-cdn/image/upload/b_rgb:161616,bo_150px_solid_rgb:161616/v1636815887/bluk-studio-white.png;extra: center / cover',
		background: 'image:./tiles/bluk_background.png;extra: center / cover',
		badges: [
			// Text property
			// i18n: tiles.{ key }.badge.{ text }
			// {
			// 	text: 'name'
			// },
			{
				text: 'type'
			},
			{
				textColor: '#fff',
				backgroundColor: '#ef4444',
				text: 'wip'
			}
		],
		buttons: [
			{
				type: 'FullButton',
				text: 'openDiscord',
				href: 'https://discord.gg/36c2k7PFNj'
			},
			{
				type: "GhostButton",
				text: "openGithub",
				href: "https://github.com/bluk-studio"
			}
		]
	}
};
