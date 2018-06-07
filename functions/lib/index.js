"use strict";
// https://firebase.google.com/docs/functions/typescript
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const React = require("react");
const ReactDOM = require("react-dom/server");
const component_1 = require("./component");
exports.app = functions.https.onRequest((request, response) => {
    const document = ReactDOM.renderToString(React.createElement(component_1.default, null));
    response.send(document);
});
exports.api = functions.https.onRequest((request, response) => {
    response.json({ hello: 'world' });
});
//# sourceMappingURL=index.js.map