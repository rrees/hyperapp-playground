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

const basicHomeTownTypes = [
	"forest",
	"city",
	"valley",
];

const basicHomeTownDescriptions = [
	"a huge",
	"an ancient",
	"a distant",
	"a vast",
];


const basicHomeTowns = basicHomeTownTypes.flatMap(
	(homeType) => basicHomeTownDescriptions.map( (adjective) => `${adjective} ${homeType}`));

const specialHomeTowns = [
	"a corrupted temple",
	"a city of thieves",
	"the far wilderness",
	"a fallen kingdom",
];

const homeTowns = [
	...basicHomeTowns,
	...specialHomeTowns,
];

export const characterIdeas = {
	races: races,
	classes: classes,
	motivations: motivations,
	homeTowns: homeTowns,
}