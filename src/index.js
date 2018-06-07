import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import SubMenu from './components/SubMenu';
import Home from './screens/Home';
import Arpeggio from './screens/Arpeggio';
import Scales from './screens/Scales';
import Songs from './screens/Songs';
import Key from './screens/Key';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import Synth, {changePosition} from './components/Synthesizers';
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux';
import {reducer as synthReducer} from './components/Synthesizers';
import Manager, {reducer as managerReducer} from './components/Manager';
import {SynthManager, storeListener} from './utilities';

const store = createStore(combineReducers({
    synth: synthReducer,
    manager: managerReducer,
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const synthManager = new SynthManager();
// synthManager.setCallback(p => store.dispatch(changePosition(p)));
synthManager.setCallback(p => store.dispatch({type: 'NONE'}));
// synthManager.setCallback(console.log);

store.subscribe(storeListener(synthManager, store));

ReactDOM.render(
    <App>
        <Router>
            <Provider store={store}>
                <Fragment>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/songs" component={Songs}/>
                    <Route path="/key/:key" render={({match, location, }) => (
                        <Fragment>
                            <Manager musicKey={match.params.key.toUpperCase()} />

                            <SubMenu>
                                <ul>
                                    <li>
                                        <NavLink to={`/key/${match.params.key}`}>Key</NavLink>
                                        <NavLink to={`/key/${match.params.key}/scales`}>Scales</NavLink>
                                        <NavLink to={`/key/${match.params.key}/arpeggios`}>Arpeggios</NavLink>
                                    </li>
                                </ul>
                            </SubMenu>
                            <Synth />
                            <Route exact path="/key/:key" component={Key}/>
                            <Route exact path="/key/:key/scales" render={() => (<Scales musicKey={match.params.key.toUpperCase()} />)}/>
                            <Route exact path="/key/:key/arpeggios" render={() => (<Arpeggio musicKey={match.params.key.toUpperCase()} />)}/>
                        </Fragment>
                    )}/>
                </Fragment>
            </Provider>
        </Router>
    </App>,
    document.querySelector('[data-react]')
);
