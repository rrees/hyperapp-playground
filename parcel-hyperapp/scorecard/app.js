	
import {h, app} from 'hyperapp';

const state = {
    players: [{name: "Robert", score: 0}],
};

function renderScoreList(players) {
	if(players && players.length > 0) {
		return h('ul', {}, players.map((player) => h('li', {}, `${player.name}: ${player.score}`)));
	} else {
		return h('p', {}, 'No players have been added');	
	}
}

function view(state) {
    return h('section', {}, [
	    	h('h1', {}, 'Scorecard'),
	    	renderScoreList(state.players),
    	]);
}

app(state, null, view, document.body);