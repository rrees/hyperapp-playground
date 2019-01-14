
import {h, app} from 'hyperapp';

import {choice} from 'rrees-js-random';

const characterIdeas = [
	"A Drow one day from retirement",
	"A myopic gnome who wants to be a healer",
];

const races = ["Drow", "Gnome", "Elf"];

const classes = ["fighter", "rogue", "sorceror", "cleric"];

const motivations = [
	"one day from retirement",
	"wants to be a healer",
	"looking for revenge",
];


function generateCharacter() {
	return {
		race: choice(races),
		motivation: choice(motivations),
		class: choice(classes),
	}
}

function generateDescription() {
	const character = generateCharacter();
	return `A ${character.race} ${character.class} ${character.motivation}`
}

const state = {
    characterDescription: "No character generated",
};

const actions = {
	regenerate: value => state => ({characterDescription: generateDescription()}),
};

function view(state, actions) {
	console.log(actions);
    return h("section", {}, [
    	h("h1", {}, "WTF is my D&D character?"),
    	h("p", {}, state.characterDescription),
    	h("div", {},
    		h("button", { onclick: () => actions.regenerate()}, "Another idea")),
	]);
}

app(state, actions, view, document.body);