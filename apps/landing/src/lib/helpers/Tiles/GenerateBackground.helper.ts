// Function, that'll generate css background value
// using ILandingTile's ($lib/config/Tiles/TiesList.const)
// background property
export function GenerateBackground(original: string, extra?: string): string {
	// Image
	if (original.startsWith('image:')) {
		// Getting extra content
		if (original.includes('extra:')) {
			extra = original.split(';extra:')[1];
			original = original.split(';extra:')[0];
		}

		return `no-repeat url("${original.slice(6, original.length)}") ${extra ?? ''}`;
	}
}
