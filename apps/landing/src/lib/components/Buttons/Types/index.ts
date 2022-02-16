// Importing and then exporting all button
// types
import GhostButton from './GhostButton.svelte';
import FullButton from './FullButton.svelte';

const ButtonTypes = { GhostButton, FullButton };

export { GhostButton, FullButton };

export type EButtonType = keyof typeof ButtonTypes;
