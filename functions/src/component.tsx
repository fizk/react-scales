import * as React from 'react';
import {StatelessComponent} from 'react';

const Document: StatelessComponent<{}> = ({children, }) => (
    <html>
        <head>
            <title>React Scales</title>
        </head>
        <body>{children}</body>
    </html>
);

export default Document;
