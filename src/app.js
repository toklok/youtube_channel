import { h, render } from 'preact';
import 'babel-polyfill';

let root;

function init() {
    let App = require('./index').default;
    root = render(<App />, document.body, root);
}

// in development, set up HMR:
if (module.hot) {
    require('preact/devtools');
    module.hot.accept('./index', () => requestAnimationFrame(init) );
}

init();