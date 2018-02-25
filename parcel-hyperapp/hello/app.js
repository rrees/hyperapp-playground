
import {h, app} from 'hyperapp';

const state = {
    title: "Hello world"
};

function view(state) {
    return h("h1", {}, state.title);
}

app(state, null, view, document.body);