import * as React from 'react';
import {StatelessComponent} from 'react';
import {Container, Row, Column} from '../../elements/Grid'

const App: StatelessComponent<{}> = ({children, }) => (
    <div className="app">
        <header className="app__header">
            <Container>
                <Row>
                    <Column>
                        <h1>Music Madness</h1>
                    </Column>
                </Row>
            </Container>
        </header>
        <main role="main">
            {children}
        </main>
        <footer />
    </div>
);

export default App;
