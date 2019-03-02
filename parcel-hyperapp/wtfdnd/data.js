const races = ["Drow", "Gnome", "Elf", "Halfling", "Half-orc", "Human", "Dwarf"];

const classes = ["fighter", "rogue", "sorceror", "cleric", "monk", "paladin", "ranger", "wizard"];

const searching = [
	"their family",
	"a lost city",
	"an ancient treasure",
	"a prophesied king",
	"a missing sibling",
].map((goal) => `searching for ${goal}`);

const running = [
	"an arranged marriage",
	"a vengeful cult",
	"the wrath of a dead god",
].map((source) => `on the run from ${source}`);

const motivations = [
	"one day from retirement",
	"seeking to be a healer",
	"looking for revenge",
	"being persued by a vicious crime syndicate",
	...searching,
	...running,
];

const homeTowns = [
	"an ancient forest",
	"a corrupted temple",
	"a city of thieves",
	"the far wilderness",
	"a distant valley",
	"a fallen kingdom",
	"a vast forest",
];

export const characterIdeas = {
	races: races,
	classes: classes,
	motivations: motivations,
	homeTowns: homeTowns,
}