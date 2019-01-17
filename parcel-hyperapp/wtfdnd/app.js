
import {h, app} from 'hyperapp';

import {choice} from 'rrees-js-random';

import {characterIdeas} from './data';

function generateCharacter() {
	return {
		race: choice(characterIdeas.races),
		motivation: choice(characterIdeas.motivations),
		class: choice(characterIdeas.classes),
		homeTown: choice(characterIdeas.homeTowns),
	}
}

function generateDescription() {
	const character = generateCharacter();
	return `A ${character.race} ${character.class} from ${character.homeTown} who is ${character.motivation}`
}

const state = {
    characterDescription: generateDescription(),
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