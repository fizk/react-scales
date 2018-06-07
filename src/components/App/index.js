import React from 'react';
import {Container, Row, Column} from '../../elements/Grid'
import './index.scss';

export default ({children}) => (
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
        <footer></footer>

    </div>
);
