const races = ["Drow", "Gnome", "Elf", "Halfling", "Half-orc", "Human", "Dwarf"];

const classes = ["fighter", "rogue", "sorceror", "cleric", "monk", "paladin", "ranger", "wizard"];

const searching = [
	"their family",
	"a lost city",
	"an ancient treasure",
	"a prophesied king",
	"a missing sibling",
	"a family heirloom",
	"the truth about their parentage",
].map((goal) => `searching for ${goal}`);

const running = [
	"an arranged marriage",
	"a vengeful cult",
	"the wrath of a dead god",
	"a dark fate",
	"the law",
].map((source) => `on the run from ${source}`);

const looking = [
	"revenge",
	"love",
	"the one",
	"trouble",
].map((goal) => `looking for ${goal}`);

const ending = [
	"slavery",
	"the influence of demons",
	"the patriarchy",
].map((goal) => `wanting to bring an end to ${goal}`);

const motivations = [
	"one day from retirement",
	"seeking to be a healer",
	"being persued by a vicious crime syndicate",
	...searching,
	...running,
	...looking,
	...ending,
];

const basicHomeTownTypes = [
	"forest",
	"city",
	"valley",
	"mountain range",
];

const basicHomeTownDescriptions = [
	"a huge",
	"an ancient",
	"a distant",
	"a vast",
	"a corrupted",
	"a dark",
];


const basicHomeTowns = basicHomeTownTypes.flatMap(
	(homeType) => basicHomeTownDescriptions.map( (adjective) => `${adjective} ${homeType}`));

const specialHomeTowns = [
	"a corrupted temple",
	"a city of thieves",
	"the far wilderness",
	"a fallen kingdom",
	"a small farm",
	"the frozen wastes",
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