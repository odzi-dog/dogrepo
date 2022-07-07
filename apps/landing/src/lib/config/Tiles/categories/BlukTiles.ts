import type { ILandingTile } from "../Types";

export const tiles: Record<string, ILandingTile> = {
  bluk: {
		// <- { key }
		icon: 'image:https://res.cloudinary.com/lococovu-cdn/image/upload/b_rgb:161616,bo_150px_solid_rgb:161616/v1636815887/bluk-studio-white.png;extra: center / cover',
		background: 'image:../../tiles/bluk_background.png;extra: center / cover',
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