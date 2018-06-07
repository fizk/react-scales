import {connect} from 'react-redux';
import Synthesizers from './Synthesizers';

const SYNTH_ACTIONS = {
    START: 'SYNTH_ACTIONS_START',
    STOP: 'SYNTH_ACTIONS_STOP',
    CHANGE_PROGRESSION: 'SYNTH_ACTIONS_CHANGE_PROGRESSION',
    CHANGE_SOUND: 'SYNTH_ACTIONS_CHANGE_SOUND',
    CHANGE_POSITION: 'SYNTH_ACTIONS_CHANGE_POSITION',
};

const stopAction = () => ({
    type: SYNTH_ACTIONS.STOP
});

const startAction = () => ({
    type: SYNTH_ACTIONS.START
});

const changeProgression = progression => ({
    type: SYNTH_ACTIONS.CHANGE_PROGRESSION,
    progression
});

const changeSound = sound => ({
    type: SYNTH_ACTIONS.CHANGE_SOUND,
    sound,
});

export const changePosition = position => ({
    type: SYNTH_ACTIONS.CHANGE_POSITION,
    position,
});

const mapStateToProps = state => ({
    musicKey: state.manager.musicKey,
    triads: state.manager.triads,
});

const mapDispatchToProps = dispatch => ({
    onStart: () => dispatch(startAction()),
    onStop: () => dispatch(stopAction()),
    onSelectProgression: (progression) => dispatch(changeProgression(progression)),
    onSelectSound: (sound) => dispatch(changeSound(sound)),
});

export const reducer = (state = {progression: undefined, running: false, sound: undefined, position: 0}, action) => {
    switch (action.type) {
        case SYNTH_ACTIONS.START:
            return {
                ...state,
                running: true
            };
        case SYNTH_ACTIONS.STOP:
            return {
                ...state,
                running: false
            };
        case SYNTH_ACTIONS.CHANGE_PROGRESSION:
            return {
                ...state,
                progression: action.progression
            };
        case SYNTH_ACTIONS.CHANGE_SOUND:
            return {
                ...state,
                sound: action.sound
            };
        case SYNTH_ACTIONS.CHANGE_POSITION:
            return {
                ...state,
                position: action.position
            };
        default:
            return state
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Synthesizers);
