import {NavLink} from 'react-router-dom';
import KEYS from '../../utilities/keys'
import * as React from 'react';
import {StatelessComponent} from 'react';
import {Container, Row, Column} from '../../elements/Grid'

const SubMenu: StatelessComponent<{}> = ({children, }) => (
    <nav className="sub-menu">
        <Container>
            <Row>
                <Column>
                    {children}
                </Column>
                <Column>
                    <ul className="sub-menu__keys">
                        {KEYS.map(note => (
                            <li key={`note-${note}`} className="sub-menu__item">
                                <NavLink className="sub-menu__key-item" activeClassName="sub-menu__key-item--selected" to={`/key/${note}`}>
                                    {note.toUpperCase()}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </Column>
            </Row>
        </Container>
    </nav>
);

export default SubMenu;
