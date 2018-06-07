// https://firebase.google.com/docs/functions/typescript

import * as functions from 'firebase-functions';
import * as React from 'react';
import * as ReactDOM from 'react-dom/server';
import Document from "./component";
import * as express from "express";

export const app = functions.https.onRequest((request: express.Request, response: express.Response): void => {

    const document = ReactDOM.renderToString(
        <Document />
    );

    response.send(document);
});

export const api = functions.https.onRequest((request: express.Request, response: express.Response): void => {

    response.json({hello: 'world'});
});
