import {connect} from 'react-redux';
import MusicalScale from "../../utilities/MusicalScale";
import Manager from './Manager';

const MANAGER_ACTIONS = {
    CHANGE_KEY: 'MANAGER_ACTIONS_CHANGE_KEY',
};

const changeMusicKey = key => {
    const scale = new MusicalScale({key, mode: 'ionian'});
    const triads = scale.notes.map((note) => {
        const chords = note.triad.notes.map(n => {
            return n.note + (n.rel_octave + 3);
        });

        const n = note.triad.notes.map(n => {
            return n.note;
        });

        return {
            name: `${note.note}${note.triad.type}`,
            type: note.triad.type,
            interval: note.triad.interval,
            notes: chords,
            n: n
        };
    });
    const notes = scale.notes.map(note => note.note);

    return {
        type: MANAGER_ACTIONS.CHANGE_KEY,
        musicKey: key,
        triads,
        notes,
    }
};

const mapDispatchToProps = dispatch => ({
    onChangeKey: key => dispatch(changeMusicKey(key)),
});

export const reducer = (state = {musicKey: undefined, triads: [], notes: []}, action) => {
    switch (action.type) {
        case MANAGER_ACTIONS.CHANGE_KEY:
            return {
                ...state,
                musicKey: action.musicKey,
                triads: action.triads,
                notes: action.notes,
            };
        default:
            return state;
    }
};

export default connect(undefined, mapDispatchToProps)(Manager);
