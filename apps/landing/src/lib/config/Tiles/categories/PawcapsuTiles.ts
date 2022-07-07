import type { ILandingTile } from "../Types";

export const tiles: Record<string, ILandingTile> = {
  leggydog: {
		// <- { key }
		icon: 'image:../../tiles/leggydog_icon.jpg;extra: center / cover',
		background: 'image:../../tiles/leggydog_background.png;extra: center / cover',
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
	klingbooks: {
		// <- { key }
		icon: 'image:https://res.cloudinary.com/lococovu-cdn/image/upload/b_rgb:161616,bo_100px_solid_rgb:161616/v1610810215/logotypes/pawcapsu-white-small.jpg;extra: center / cover',
		background: 'image:../../tiles/klingbooks_background.png;extra: center / cover',
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
};