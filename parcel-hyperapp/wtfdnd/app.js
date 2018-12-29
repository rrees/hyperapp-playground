
import {h, app} from 'hyperapp';

import {choice} from 'rrees-js-random';

const characterIdeas = [
	"A Drow one day from retirement",
	"A myopic gnome who wants to be a healer",
];

function generateCharacter() {
	return choice(characterIdeas);
}

const state = {
    characterDescription: "No character generated",
};

const actions = {
	regenerate: value => state => ({characterDescription: generateCharacter()}),
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